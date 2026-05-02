# Amazon Leadership Principles — Focus Guide

This file covers the **six focus LPs** for your Amazon interview loop, plus
**Ownership** and **Deliver Results** which appear in every DC-Technician loop.
For each LP you'll find:

- The official definition (simplified)
- What interviewers are actually scoring
- Red flags to avoid
- A sample question bank with strong-answer bullets

---

## How Interviewers Score LP Answers

Amazon uses a **Strength-of-Signal** rubric. Interviewers mark each story as:

| Signal | Meaning |
|---|---|
| **Strong Hire** | Clear ownership, quantified outcome, genuine learning, no ambiguity about YOUR role |
| **Hire** | Solid story, some metrics, logical reasoning |
| **No Hire** | Vague ("we did…"), no metrics, outcome unclear, or story contradicts the LP |
| **Strong No Hire** | Dismissive, blame-shifting, no evidence of reflection |

**The single biggest differentiator:** specificity. Metric + timeframe +
your exact action = strong signal.

---

## LP 1 — Bias for Action

### Definition
Speed matters. Many decisions and actions are reversible and do not need
extensive study. We value calculated risk-taking over prolonged analysis.

### What Interviewers Score
- Did you act without waiting for permission?
- Did you correctly assess reversibility vs. irreversibility before deciding how
  much analysis was appropriate?
- Did you achieve something concrete within a tight timeframe?
- Did you communicate the risk/trade-off proactively?

### Red Flags
- "I waited for my manager to approve before doing anything"
- Long story with no action taken by YOU
- Confusing "Bias for Action" with recklessness (no risk assessment)

### Sample Questions
1. Tell me about a time when you took action without having all the information.
2. Tell me about a situation where you gathered information and responded
   immediately. What was the outcome?
3. Give me an example of when you had to make a decision quickly. How did you
   decide what the right action was?
4. Describe a time you went above and beyond for a customer. Why did you do it?
5. Tell me about a time you saw a problem and fixed it proactively.

### Strong-Answer Bullets (Login/MFA Story)
- Identified the pattern *before* being asked to fix it (proactive, not reactive)
- Used data (ServiceNow ticket analysis) to confirm the root cause
- Deployed self-service guides and Slack channel *within the existing sprint*
  without waiting for a formal project approval
- Result: **~40% reduction in login-related tickets** over two months
- Follow-up: "I could have requested a full user-education program, but that
  would have taken weeks. The guides and Slack channel were reversible, low-risk
  actions I could take immediately."

---

## LP 2 — Learn & Be Curious

### Definition
Leaders are never done learning and always seek to improve themselves. They are
curious about new possibilities and act to explore them.

### What Interviewers Score
- Evidence of self-directed learning (not just formal training)
- Applying a new skill or technology in a context where it wasn't required
- Changing a belief or method based on new evidence
- Asking good questions rather than assuming

### Red Flags
- Learning only because a manager required it
- No evidence the learning changed your behaviour or outcome
- Confusing curiosity with "I read a blog post"

### Sample Questions
1. Tell me about a time you taught yourself a skill to solve a problem.
2. Describe a situation where you discovered your original idea was wrong.
   What did you learn?
3. Tell me about a time you pursued learning outside of your normal role.
4. Give me an example of when new knowledge changed your approach to a problem.
5. Tell me about a time you failed and what you learned from it.

### Strong-Answer Bullets (Learning C#/.NET as GTA / BTech ML Pivot)
- **GTA story:** Identified C#/.NET gap on first week; used Microsoft Learn +
  side projects evenings/weekends; was able to grade assignments accurately
  within [X weeks] — no prior formal C# training
- **ML Pivot story:** Recognised that complexity ≠ accuracy; switched from deep
  learning to Decision Tree *after* analysing data quality — this is genuine
  curiosity overriding ego
- In both cases: describe what *specifically* you read/practised and how you
  applied it the next day

---

## LP 3 — Have Backbone; Disagree and Commit

