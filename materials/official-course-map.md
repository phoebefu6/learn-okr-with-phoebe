# Official course map - learn-okr-with-phoebe

**Course:** OKRs and fair performance measurement - how to measure people and teams well, with AI as a helper, using an e-commerce company as the worked example.
**Scope:** How to set goals (OKRs) and measure performance FAIRLY - the metric tree, controllable levers, the attribution problem, the biases that corrupt ratings, the way single metrics get gamed (Goodhart), how AI can help without becoming surveillance, and the monitoring cadence + culture that make measurement build trust instead of fear. Deliberately focused on **performance monitoring and fair measurement**, not tech.
**Arc:** Topic-session, two-track, with a running e-commerce company **"Cartwheel"** (a mid-size DTC home-and-lifestyle retailer) threaded through the practitioner demos.
**Audience:** C-level + upper management (design the system) -> the **Leader / Design track (a1-a6)**; middle management + team leads (run it fairly) -> the **Manager / Practitioner track (b1-b10)**; individual employees read either as knowledge-sharing (curious-follower path).
**Bucket:** `lead` (Leadership & Management). Palette: indigo `#4338CA` + gold `#D97706` on charcoal.
**Sibling (distinct, cross-link):** `learn-performance-management-with-phoebe` covers reviews/feedback/development broadly; THIS course is OKRs + metric design + fair measurement + AI + the e-commerce metric tree. Do not overlap; cross-reference.
**Coverage bar:** ~80% of the mapped sources per session; frameworks + regulations stay official (cited).
**Build mode:** built direct from the 5 deep-research briefs (verified sources below).

