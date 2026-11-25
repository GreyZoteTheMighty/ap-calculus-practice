/* AP Calculus Practice — front-end logic (no build step, no dependencies).
   Data: data/units.js (AP_CALC_UNITS), data/questions.js (AP_CALC_QUESTIONS, multiple choice),
   data/frq.js (AP_CALC_FRQ, free response). Supports a timed mode for either type. */
(function () {
  "use strict";

  var UNITS = window.AP_CALC_UNITS || [];
  var MC = window.AP_CALC_QUESTIONS || [];
  var FRQ = window.AP_CALC_FRQ || [];
  var LETTERS = ["A", "B", "C", "D", "E"];

  // Seconds allotted per item when timed mode is on (AP-style pacing).
  var PACE = { mc: 120, frq: 360 };

  var state = {
    type: "mc",            // "mc" | "frq"
    timed: false,
    selectedUnit: null,
    quiz: [],
    index: 0,
    resultByIndex: {},     // index -> { earned, max }
    partEarned: [],        // current FRQ item: earned points per part
    answered: false,
    scopeLabel: "",
    lastScope: null,
    timerId: null,
    remaining: 0
  };

  function $(id) { return document.getElementById(id); }
  function show(id) { $(id).classList.remove("hidden"); }
  function hide(id) { $(id).classList.add("hidden"); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function typeset(node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(node ? [node] : undefined).catch(function () {});
    }
  }

  function screens() { return ["selection-screen", "topic-screen", "quiz-screen", "results-screen"]; }
  function goTo(screenId) {
    stopTimer();
    screens().forEach(function (s) { hide(s); });
    show(screenId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- timer ----------
  function startTimer(totalSeconds) {
    stopTimer();
    state.remaining = totalSeconds;
    renderTimer();
    show("timer");
    state.timerId = setInterval(function () {
      state.remaining -= 1;
      renderTimer();
      if (state.remaining <= 0) {
        clearInterval(state.timerId);
        state.timerId = null;
        showResults(true);
      }
    }, 1000);
  }
  function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    hide("timer");
  }
  function renderTimer() {
    var s = Math.max(0, state.remaining);
    var m = Math.floor(s / 60);
    var ss = String(s % 60).padStart(2, "0");
    var t = $("timer");
    t.textContent = "⏱ " + m + ":" + ss;
    t.classList.toggle("warning", s <= 30);
  }

  // ---------- filtering ----------
  function activeBank() { return state.type === "frq" ? FRQ : MC; }
  function filters() {
    return {
      course: $("course-filter").value,
      difficulty: $("difficulty-filter").value,
      count: parseInt($("count-filter").value, 10)
    };
  }
  function courseMatches(item, course) {
    if (course === "all") return true;
    if (course === "AB") return item.course.indexOf("AB") !== -1;
    if (course === "BC") return item.course.indexOf("BC") !== -1;
    return true;
  }
  function filterItems(predicate) {
    var f = filters();
    return activeBank().filter(function (q) {
      if (!courseMatches(q, f.course)) return false;
      if (f.difficulty !== "all" && q.difficulty !== f.difficulty) return false;
      return predicate(q);
    });
  }
  function visibleUnits() {
    var course = $("course-filter").value;
    return UNITS.filter(function (u) {
      if (course === "all") return true;
      if (course === "AB") return u.course.indexOf("AB") !== -1;
      if (course === "BC") return u.course.indexOf("BC") !== -1;
      return true;
    });
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function frqMax(item) {
    return item.parts.reduce(function (s, p) { return s + p.points; }, 0);
  }

  // ---------- unit grid ----------
  function renderUnits() {
    var grid = $("unit-grid");
    grid.innerHTML = "";
    var noun = state.type === "frq" ? "FRQ" : "problem";
    visibleUnits().forEach(function (u) {
      var n = filterItems(function (q) { return q.unit === u.id; }).length;
      var card = el("button", "unit-card");
      var bcClass = u.course === "BC" ? " bc" : "";
      card.innerHTML =
        '<span class="u-num">Unit ' + u.id + "</span>" +
        '<span class="u-title">' + u.title + "</span>" +
        '<span class="u-foot"><span class="badge' + bcClass + '">' + u.course + "</span>" +
        "<span>" + n + " " + noun + (n === 1 ? "" : "s") + "</span></span>";
      card.disabled = n === 0;
      if (n === 0) card.style.opacity = 0.5;
      card.addEventListener("click", function () { openUnit(u); });
      grid.appendChild(card);
    });
    $("start-mixed").textContent = state.type === "frq"
      ? "Start a mixed set of free-response questions"
      : "Start a mixed set (all selected units)";
  }

  // ---------- topic drill-down ----------
  function openUnit(u) {
    state.selectedUnit = u;
    $("topic-unit-title").textContent = "Unit " + u.id + ": " + u.title;
    var list = $("topic-list");
    list.innerHTML = "";
    var noun = state.type === "frq" ? "FRQ" : "problem";
    u.topics.forEach(function (topic) {
      var qs = filterItems(function (q) { return q.unit === u.id && q.topic === topic; });
      if (qs.length === 0) return;
      var item = el("button", "topic-item");
      item.innerHTML = "<span>" + topic + "</span><span class='count'>" + qs.length + " " + noun + (qs.length === 1 ? "" : "s") + "</span>";
      item.addEventListener("click", function () {
        startQuiz(qs, "Unit " + u.id + " · " + topic, { type: "topic", unitId: u.id, topic: topic });
      });
      list.appendChild(item);
    });
    if (!list.children.length) {
      list.appendChild(el("p", "muted", "No " + noun + "s match your current filters. Try changing the type, course, or difficulty."));
    }
    goTo("topic-screen");
  }
  function startWholeUnit() {
    var u = state.selectedUnit;
    startQuiz(filterItems(function (q) { return q.unit === u.id; }), "Unit " + u.id + ": " + u.title, { type: "unit", unitId: u.id });
  }
  function startMixed() {
    startQuiz(filterItems(function () { return true; }), "Mixed set", { type: "mixed" });
  }

  // ---------- quiz flow ----------
  function startQuiz(pool, scopeLabel, scope) {
    if (!pool.length) { alert("No questions match your current filters. Try adjusting them."); return; }
    var count = filters().count;
    state.quiz = shuffle(pool).slice(0, count);
    state.index = 0;
    state.resultByIndex = {};
    state.scopeLabel = scopeLabel;
    state.lastScope = scope;
    state.timed = $("timed-toggle").value === "on";
    $("scope-label").textContent = scopeLabel + (state.type === "frq" ? "  ·  Free response" : "");
    goTo("quiz-screen");
    if (state.timed) startTimer(state.quiz.length * PACE[state.type]);
    renderItem();
  }

  function renderItem() {
    if (state.type === "frq") renderFRQ(); else renderMC();
  }

  function metaHtml(q) {
    var bits = ["Unit " + q.unit, q.topic, q.difficulty];
    if (state.type === "frq") bits.push(q.calculator ? "Calculator" : "No calculator");
    return bits.map(function (b) { return "<span>" + b + "</span>"; }).join("");
  }

  function baseItem() {
    var q = state.quiz[state.index];
    state.answered = false;
    $("progress").textContent = "Question " + (state.index + 1) + " of " + state.quiz.length;
    $("q-meta").innerHTML = metaHtml(q);
    $("next-btn").disabled = true;
    $("next-btn").textContent = state.index === state.quiz.length - 1 ? "See results →" : "Next →";
    hide("solution");
    return q;
  }

  // ----- multiple choice -----
  function renderMC() {
    var q = baseItem();
    $("q-context").innerHTML = "";
    hide("q-context");
    $("q-stem").innerHTML = q.stem;
    var area = $("answer-area");
    area.innerHTML = "";
    var box = el("div", "choices");
    q.choices.forEach(function (choice, i) {
      var b = el("button", "choice");
      b.innerHTML = "<span class='letter'>" + LETTERS[i] + "</span><span class='ctext'>" + choice + "</span>";
      b.addEventListener("click", function () { selectAnswer(i, b); });
      box.appendChild(b);
    });
    area.appendChild(box);
    $("solution-body").innerHTML = q.solution;
    typeset($("quiz-screen"));
  }
  function selectAnswer(choiceIndex, btnEl) {
    if (state.answered) return;
    state.answered = true;
    var q = state.quiz[state.index];
    var buttons = $("answer-area").querySelectorAll(".choice");
    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add("correct");
    });
    var correct = choiceIndex === q.answer;
    if (!correct) btnEl.classList.add("incorrect");
    state.resultByIndex[state.index] = { earned: correct ? 1 : 0, max: 1 };
    show("solution");
    typeset($("solution"));
    $("next-btn").disabled = false;
  }

  // ----- free response -----
  function renderFRQ() {
    var q = baseItem();
    state.partEarned = q.parts.map(function () { return 0; });
    $("q-context").innerHTML = q.context || "";
    show("q-context");
    $("q-stem").innerHTML = "";
    var area = $("answer-area");
    area.innerHTML = "";

    q.parts.forEach(function (part, pi) {
      var wrap = el("div", "frq-part");
      wrap.innerHTML =
        '<div class="frq-part-head"><span class="part-label">(' + part.label + ")</span>" +
        '<span class="part-prompt">' + part.prompt + "</span>" +
        '<span class="part-points">' + part.points + " pt" + (part.points === 1 ? "" : "s") + "</span></div>" +
        '<div class="frq-solution hidden"><strong>Solution.</strong> ' + part.solution + "</div>" +
        '<div class="frq-score hidden"><span class="score-label">Self-score:</span><span class="pts" data-part="' + pi + '"></span></div>';
      var pts = wrap.querySelector(".pts");
      for (var v = 0; v <= part.points; v++) {
        (function (val) {
          var b = el("button", "pt", String(val));
          b.addEventListener("click", function () { scorePart(pi, val, wrap); });
          pts.appendChild(b);
        })(v);
      }
      area.appendChild(wrap);
    });

    var reveal = el("button", "btn btn-reveal", "Reveal solutions &amp; self-score");
    reveal.addEventListener("click", function () { revealFRQ(reveal); });
    area.appendChild(reveal);

    typeset($("quiz-screen"));
  }
  function revealFRQ(revealBtn) {
    state.answered = true;
    var q = state.quiz[state.index];
    $("answer-area").querySelectorAll(".frq-solution, .frq-score").forEach(function (n) { n.classList.remove("hidden"); });
    revealBtn.disabled = true;
    revealBtn.textContent = "Solutions shown — score each part below";
    state.resultByIndex[state.index] = { earned: 0, max: frqMax(q) };
    typeset($("answer-area"));
    $("next-btn").disabled = false;
  }
  function scorePart(partIndex, value, wrapEl) {
    state.partEarned[partIndex] = value;
    wrapEl.querySelectorAll(".pt").forEach(function (b) {
      b.classList.toggle("selected", parseInt(b.textContent, 10) === value);
    });
    var earned = state.partEarned.reduce(function (s, v) { return s + v; }, 0);
    state.resultByIndex[state.index] = { earned: earned, max: frqMax(state.quiz[state.index]) };
  }

  function nextItem() {
    if (!state.answered) return;
    if (state.index < state.quiz.length - 1) { state.index++; renderItem(); }
    else showResults(false);
  }

  function tally() {
    var earned = 0, max = 0;
    state.quiz.forEach(function (item, i) {
      max += state.type === "frq" ? frqMax(item) : 1;
      var r = state.resultByIndex[i];
      if (r) earned += r.earned;
    });
    return { earned: earned, max: max };
  }

  function showResults(timeUp) {
    stopTimer();
    var t = tally();
    var pct = t.max ? Math.round((t.earned / t.max) * 100) : 0;
    var unit = state.type === "frq" ? " pts" : "";
    var msg = pct >= 80 ? "Excellent work!" : pct >= 60 ? "Solid — keep practicing." : "Review the solutions and try again.";
    var note = timeUp ? '<div class="time-up">⏱ Time expired — unanswered questions counted as 0.</div>' : "";
    $("score-summary").innerHTML =
      note +
      '<div class="big">' + t.earned + " / " + t.max + unit + "</div>" +
      '<div class="pct">' + pct + "% · " + msg + "</div>" +
      (state.type === "frq" ? '<div class="pct small">Free-response scores are self-reported against the rubric.</div>' : "");
    goTo("results-screen");
  }

  function retrySameScope() {
    var s = state.lastScope;
    if (!s) return goTo("selection-screen");
    if (s.type === "mixed") return startMixed();
    if (s.type === "unit") {
      var u = UNITS.find(function (x) { return x.id === s.unitId; });
      return startQuiz(filterItems(function (q) { return q.unit === s.unitId; }), "Unit " + u.id + ": " + u.title, s);
    }
    if (s.type === "topic") {
      return startQuiz(filterItems(function (q) { return q.unit === s.unitId && q.topic === s.topic; }), "Unit " + s.unitId + " · " + s.topic, s);
    }
    goTo("selection-screen");
  }

  // ---------- wiring ----------
  function init() {
    renderUnits();

    $("type-filter").addEventListener("change", function () {
      state.type = $("type-filter").value;
      renderUnits();
    });
    ["course-filter", "difficulty-filter"].forEach(function (id) {
      $(id).addEventListener("change", renderUnits);
    });

    $("start-mixed").addEventListener("click", startMixed);
    $("start-whole-unit").addEventListener("click", startWholeUnit);
    $("next-btn").addEventListener("click", nextItem);
    $("retry-btn").addEventListener("click", retrySameScope);
    document.querySelectorAll("[data-back]").forEach(function (b) {
      b.addEventListener("click", function () { goTo(b.getAttribute("data-back") + "-screen"); });
    });

    typeset(document.body);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
