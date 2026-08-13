<!-- phoebe header -->

[![Open the live course](https://img.shields.io/badge/%E2%96%B6%20open%20the%20live%20course-1f6feb?style=for-the-badge)](https://phoebefu6.github.io/learn-okr-with-phoebe/)
[![Star this repo](https://img.shields.io/github/stars/phoebefu6/learn-okr-with-phoebe?style=for-the-badge&label=star%20this%20repo&color=444444)](https://github.com/phoebefu6/learn-okr-with-phoebe/stargazers)
[![Free courses](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fphoebefu6.github.io%2Flearn-with-phoebe%2Fstats.json&query=%24.courses_live&label=free%20courses&style=for-the-badge&color=111111)](https://phoebefu6.github.io/learn-with-phoebe/)

### ▶︎ [Open the live course →](https://phoebefu6.github.io/learn-okr-with-phoebe/)

Free, runs in your browser. No install, no login.

> 📚 Part of **[Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)** - free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**

<!-- /phoebe header -->
# Learn OKRs with Phoebe

**How to measure people and teams fairly.** Goals, metrics, and performance done in a way that
builds trust instead of gaming.

**Live course:** https://phoebefu6.github.io/learn-okr-with-phoebe/
**Part of:** [Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)

## What this is

Sixteen 45-minute sessions across two tracks, taught with a running example company - **Cartwheel**,
a mid-size direct-to-consumer home-and-lifestyle retailer. No code anywhere: templates, worked
examples, and decisions.

| Track | For | Sessions | Shape |
|---|---|---|---|
| **Leader / design** (a1-a6) | C-level and upper management | 6 | Design the measurement system: what OKRs are and are not, the metric tree, fairness principles, governing AI, rollout and culture |
| **Manager / run** (b1-b10) | Middle management and team leads | 10 | Run it fairly: write OKRs, choose fair metrics, per-function trees, cadence, conversations, bias, AI, repair, capstone |

Individual employees are welcome to read either track as knowledge-sharing. The landing page has a
curious-employee path and a knowledge mindmap over both tracks.

## The live Fair-Metric Lab

Session b3 hosts an interactive lab (`assets/fairness-lab.js`) that does two real things:

1. **Scores a metric's fairness** from its actual design attributes - outcome versus activity,
   controllability, game-resistance, whether it is holistic - against a transparent rubric.
2. **Runs a Goodhart simulation.** Tie the metric to individual pay and watch the measured number
   race to target while the true outcome it stood for pulls away.

Gameable metrics (tickets closed, lines of code, hours logged) score in the 30s and open a 58 to 61
point gap once pay is attached. Fair metrics (CSAT paired with first-contact resolution, the DORA
pair, add-to-cart on owned pages) score in the mid 80s and hold within 13 to 19 points. The rubric
scoring is real and the simulation is deterministic - it is a teaching model on a worked example,
not a live HR system, and the page says so.

## The thesis

1. **OKRs measure change; KPIs measure health** - and OKR scores must be **decoupled from pay and
   ratings**. This is the fairness linchpin, repeated on every page.
2. **Any single metric will be gamed.** Design metric systems, not single numbers.
3. **Grade the controllable lever; watch the shared outcome together.**
4. **Ratings measure the rater more than the ratee** - roughly 53 to 62 percent of rating variance
   traces to the individual rater (Scullen, Mount & Goff, 2000).
5. **Separate steering, development, and evaluation.** Mixing them corrupts the data and the trust.
6. **AI assists, never judges.** Surveillance is not measurement.
7. **Continuous cadence beats the annual review.**

## Repository layout

```
index.html                  landing page: tracks, paths, difficulty legend, knowledge mindmap
courses/a1-a6.html          leader / design track
courses/b1-b10.html         manager / run track
assets/style.css            editorial-bold theme, indigo #4338CA + gold #D97706
assets/app.js               journey strip, quizzes, accordions, zoom, reveal, progress
assets/mindmap.js           radial course map on the landing page
assets/fairness-lab.js      the Fair-Metric Lab and Goodhart simulator (used by b3)
materials/official-course-map.md    sources, per-session coverage, regulatory re-verification log
materials/presenter-notes-*.md      per-session instructor notes: preflight, run-of-show, cuts
```

## Running it locally

No build step - static HTML, CSS and JavaScript.

```bash
python3 -m http.server 8899
```

Then open http://localhost:8899/.

## Teaching it

Every session is built for a 45-minute slot: 3 minutes welcome, roughly 15 on concepts, roughly 22
hands-on, 5 for questions. Concept cards are tagged **Live** (presented in the session) or
**Self-study** (read afterwards), so the full depth is on the page without overrunning the slot.

`materials/presenter-notes-*.md` holds one file per session with what to prepare, a minute-by-minute
run of show, what to watch for in the room, what to cut if you are running long, and the beat never
to cut.

## Honesty rails

- An OKR score is for steering and learning, never a direct input to pay.
- No single-number verdicts: every metric gets target, trend, and context.
- **Cartwheel is a fictional teaching company** and its benchmarks are illustrative, not guarantees.
- The Google conventions (the 0-1 scale, the roughly 0.7 sweet spot, quarterly cadence) are norms to
  adapt, not universal law.
- Regulations (EU AI Act, GDPR, NYC Local Law 144, UK data-protection duties) are summarised for
  awareness, **not legal advice**, and are dated. See the re-verification log in the course map.
- Deliberately out of scope: compensation design, HRIS tool tutorials, and the broad
  performance-review craft.

## Sources

Taught from the goal-setting and fair-measurement canon: Grove's *High Output Management*, Doerr's
*Measure What Matters* and Google re:Work, Goodhart's and Campbell's laws, surrogation research
(Choi, Hecht & Tayler), rater-effect research (Scullen, Mount & Goff 2000), organizational justice
(Greenberg 1987), review-language research (Correll & Simard), Buckingham & Goodall on continuous
performance management, Edmondson on psychological safety, Kaplan & Norton's Balanced Scorecard,
DORA metrics, and the e-commerce metric canon. Full citations and per-session coverage tables are in
`materials/official-course-map.md`.

---

by Phoebe Fu
