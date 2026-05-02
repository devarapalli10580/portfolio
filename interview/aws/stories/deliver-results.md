# Story: Deliver Results — Data-Driven Engagement & Retention Improvement

**LP:** Deliver Results  
**Secondary LP:** Ownership, Bias for Action  
**Experience:** Changing The Present / ZelfStudie (confirm which context)  
**Code name:** Engagement-Retention

---

## Metrics Checklist

- [ ] Baseline engagement metric: **[X% — e.g., portal login rate, session duration, % staff completing required actions]**
- [ ] Post-change engagement metric: **[Y%]**
- [ ] Retention improvement: **[Z% or N fewer churned users/staff]**
- [ ] Timeframe: **[Q or month range]**
- [ ] Data source: **[dashboard, ServiceNow, LMS, custom report]**
- [ ] Specific intervention(s) taken: **[list 2–3 actions]**
- [ ] Resources available: **[describe constraints — no new budget, no new headcount, etc.]**

---

## 2-Minute Version (~250 words)

> Use for phone screens.

I noticed that engagement with our internal systems — specifically the
portal/service platform — was declining, and that declining engagement was
correlating with a higher volume of recurring support requests: people who
weren't using self-service tools were creating tickets instead.

Rather than treating this as a support-volume problem, I reframed it as an
engagement problem. I pulled usage data from **[source]** and segmented users
by engagement level. The bottom **[X%]** had almost never successfully
completed a self-service task. That segment was driving **[Y%]** of the
repeat tickets.

I designed a targeted intervention for that segment: **[specific action —
e.g., a proactive outreach campaign, short tutorial videos, a one-page quick-
start guide delivered directly to their inbox, or a live walk-through session]**.
The intervention was low-cost and could be executed within existing resources.

Within **[timeframe]**, engagement in the target segment improved by
**[Z%]** and repeat tickets from that group dropped by **[W%]**. Retention —
measured as continued active use of the platform past the **[N-week]** mark —
improved by **[R%]** compared to the prior cohort.

The principle I applied: treat the metric, not the symptom. Support ticket
volume was the symptom. Engagement was the metric. Fixing the metric fixed
the symptom and produced a durable result. That's how I approach every
process problem — find the upstream lever.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops.

**Situation:**  
At **[Company]**, I was responsible for **[role: data analysis / IT support /
DC operations]** and had visibility into operational metrics including
**[specific metric: platform usage, ticket volume, uptime, staff training
completion]**. Over **[timeframe]**, I noticed a pattern: engagement with
**[the system/platform/service]** was declining among a specific user segment,
and this was creating a compounding operational problem — **[describe the
downstream effect: more tickets, higher MTTR, repeat failures, etc.]**.

This wasn't a critical incident; it was a slow degradation that was easy to
ignore in the context of day-to-day firefighting. That's exactly why I paid
attention to it.

**Task:**  
My role did not formally include ownership of engagement metrics. But I
recognised that if the trend continued, it would create an escalating workload
problem for the team. I took personal ownership of diagnosing and addressing it.

**Action:**  
*Step 1 — Define and measure the problem precisely:*  
I pulled data from **[source]** and created a segmented view: high-engagement
users vs. low-engagement users, and the operational cost of each segment
(tickets created, resolution time, repeat contact rate). This quantified a
problem that had previously been described only qualitatively: "some people
aren't using the system properly."

*Step 2 — Identify the root cause for the low-engagement segment:*  
I did targeted outreach to a sample of **[N]** low-engagement users: short
conversations or survey questions to understand what was creating friction.
Three themes emerged:
- They didn't know the feature existed or how to navigate to it
- The first-use experience was confusing
- They had tried once, failed, and never returned

*Step 3 — Design a targeted, low-cost intervention:*  
Based on the friction points, I designed an intervention that addressed all
three: **[e.g., a single-page quick-start guide + proactive email with direct
link + one group walk-through session]**. No new tools, no new budget —
I used existing communication channels and my own time.

*Step 4 — Measure, confirm, and document:*  
I tracked engagement for the target segment over the next **[N weeks]** and
compared against the non-target group and the previous cohort as controls.
I also tracked whether ticket volume from this segment changed independently
of other factors.

**Result:**  
Engagement in the target segment improved by **[Z%]** over **[timeframe]**.
Repeat tickets from that segment dropped by **[W%]**. Retention past the
**[N-week]** mark improved by **[R%]** versus the prior cohort. Total team
ticket volume decreased by **[V%]** as a result.

I documented the methodology, the results, and the intervention materials in
**[documentation system]** so any future team member could replicate it.

My supervisor cited this in my review as an example of proactive performance
management — finding and fixing a trend before it became a crisis.

**What I'd do differently:**  
I would have baselined the engagement metrics at the start of my tenure, not
after noticing the decline. Having a longer baseline window would have given
me greater confidence in attributing the improvement to the intervention.

**Connection to AWS:**  
At AWS, operational metrics at DC scale can show slow degradation patterns
that don't trigger alerts but accumulate into significant inefficiencies.
My instinct to look at the data, segment it, find the upstream cause, and
fix it with a targeted measurable intervention is exactly how I'd approach
operational efficiency work in an AWS DC role.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — Business Context
- Company/team context: what the platform/system did and who depended on it
- Why engagement mattered operationally (not just as a KPI)
- What the trend looked like over time and how I first noticed it

### Chapter 2 — Data Gathering and Segmentation
- Tools used: dashboard, exported data, ServiceNow, LMS analytics
- Segmentation logic: what defined "low engagement"
- Correlation analysis: low engagement → specific operational cost

### Chapter 3 — Root Cause Analysis
- Why I didn't assume I knew the cause (risking wrong solution)
- User outreach methodology: who I contacted, what I asked
- The three friction themes: what evidence supported each

### Chapter 4 — Intervention Design
- Trade-off between: (a) mandatory training, (b) passive documentation, (c) targeted proactive outreach
- Why I chose the approach I did (cost, speed, reversibility)
- How I measured intervention reach (did the target segment actually receive and engage with the intervention?)

### Chapter 5 — Results Measurement and Confidence
- Control group: non-target segment in the same period
- Prior-cohort comparison: same segment 3–6 months earlier
- Confounding factors considered and controlled for

### Chapter 6 — Documentation and Knowledge Transfer
- What I documented so the intervention could be replicated
- How the methodology was adopted more broadly

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "How do you know the improvement was from your intervention and not seasonal factors?" | Compared the target segment against the control group (same period, same system, different segment) — the control group did not show the same improvement. |
| "What if the intervention hadn't worked?" | I had a hypothesis-driven design: if the friction was "doesn't know the feature exists," the quick-start guide addresses it. If engagement didn't improve, I would have tested the next hypothesis (e.g., usability issue, not awareness). |
| "This wasn't your formal job — why did you do it?" | Because the operational cost was real and within my ability to fix. At AWS, the best technicians are the ones who see a problem and fix it, not the ones who wait to be assigned a ticket for it. |
| "What metric would you use to define success at AWS in this role?" | MTTR, first-time fix rate, repeat-incident rate, and infrastructure availability percentage — all quantifiable via the ticketing and monitoring systems. |