### Definition
Leaders are obligated to respectfully challenge decisions they disagree with,
even when doing so is uncomfortable. Once a decision is made, they commit
wholeheartedly.

### What Interviewers Score
- Evidence that you raised a concern even when it was socially difficult
- Professionalism: no blame, no passive resistance
- Commitment after the decision was made (even if you disagreed)
- Outcome focused — did raising the concern produce a better result?

### Red Flags
- "I just did what I was told" (no backbone)
- "I kept pushing even after the decision was final" (no commitment)
- Choosing a conflict story where the other party was clearly wrong/incompetent
  — looks self-serving

### Sample Questions
1. Tell me about a time you disagreed with a team decision. What did you do?
2. Describe a situation where you had to push back on a stakeholder or manager.
3. Tell me about a time when you committed to a decision even though you
   personally disagreed.
4. Give me an example of standing up for the right thing when it was unpopular.
5. Tell me about a time your opinion changed after hearing others' perspectives.

### Strong-Answer Bullets (Structured Cabling Rework Story)
- Noticed mid-deployment that cable routing would block airflow and complicate
  future troubleshooting
- Raised the concern formally (not just informally) with clear technical
  reasoning: [X% airflow reduction risk / Y additional minutes per
  troubleshooting event]
- Team initially pushed back due to schedule pressure
- Committed to deadline while advocating for a targeted rework on the critical
  runs only — compromise, not capitulation
- Result: zero airflow incidents post-deployment vs. [baseline incidents] in
  similar deployments without rework

---

## LP 4 — Dive Deep

### Definition
Leaders operate at all levels, stay connected to the details, and audit
frequently. No task is beneath them.

### What Interviewers Score
- Root-cause analysis, not surface-level fixes
- Using data/tooling to confirm the actual cause before acting
- Knowing *why* a tool or metric pointed to a specific conclusion
- Following the signal through multiple layers until you reach the real cause

### Red Flags
- "I just reseated the cable and it worked" (no root-cause confirmation)
- Only using high-level monitoring without drilling into packets/logs
- Fixing the symptom and not the cause

### Sample Questions
1. Tell me about a situation that required you to dig deep to get to root cause.
   How did you know you were focusing on the right things?
2. Describe a time when data or analysis led you to an unexpected conclusion.
3. Tell me about a time you had to gather information and respond immediately.
   What was the outcome?
4. Give me an example of solving a technically complex problem. Walk me through
   your diagnostic process.
5. Tell me about a time you found a problem no one else had noticed.

### Strong-Answer Bullets (ToR Switch / Fiber / Packet Loss Story)
- Started with server logs and monitoring tools → confirmed dropped connections
- Escalated to Wireshark packet capture → identified packet loss pattern and
  intermittent timeouts
- Ran `ping` / `traceroute` → isolated the fault to the ToR switch hop
- Physical inspection confirmed loose fiber on primary uplink
- Used Fluke tester *after* reseating to verify signal integrity — not just
  visual confirmation
- Also flagged outdated firmware as a contributing risk — scheduled update
  during maintenance window
- Result: full service restoration in **≈30 minutes**; automated link-state
  alerts reduced similar incidents by **~25% in the following quarter**

---

## LP 5 — Earn Trust

### Definition
Leaders listen attentively, speak candidly, and treat others respectfully.
They are vocally self-critical, even when it is embarrassing. They benchmark
against the best.

### What Interviewers Score
- Transparency about failures and mistakes (no deflection)
- Seeking feedback proactively
- Consistent, honest communication with stakeholders even when the news is bad
- Actions that built lasting trust (not just one-time optics)

### Red Flags
- Blaming others or external circumstances for failures
- "I kept the bad news from stakeholders until I had a fix"
- Stories where "trust" only benefits you

### Sample Questions
1. Tell me about a time you made a mistake and how you handled it.
2. Describe a time when you were not able to meet a commitment. How did you
   manage the situation?
