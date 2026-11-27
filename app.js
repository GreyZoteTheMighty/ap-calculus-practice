/* AP Calculus Practice — front-end logic (no build step, no dependencies).
   Data: data/units.js, data/questions*.js (MC), data/frq*.js (FRQ). */
(function () {
  "use strict";

  var UNITS = window.AP_CALC_UNITS || [];
  var MC = window.AP_CALC_QUESTIONS || [];
  var FRQ = window.AP_CALC_FRQ || [];
  var LETTERS = ["A", "B", "C", "D", "E"];
  var PACE = { mc: 120, frq: 360 };

  // ---- svg snippets ----
  var ARROW = '<svg class="arrow" aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#FFD23F" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h12M10 4l5 5-5 5"></path></svg>';
  var CHECK_MARK = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#15171C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"></path></svg>';
  var DASH_MARK = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#15171C" stroke-width="2.4" stroke-linecap="round"><path d="M2 6h8"></path></svg>';
  var CHEV = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#15171C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"></path></svg>';
  var OK_TAG = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.2 3.2L13 4.5"></path></svg>';
  var MISS_TAG = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"></path></svg>';

  var state = {
    type: "mc", course: "BC", difficulty: "all", timed: false,
    quiz: [], index: 0, resultByIndex: {}, partEarned: [], answered: false,
    scopeLabel: "", lastScope: null, timerId: null, remaining: 0
  };

  function $(id) { return document.getElementById(id); }
  function show(id) { $(id).classList.remove("hidden"); }
  function hide(id) { $(id).classList.add("hidden"); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function typeset(node) { if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise(node ? [node] : undefined).catch(function () {}); }

  function screens() { return ["selection-screen", "quiz-screen", "results-screen"]; }
  function goTo(screenId) { stopTimer(); screens().forEach(function (s) { hide(s); }); show(screenId); window.scrollTo({ top: 0, behavior: "smooth" }); }

  // ---------- timer ----------
  function startTimer(total) {
    stopTimer();
    state.remaining = total; renderTimer(); show("timer");
    state.timerId = setInterval(function () {
      state.remaining -= 1; renderTimer();
      if (state.remaining <= 0) { clearInterval(state.timerId); state.timerId = null; showResults(true); }
    }, 1000);
  }
  function stopTimer() { if (state.timerId) { clearInterval(state.timerId); state.timerId = null; } hide("timer"); }
  function renderTimer() {
    var s = Math.max(0, state.remaining), m = Math.floor(s / 60), ss = String(s % 60).padStart(2, "0");
    var t = $("timer");
    t.innerHTML = '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="#FFD23F" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="9" r="6"></circle><path d="M8 6v3l2 1.5M6 1.5h4"></path></svg>' + m + ":" + ss;
    t.classList.toggle("warning", s <= 30);
  }

  // ---------- progress tracker ----------
  var STATS_KEY = "apcalc_progress_v1";
  function defaultStats() { return { setsCompleted: 0, mcAnswered: 0, mcCorrect: 0, frqEarned: 0, frqPossible: 0, byTopic: {}, firstSeen: 0, lastSeen: 0 }; }
  function loadStats() {
    try { var s = JSON.parse(localStorage.getItem(STATS_KEY)); if (s && typeof s === "object") { var d = defaultStats(); for (var k in d) if (!(k in s)) s[k] = d[k]; if (!s.byTopic || typeof s.byTopic !== "object") s.byTopic = {}; return s; } } catch (e) {}
    return defaultStats();
  }
  var stats = loadStats();
  function saveStats() { try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) {} }

  // ---------- filtering ----------
  function activeBank() { return state.type === "frq" ? FRQ : MC; }
  function filters() {
    var c = parseInt($("count-filter").value, 10);
    return { course: state.course, difficulty: state.difficulty, count: Math.max(1, c || 10) };
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
    return UNITS.filter(function (u) {
      if (state.course === "AB") return u.course.indexOf("AB") !== -1;
      if (state.course === "BC") return u.course.indexOf("BC") !== -1;
      return true;
    });
  }
  function shuffle(arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function frqMax(item) { return item.parts.reduce(function (s, p) { return s + p.points; }, 0); }
  function uniqueByStem(arr) { var seen = {}, out = []; arr.forEach(function (q) { var k = q.stem || q.id; if (!seen[k]) { seen[k] = true; out.push(q); } }); return out; }

  // ---------- selection ----------
  var selected = {};
  function topicKey(uid, t) { return uid + "::" + t; }
  function availableTopics(u) { return u.topics.filter(function (t) { return filterItems(function (q) { return q.unit === u.id && q.topic === t; }).length > 0; }); }
  function unitState(u) {
    var tops = availableTopics(u); if (!tops.length) return "none";
    var n = tops.filter(function (t) { return selected[topicKey(u.id, t)]; }).length;
    return n === 0 ? "none" : (n === tops.length ? "full" : "partial");
  }

  function renderUnits() {
    var grid = $("unit-grid");
    grid.innerHTML = "";
    var noun = state.type === "frq" ? "FRQ" : "Qs";
    var vis = visibleUnits();

    // prune stale selections
    Object.keys(selected).forEach(function (k) {
      var uid = parseInt(k.split("::")[0], 10), topic = k.split("::").slice(1).join("::");
      var u = UNITS.find(function (x) { return x.id === uid; });
      if (!u || !vis.some(function (v) { return v.id === uid; }) || availableTopics(u).indexOf(topic) === -1) delete selected[k];
    });

    var ab = vis.filter(function (u) { return u.id <= 8; });
    var bc = vis.filter(function (u) { return u.id >= 9; });
    if (ab.length) { grid.appendChild(el("div", "unit-group-head", "Units 1&ndash;8 &middot; AB &amp; BC")); grid.appendChild(unitListEl(ab, noun)); }
    if (bc.length) { grid.appendChild(el("div", "unit-group-head", "Units 9&ndash;10 &middot; BC only")); grid.appendChild(unitListEl(bc, noun)); }

    updateConfirmBar();
  }

  function unitListEl(units, noun) {
    var ul = el("ul", "unit-list");
    units.forEach(function (u) {
      var tops = availableTopics(u);
      var n = filterItems(function (q) { return q.unit === u.id; }).length;
      var st = unitState(u);
      var selCount = tops.filter(function (t) { return selected[topicKey(u.id, t)]; }).length;
      var note = st === "full" ? "All " + tops.length + " topics selected"
        : st === "partial" ? selCount + " of " + tops.length + " topics selected" : "";
      var num = (u.id < 10 ? "0" : "") + u.id;

      var li = el("li", "unit-item" + (st === "full" ? " selected" : st === "partial" ? " partial" : ""));
      var head = el("div", "unit-head");

      var mark = st === "full" ? CHECK_MARK : st === "partial" ? DASH_MARK : "";
      var selBtn = el("button", "unit-select");
      selBtn.type = "button";
      selBtn.setAttribute("aria-pressed", st === "full" ? "true" : st === "partial" ? "mixed" : "false");
      selBtn.innerHTML =
        '<span class="u-mark" aria-hidden="true">' + mark + "</span>" +
        '<span class="u-num">' + num + "</span>" +
        '<span class="u-main"><span class="u-title">' + esc(u.title) + "</span>" +
        '<span class="u-note">' + note + "</span></span>" +
        '<span class="u-count">' + n + " " + noun + "</span>";
      selBtn.addEventListener("click", function () { toggleUnit(u); });
      head.appendChild(selBtn);

      var panel = el("ul", "topic-panel");
      if (tops.length) {
        var exp = el("button", "unit-expand", CHEV);
        exp.type = "button";
        exp.setAttribute("aria-label", "Show topics in unit " + u.id);
        exp.setAttribute("aria-expanded", "false");
        exp.addEventListener("click", function () {
          var open = panel.classList.toggle("open"); exp.classList.toggle("open");
          exp.setAttribute("aria-expanded", open ? "true" : "false");
        });
        head.appendChild(exp);
      }
      li.appendChild(head);

      tops.forEach(function (t) {
        var cnt = filterItems(function (q) { return q.unit === u.id && q.topic === t; }).length;
        var row = el("li");
        var lab = el("label", "topic-check" + (selected[topicKey(u.id, t)] ? " on" : ""));
        var cb = el("input"); cb.type = "checkbox"; cb.checked = !!selected[topicKey(u.id, t)];
        cb.addEventListener("change", function () { toggleTopic(u, t); });
        lab.appendChild(cb);
        lab.appendChild(el("span", "tc-name", esc(t)));
        lab.appendChild(el("span", "tc-count", cnt + ""));
        row.appendChild(lab); panel.appendChild(row);
      });
      li.appendChild(panel);
      ul.appendChild(li);
    });
    return ul;
  }

  function toggleUnit(u) {
    var tops = availableTopics(u), full = unitState(u) === "full";
    tops.forEach(function (t) { if (full) delete selected[topicKey(u.id, t)]; else selected[topicKey(u.id, t)] = true; });
    renderUnits();
  }
  function toggleTopic(u, t) { var k = topicKey(u.id, t); if (selected[k]) delete selected[k]; else selected[k] = true; renderUnits(); }
  function selectAllUnits() { visibleUnits().forEach(function (u) { availableTopics(u).forEach(function (t) { selected[topicKey(u.id, t)] = true; }); }); renderUnits(); }
  function clearSelection() { selected = {}; renderUnits(); }

  function selectedPool() { return uniqueByStem(filterItems(function (q) { return selected[topicKey(q.unit, q.topic)]; })); }
  function selectedUnitCount() { var us = {}; Object.keys(selected).forEach(function (k) { us[k.split("::")[0]] = true; }); return Object.keys(us).length; }

  function updateConfirmBar() {
    var keys = Object.keys(selected);
    var btn = $("confirm-start"), scope = $("selection-summary"), avail = $("selection-available");
    if (!keys.length) {
      scope.textContent = "No topics selected"; avail.textContent = "";
      btn.disabled = true; btn.innerHTML = "Start practice"; return;
    }
    var pool = selectedPool();
    $("count-filter").max = Math.max(1, pool.length);
    var noun = state.type === "frq" ? "available" : "available";
    scope.textContent = keys.length + " topic" + (keys.length === 1 ? "" : "s") + " · " + selectedUnitCount() + " unit" + (selectedUnitCount() === 1 ? "" : "s");
    avail.textContent = pool.length + " " + noun;
    var n = Math.min(pool.length, filters().count);
    btn.disabled = pool.length === 0;
    btn.innerHTML = "Start " + n + " question" + (n === 1 ? "" : "s") + ARROW;
  }

  function confirmStart() {
    var pool = selectedPool(); if (!pool.length) return;
    var label = selectedUnitCount() + " unit" + (selectedUnitCount() === 1 ? "" : "s") + " · " + Object.keys(selected).length + " topic" + (Object.keys(selected).length === 1 ? "" : "s");
    startQuiz(pool, label, { type: "selection", keys: Object.keys(selected).slice() });
  }

  // ---------- quiz ----------
  function startQuiz(pool, scopeLabel, scope) {
    if (!pool.length) return;
    var count = filters().count;
    state.quiz = shuffle(pool).slice(0, count);
    state.index = 0; state.resultByIndex = {}; state.scopeLabel = scopeLabel; state.lastScope = scope;
    state.timed = $("timed-toggle").checked;
    $("scope-label").textContent = scopeLabel + " · " + (state.type === "frq" ? "Free response" : "Multiple choice");
    goTo("quiz-screen");
    if (state.timed) startTimer(state.quiz.length * PACE[state.type]);
    renderItem();
  }
  function renderItem() { if (state.type === "frq") renderFRQ(); else renderMC(); }

  function metaHtml(q) {
    var bits = ["Unit " + q.unit, q.topic, q.difficulty];
    if (state.type === "frq") bits.push(q.calculator ? "Calculator" : "No calculator");
    return bits.map(function (b, i) { return (i ? '<span class="dot" aria-hidden="true">&middot;</span>' : "") + "<span>" + esc(b) + "</span>"; }).join("");
  }

  function segsHtml() {
    var n = state.quiz.length, correct = 0, missed = 0, cells = "";
    for (var i = 0; i < n; i++) {
      var r = state.resultByIndex[i], cls = "q-seg";
      if (r) { if (r.earned >= 1) { cls += " ok"; correct++; } else { cls += " miss"; missed++; } }
      else if (i === state.index) cls += " cur";
      cells += '<li class="' + cls + '"></li>';
    }
    return { cells: cells, correct: correct, missed: missed };
  }
  function renderProgressRow(container) {
    var s = segsHtml();
    container.innerHTML =
      '<div class="q-progress-top"><p class="q-progress-n">Question ' + (state.index + 1) + ' <span>of ' + state.quiz.length + '</span></p>' +
      '<p class="q-progress-tally">' + s.correct + ' correct · ' + s.missed + ' missed</p></div>' +
      '<ol class="q-segs" aria-label="Set progress" style="grid-template-columns:repeat(' + state.quiz.length + ',minmax(0,1fr))">' + s.cells + '</ol>';
  }

  // ----- multiple choice -----
  function renderMC() {
    var q = state.quiz[state.index];
    state.answered = false;
    var root = $("quiz-main");
    root.innerHTML = '<div class="quiz-single">' +
      '<div class="q-progress" id="q-progress"></div>' +
      '<article class="q-card">' +
        '<p class="q-meta">' + metaHtml(q) + '</p>' +
        '<div class="q-stem" id="q-stem"></div>' +
        '<div class="choices" id="choices" role="group" aria-label="Answer choices"></div>' +
        '<section class="solution hidden" id="solution"><h3>Worked solution</h3><div class="solution-body" id="solution-body"></div></section>' +
      '</article>' +
      '<div class="quiz-nav"><button type="button" class="btn-primary" id="next-btn" disabled></button></div>' +
    '</div>';
    renderProgressRow($("q-progress"));
    $("q-stem").innerHTML = q.stem;
    var box = $("choices");
    q.choices.forEach(function (choice, i) {
      var b = el("button", "choice"); b.type = "button";
      b.innerHTML = '<span class="letter">' + LETTERS[i] + '</span><span class="ctext">' + choice + '</span>' +
        '<span class="tag ok">' + OK_TAG + 'Correct answer</span><span class="tag miss">' + MISS_TAG + 'Your answer</span>';
      b.addEventListener("click", function () { selectAnswer(i, b); });
      box.appendChild(b);
    });
    $("solution-body").innerHTML = q.solution;
    var nb = $("next-btn");
    nb.disabled = true;
    nb.innerHTML = (state.index === state.quiz.length - 1 ? "See results" : "Next question") + ARROW;
    nb.addEventListener("click", nextItem);
    typeset(root);
  }
  function selectAnswer(choiceIndex, btnEl) {
    if (state.answered) return;
    state.answered = true;
    var q = state.quiz[state.index];
    var buttons = $("choices").querySelectorAll(".choice");
    buttons.forEach(function (b, i) { b.disabled = true; if (i === q.answer) b.classList.add("correct"); });
    var correct = choiceIndex === q.answer;
    if (!correct) btnEl.classList.add("incorrect");
    state.resultByIndex[state.index] = { earned: correct ? 1 : 0, max: 1 };
    renderProgressRow($("q-progress"));
    show("solution"); typeset($("solution"));
    $("next-btn").disabled = false;
  }

  // ----- free response -----
  function renderFRQ() {
    var q = state.quiz[state.index];
    state.answered = false;
    state.partEarned = q.parts.map(function () { return 0; });
    var root = $("quiz-main");
    var partsHtml = q.parts.map(function (part, pi) {
      var pts = '<span class="frq-part-pts">' + part.points + " pt" + (part.points === 1 ? "" : "s") + "</span>";
      var buttons = "";
      for (var v = 0; v <= part.points; v++) buttons += '<button type="button" class="pt" data-part="' + pi + '" data-val="' + v + '">' + v + "</button>";
      return '<li class="frq-part" data-pi="' + pi + '">' +
        '<div class="frq-part-head"><p class="frq-part-prompt"><span class="plabel">(' + part.label + ')</span>' + part.prompt + '</p>' + pts + '</div>' +
        '<div class="frq-rubric hidden"><span class="rlabel">Rubric</span>' + part.solution + '</div>' +
        '<div class="frq-score hidden"><span class="se-label">I earned</span>' + buttons + '<span class="frq-credit">Not scored yet</span></div>' +
        '</li>';
    }).join("");
    root.innerHTML = '<div class="quiz-two">' +
      '<article class="q-card frq">' +
        '<div class="frq-topline"><p class="q-meta">' + metaHtml(q) + '</p></div>' +
        '<div class="q-context" id="q-context">' + (q.context || "") + '</div>' +
        '<ol class="frq-parts">' + partsHtml + '</ol>' +
      '</article>' +
      '<aside class="frq-aside">' +
        '<section class="tally-card"><h2 class="tally-h">This question</h2>' +
          '<p class="tally-big" id="tally-big"></p><ul class="tally-list" id="tally-list"></ul>' +
          '<p class="tally-note">Score yourself honestly against the rubric, as an AP reader would.</p></section>' +
        '<button type="button" class="btn-reveal" id="reveal-btn">Reveal solutions &amp; self-score</button>' +
        '<button type="button" class="btn-primary hidden" id="next-btn"></button>' +
      '</aside>' +
    '</div>';

    root.querySelectorAll(".pt").forEach(function (b) {
      b.addEventListener("click", function () { scorePart(parseInt(b.getAttribute("data-part"), 10), parseInt(b.getAttribute("data-val"), 10)); });
    });
    $("reveal-btn").addEventListener("click", function () { revealFRQ(); });
    renderTally();
    typeset(root);
  }
  function revealFRQ() {
    state.answered = true;
    var q = state.quiz[state.index];
    $("quiz-main").querySelectorAll(".frq-rubric, .frq-score").forEach(function (n) { n.classList.remove("hidden"); });
    var rb = $("reveal-btn"); rb.disabled = true; rb.textContent = "Solutions shown — score each part";
    state.resultByIndex[state.index] = { earned: 0, max: frqMax(q) };
    var nb = $("next-btn");
    nb.classList.remove("hidden");
    nb.innerHTML = (state.index === state.quiz.length - 1 ? "See results" : "Next question") + ARROW;
    nb.addEventListener("click", nextItem);
    typeset($("quiz-main"));
    renderTally();
  }
  function scorePart(pi, val) {
    state.partEarned[pi] = val;
    var part = $("quiz-main").querySelector('.frq-part[data-pi="' + pi + '"]');
    part.querySelectorAll(".pt").forEach(function (b) { b.classList.toggle("selected", parseInt(b.getAttribute("data-val"), 10) === val); });
    var maxp = state.quiz[state.index].parts[pi].points;
    var credit = part.querySelector(".frq-credit");
    if (val === maxp) credit.className = "frq-credit full", credit.innerHTML = OK_TAG + "Full credit";
    else if (val === 0) credit.className = "frq-credit", credit.textContent = "No credit";
    else credit.className = "frq-credit", credit.textContent = "Partial credit";
    var earned = state.partEarned.reduce(function (s, v) { return s + v; }, 0);
    state.resultByIndex[state.index] = { earned: earned, max: frqMax(state.quiz[state.index]) };
    renderTally();
  }
  function renderTally() {
    var q = state.quiz[state.index];
    var r = state.resultByIndex[state.index];
    var earned = r ? r.earned : 0, total = frqMax(q);
    $("tally-big").innerHTML = earned + ' <span>/ ' + total + ' pts</span>';
    var scored = !!r;
    $("tally-list").innerHTML = q.parts.map(function (part, pi) {
      var got = scored ? state.partEarned[pi] : null;
      return '<li' + (got === null ? ' class="unscored"' : "") + '><span>Part (' + part.label + ')</span><span class="tnum">' + (got === null ? "—" : got) + " / " + part.points + "</span></li>";
    }).join("");
  }

  function nextItem() {
    if (!state.answered) return;
    if (state.index < state.quiz.length - 1) { state.index++; renderItem(); }
    else showResults(false);
  }
  function tally() {
    var earned = 0, max = 0;
    state.quiz.forEach(function (item, i) { max += state.type === "frq" ? frqMax(item) : 1; var r = state.resultByIndex[i]; if (r) earned += r.earned; });
    return { earned: earned, max: max };
  }

  // ---------- record + results ----------
  function recordSet() {
    var any = false;
    var before = { sets: stats.setsCompleted, mcAns: stats.mcAnswered, mcCor: stats.mcCorrect, byTopic: {} };
    for (var i = 0; i < state.quiz.length; i++) {
      var r = state.resultByIndex[i]; if (!r) continue; any = true;
      var item = state.quiz[i];
      if (state.type === "frq") { stats.frqEarned += r.earned; stats.frqPossible += r.max; }
      else {
        stats.mcAnswered += 1; stats.mcCorrect += r.earned;
        var key = item.unit + "||" + item.topic;
        if (!before.byTopic[key]) before.byTopic[key] = stats.byTopic[key] ? { a: stats.byTopic[key].a, c: stats.byTopic[key].c } : { a: 0, c: 0 };
        if (!stats.byTopic[key]) stats.byTopic[key] = { a: 0, c: 0 };
        stats.byTopic[key].a += 1; stats.byTopic[key].c += r.earned;
      }
    }
    if (!any) return before;
    stats.setsCompleted += 1; stats.lastSeen = Date.now(); if (!stats.firstSeen) stats.firstSeen = Date.now();
    saveStats(); renderProgress();
    return before;
  }

  function pct(c, a) { return a ? Math.round((c / a) * 100) : 0; }

  function showResults(timeUp) {
    stopTimer();
    var before = recordSet();
    var t = tally();
    var p = t.max ? Math.round((t.earned / t.max) * 100) : 0;
    var msg = p >= 80 ? "Strong set." : p >= 60 ? "Solid — keep practicing." : "Review the solutions and try again.";
    var frq = state.type === "frq";

    var scoreHtml = frq
      ? t.earned + ' <span class="sep">/</span> ' + t.max + ' <span class="sep" style="font-size:.5em">pts</span>'
      : t.earned + '<span class="sep">/</span>' + t.max;

    // question grid
    var cells = state.quiz.map(function (item, i) {
      var r = state.resultByIndex[i];
      var full = r && r.earned >= (frq ? frqMax(item) : 1);
      var cls = r ? (full ? "ok" : "miss") : "blank";
      var icon = r ? (full ? OK_TAG : MISS_TAG) : "";
      return '<li class="results-cell ' + cls + '" aria-label="Question ' + (i + 1) + '">' + icon + '<span class="cn" aria-hidden="true">' + (i + 1) + "</span></li>";
    }).join("");

    // progress summary cards
    var cardsHtml = "";
    if (frq) {
      cardsHtml = statCard("FRQ points this set", t.earned + ' <span class="delta">/ ' + t.max + "</span>") +
        statCard("Sets completed", stats.setsCompleted + ' <span class="delta">was ' + before.sets + "</span>");
    } else {
      var accNow = pct(stats.mcCorrect, stats.mcAnswered), accBefore = pct(before.mcCor, before.mcAns);
      var up = accNow >= accBefore;
      cardsHtml = statCard("Sets completed", stats.setsCompleted + ' <span class="delta">was ' + before.sets + "</span>") +
        statCard("MC accuracy · " + stats.mcAnswered + " answered", accNow + '% <span class="delta ' + (up ? "up" : "") + '">' + (before.mcAns ? (up ? "↑ from " : "↓ from ") + accBefore + "%" : "first data") + "</span>");
    }

    // topics in this set (MC only)
    var topicsHtml = "";
    if (!frq) {
      var seen = {};
      state.quiz.forEach(function (item) {
        var key = item.unit + "||" + item.topic;
        if (seen[key]) return; seen[key] = true;
        var now = stats.byTopic[key] || { a: 0, c: 0 };
        var p2 = pct(now.c, now.a);
        topicsHtml += '<div class="rs-topic"><div class="rs-topic-top">' +
          '<span class="rs-topic-name"><span class="u">U' + item.unit + "</span>" + esc(item.topic) + "</span>" +
          '<span class="rs-topic-stat"><b>' + now.c + "/" + now.a + " · " + p2 + "%</b></span></div>" +
          '<div class="rs-topic-bar"><span style="width:' + p2 + '%"></span></div></div>';
      });
      if (topicsHtml) topicsHtml = '<section class="rs-topics"><h3>Topics in this set</h3>' + topicsHtml +
        '<p class="pp-note">Saved in this browser. Your weakest topics show first on the home screen.</p></section>';
    }

    var note = timeUp ? '<p class="results-note">⏱ Time expired — unanswered questions counted as 0.</p>' : "";

    $("results-main").innerHTML =
      '<div class="results-hero"><div class="results-hero-in">' +
        '<p class="results-eyebrow">Set complete</p>' +
        '<h1 class="results-score">' + scoreHtml + '</h1>' +
        '<p class="results-msg">' + p + '% · ' + msg + '</p>' + note +
        '<ol class="results-grid" style="grid-template-columns:repeat(' + Math.min(state.quiz.length, 10) + ',minmax(0,1fr))" aria-label="Question by question">' + cells + '</ol>' +
        '<div class="results-actions">' +
          '<button type="button" class="btn-primary" id="retry-btn">New set, same scope' + ARROW + '</button>' +
          '<button type="button" class="btn-ghost" data-back="selection">Change units</button>' +
        '</div>' +
      '</div></div>' +
      '<div class="results-main">' +
        '<h2>Added to your progress</h2>' +
        '<div class="rs-cards">' + cardsHtml + '</div>' + topicsHtml +
        (frq ? '<p class="pp-note">Free-response scores are self-reported against the rubric.</p>' : "") +
      '</div>';

    $("retry-btn").addEventListener("click", retrySameScope);
    $("results-main").querySelectorAll("[data-back]").forEach(function (b) { b.addEventListener("click", function () { goTo("selection-screen"); }); });
    goTo("results-screen");
  }
  function statCard(label, val) { return '<div class="rs-card"><span class="rs-card-label">' + label + '</span><span class="rs-card-val">' + val + '</span></div>'; }

  function retrySameScope() {
    var s = state.lastScope;
    if (!s || s.type !== "selection") return goTo("selection-screen");
    var keySet = {}; s.keys.forEach(function (k) { keySet[k] = true; });
    var pool = filterItems(function (q) { return keySet[topicKey(q.unit, q.topic)]; });
    pool = uniqueByStem(pool);
    if (!pool.length) return goTo("selection-screen");
    startQuiz(pool, state.scopeLabel, s);
  }

  // ---------- progress panel ----------
  function resetProgress() {
    if (!window.confirm("Reset all saved progress on this device? This cannot be undone.")) return;
    stats = defaultStats(); saveStats(); renderProgress();
  }
  function renderProgress() {
    var panel = $("progress-panel");
    if (!stats.mcAnswered && !stats.frqPossible && !stats.setsCompleted) { panel.classList.add("hidden"); return; }
    panel.classList.remove("hidden");
    var acc = pct(stats.mcCorrect, stats.mcAnswered);
    var cards = statTile("Sets completed", stats.setsCompleted, false) +
      statTile("MC accuracy · " + stats.mcAnswered + " answered", stats.mcAnswered ? acc + "%" : "—", false);
    if (stats.frqPossible) cards += statTile("FRQ points earned", stats.frqEarned + ' <span style="font-size:15px;font-weight:500;color:var(--muted)">/ ' + stats.frqPossible + "</span>", true);
    $("pp-stats").innerHTML = cards;

    var rows = Object.keys(stats.byTopic).map(function (k) {
      var tt = stats.byTopic[k], parts = k.split("||");
      return { unit: parseInt(parts[0], 10), topic: parts.slice(1).join("||"), a: tt.a, c: tt.c, pct: pct(tt.c, tt.a) };
    }).sort(function (x, y) { return x.pct - y.pct || y.a - x.a; }).slice(0, 8);
    $("pp-details").innerHTML = rows.length
      ? '<ul class="pp-rows">' + rows.map(function (r) {
          return '<li class="pp-row"><div class="pp-row-top"><span><span class="pp-row-u">U' + r.unit + "</span>" + esc(r.topic) + "</span>" +
            '<span class="pp-row-frac">' + r.c + "/" + r.a + " · " + r.pct + "%</span></div>" +
            '<div class="pp-bar"><div class="pp-bar-fill" style="width:' + r.pct + '%"></div></div></li>';
        }).join("") + "</ul>"
      : '<p class="muted">Answer some multiple-choice questions to see per-topic accuracy.</p>';
  }
  function statTile(label, val, span2) {
    return '<div class="pp-stat' + (span2 ? " span2" : "") + '"><span class="pp-stat-val">' + val + '</span><span class="pp-stat-label">' + label + "</span></div>";
  }

  // ---------- count stepper ----------
  function stepCount(delta) {
    var inp = $("count-filter");
    var max = parseInt(inp.max, 10) || 50;
    var v = Math.max(1, Math.min(max, (parseInt(inp.value, 10) || 10) + delta));
    inp.value = v; updateConfirmBar();
  }

  // ---------- wiring ----------
  function init() {
    renderUnits();
    renderProgress();

    document.querySelectorAll(".seg").forEach(function (seg) {
      var group = seg.getAttribute("data-group");
      seg.querySelectorAll(".seg-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          seg.querySelectorAll(".seg-btn").forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
          btn.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
          var val = btn.getAttribute("data-val");
          if (group === "type") { state.type = val; renderUnits(); }
          else if (group === "course") { state.course = val; renderUnits(); }
          else if (group === "difficulty") { state.difficulty = val; renderUnits(); }
        });
      });
    });

    $("count-dec").addEventListener("click", function () { stepCount(-1); });
    $("count-inc").addEventListener("click", function () { stepCount(1); });
    $("count-filter").addEventListener("change", updateConfirmBar);
    $("count-filter").addEventListener("input", updateConfirmBar);

    $("select-all").addEventListener("click", selectAllUnits);
    $("clear-selection").addEventListener("click", clearSelection);
    $("confirm-start").addEventListener("click", confirmStart);
    $("reset-progress").addEventListener("click", resetProgress);

    document.querySelectorAll("[data-back]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); goTo(b.getAttribute("data-back") + "-screen"); });
    });

    typeset(document.body);
  }
  document.addEventListener("DOMContentLoaded", init);
})();
