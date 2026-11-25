/* AP Calculus Practice — front-end logic (no build step, no dependencies).
   Data comes from data/units.js (AP_CALC_UNITS) and data/questions.js (AP_CALC_QUESTIONS). */
(function () {
  "use strict";

  var UNITS = window.AP_CALC_UNITS || [];
  var QUESTIONS = window.AP_CALC_QUESTIONS || [];
  var LETTERS = ["A", "B", "C", "D", "E"];

  // ---- app state ----
  var state = {
    selectedUnit: null,   // unit object when drilling into topics
    quiz: [],             // array of question objects for the current set
    index: 0,             // current question index
    score: 0,
    answered: false,
    scopeLabel: "",       // human-readable scope description
    lastScope: null       // { type, unitId?, topic? } for "retry"
  };

  // ---- element helpers ----
  function $(id) { return document.getElementById(id); }
  function show(id) { $(id).classList.remove("hidden"); }
  function hide(id) { $(id).classList.add("hidden"); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  // Render any pending MathJax inside the given element (or whole doc).
  function typeset(node) {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(node ? [node] : undefined).catch(function () {});
    }
  }

  function screens() { return ["selection-screen", "topic-screen", "quiz-screen", "results-screen"]; }
  function goTo(screenId) {
    screens().forEach(function (s) { hide(s); });
    show(screenId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- filtering ----
  function currentFilters() {
    return {
      course: $("course-filter").value,       // all | AB | BC
      difficulty: $("difficulty-filter").value, // all | Easy | Medium | Hard
      count: parseInt($("count-filter").value, 10)
    };
  }

  function courseMatches(q, course) {
    if (course === "all") return true;
    if (course === "AB") return q.course.indexOf("AB") !== -1; // "AB/BC" counts as AB
    if (course === "BC") return q.course.indexOf("BC") !== -1;
    return true;
  }

  function filterQuestions(predicate) {
    var f = currentFilters();
    return QUESTIONS.filter(function (q) {
      if (!courseMatches(q, f.course)) return false;
      if (f.difficulty !== "all" && q.difficulty !== f.difficulty) return false;
      return predicate(q);
    });
  }

  // Units available under the current course filter.
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

  // ---- rendering: unit grid ----
  function renderUnits() {
    var grid = $("unit-grid");
    grid.innerHTML = "";
    visibleUnits().forEach(function (u) {
      var available = filterQuestions(function (q) { return q.unit === u.id; }).length;
      var card = el("button", "unit-card");
      var bcClass = u.course === "BC" ? " bc" : "";
      card.innerHTML =
        '<span class="u-num">Unit ' + u.id + "</span>" +
        '<span class="u-title">' + u.title + "</span>" +
        '<span class="u-foot"><span class="badge' + bcClass + '">' + u.course + "</span>" +
        "<span>" + available + " problem" + (available === 1 ? "" : "s") + "</span></span>";
      card.disabled = available === 0;
      if (available === 0) card.style.opacity = 0.5;
      card.addEventListener("click", function () { openUnit(u); });
      grid.appendChild(card);
    });
  }

  // ---- topic drill-down ----
  function openUnit(u) {
    state.selectedUnit = u;
    $("topic-unit-title").textContent = "Unit " + u.id + ": " + u.title;
    var list = $("topic-list");
    list.innerHTML = "";

    // One row per topic that actually has questions under current filters.
    u.topics.forEach(function (topic) {
      var qs = filterQuestions(function (q) { return q.unit === u.id && q.topic === topic; });
      if (qs.length === 0) return;
      var item = el("button", "topic-item");
      item.innerHTML = "<span>" + topic + "</span><span class='count'>" + qs.length + " problem" + (qs.length === 1 ? "" : "s") + "</span>";
      item.addEventListener("click", function () {
        startQuiz(qs, "Unit " + u.id + " · " + topic, { type: "topic", unitId: u.id, topic: topic });
      });
      list.appendChild(item);
    });

    if (!list.children.length) {
      list.appendChild(el("p", "muted", "No problems match your current filters. Try changing the course or difficulty."));
    }
    goTo("topic-screen");
  }

  function startWholeUnit() {
    var u = state.selectedUnit;
    var qs = filterQuestions(function (q) { return q.unit === u.id; });
    startQuiz(qs, "Unit " + u.id + ": " + u.title, { type: "unit", unitId: u.id });
  }

  function startMixed() {
    var qs = filterQuestions(function () { return true; });
    startQuiz(qs, "Mixed set · all selected units", { type: "mixed" });
  }

  // ---- quiz flow ----
  function startQuiz(pool, scopeLabel, scope) {
    if (!pool.length) {
      alert("No problems match your current filters. Try adjusting them.");
      return;
    }
    var count = currentFilters().count;
    state.quiz = shuffle(pool).slice(0, count);
    state.index = 0;
    state.score = 0;
    state.answered = false;
    state.scopeLabel = scopeLabel;
    state.lastScope = scope;
    $("scope-label").textContent = scopeLabel;
    goTo("quiz-screen");
    renderQuestion();
  }

  function renderQuestion() {
    var q = state.quiz[state.index];
    state.answered = false;

    $("progress").textContent = "Question " + (state.index + 1) + " of " + state.quiz.length;
    $("q-meta").innerHTML =
      "<span>Unit " + q.unit + "</span><span>" + q.topic + "</span><span>" + q.difficulty + "</span>";
    $("q-stem").innerHTML = q.stem;

    var choicesBox = $("choices");
    choicesBox.innerHTML = "";
    q.choices.forEach(function (choice, i) {
      var b = el("button", "choice");
      b.innerHTML = "<span class='letter'>" + LETTERS[i] + "</span><span class='ctext'>" + choice + "</span>";
      b.addEventListener("click", function () { selectAnswer(i, b); });
      choicesBox.appendChild(b);
    });

    hide("solution");
    $("solution-body").innerHTML = q.solution;
    $("next-btn").disabled = true;
    $("next-btn").textContent = state.index === state.quiz.length - 1 ? "See results →" : "Next →";

    typeset($("quiz-screen"));
  }

  function selectAnswer(choiceIndex, btnEl) {
    if (state.answered) return;
    state.answered = true;
    var q = state.quiz[state.index];
    var buttons = $("choices").querySelectorAll(".choice");

    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add("correct");
    });
    if (choiceIndex === q.answer) {
      state.score++;
    } else {
      btnEl.classList.add("incorrect");
    }

    show("solution");
    typeset($("solution"));
    $("next-btn").disabled = false;
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index < state.quiz.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    var total = state.quiz.length;
    var pct = total ? Math.round((state.score / total) * 100) : 0;
    var msg = pct >= 80 ? "Excellent work!" : pct >= 60 ? "Solid — keep practicing." : "Review the solutions and try again.";
    $("score-summary").innerHTML =
      '<div class="big">' + state.score + " / " + total + "</div>" +
      '<div class="pct">' + pct + "% · " + msg + "</div>";
    goTo("results-screen");
  }

  function retrySameScope() {
    var s = state.lastScope;
    if (!s) { goTo("selection-screen"); return; }
    if (s.type === "mixed") return startMixed();
    if (s.type === "unit") {
      var u = UNITS.find(function (x) { return x.id === s.unitId; });
      var qs = filterQuestions(function (q) { return q.unit === s.unitId; });
      return startQuiz(qs, "Unit " + u.id + ": " + u.title, s);
    }
    if (s.type === "topic") {
      var qs2 = filterQuestions(function (q) { return q.unit === s.unitId && q.topic === s.topic; });
      return startQuiz(qs2, "Unit " + s.unitId + " · " + s.topic, s);
    }
    goTo("selection-screen");
  }

  // ---- wiring ----
  function init() {
    renderUnits();

    ["course-filter", "difficulty-filter"].forEach(function (id) {
      $(id).addEventListener("change", renderUnits);
    });

    $("start-mixed").addEventListener("click", startMixed);
    $("start-whole-unit").addEventListener("click", startWholeUnit);
    $("next-btn").addEventListener("click", nextQuestion);
    $("retry-btn").addEventListener("click", retrySameScope);

    document.querySelectorAll("[data-back]").forEach(function (b) {
      b.addEventListener("click", function () { goTo(b.getAttribute("data-back") + "-screen"); });
    });

    // Point the "contribute" link at this page's own repo when hosted on GitHub Pages.
    var link = $("repo-link");
    var host = location.hostname;
    if (host.endsWith("github.io")) {
      var user = host.split(".")[0];
      var repo = location.pathname.split("/").filter(Boolean)[0] || "";
      link.href = "https://github.com/" + user + (repo ? "/" + repo : "");
    } else {
      link.href = "https://github.com/";
    }

    typeset(document.body);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
