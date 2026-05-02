# Story: Ownership — Incident Response Efficiency (ServiceNow + Checklists)

**LP:** Ownership  
**Secondary LP:** Deliver Results, Bias for Action  
**Experience:** Data Center Technician, Changing The Present  
**Code name:** Incident-Response-Efficiency

---

## Metrics Checklist

- [ ] Baseline MTTR before changes: **[X minutes — pull from ServiceNow]**
- [ ] MTTR after changes: **[Y minutes]**
- [ ] MTTR improvement: **[Z% reduction]**
- [ ] Number of tickets audited to identify patterns: **[N tickets]**
- [ ] Number of checklist items standardised: **[X steps]**
- [ ] Onboarding time reduction for new technicians: **[Y% or Z days]**
- [ ] Number of colleagues who piloted the checklist: **[2–3]**
- [ ] Time period for measurement: **[Q — confirm]**

---

## 2-Minute Version (~250 words)

> Use for phone screens.

After a few months in my DC Technician role at Changing The Present, I noticed
that incident response was inconsistent across shifts. Different technicians
handled the same incident types in different ways — some skipped isolation steps,
some jumped straight to hardware swaps, some didn't document properly until
after the fix. The result was variable MTTR and knowledge that didn't transfer
between shifts.

Nobody asked me to fix this. But I knew inconsistent response workflows were
increasing our average resolution time and creating risk every time someone
new joined the team.

I audited **[N] recent ServiceNow tickets** on my own time, identified the
most commonly skipped or inconsistently executed steps, and drafted a
standardised incident-response checklist covering our most frequent incident
types: connectivity, hardware failure, and power. I piloted it with two
colleagues, incorporated their feedback, and then proposed it to my supervisor
with supporting data.

The checklist was adopted for the whole team. Within **[timeframe]**, MTTR
dropped from approximately **[X] to [Y] minutes — a [Z]% improvement**.
New technician onboarding also improved: what had previously taken informal
knowledge-transfer over weeks could now be covered in a structured orientation
with the checklist as the guide.

The initiative was mine, unprompted. That is ownership: seeing a process risk
that affects the team's performance, taking the effort to fix it properly, and
making sure the fix outlasts your individual involvement.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops.

**Situation:**  
In my role as a Data Center Technician at Changing The Present, I was
responsible for infrastructure monitoring, first-line incident response, and
break-fix maintenance across server and network infrastructure. After the first
few months, I started noticing a pattern that wasn't visible in any single
incident — it only emerged when you looked at multiple tickets side by side.

Different technicians, even experienced ones, were handling the same incident
types in materially different ways. For a connectivity issue, one technician
would start at the physical layer; another would start with a ticket to the
network team; a third would bounce the switch port first without confirming the
root cause. This variability meant that MTTR was inconsistent — sometimes
30 minutes, sometimes two hours for functionally identical incidents. And
when a shift change happened mid-incident, the incoming technician often had
incomplete context, which added more time.

**Task:**  
My formal role was to respond to incidents and resolve them. The inconsistency
I was seeing was not my assigned problem to fix. But I owned what happened on
the floor, and I recognised that process risk as an operational liability for
the team.

**Action:**  
*Step 1 — Data before design:*  
I spent time on my own — outside my direct shift responsibilities — reviewing
**[N] closed ServiceNow tickets** from the previous two quarters. I categorised
them by incident type and mapped the resolution steps taken against the
outcomes. Three patterns stood out: (1) connectivity incidents that skipped
physical-layer checks averaged **[X] more minutes** to resolve; (2) power
incidents that didn't follow the isolation sequence created follow-on failures
in **[Y]% of cases**; (3) shift-handover notes were inconsistent, leaving
incoming technicians to re-diagnose from scratch.

*Step 2 — Drafting the checklist:*  
I wrote a standardised incident-response checklist for the three most common
incident types. Each checklist had: a five-second pre-action triage step
(classify the incident type), a sequential step list with decision branches,
a verification step ("how do you confirm the fix held"), and a documentation
minimum ("what to record in ServiceNow before closing").

