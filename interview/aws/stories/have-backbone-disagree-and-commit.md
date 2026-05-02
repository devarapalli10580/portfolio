# Story: Have Backbone; Disagree and Commit — Structured Cabling Rework

**LP:** Have Backbone; Disagree and Commit  
**Secondary LP:** Ownership, Deliver Results  
**Experience:** Data Center Technician, Changing The Present (or ZelfStudie — confirm)  
**Code name:** Cabling-Rework

---

## Metrics Checklist

- [ ] Stage at which I raised the concern: **mid-deployment** ✓
- [ ] Number of cable runs flagged for rework: **[X runs / racks]**
- [ ] Estimated airflow risk if not fixed: **[Y% reduction in airflow, or Z°C temperature delta]**
- [ ] Additional time needed for rework: **[X hours]**
- [ ] Schedule impact after rework: **[on-time / delayed by Z hours]**
- [ ] Post-deployment airflow incidents: **[0 vs. baseline of N in similar deployments]**
- [ ] Estimated troubleshooting time saved per incident: **[A to B minutes]**

---

## 2-Minute Version (~250 words)

> Use for phone screens.

During a structured cabling deployment, I noticed mid-project that our cable
routing plan had a problem: the runs were crossing in front of hot-aisle exhaust
paths and bundled too tightly along the sides of racks where technicians would
typically need to access hardware for break-fix work. Two issues — airflow
restriction and maintenance accessibility — that weren't obvious until you saw
the actual installation taking shape.

The team lead wanted to continue because we were behind schedule. I raised the
concern directly, with specific reasoning: poorly routed cabling can raise rack
temperatures by several degrees and add significant time to every future
troubleshooting event. I acknowledged the schedule pressure and proposed a
targeted rework only on the highest-risk runs — not a full restart.

There was pushback. I documented my concern formally, explained the trade-off
between short-term schedule delay versus long-term operational cost, and
ultimately the team lead agreed to the targeted rework. I then committed fully:
worked extra hours to complete the rework and kept us as close to schedule as
possible.

Post-deployment, there were zero airflow-related incidents in that section —
compared to [X] similar incidents in comparable deployments without this
intervention. Every technician who has worked in that section since has noted
the clean cable management.

The lesson: raising a concern is only half of having backbone. The other half
is proposing a concrete alternative and committing completely once the decision
is made.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops.

**Situation:**  
We were in the middle of a structured cabling deployment — running Cat6/fiber
between racks and patch panels, labelling, and dressing cables. It was a
real-time installation under a tight project schedule. As we got deeper into
the work, I was observing how the physical cable runs were taking shape and
something didn't look right.

**Task:**  
My role was as the technician executing the cabling work. I was not the
decision-maker on the routing plan — that had been set before we started. But I
knew that cabling decisions made now would affect cooling efficiency, future
troubleshooting speed, and audit compliance for years.

**Action:**  
*Identifying the problem:*  
Two issues stood out. First, several runs were being routed across hot-aisle
exhaust paths — in a well-managed DC, you want cables above cold aisles or
through the appropriate overhead/underfloor pathways, not blocking hot exhaust.
Second, the bundles on the rack sides were so tightly dressed that accessing
SFP ports or drive bays for break-fix would require removing and re-dressing
cables every time.

*Raising the concern:*  
I raised the issue directly with the team lead. I was specific: I described
which runs I was concerned about, why they were a risk (temperature and access),
and what I estimated the impact to be. I did not just say "this looks wrong" —
I explained the consequence in operational terms that mattered to management:
"Every time we need to swap a drive in these racks, the cable dress will add
approximately [X minutes] to the task. Multiply that over a year of break-fix
events and it adds up."

*Handling the pushback:*  
The team lead's concern was the schedule — we were already running slightly late
and a full reroute was not feasible. I had anticipated this. My proposal was
not a full reroute: it was a targeted rework of the highest-risk cable runs only,
which I estimated would take [X hours] and recover on the schedule within the
same shift. I documented the concern and the proposed solution in writing
(our change log) so there was a record regardless of the outcome.

*After the decision was made:*  
The team lead agreed to the targeted rework. From that point, I committed
completely — I worked the extra hours, co-ordinated with my colleague to
parallelise tasks, and made sure we hit our revised schedule milestone. I did
not continue raising the original concern; the decision was made.

**Result:**  
The targeted rework was completed within the same deployment window. Post-
deployment: **zero airflow incidents** in that section, compared to [N similar
incidents] in comparable deployments I'd seen without this step. Future
break-fix technicians could access all hardware without removing cable dressing.
My team lead specifically noted the quality of the final installation in the
post-deployment review, and it became the reference standard for the next
deployment phase.

**What I'd do differently:**  
I would raise concerns like this during the planning stage rather than mid-
deployment. The lesson was to ask the right questions at the routing design
review: "Have we validated this against hot/cold aisle separation?" and "What
is the minimum cable-free clearance for each rack unit?" I now ask those
questions before work begins.

**Connection to AWS:**  
AWS DC deployments run at a scale and pace where a cabling decision made once
affects dozens or hundreds of future maintenance events. The instinct to raise
a concern early, back it with operational data, propose a proportionate fix, and
then commit completely is exactly the mindset a DC Technician needs at that scale.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — Deployment Context
- Type of cabling work (structured Cat6, fiber, or mixed)
- DC environment: raised floor, overhead, or both
- Team size and project timeline
- Routing plan: how it was designed, who approved it

### Chapter 2 — Technical Identification of the Problem
- Hot-aisle/cold-aisle separation principles and why crossing hot-aisle exhaust is a risk
- Cable bundle density and break-fix accessibility: the IEEE/BICSI guidelines
- How I identified the problem visually and what made me certain it was worth escalating

### Chapter 3 — Escalation Approach
- Why I escalated formally rather than quietly fixing it myself
- How I quantified the operational cost (temperature delta, troubleshooting time per event)
- Written documentation in change log: what I wrote and why it mattered

### Chapter 4 — Navigating the Pushback
- Schedule pressure details
- Stakeholder's perspective: why they were right to be concerned about schedule
- My counter-proposal: targeted rework on specific runs only
- How I determined which runs were highest-risk (prioritisation logic)

### Chapter 5 — Execution & Commitment
- How we parallelised the rework to minimise schedule impact
- Quality-check process post-rework
- Communication with the team lead during execution

### Chapter 6 — Post-Deployment Validation
- How I confirmed zero airflow incidents: temperature monitoring, post-install audit
- Feedback from technicians who worked in the section later
- Adoption as a reference standard for future deployments

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "What if the team lead had still said no?" | I would have committed to the original plan and documented my concern in the change log. Disagreement ends when the decision is made. |
| "How did you quantify the risk if you didn't have data yet?" | Used estimates based on industry standards (ASHRAE DC cooling guidelines) and experience from previous deployments. The estimate was clearly labelled as an estimate. |
| "Wasn't it risky to push back on your team lead?" | I framed it as a risk discussion, not a personal disagreement. Presenting specific technical consequences, not opinions, made it a professional conversation. |
| "How do you know the improvement was because of your rework?" | Compared temperature logs and break-fix ticket times from that section against a comparable section deployed without the rework in the same quarter. |
| "Did this change how the team plans deployments?" | Yes — I suggested adding a pre-deployment routing checklist with airflow and accessibility items. It was adopted for the next phase. |
