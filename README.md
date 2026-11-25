# ∫ AP Calculus Practice

A free, open web app for practicing **AP® Calculus AB & BC**. Pick a unit or a specific
topic, and get AP-style multiple-choice problems with full worked solutions. No account,
no install, no cost — it runs entirely in the browser.

> **Live site:** _(enable GitHub Pages — see below — and your URL will be_
> `https://<your-username>.github.io/<repo-name>/` _)_

![AP Calculus Practice](https://img.shields.io/badge/AP-Calculus%20AB%20%26%20BC-4f46e5) ![License: MIT](https://img.shields.io/badge/license-MIT-green)

## Features

- **Choose your scope** — practice a whole unit, a single topic, or a mixed set across everything.
- **All 10 CED units** — AB (Units 1–8) and BC (Units 1–10).
- **Filters** — by course (AB / BC), by difficulty (Easy / Medium / Hard), and set length.
- **Worked solutions** — every problem explains the method, not just the answer.
- **Real math rendering** — LaTeX via [MathJax](https://www.mathjax.org/).
- **Zero dependencies / no build step** — plain HTML, CSS, and JavaScript.

## Units covered

| Unit | Title | Course |
|------|-------|--------|
| 1 | Limits and Continuity | AB/BC |
| 2 | Differentiation: Definition & Fundamental Properties | AB/BC |
| 3 | Differentiation: Composite, Implicit & Inverse Functions | AB/BC |
| 4 | Contextual Applications of Differentiation | AB/BC |
| 5 | Analytical Applications of Differentiation | AB/BC |
| 6 | Integration and Accumulation of Change | AB/BC |
| 7 | Differential Equations | AB/BC |
| 8 | Applications of Integration | AB/BC |
| 9 | Parametric, Polar & Vector-Valued Functions | BC |
| 10 | Infinite Sequences and Series | BC |

## Run it locally

No tooling required — it's a static site. Any static server works:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser (MathJax loads from a CDN, so you need internet).

## Deploy for free on GitHub Pages

1. Push this repo to GitHub (public).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, **Folder = `/ (root)`**, then **Save**.
4. Wait ~1 minute. Your site is live at `https://<username>.github.io/<repo>/`.
   Every push to `main` thereafter redeploys automatically.

## Contributing problems

The question bank lives in [`data/questions.js`](data/questions.js). Add an object to the
`AP_CALC_QUESTIONS` array following this schema:

```js
{
  id: "u1-7",                 // unique id, convention: u<unit>-<n>
  unit: 1,                    // 1–10
  course: "AB/BC",            // "AB/BC" or "BC"
  topic: "Algebraic limit techniques", // should match a topic in data/units.js
  difficulty: "Medium",       // "Easy" | "Medium" | "Hard"
  stem: "Evaluate $\\lim_{x\\to 0}\\frac{\\sin x}{x}$.", // LaTeX in $...$
  choices: ["$0$", "$1$", "$\\infty$", "DNE"], // 2–5 options
  answer: 1,                  // 0-based index of the correct choice
  solution: "The standard limit $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$."
}
```

Guidelines:
- Exactly **one** correct choice; make distractors plausible (common mistakes).
- Write all math in LaTeX between `$...$` (inline) or `$$...$$` (display).
- Keep solutions short but show the method.
- Topic strings should match an entry in [`data/units.js`](data/units.js) so it appears in the
  topic drill-down (new topics can be added there).

Open a pull request with your additions — contributions of all difficulty levels are welcome.

## License

[MIT](LICENSE) — free for anyone to use, modify, and share.

---

_Not affiliated with or endorsed by the College Board. AP® is a trademark registered by the
College Board._