I kept it to one page per incident type — long documents don't get used under
pressure.

*Step 3 — Pilot and iterate:*  
Before proposing it to management, I ran it with two colleagues for two weeks.
I asked them to flag any step that was unclear, missing, or out of sequence.
They surfaced three gaps I hadn't captured. I revised the checklist, tested
again, and then brought the proposal to my supervisor with the ticket analysis,
the pilot feedback, and a projected impact estimate.

*Step 4 — Adoption:*  
My supervisor approved it for team-wide adoption. I led a 30-minute walkthrough
with the full team and made myself available for questions for the first month
of use.

**Result:**  
Within **[timeframe]**, MTTR for the covered incident types dropped from
approximately **[X] to [Y] minutes — a [Z]% improvement**. Shift-handover
quality improved significantly: incidents were handed over with a clear
current-step indication, not just a symptom description. New technician
onboarding used the checklist as a structured reference, reducing the informal
"shadowing" period by approximately **[N days/weeks]**.

My supervisor recognised the initiative in my performance review as an example
of taking ownership beyond the formal job scope.

**What I'd do differently:**  
I would have piloted the checklist across a full month before proposing it,
to capture rarer incident types. The initial two-week pilot missed some
edge cases that needed minor revisions in the first few months of use.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — DC Environment and Shift Structure
- Team size, shift rotation, handover process
- Types of incidents most common in the environment
- How MTTR was tracked (or not tracked consistently) before

### Chapter 2 — Ticket Analysis Methodology
- How I accessed historical ticket data in ServiceNow
- Categorisation scheme: connectivity, hardware, power, environmental
- How I identified the correlation between skipped steps and higher MTTR

### Chapter 3 — Checklist Design Principles
- One page per type: why brevity matters in an incident context
- Decision branches: handling the two most common deviations from the main path
- Verification step: why "confirming the fix held" is a separate step
- Documentation minimum: what information prevents re-diagnosis on re-open

### Chapter 4 — Pilot Process
- Colleague selection: why I chose technicians with different experience levels
- Feedback collection method: annotated copies + 15-minute debrief
- What the three gaps were and how I fixed them

### Chapter 5 — Management Buy-In
- Data I presented: ticket analysis + pilot results + MTTR projection
- Concerns my supervisor raised and how I addressed them
- Rollout plan: team walkthrough + one-month availability for questions

### Chapter 6 — Measurement and Long-Term Impact
- How I confirmed MTTR improvement (ServiceNow reports)
- Handover quality: qualitative feedback from night-shift team
- Onboarding impact: reduction in informal shadowing period

### Chapter 7 — Application to AWS
- At AWS DC scale, MTTR variability across hundreds of technicians is a significant operational risk
- Standardised runbooks and checklists are a core AWS operational practice (Operations Excellence LP)
- How this experience directly maps to maintaining and improving runbooks in an AWS DC role

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "Why didn't you just ask your manager to fix the process?" | I had the data, the time, and the specific technical knowledge to design the fix. Escalating first would have slowed it down and asked someone else to do work I could do myself. |
| "What if colleagues resisted the checklist?" | I framed it as time-saving for them, not as a critique of how they'd been working. The data showed that following the checklist reduced their resolution time — I led with that. |
| "How did you ensure the checklist stayed up to date?" | I proposed a quarterly review, assigned to whoever owns the incident documentation in ServiceNow. I also made the checklist version-controlled so changes were traceable. |
| "What's the risk of a checklist making people less thoughtful?" | Real risk. I addressed it by including decision branches rather than rigid linear steps. The checklist guides, it doesn't replace judgment. Complex incidents should deviate from the checklist when the technician has good reason. |
| "How do you know the MTTR improvement was from the checklist and not other factors?" | I compared the MTTR trend for checklist-covered incident types against non-covered types in the same period. The improvement was specific to the covered types. |
