# Design Brief — AP® Calculus Practice

**Product:** AP Calculus Practice — a free, open web app for practicing AP Calculus AB & BC
**Live:** https://greyzotethemighty.github.io/ap-calculus-practice/
**Status:** Shipped and public · Not accepting external contributions at this time
**Author:** Built with Claude Code

---

## 1. Summary

AP Calculus Practice is a single-page web app that lets any student generate AP-style practice
on demand. The student chooses what to study — whole units, individual topics, or any
combination across the course — picks how many questions they want, and works through
multiple-choice problems or multi-part free-response questions, each with a full worked
solution. Progress is tracked across visits so students can see their accuracy per topic and
focus where they're weakest.

It is deliberately **zero-friction**: no account, no install, no cost, no backend. It opens
instantly in a browser from a single link (or a desktop shortcut) and runs entirely client-side.

---

## 2. Problem & goals

**Problem.** Students preparing for the AP Calculus exams need a large, well-organized bank of
practice problems they can target to specific weak spots, with worked solutions, exam-style
pacing, and a way to see whether they're improving. Most free options are either thin, ad-heavy,
locked behind accounts, or not organized around the College Board's actual unit/topic structure.

**Goals.**
1. **Targeted practice** — let students drill exactly the unit(s) and topic(s) they choose.
2. **Depth** — enough questions that repetition is rare (50 unique MC per topic).
3. **Exam realism** — AP-style multiple choice and free response, worked solutions, optional
   timed pacing, calculator/no-calculator labels.
4. **Feedback** — show per-topic accuracy that persists across sessions.
5. **Frictionless access** — one click to open; works for everyone, free, no sign-up.

**Non-goals.** No accounts or cross-device sync, no social/leaderboard features, no AI tutoring,
no official/affiliated College Board content. The app is unaffiliated with the College Board.

---

## 3. Audience

- **Primary:** AP Calculus AB and BC students (high-school and self-studiers) reviewing for
  unit tests or the May exam.
- **Secondary:** Teachers who want a quick, free source of practice to point students to.

Both groups value speed and clarity over configuration. The design optimizes for "pick what I
need and start" in a few clicks.

---

## 4. Scope of content

Aligned to the College Board Course & Exam Description (CED):

| Units | Course | Topics |
|-------|--------|--------|
| Units 1–8 | AB & BC | Limits, differentiation, applications of derivatives, integration, differential equations, applications of integration |
| Units 9–10 | BC only | Parametric/polar/vector functions, infinite sequences & series |

- **41 topics** total across the 10 units.
- **2,076 multiple-choice questions** — at least **50 unique questions per topic**.
- **50 free-response questions** — multi-part, with per-part point values and rubrics.

Every question stores its unit, topic, course (AB/BC vs BC-only), and difficulty
(Easy / Medium / Hard), which drives filtering and the progress breakdown.

---

## 5. Core user flows

### 5.1 Build a practice set (home screen)
1. Choose **Question type** (Multiple choice or Free response), **Course** (BC = all units, or
   AB = Units 1–8), **Difficulty**, **Number of questions**, and **Timed mode**.
2. **Select what to study.** Tap a unit to select the whole unit (it highlights), or expand a
   unit (▾) to check individual topics. Any mix of units and topics is allowed — a sticky
   confirm bar summarizes the selection ("7 topics · 2 units · 100 questions available").
3. Enter how many questions to pull from the available pool, then **Start practice →**.

### 5.2 Answer questions (practice screen)
- **Multiple choice:** pick an answer; the correct choice is revealed with color, and a worked
  solution appears. Advance with **Next**.
- **Free response:** read the context and multi-part prompt, work it by hand, then
  **Reveal solutions & self-score** — each part shows a rubric and 0…max point buttons to
  score yourself, mirroring the real exam.
- **Timed mode** (optional) runs an AP-pacing countdown (~2 min per MC question, ~6 min per
  FRQ). It turns red in the final 30 seconds and auto-submits at zero.

### 5.3 Review & track
- A results screen shows the score (MC: correct/total; FRQ: earned/possible points) and lets the
  student retry the same selection or return home.
- The **Your progress** panel on the home screen shows sets completed, questions answered,
  overall accuracy, FRQ points, and a per-topic accuracy breakdown (weakest first).

---

## 6. Information architecture

```
Home (selection)
 ├─ Filters: type · course · difficulty · count · timed
 ├─ Progress panel (if data exists)
 ├─ Unit list (multi-select; each unit expands to topics)
 └─ Confirm bar → Practice
Practice (one question at a time) → Results
Results → Retry same selection | Home
```