## The course thesis (carry through every session)
1. **OKRs measure change; KPIs measure health** - and OKR scores must be **decoupled from pay and ratings**. This is the fairness linchpin.
2. **Any single metric will be gamed** (Goodhart's Law, Campbell's Law, surrogation). Design metric SYSTEMS, not single numbers.
3. **Grade the controllable lever; watch the shared outcome.** The e-commerce metric tree (Revenue = Sessions x Conversion Rate x AOV) decomposes so each leaf has an owner. The attribution problem is a feature that forces shared ownership.
4. **Ratings measure the rater more than the ratee** (idiosyncratic rater effect ~50-60% of variance). Bias is baked into review language. Process fairness (procedural justice) beats outcome fairness.
5. **Separate the three muddled purposes:** steering (on track?), development (how do I grow this person?), evaluation/reward (rating, pay). Mixing them corrupts the data and the trust.
6. **AI assists, never judges.** Surveillance is not measurement. Human-in-the-loop is a legal red line (GDPR Art 22; EU AI Act high-risk; NYC LL144 bias audit).
7. **Continuous cadence beats the annual review** (Grove's task-relevant maturity; Adobe/Deloitte/Gallup). Monitoring should build psychological safety, not fear.

## Source universe (verified public sources, with citations)

| Source | What it covers | Maps to |
|---|---|---|
| **Andy Grove, "High Output Management" (1983)** - OKR origin (iMBO), task-relevant maturity, 1:1 cadence | OKRs, monitoring cadence | a1, a2, a6, b2, b5 |
| **John Doerr, "Measure What Matters" (2018)**; Google re:Work "Set goals with OKRs" (rework.withgoogle.com) | OKR anatomy, scoring 0-1 / ~0.7, committed vs aspirational, CFRs, decouple from comp | a1, a2, a4, b2, b6 |
| **What Matters (whatmatters.com)** - "Should you connect OKRs and compensation? (No)", grading OKRs, KPIs vs OKRs | the decoupling thesis | a4, b2, b6 |
| **HBR, "Use OKRs to Set Goals for Teams, Not Individuals" (2020)** | team vs individual OKRs; do not wire to appraisal | a3, b1, b4 |
| **Goodhart's Law / Campbell's Law (Campbell 1979)**; surrogation (Choi, Hecht & Tayler, "Lost in Translation", The Accounting Review) | metric gaming, surrogation, cobra effect | a1, b3, b9 |
| **Scullen, Mount & Goff (2000), "Understanding the Latent Structure of Job Performance Ratings," J. Applied Psychology** | idiosyncratic rater effect (62%/53% of variance is the rater) | a4, b7 |
| **Correll & Simard, HBR (2016) "Vague Feedback Is Holding Women Back"; Textio review-bias report** | gender/race bias in feedback language | a4, b7, b8 |
| **Greenberg (1987), "A Taxonomy of Organizational Justice Theories," Academy of Management Review** | procedural / distributive / interactional justice | a4, b6 |
| **Buckingham & Goodall, HBR (2015) "Reinventing Performance Management"** (Deloitte); Adobe "Check-in" (2012); Gallup on frequent feedback | continuous PM, annual-review reform | a6, b5, b6 |
| **Amy Edmondson - psychological safety** (The Fearless Organization) | safety vs surveillance in monitoring | a6, b5 |
| **Kaplan & Norton, "The Balanced Scorecard," HBR (1992)** | balancing financial/customer/process/learning | a3, b5 |
| **EU AI Act, Annex III sec.4 (employment/worker mgmt = high-risk)**; **GDPR Article 22** (automated decisions, human intervention); **NYC Local Law 144** (bias audits of automated employment tools); California SB 7; Illinois BIPA | AI governance for worker measurement | a5, b8 |
| **Microsoft Productivity Score backlash (2020, Forbes/GeekWire); Amazon warehouse "time off task" auto-termination (MIT Tech Review)** | surveillance cautionary cases | a5, b8 |
| **E-commerce metric canon** - metric tree (Revenue = Sessions x CR x AOV, RPV); AARRR "Pirate Metrics" (Dave McClure 2007); North Star Metric; LTV:CAC >= 3:1; **DORA metrics (dora.dev)** for engineering | the Cartwheel worked examples | a2, a3, b1, b4 |

## Per-session coverage

### Leader / Design track (a1-a6) - C-level + upper management, no code
| # | Session | Primary sources | Coverage |
|---|---|---|---|
| a1 | Why measure, and the trap | Goodhart/Campbell, Grove, Doerr | ✓ the promise + peril of measuring people; measure what matters |
| a2 | OKRs vs KPIs vs metrics | Doerr, re:Work, e-comm tree | ✓ OKR anatomy; change vs health; the Cartwheel metric tree |
| a3 | Controllable levers + attribution | HBR teams-not-individuals, DORA, Balanced Scorecard | ✓ decompose to owners; grade controllable, watch shared |
| a4 | Fair-measurement principles | Scullen/Mount, Greenberg, Textio, Doerr | ✓ rater effect, bias, justice, decouple OKRs from pay |
| a5 | AI in measurement | EU AI Act, GDPR 22, NYC LL144, MS/Amazon | ✓ what AI can/can't do; surveillance vs support; governance |
| a6 | Rollout, cadence & culture | Grove TRM, Adobe/Deloitte/Gallup, Edmondson | ◐ cadence, psychological safety, three purposes, maturity roadmap |

### Manager / Practitioner track (b1-b10) - middle mgmt + team leads, worked examples on Cartwheel (NO code)
| # | Session | Primary sources | Coverage |
|---|---|---|---|
| b1 | Foundations + the fair-metric checklist | Grove, Doerr, e-comm canon | ✓ the measurement stack, outcome vs output, Cartwheel intro |
| b2 | Writing good OKRs | Doerr, re:Work | ✓ objective + KRs, committed vs stretch, scoring, ~0.7, rewrite output->outcome |
| b3 | Choosing fair metrics | Goodhart, controllability | ✓ fair-metric checklist + `fairness-lab.js` Goodhart simulator |
| b4 | The metric tree per function | e-comm canon, DORA, HBR | ✓ Growth/Product/Eng/Ops/CX/Merch/Data OKRs + controllable sub-levers |
| b5 | Monitoring cadence + dashboards | Grove TRM, Balanced Scorecard | ✓ 1:1s, weekly/monthly/quarterly, target+trend+context, RAG |
| b6 | Fair performance conversations | Buckingham/Goodall, Doerr CFRs, Greenberg | ✓ continuous check-ins, separate steering/development/reward |
| b7 | Beating the bias | Scullen/Mount, Textio, calibration | ✓ rater effects, review-language bias, fair calibration, self-audit |
| b8 | AI-assisted, responsibly | EU AI Act, GDPR 22, Textio, NYC LL144 | ✓ summarize/de-bias/draft; guardrails, transparency, contestability |
| b9 | When metrics go wrong | Goodhart, surrogation, vanity metrics | ✓ gaming, single-number verdicts; diagnose + fix a broken metric |
| b10 | Build your measurement system (capstone) | all | ✓ a full fair OKR + monitoring system for a Cartwheel team |

## Hard rails / honesty

- **Decouple OKR scores from pay and ratings.** State it repeatedly - it is the fairness linchpin. OKRs are goal-setting + alignment, NOT appraisal.
- **No single-number verdicts.** Every metric needs target + trend + context; balance quality/quantity/behavior.
- **Grade what a person controls.** Do not punish people for uncontrollable factors or shared outcomes.
- **AI augments, it does not decide.** "Solely automated" evaluation is a legal red line (GDPR 22); worker-management AI is high-risk (EU AI Act). Surveillance is not measurement.
- **Bias is real and measurable.** ~50-60% of rating variance is the rater; review language is skewed by gender/race. Audit it.
- **Cartwheel is a fictional teaching company.** Benchmarks cited are illustrative ranges, not guarantees.
- The "~0.7 sweet spot" and quarterly cadence are Google-specific norms to ADAPT, not universal law - say so.

## Not covered by design (say so honestly)
- Compensation design / pay-band mechanics (a separate discipline; we only insist OKRs stay decoupled from it).
- Legal advice - regulations (EU AI Act, GDPR, NYC LL144) are summarized for awareness; consult counsel for compliance.
- HRIS / specific vendor tool tutorials (we teach principles, not products).
- Deep statistics of psychometrics beyond the rater-variance headline.
- The broad performance-review/feedback craft owned by the sibling `learn-performance-management-with-phoebe`.

**Re-verify before delivery:** EU AI Act enforcement dates + NYC LL144 details (regulation moves); the Adobe/Deloitte stats (quote as reported).
