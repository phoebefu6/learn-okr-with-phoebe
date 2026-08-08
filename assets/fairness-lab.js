/* fairness-lab.js - a REAL Fair-Metric Lab + Goodhart simulator (learn-okr-with-phoebe).
   Not a scripted animation: it scores a metric's fairness from its actual attributes
   (outcome-vs-output, controllability, game-resistance, holistic) with a transparent rubric,
   then runs a deterministic Goodhart simulation - tie the metric to individual pay and watch
   the MEASURED number climb while the TRUE outcome it stands for diverges (surrogation). Fair
   metrics survive being a target; gameable ones collapse. Deterministic. A teaching model on a
   worked Cartwheel example, not a live HR system. */
(function () {
  var host = document.getElementById("fairness-lab");
  if (!host) return;

  // Each Cartwheel metric with its real design attributes.
  var METRICS = [
    { id: "tickets", role: "Customer Support", name: "Tickets closed per agent",
      type: "output", ctrl: 0.7, game: 0.9, holistic: false,
      gaming: "Agents close-and-reopen tickets and rush customers off chat to bump the count.",
      trueName: "customer satisfaction" },
    { id: "csat", role: "Customer Support", name: "CSAT + first-contact resolution",
      type: "outcome", ctrl: 0.7, game: 0.25, holistic: true,
      gaming: "Hard to fake two paired outcomes at once; quality and speed keep each other honest.",
      trueName: "customer satisfaction" },
    { id: "loc", role: "Engineering", name: "Lines of code per engineer",
      type: "output", ctrl: 0.6, game: 0.95, holistic: false,
      gaming: "Engineers pad code, avoid deleting, and split simple changes into many commits.",
      trueName: "working, valuable software" },
    { id: "dora", role: "Engineering", name: "DORA: deploy freq + change-failure rate",
      type: "system", ctrl: 0.7, game: 0.2, holistic: true,
      gaming: "You cannot juice deploy frequency without change-failure rate catching you.",
      trueName: "reliable delivery" },
    { id: "hours", role: "Any team", name: "Hours logged / active screen time",
      type: "output", ctrl: 0.5, game: 0.95, holistic: false,
      gaming: "Mouse jigglers, presence theater, and busywork replace real output.",
      trueName: "actual contribution" },
    { id: "atc", role: "Product", name: "Add-to-cart rate on owned pages",
      type: "outcome", ctrl: 0.85, game: 0.3, holistic: true,
      gaming: "A controllable outcome on pages the team actually owns; little room to fake.",
      trueName: "real purchase intent" }
  ];
  var current = "tickets", tied = false;

  function fairness(m) {
    var o = (m.type === "output") ? 0.3 : 1.0;
    return Math.round(100 * (0.30 * o + 0.28 * m.ctrl + 0.28 * (1 - m.game) + 0.14 * (m.holistic ? 1 : 0.35)));
  }
  function series(m) {
    var base = 40, tgt = 80, N = 12, gb = tied ? m.game * 0.45 : 0, gapMax = tied ? m.game * (tgt - base) * 1.15 : 0;
    var meas = [], tru = [];
    for (var i = 0; i < N; i++) {
      var f = i / (N - 1);
      meas.push(Math.min(100, base + (tgt - base) * f * (1 + gb)));
      tru.push(Math.max(0, base + (tgt - base) * f - gapMax * f));
    }
    return { meas: meas, tru: tru, N: N };
  }

  host.innerHTML =
    '<div class="fal-shell">' +
      '<div class="fal-top">' +
        '<div class="fal-ctrl"><span class="fal-clabel">Pick a metric to grade</span><div class="fal-metrics"></div></div>' +
      '</div>' +
      '<div class="fal-grade">' +
        '<div class="fal-scorebox"><span class="fal-slabel">Fairness score</span><span class="fal-score" id="fal-score">-</span><span class="fal-verdict" id="fal-verdict"></span></div>' +
        '<div class="fal-rubric" id="fal-rubric"></div>' +
      '</div>' +
      '<div class="fal-sim">' +
        '<div class="fal-simhead"><span class="fal-simtitle">Goodhart simulator</span>' +
          '<button type="button" class="fal-toggle" id="fal-toggle">Tie this metric to individual pay: <b>off</b></button></div>' +
        '<div class="fal-chart"><svg id="fal-svg" viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The measured metric versus the true outcome over twelve weeks"></svg></div>' +
        '<div class="fal-legend"><span><i class="fal-sw fal-meas"></i>What you measure</span><span><i class="fal-sw fal-true"></i>The true outcome it stands for</span></div>' +
        '<div class="fal-say" id="fal-say"></div>' +
      '</div>' +
      '<p class="fal-rail">Real rubric scoring + a deterministic Goodhart model on a worked Cartwheel example, not a live HR system. The lesson (Goodhart\'s Law): when a measure becomes a target - especially one tied to pay - people optimise the number, and a gameable number pulls away from the outcome it was meant to stand for.</p>' +
    '</div>';

  var mWrap = host.querySelector(".fal-metrics");
  METRICS.forEach(function (m) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "fal-btn"; b.setAttribute("data-m", m.id);
    b.innerHTML = m.name + '<span class="fal-role">' + m.role + '</span>';
    b.addEventListener("click", function () { current = m.id; render(); });
    mWrap.appendChild(b);
  });
  host.querySelector("#fal-toggle").addEventListener("click", function () { tied = !tied; render(); });

  var PAD_L = 40, PAD_R = 12, PAD_T = 14, PAD_B = 30, W = 780, HT = 240;
  var plotW = W - PAD_L - PAD_R, plotH = HT - PAD_T - PAD_B;

  function render() {
    var m = METRICS.filter(function (x) { return x.id === current; })[0];
    var f = fairness(m);
    host.querySelectorAll(".fal-metrics .fal-btn").forEach(function (b) { b.classList.toggle("fal-on", b.getAttribute("data-m") === current); });

    var scoreEl = host.querySelector("#fal-score");
    scoreEl.textContent = f;
    scoreEl.className = "fal-score" + (f >= 70 ? " fal-good" : (f < 50 ? " fal-bad" : ""));
    host.querySelector("#fal-verdict").textContent = f >= 70 ? "Fair to grade on" : (f < 50 ? "Do not grade people on this" : "Use with care");

    // rubric chips
    var chips = [
      { ok: m.type !== "output", label: m.type === "output" ? "Measures activity (output)" : "Measures a result (outcome)" },
      { ok: m.ctrl >= 0.65, label: m.ctrl >= 0.65 ? "The person controls it" : "Not fully in their control" },
      { ok: m.game <= 0.4, label: m.game <= 0.4 ? "Hard to game" : "Easy to game" },
      { ok: m.holistic, label: m.holistic ? "Balanced / holistic" : "Single narrow number" }
    ];
    host.querySelector("#fal-rubric").innerHTML = chips.map(function (c) {
      return '<span class="fal-chip ' + (c.ok ? "fal-yes" : "fal-no") + '">' + (c.ok ? "✓" : "✗") + " " + c.label + '</span>';
    }).join("");

    host.querySelector("#fal-toggle").innerHTML = "Tie this metric to individual pay: <b>" + (tied ? "on" : "off") + "</b>";
    host.querySelector("#fal-toggle").classList.toggle("fal-ton", tied);

    // chart
    var s = series(m);
    function X(i) { return PAD_L + (i / (s.N - 1)) * plotW; }
    function Y(v) { return PAD_T + (1 - v / 100) * plotH; }
    var svg = "";
    svg += '<line x1="' + PAD_L + '" y1="' + (PAD_T + plotH) + '" x2="' + (W - PAD_R) + '" y2="' + (PAD_T + plotH) + '" stroke="#D1D5DB"/>';
    svg += '<line x1="' + PAD_L + '" y1="' + PAD_T + '" x2="' + PAD_L + '" y2="' + (PAD_T + plotH) + '" stroke="#D1D5DB"/>';
    [0, 50, 100].forEach(function (gv) { var gy = Y(gv); svg += '<line x1="' + PAD_L + '" y1="' + gy + '" x2="' + (W - PAD_R) + '" y2="' + gy + '" stroke="#E5E7EB"/><text x="' + (PAD_L - 6) + '" y="' + (gy + 4) + '" text-anchor="end" style="font:400 10px Inter,sans-serif" fill="#6B7280">' + gv + '</text>'; });
    svg += '<text x="' + PAD_L + '" y="' + (HT - 8) + '" style="font:400 10px Inter,sans-serif" fill="#6B7280">week 1</text>';
    svg += '<text x="' + (W - PAD_R) + '" y="' + (HT - 8) + '" text-anchor="end" style="font:400 10px Inter,sans-serif" fill="#6B7280">week 12</text>';
    var tp = "", mp = "";
    for (var i = 0; i < s.N; i++) { mp += X(i) + "," + Y(s.meas[i]) + " "; tp += X(i) + "," + Y(s.tru[i]) + " "; }
    svg += '<polyline points="' + tp.trim() + '" fill="none" stroke="#4338CA" stroke-width="2.5"/>';
    svg += '<polyline points="' + mp.trim() + '" fill="none" stroke="#D97706" stroke-width="2.5" stroke-dasharray="' + (tied ? "0" : "5 4") + '"/>';
    var gap = Math.round(s.meas[s.N - 1] - s.tru[s.N - 1]);
    if (tied && gap > 6) {
      var gx = X(s.N - 1) - 2;
      svg += '<line x1="' + gx + '" y1="' + Y(s.meas[s.N - 1]) + '" x2="' + gx + '" y2="' + Y(s.tru[s.N - 1]) + '" stroke="#991B1B" stroke-width="1.5" stroke-dasharray="3 3"/>';
      svg += '<text x="' + (gx - 6) + '" y="' + ((Y(s.meas[s.N - 1]) + Y(s.tru[s.N - 1])) / 2) + '" text-anchor="end" style="font:700 11px Inter,sans-serif" fill="#991B1B">gap ' + gap + '</text>';
    }
    document.getElementById("fal-svg").innerHTML = svg;

    var say = document.getElementById("fal-say");
    if (!tied) {
      say.className = "fal-say";
      say.innerHTML = "<b>Not tied to pay.</b> No gaming pressure, so what you measure and the real outcome move together. This is how OKRs stay honest: keep the score for steering, not for compensation.";
    } else if (gap > 30) {
      say.className = "fal-say fal-alarm";
      say.innerHTML = "<b>Surrogation.</b> The number raced to target while <em>" + m.trueName + "</em> collapsed. " + m.gaming + " A gameable metric tied to pay measures the gaming, not the goal.";
    } else {
      say.className = "fal-say fal-okmsg";
      say.innerHTML = "<b>It held up.</b> Even tied to pay, measured and real stayed close. " + m.gaming + " A fair metric survives becoming a target.";
    }
  }

  render();
})();
