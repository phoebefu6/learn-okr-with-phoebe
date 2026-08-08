# Presenter notes - Manager session 4: The metric tree per function

Audience: middle management and team leads. Longest worked example in the track (14 minutes) and
the session most likely to trigger cross-team argument. That argument is productive - budget for it.

## Before the session
- Know which functions are actually in the room. If there are no engineers, keep DORA short; if
  the room is half engineers, expect the lines-of-code discussion to expand.
- Have the DORA four straight: deploy frequency and lead time for speed, change-failure rate and
  time to restore for stability. Cite dora.dev.
- Be ready for the AI-inflation point on lines of code - it is newly topical and someone will
  raise it. It strengthens the argument: an activity count gets easier to inflate every year.
- Re-read a3 if you also teach the leader track. This is its practitioner twin, and consistency
  between the two matters if attendees compare notes.

## Timing (45 min)
- 0-3: Recap - from one fair metric to a fair metric per team
- 3-20: Part 1 - decompose the North Star, hand out the branches; controllability as the test
- 20-28: Part 2 - DORA for Engineering, joint ownership for the North Star
- 28-40: Worked example 1 - a fair OKR for every Cartwheel function
- 40-43: Worked example 2 - swap lines of code for the DORA four
- 43-45: Q&A

## Worked-example run-of-show
- Worked example 1: assign functions around the room rather than presenting all seven. Each group
  writes an Objective on its branch, two or three key results, and the one-line controllability
  note on why this team and not another. The controllability line is the graded part.
- Expect a fight over who owns conversion. Resolve it the same way every time: split into
  controllable slices, keep the top number jointly watched.
- Worked example 2: score old and new against the six-point checklist from b3. The DORA point is
  that it is self-checking - you cannot juice deploy frequency without change-failure rate
  catching you. That is pairing, applied to engineering.

## Watch for
- Teams choosing the branch they already report rather than the one they control. Ask what they
  can move without waiting on anyone.
- Data or platform teams claiming they control nothing measurable. Push toward service-level
  outcomes their consumers feel.
- Someone grading a team on the North Star because it is the number leadership asks about. Watched
  together, graded to nobody.
- DORA being adopted as four individual targets per engineer. It is a team system, not a scorecard.

## Cuts if long
- Reduce Worked example 1 to four functions instead of seven.
- Worked example 2 compresses to naming the swap and the reason.
- Never cut the controllability note in Worked example 1. Writing down why THIS team owns the
  branch is what makes the OKR fair rather than merely assigned.