3. Tell me about a time you received critical feedback. How did you respond?
4. Give me an example of building trust with a difficult stakeholder.
5. Tell me about a time you admitted a mistake to your team. What happened?

### Strong-Answer Bullets (BTech ML Capstone Failure Story)
- Openly admitted to teammates *within hours* of discovering the 52% accuracy
  result — did not hide it or keep debugging alone until submission day
- Communicated clearly: "I made a mistake by skipping data preprocessing. Here
  is the new plan. Here is the timeline. Here is what I need from each of you."
- Result: team rallied, accuracy reached **89%** (exceeded 85% target)
- At presentation: proactively explained the failure and pivot — evaluators
  scored the transparency positively
- Key self-critical line to use: "I over-indexed on complexity and under-indexed
  on fundamentals. That was my error, and I own it."

---

## LP 6 — Ownership

### Definition
Leaders act on behalf of the entire company, beyond just their own team. They
never say "that's not my job."

### What Interviewers Score
- Taking action outside your formal job scope
- Long-term thinking (not just short-term task completion)
- Preventing future problems, not just fixing current ones
- Advocating for improvements even without being asked

### Red Flags
- "That was outside my scope so I escalated and moved on"
- Stories where you only fixed your own tasks
- No evidence of thinking beyond the immediate ticket

### Sample Questions
1. Tell me about a time you took ownership of something outside your
   formal responsibilities.
2. Describe a time you saw a process problem and fixed it without being asked.
3. Tell me about a time you had to make a decision without your manager's
   input.
4. Give me an example of when you put the company's interests ahead of your
   personal interests.
5. Tell me about a time you prevented a problem before it escalated.

### Strong-Answer Bullets (Incident Response / ServiceNow Story)
- Noticed that incident-response checklists were inconsistent across shifts,
  leading to variable MTTR
- Outside normal shift duties, audited [X] recent tickets in ServiceNow to
  identify the most common missed steps
- Proposed and drafted a standardised checklist; piloted it with two colleagues
- Result: MTTR reduced from **[baseline] to [outcome] minutes**; onboarding
  time for new technicians reduced by **[Y%]**
- This was self-initiated — no manager asked for it

---

## LP 7 — Deliver Results

### Definition
Leaders focus on the key inputs for their business and deliver them with the
right quality and in a timely fashion. Despite setbacks, they rise to the
occasion and never settle.

### What Interviewers Score
- Did you actually complete the task despite obstacles?
- Did you prioritise correctly under pressure?
- Did the outcome match or exceed the goal?
- Did you communicate proactively when at risk of missing the target?

### Red Flags
- Story where the result was mediocre or unclear
- Process-heavy story with no measurable outcome
- Attributing the result entirely to the team

### Sample Questions
1. Tell me about a time when you were able to deliver an important project
   despite a significant obstacle.
2. Describe a time when you had to sacrifice quality for speed, or vice versa.
3. Tell me about a time you delivered results when the scope changed mid-project.
4. Give me an example of setting ambitious goals and achieving them.
5. Tell me about a time you had competing priorities. How did you decide what
   to focus on?

### Strong-Answer Bullets (Data-Driven Engagement/Retention Story)
- Identified that engagement/retention was declining (or below target) through
  [specific metric/data source]
- Proposed and executed a data-driven intervention: [describe action]
- Result: improved engagement by **[X%]** and retention by **[Y%]** over
  **[timeframe]**
- Maintained delivery despite [specific obstacle — staffing, timeline, tooling]
- Explicitly tie to customer impact: "This meant [Z customers / users / staff
  members] experienced [specific improvement]."

---

## General Tips

- **Bridge to the role:** End every story with one sentence connecting the
  learning to what you'd bring to AWS.
- **Pause, don't rush:** Interviewers take notes. A brief pause after your
  Result is fine — it lets the metric land.
- **Invite follow-ups:** "Happy to go deeper on any of those steps." This
  signals confidence and openness.
- **Numbers beat adjectives:** "significantly improved" < "reduced by 40%";
  "very fast" < "within 30 minutes."