The app is a single HTML page that swaps between three "screens" (selection, quiz, results) by
showing/hiding sections — no routing, no page reloads. "Start practice" feels like moving to a
new page while staying instant.

---

## 7. Visual & interaction design

- **Brand:** indigo/violet (`#4f46e5` → `#7c3aed`) on a light slate background; white cards with
  soft shadows and rounded corners (14px radius).
- **Layout:** centered single column, max width ~920px, responsive down to mobile.
- **Selection as the hero:** units are full-width rows with a checkbox-style "fill" marker.
  Selected = solid brand check + tint; partially selected (some topics) = dash marker + lighter
  tint. This makes multi-select state legible at a glance.
- **Math first:** all mathematics is real LaTeX rendered with **MathJax** (SVG output), so
  fractions, limits, integrals, and series look like a textbook rather than plain text.
- **Feedback color language:** green for correct/solutions, red for incorrect/timer warnings,
  indigo for selection and primary actions.
- **Accessibility:** semantic buttons/labels, keyboard-focusable controls, visible focus rings,
  tabular-figure alignment for stats, and color never used as the *only* signal (checkmarks,
  text, and position reinforce it).

---

## 8. Technical architecture

- **Stack:** plain HTML, CSS, and vanilla JavaScript. **No build step, no framework, no
  dependencies** beyond the MathJax CDN. This keeps the app trivially hostable, auditable, and
  fast to load.
- **Hosting:** GitHub Pages (static), deployed on every push to `main`.
- **Data model:** question banks are plain JS arrays attached to `window`:
  - `data/units.js` — the 10 units and their topic lists.
  - `data/questions*.js` — multiple-choice questions (hand-written seeds plus
    programmatically generated banks that guarantee ≥50 unique per topic).
  - `data/frq*.js` — free-response questions with `parts` (prompt, points, solution).
  - Each MC item: `{ id, unit, course, topic, difficulty, stem, choices, answer, solution }`.
- **App logic (`app.js`):** selection state, pool building (with de-duplication so a set never
  repeats a question), the quiz engine for both question types, the timer, results tallying, and
  the progress tracker.
- **Generation:** the large banks are produced by generator scripts that *compute* each answer
  and distractor, so answer keys are correct by construction, and they skip any stem that already
  exists to keep every topic's 50 questions unique.

### Why this architecture
A static, dependency-free app is the right fit for a free educational tool: it's cheap/free to
host forever, loads instantly, has a tiny attack surface, and anyone can read exactly what it
does. The trade-off — no server — is intentional (see Privacy).

---

## 9. Progress tracking & privacy

- Progress is stored in the browser's **`localStorage`** under a single key. It persists across
  visits and browser restarts, with no account and no data leaving the device.
- Tracked: sets completed, MC answered, MC correct (overall and per topic), and FRQ points.
- A **Reset** button clears it.
- **Implication:** progress is per-device/per-browser and does **not** sync across devices.
  That's a deliberate privacy-for-simplicity trade; cross-device sync would require accounts and
  a backend, which are out of scope.
- The app collects nothing, sends nothing, and shows no ads or trackers.

---

## 10. Governance & licensing

- **Open and free** under the MIT license — anyone may use, fork, and self-host it.
- **Contributions are currently closed:** issues are disabled, pull requests from
  non-collaborators are blocked by GitHub interaction limits and auto-closed as a backup, and
  `main` is protected (no force-push/deletion, review required). The maintainer retains direct
  push access to ship updates.
- The project is **not affiliated with or endorsed by the College Board**. "AP" is a trademark
  registered by the College Board.

---

## 11. Success signals (what "good" looks like)

- A student can go from the link to answering a targeted set in **under ~15 seconds**.
- **No repeats** within a reasonable practice session for any single topic.
- Every answer is **correct** and every solution **explains the method**, not just the result.
- Returning students see their **accuracy trend by topic** and can act on it.

---

## 12. Future directions (not built)

Ideas that fit the product but are intentionally out of scope today:
- Optional accounts for **cross-device sync** of progress.
- A **"review my misses"** mode that re-serves previously-wrong questions.
- **Spaced-repetition** scheduling of weak topics.
- More **calculator-active** FRQ sets and full timed "mock sections."
- Diagram-based questions (graphs/figures) for topics that rely on them.
- Opening the project back up to **community-contributed** questions with a review workflow.

---

_This brief describes the app as shipped. It is documentation for readers and contributors; it is
not a contract or a roadmap commitment._
