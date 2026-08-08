# SHARED BUILD SPEC - read this + `official-course-map.md` (thesis + every citation) + `courses/b1-foundations.html` before writing.

You are building ONE or TWO session pages for `learn-okr-with-phoebe`, a NO-CODE course on OKRs and FAIR performance measurement for an audience from C-level to employees. `courses/b1-foundations.html` is the canonical template - copy its EXACT structure, class names, section order, and component patterns. Match its tone, airiness, and length (~330-360 lines/page). Write full, finished pages - never a stub. `official-course-map.md` has the course thesis and the full cited source list - use it.

## IRON RULES (violating = rework)
- **NEVER an em dash or en dash. Hyphen ( - ) only.** Grep your own output before finishing.
- Attribution in the footer is exactly **"by Phoebe Fu"**. Never "built with Claude", never a full legal name.
- Editorial-bold template. Reuse ONLY classes already in b1 (`section`, `section-kicker`, `klabel`, `lede`, `callout win|tip|example`, `ex-pill`, `card` accordions with `mode live|self`, `steps`/`step`, `clean` table, `covered`/`covered-row`, `quiz-q`, `cheat`, `chip`, `tag`, `agenda a1..a4`, `legend`/`pill`). Do NOT invent CSS.
- **THIS IS A NO-CODE COURSE. There is NO `prompt-box` and NO Python anywhere.** Worked examples use `steps`/`step`, `clean` tables, and `callout` boxes (see b1's two "Worked example" sections). The peach pill reads "★ Worked example (Cartwheel)".
- Body copy airy, not wordy. Every major concept gets an inline SVG diagram - "information lives in design, not paragraphs".
- Asset links use `?v=1`.

## HEAD + NAV (exact - the journey strip regex keys on the crumb text)
- `<title>`: `Leader session N · <short> - learn OKRs with phoebe` (or `Manager session N · ...`).
- Toolbar crumb MUST read exactly `Leader session N of 6` (leader track) or `Manager session N of 10` (manager track). The JS keys on these literal strings.
- Eyebrow: `Learn OKRs with Phoebe · Leader track · Session N of 6` (or `Manager track · Session N of 10`).
- Chip row: difficulty chip `🟢/🟡/🟠/🔴 Leader track` (or `Manager track`); then audience chips.
  - Leader audience chips: `Leaders: C-level · upper mgmt` and `No code · concepts + decisions`.
  - Manager audience chips: `Managers: middle mgmt · team leads` and `No code · templates + worked examples`.
- Footer line 1: `<span>Leader session N of 6 · learn-okr-with-phoebe · by Phoebe Fu &nbsp;·&nbsp; 📚 <a href="https://phoebefu6.github.io/learn-with-phoebe/">Learn with Phoebe ↗</a></span>` (Manager: `... of 10 ...`). Footer line 2: second span with `← All sessions` (or prev link) + the correct Next link.
- Scripts: end body with `<script src="../assets/app.js?v=1"></script>` only. NONE of your pages embed the Fair-Metric Lab (that is b3 only).

## LEADER vs MANAGER content shape (both NO code)
- **Leader (a1-a6): C-level + upper management.** Design-the-system voice: strategy, decisions, governance, culture. "Demos" are walk-through thought exercises. Heavy SVG explainers + real-world `callout example`.
- **Manager (b2, b4-b10): middle management + team leads.** Run-it voice: practical, template-driven, worked on the **Cartwheel** company (a mid-size DTC online retailer). Two "Worked example (Cartwheel)" sections per page using `steps` + `clean` tables + `callout`, exactly like b1 - NOT code.
- Both keep: intro, 2 concept parts each with an SVG, 2 worked-example/walk-through sections, homework, 3-question quiz, sources-covered rows, cheat sheet.

## THE THESIS (carry through every page - from the research)
1. OKRs measure change; KPIs measure health - and OKR scores must be **DECOUPLED from pay/ratings** (Grove, Doerr, Google re:Work). The fairness linchpin. Repeat it.
2. Any single metric gets gamed (Goodhart's Law, Campbell's Law, surrogation). Design metric SYSTEMS; pair quantity with quality.
3. Grade the controllable lever; watch the shared outcome. The e-commerce metric tree (Revenue = Sessions x Conversion x AOV) decomposes so each leaf has an owner. The attribution problem forces shared ownership.
4. Ratings measure the rater more than the ratee (idiosyncratic rater effect ~50-60% of variance, Scullen & Mount 2000). Bias hides in feedback language (women get ~2x more personality-based feedback). Procedural justice (Greenberg) matters as much as outcome.
5. Separate the three purposes: steering / development / evaluation. Mixing corrupts data + trust.
6. AI assists, never judges. Surveillance is not measurement (Microsoft Productivity Score, Amazon warehouse). Legal red lines: EU AI Act (worker mgmt = high-risk), GDPR Art 22 (human-in-the-loop), NYC LL144 (bias audit).
7. Continuous cadence beats the annual review (Grove task-relevant maturity; Adobe/Deloitte/Gallup; Edmondson psychological safety).

## SVG PALETTE (indigo + gold on charcoal) - use these hex ONLY
- Indigo: `#312E81` (deep), `#4338CA` (primary), `#818CF8` (mid), `#C7D2FE` (soft), `#EEF2FF` (tint).
- Gold: `#D97706` (primary/flagship), `#92400E` (ink), `#FEF3C7` (tint).
- Charcoal/gray: `#1F2937` (ink), `#374151` (dark), `#4B5563` (structure), `#6B7280` (muted), `#9CA3AF` (faint), `#D1D5DB` (arrows/axis), `#E5E7EB` (grid), `#F9FAFB` (tint bg).
- Text: `#FFFFFF` on dark fills; `#1F2937` ink on light fills; `#6B7280` muted; `#E0E7FF` or `#C7D2FE` sub-text on dark indigo; `#FEF3C7` sub-text on gold.
- Emphasis: indigo rect `#EEF2FF` stroke `#4338CA`, OR gold rect `#FEF3C7` stroke `#D97706`; the little legend square `#4338CA`; warm-note text `#312E81` or `#92400E`.
- Universal warning (keep): `#FEF2F2` fill / `#FCA5A5` / `#991B1B` text - use for the "do not do this" / gaming boxes.
- Every `<figure class="zoomable">` wraps one `<svg viewBox="0 0 880 H">` with a `<style>` scoping UNIQUE class prefixes per page (e.g. `a4j`, `b7r`) so they never collide, plus a `<figcaption>🔍 Click to zoom - ...</figcaption>`.

## SVG TEXT-FIT (the #1 fan-out bug)
- Inter font. Rough width ≈ 0.62 × font-px × char-count at 700 weight, 0.55× at 400. Keep every string inside its rect AND inside the 880 viewBox width. Long label -> shorten words or widen the rect.
- A bottom note must sit BELOW the last box row with >= 24px clearance; if it would collide, grow the viewBox height. Prefer starting bottom notes at x=24 (left aligned). Do not rotate text.
- **Watch apostrophes:** "Goodhart's" etc are fine in HTML/SVG text; the no-code rule means you write NO JS, so no escaping needed - but never introduce a smart/curly quote or a dash.

## HONESTY RAILS (weave in, don't dump)
- Decouple OKR scores from pay. No single-number verdicts (target + trend + context). Grade what a person controls. AI augments, does not decide. Bias is real and measurable. Cartwheel is fictional; benchmarks illustrative; regulations summarized for awareness, not legal advice.

## PER-PAGE difficulty colours
a1🟢 a2🟢 a3🟡 a4🟡 a5🟠 a6🟠 · b2🟢 b4🟡 b5🟡 b6🟠 b7🟠 b8🟠 b9🟡 b10🔴
