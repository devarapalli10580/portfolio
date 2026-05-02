# Story: Bias for Action — Login & MFA Ticket Reduction

**LP:** Bias for Action  
**Secondary LP:** Ownership  
**Experience:** IT Support & Technical Intern, ZelfStudie  
**Code name:** Login-MFA-Fix

---

## Metrics Checklist

Before practising, confirm and fill in every placeholder below:

- [ ] Baseline weekly login ticket volume: **[~X tickets/week]**
- [ ] Reduction after changes: **[~40% — confirm from ServiceNow report]**
- [ ] Timeframe to see measurable improvement: **[~2 months]**
- [ ] Number of guides / resources created: **[X guides, 1 Slack channel, 1 FAQ]**
- [ ] Percentage of tickets that were MFA-related: **[~30%]**
- [ ] Percentage that were password-reset-related: **[~50%]**
- [ ] Time saved per technician per week post-change: **[estimated Y hours]**

---

## 2-Minute Version (~250 words)

> Use for phone screens and first-round behavioural segments.

At ZelfStudie, I kept seeing the same login and MFA access tickets every day —
teachers locked out right before class, staff unable to reach grading systems.
After the third week, I pulled two months of ServiceNow data and found that
roughly **50% of tickets were simple password-reset requests** and another 30%
were MFA-setup failures. People didn't know self-service options existed.

Instead of waiting to be assigned a project, I acted immediately. I created
step-by-step screenshot guides for password resets and MFA setup, published them
on the intranet login page and in common-area flyers, and set up a dedicated IT
Slack channel for quick triage without formal ticket creation.

I also worked with the onboarding team to embed MFA walkthroughs into new-hire
orientation so the problem wouldn't recur. Within **two months, login-related
tickets dropped by approximately 40%**, freeing the IT team to focus on
infrastructure work instead of repeated manual resets.

The action was low-risk and reversible — if the guides hadn't helped, we could
have removed them — but the data told me the problem was awareness, not
technology, so guides were the fastest fix. At AWS, where uptime and engineer
capacity both matter, I'd apply that same instinct: identify whether the problem
is technical or process-based, then act at the right layer without waiting for
formal approval.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops. Add the "why" behind each action.

**Situation:**  
At ZelfStudie, an edtech company, I was responsible for day-to-day IT support —
hardware monitoring, network troubleshooting, and keeping systems operational.
Every single day I handled multiple tickets from teachers and staff:
"My account is locked," "I forgot my password," "MFA isn't working."
These weren't just nuisances — a teacher locked out five minutes before class
directly impacts students. The cumulative cost to productivity was real, and the
IT team was spending a disproportionate share of bandwidth on repetitive,
low-complexity work.

**Task:**  
My formal job was to resolve individual tickets. But I recognised that resolving
them one-by-one wasn't fixing anything — the same people would be back next week.
I took personal ownership of reducing the root-cause recurrence, even though no
one explicitly asked me to.

**Action:**  
*Step 1 — Data first, not gut feel.*  
I exported two months of ServiceNow ticket data and categorised every
login-related request. The breakdown was clear: **~50% password resets,
~30% MFA confusion, ~20% other access issues**. This confirmed I wasn't dealing
with a technical failure — I was dealing with an awareness and onboarding gap.

*Step 2 — Self-service guides.*  
I chose guides over an IT-training session because they're available 24/7 and
require zero scheduling. I wrote step-by-step walkthroughs with screenshots,
published them directly on the intranet homepage and the login page itself
(exactly where users are when they're stuck), and printed quick-reference cards
for teacher lounges. I intentionally kept each guide to one page — long
documentation doesn't get read.

*Step 3 — Slack channel for fast triage.*  
For MFA issues, the friction was the formal ticket queue: submit, wait, get a
reply hours later. I created a dedicated IT Slack channel and responded in real
time. This reduced ticket creation for minor MFA questions to near zero and
also gave me real-time signal about what confused people most, so I could update
the FAQ accordingly.

*Step 4 — Systemic fix: onboarding.*  
The self-service guides solved the existing population. To stop new employees
from entering the same loop, I coordinated with the onboarding team to add a
five-minute MFA-setup walkthrough to new-hire orientation. This meant the
problem wouldn't grow proportionally as the company scaled.

**Result:**  
Within two months, login-related support tickets dropped by **approximately 40%**.
The IT team reclaimed roughly **[Y hours/week]** that had been consumed by
repetitive resets — time now redirected to infrastructure improvements. Employee
satisfaction also improved: teachers specifically mentioned being able to solve
login issues themselves in the end-of-semester feedback. My manager recognised
the initiative and the self-service system became standard practice for
subsequent new-hire cohorts.

**What I'd do differently:**  
I would instrument the guides earlier — adding an anonymous "Was this helpful?"
button on the intranet page — so I could measure guide effectiveness versus
the Slack channel and iterate faster.

**Connection to AWS:**  
At AWS scale, every unnecessary escalation compounds. Whether it's a technician
waiting on a manager approval for a clear break-fix or an operator repeatedly
solving the same ticket type, the cost is downtime and engineer capacity. My
instinct is to look at the data, find the recurring pattern, and fix it at the
source — that's the behaviour I'd bring to an AWS DC role.

---

## 15–20 Minute Expandable Outline

> Chapter structure for a deep-dive conversation. Use when an interviewer
> keeps probing with follow-ups.

### Chapter 1 — Business Context
- ZelfStudie's operational model: teachers use digital tools daily, login = access to livelihood
- IT team size and ticket volume at the time: [X people, ~Y tickets/week]
- Why login issues were categorised as "low priority" but had outsized operational impact

### Chapter 2 — Discovery & Data Analysis
- How I accessed and queried ServiceNow ticket history
- Categorisation methodology: manual tagging vs. keyword search
- Confidence interval in the 50/30/20 split
- How I validated the root cause with direct user interviews ("Did you know self-service existed?")

### Chapter 3 — Solution Design Trade-offs
- Option A: Group training session (rejected: time-intensive, one-off)
- Option B: IT helpdesk number posted on login page (rejected: still creates human dependency)
- Option C: Self-service guides + Slack + onboarding integration (chosen: scalable, low-effort maintenance)
- Risk: guides go stale if system UI changes → mitigated by quarterly review reminder

### Chapter 4 — Execution & Stakeholder Management
- Writing and reviewing guides with a non-technical colleague for clarity
- Working with the onboarding team: their initial concern, how I addressed it
- Communication to all staff: email + Slack announcement

### Chapter 5 — Measurement & Iteration
- How I tracked the 40% reduction: ticket categorisation in ServiceNow
- Leading indicator vs. lagging indicator: Slack channel activity dropped within weeks; ticket count dropped within months
- Feedback loops: surveyed three teachers about the guides

### Chapter 6 — Lasting Impact
- Guides and channel remained in use after I left
- Policy formalised into new-hire onboarding program
- Lessons applicable to AWS: self-service runbooks reduce toil at scale

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "How did you know 40% was the right metric to track?" | ServiceNow gave me historical baseline; 40% was what was actually achieved, not a target I set |
| "What if users ignored the guides?" | Tested readability with a non-technical colleague first; monitored Slack channel as a real-time signal |
| "Why not just hire another IT person?" | Cost-inefficient; the problem was process, not headcount |
| "What did your manager think?" | Initially unaware; I showed the data, got buy-in, then implemented — not the other way around |
| "Could this have caused a security risk?" | Guides directed to existing SSO/IT-approved portals; no credentials stored or exposed in guides |
