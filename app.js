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

  function screens() { return ["selection-screen", "quiz-screen", "results-screen"]; }
  function goTo(screenId) {
    stopTimer();
    screens().forEach(function (s) { hide(s); });
    show(screenId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- progress tracker (localStorage; persists across sessions) ----------
  var STATS_KEY = "apcalc_progress_v1";
  function defaultStats() {
    return { setsCompleted: 0, mcAnswered: 0, mcCorrect: 0, frqEarned: 0, frqPossible: 0, byTopic: {}, firstSeen: 0, lastSeen: 0 };
  }
  function loadStats() {
    try {
      var s = JSON.parse(localStorage.getItem(STATS_KEY));
      if (s && typeof s === "object") {
        var d = defaultStats();
        for (var k in d) if (!(k in s)) s[k] = d[k];
        if (!s.byTopic || typeof s.byTopic !== "object") s.byTopic = {};
        return s;
      }
    } catch (e) {}
    return defaultStats();
  }
  var stats = loadStats();
  function saveStats() { try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) {} }

  function recordSet() {
    var any = false;
    for (var i = 0; i < state.quiz.length; i++) {
      var r = state.resultByIndex[i];
      if (!r) continue;
      any = true;
      var item = state.quiz[i];
      if (state.type === "frq") {
        stats.frqEarned += r.earned; stats.frqPossible += r.max;
      } else {
        stats.mcAnswered += 1; stats.mcCorrect += r.earned;
        var key = item.unit + "||" + item.topic;
        if (!stats.byTopic[key]) stats.byTopic[key] = { a: 0, c: 0 };
        stats.byTopic[key].a += 1; stats.byTopic[key].c += r.earned;
      }
    }
    if (!any) return;
    stats.setsCompleted += 1;
    stats.lastSeen = Date.now();
    if (!stats.firstSeen) stats.firstSeen = Date.now();
    saveStats();
    renderProgress();
  }
  function resetProgress() {
    if (!window.confirm("Reset all saved progress on this device? This cannot be undone.")) return;
    stats = defaultStats();
    saveStats();
    renderProgress();
  }
  function statCard(label, val) {
    return '<div class="pp-stat"><div class="pp-stat-val">' + val + '</div><div class="pp-stat-label">' + label + "</div></div>";
  }
  function renderProgress() {
    var panel = $("progress-panel");
    if (!stats.mcAnswered && !stats.frqPossible && !stats.setsCompleted) { panel.classList.add("hidden"); return; }
    panel.classList.remove("hidden");
    var acc = stats.mcAnswered ? Math.round((stats.mcCorrect / stats.mcAnswered) * 100) : 0;
    var cards =
      statCard("Sets completed", stats.setsCompleted) +
      statCard("MC answered", stats.mcAnswered) +
      statCard("MC accuracy", stats.mcAnswered ? acc + "%" : "—");
    if (stats.frqPossible) cards += statCard("FRQ points", stats.frqEarned + " / " + stats.frqPossible);
    $("pp-stats").innerHTML = cards;

    var rows = Object.keys(stats.byTopic).map(function (k) {
      var t = stats.byTopic[k], parts = k.split("||");
      return { unit: parseInt(parts[0], 10), topic: parts.slice(1).join("||"), a: t.a, c: t.c, pct: t.a ? Math.round((t.c / t.a) * 100) : 0 };
    }).sort(function (x, y) { return x.pct - y.pct || y.a - x.a; });
    $("pp-details").innerHTML = rows.length
      ? rows.map(function (r) {
          return '<div class="pp-row"><span class="pp-row-name">Unit ' + r.unit + " · " + r.topic + '</span>' +
            '<span class="pp-bar"><span class="pp-bar-fill" style="width:' + r.pct + '%"></span></span>' +
            '<span class="pp-row-val">' + r.c + "/" + r.a + " (" + r.pct + "%)</span></div>";
        }).join("")
      : '<p class="muted">Answer some multiple-choice questions to see per-topic accuracy.</p>';
  }

  function uniqueByStem(arr) {
    var seen = {}, out = [];
    arr.forEach(function (q) {
      var key = q.stem || q.id;
      if (!seen[key]) { seen[key] = true; out.push(q); }
    });
    return out;
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
      count: Math.max(1, parseInt($("count-filter").value, 10) || 10)
    };
  }
  function courseMatches(item, course) {
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

  // ---------- selection (multi-select units & topics) ----------
  var selected = {}; // key "unitId::topic" -> true

  function topicKey(uid, t) { return uid + "::" + t; }
  function availableTopics(u) {
    return u.topics.filter(function (t) {
      return filterItems(function (q) { return q.unit === u.id && q.topic === t; }).length > 0;
    });
  }
  function unitState(u) {
    var tops = availableTopics(u);
    if (!tops.length) return "none";
    var n = tops.filter(function (t) { return selected[topicKey(u.id, t)]; }).length;
    return n === 0 ? "none" : (n === tops.length ? "full" : "partial");
  }

  function renderUnits() {
    var grid = $("unit-grid");
    grid.innerHTML = "";
    var noun = state.type === "frq" ? "FRQ" : "problem";

    // Drop selections no longer valid under the current type/course/difficulty.
    var vis = visibleUnits();
    Object.keys(selected).forEach(function (k) {
      var uid = parseInt(k.split("::")[0], 10);
      var topic = k.split("::").slice(1).join("::");
      var u = UNITS.find(function (x) { return x.id === uid; });
      if (!u || !vis.some(function (v) { return v.id === uid; }) || availableTopics(u).indexOf(topic) === -1) {
        delete selected[k];
      }
    });

    vis.forEach(function (u) {
      var tops = availableTopics(u);
      var n = filterItems(function (q) { return q.unit === u.id; }).length;
      var st = unitState(u);
      var bcClass = u.course === "BC" ? " bc" : "";

      var item = el("div", "unit-item" + (st === "full" ? " selected" : st === "partial" ? " partial" : ""));
      var head = el("div", "unit-head");

      var selBtn = el("button", "unit-select");
      selBtn.innerHTML =
        '<span class="u-mark" aria-hidden="true"></span>' +
        '<span class="u-num">Unit ' + u.id + "</span>" +
        '<span class="u-title">' + u.title + "</span>" +
        '<span class="badge' + bcClass + '">' + u.course + "</span>" +
        '<span class="u-count">' + n + " " + noun + (n === 1 ? "" : "s") + "</span>";
      selBtn.addEventListener("click", function () { toggleUnit(u); });
      head.appendChild(selBtn);

      var panel = el("div", "topic-panel");
      if (tops.length) {
        var expBtn = el("button", "unit-expand", "▾");
        expBtn.setAttribute("aria-label", "Show topics in Unit " + u.id);
        expBtn.addEventListener("click", function () {
          panel.classList.toggle("open");
          expBtn.classList.toggle("open");
        });
        head.appendChild(expBtn);
      }
      item.appendChild(head);

      tops.forEach(function (t) {
        var cnt = filterItems(function (q) { return q.unit === u.id && q.topic === t; }).length;
        var row = el("label", "topic-check" + (selected[topicKey(u.id, t)] ? " on" : ""));
        var cb = el("input");
        cb.type = "checkbox";
        cb.checked = !!selected[topicKey(u.id, t)];
        cb.addEventListener("change", function () { toggleTopic(u, t); });
        row.appendChild(cb);
        row.appendChild(el("span", "tc-name", t));
        row.appendChild(el("span", "tc-count", cnt + " " + noun + (cnt === 1 ? "" : "s")));
        panel.appendChild(row);
      });
      item.appendChild(panel);
      grid.appendChild(item);
    });
    updateConfirmBar();
  }

  function toggleUnit(u) {
    var tops = availableTopics(u);
    var full = unitState(u) === "full";
    tops.forEach(function (t) {
      if (full) delete selected[topicKey(u.id, t)];
      else selected[topicKey(u.id, t)] = true;
    });
    renderUnits();
  }
  function toggleTopic(u, t) {
    var k = topicKey(u.id, t);
    if (selected[k]) delete selected[k]; else selected[k] = true;
    renderUnits();
  }
  function selectAllUnits() {
    visibleUnits().forEach(function (u) {
      availableTopics(u).forEach(function (t) { selected[topicKey(u.id, t)] = true; });
    });
    renderUnits();
  }
  function clearSelection() { selected = {}; renderUnits(); }

  function selectedPool() {
    return uniqueByStem(filterItems(function (q) { return selected[topicKey(q.unit, q.topic)]; }));
  }
  function selectedUnitCount() {
    var us = {};
    Object.keys(selected).forEach(function (k) { us[k.split("::")[0]] = true; });
    return Object.keys(us).length;
  }
  function updateConfirmBar() {
    var keys = Object.keys(selected);
    var bar = $("confirm-bar");
    if (!keys.length) { bar.classList.add("hidden"); return; }
    bar.classList.remove("hidden");
    var pool = selectedPool();
    $("count-filter").max = Math.max(1, pool.length);
    var noun = state.type === "frq" ? "FRQ" : "question";
    $("selection-summary").textContent =
      keys.length + " topic" + (keys.length === 1 ? "" : "s") +
      " · " + selectedUnitCount() + " unit" + (selectedUnitCount() === 1 ? "" : "s") +
      " · " + pool.length + " " + noun + (pool.length === 1 ? "" : "s") + " available";
    $("confirm-start").disabled = pool.length === 0;
    $("confirm-start").textContent = "Start practice (" + Math.min(pool.length, filters().count) + ") →";
  }

  function confirmStart() {
    var pool = selectedPool();
    if (!pool.length) return;
    var label = selectedUnitCount() + " unit" + (selectedUnitCount() === 1 ? "" : "s") +
                ", " + Object.keys(selected).length + " topic" + (Object.keys(selected).length === 1 ? "" : "s");
    startQuiz(pool, label, { type: "selection", keys: Object.keys(selected).slice() });
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
    recordSet();
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
    if (!s || s.type !== "selection") return goTo("selection-screen");
    var keySet = {};
    s.keys.forEach(function (k) { keySet[k] = true; });
    var pool = filterItems(function (q) { return keySet[topicKey(q.unit, q.topic)]; });
    if (!pool.length) return goTo("selection-screen");
    startQuiz(pool, state.scopeLabel, s);
  }

  // ---------- wiring ----------
  function init() {
    renderUnits();
    renderProgress();

    $("progress-toggle").addEventListener("click", function () {
      var d = $("pp-details");
      var hidden = d.classList.toggle("hidden");
      $("progress-toggle").textContent = hidden ? "Show topic breakdown" : "Hide topic breakdown";
    });
    $("reset-progress").addEventListener("click", resetProgress);

    $("type-filter").addEventListener("change", function () {
      state.type = $("type-filter").value;
      renderUnits();
    });
    ["course-filter", "difficulty-filter"].forEach(function (id) {
      $(id).addEventListener("change", renderUnits);
    });
    $("count-filter").addEventListener("change", updateConfirmBar);

    $("select-all").addEventListener("click", selectAllUnits);
    $("clear-selection").addEventListener("click", clearSelection);
    $("confirm-start").addEventListener("click", confirmStart);
    $("next-btn").addEventListener("click", nextItem);
    $("retry-btn").addEventListener("click", retrySameScope);
    document.querySelectorAll("[data-back]").forEach(function (b) {
      b.addEventListener("click", function () { goTo(b.getAttribute("data-back") + "-screen"); });
    });

    typeset(document.body);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
