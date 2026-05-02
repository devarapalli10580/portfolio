# Story: Earn Trust — BTech ML Capstone (Alternate Angle) / Incident Transparency

**LP:** Earn Trust  
**Secondary LP:** Learn & Be Curious  
**Experience:** BTech Capstone (primary) / Data Center Technician (secondary option)  
**Code name:** ML-Trust-Transparency

> **Note:** This file uses the BTech ML Capstone story through the Earn Trust lens.
> If you already used the ML story for "Learn & Be Curious" with this interviewer,
> use the secondary option: the ServiceNow incident transparency story below.

---

## Metrics Checklist

### Primary (BTech ML Pivot — Trust Angle)
- [ ] Accuracy before admission: **52%** ✓
- [ ] Accuracy after pivot: **89%** ✓
- [ ] Days remaining when I admitted the mistake: **4 days** ✓
- [ ] Team size: **[X people]**

### Secondary (Incident/Stakeholder Transparency)
- [ ] Incident severity: **[P1 / P2 — confirm]**
- [ ] Time I kept stakeholders informed during incident: **[every X minutes]**
- [ ] Unnecessary escalations avoided: **[Y escalations saved]**
- [ ] Stakeholder satisfaction feedback: **[quote or rating if available]**

---

## 2-Minute Version — Primary (BTech Trust Angle) (~250 words)

> Use for phone screens.

In my final-year BTech capstone, I discovered four days before submission that
the ML model I'd built had only **52% accuracy** — barely better than random —
because I had skipped data preprocessing and feature selection in my eagerness
to build something complex.

The easiest thing to do would have been to quietly spend those four days trying
to fix it alone, and only tell the team the night before if I couldn't. Instead,
I called a meeting within an hour of discovering the result, admitted exactly
what I'd done wrong, and laid out a concrete recovery plan: clean the data,
cut features from 50 to 10, switch to a Decision Tree with Grid Search tuning.

This was uncomfortable. I was the person who was supposed to know ML. But
transparency early gave us four full days to recover, versus transparency late
giving us one. The team rallied, and accuracy reached **89%** — exceeding our
85% target. At the presentation, we proactively explained the failure and pivot.
The faculty panel specifically praised our honesty and structured problem-solving.

My manager and teammates told me afterward that the most impressive part wasn't
the final accuracy — it was the honest communication when it mattered most.
That is the core of Earn Trust: being willing to say "I was wrong, here's the
impact, here's the plan" especially when it's the harder option. I bring that
same standard to stakeholder communication in every incident I respond to.

---

## 2-Minute Version — Secondary (Stakeholder Transparency During Incident) (~250 words)

> Use if ML story is already used with this interviewer.

During the ToR switch incident at ZelfStudie, I was the first responder when
critical servers lost connectivity. From the moment I took the ticket, I made
a deliberate choice about communication: I would update the stakeholder at every
meaningful step, even when I didn't have a fix yet.

I sent three updates over 30 minutes: an acknowledgement with what I was
investigating, a midpoint message isolating the fault to the ToR switch, and a
closure message with the root cause, the fix, and the preventive action I was
recommending. I did not wait until I had a resolution to communicate.

The result was that the stakeholder never escalated to the IT manager — they
had enough information to manage upward themselves. After resolution, the
stakeholder specifically told my manager that the communication style was what
prevented the incident from feeling like a crisis.

That experience reinforced something I believe strongly: in a high-stakes
technical environment, silence is not professionalism — it's a trust risk. When
customers or stakeholders don't know what's happening, they assume the worst.
Clear, frequent, honest updates — even "I don't have the answer yet, but here
is what I know" — build the kind of trust that makes escalations unnecessary.
At AWS, where incidents affect real customers at scale, I apply this standard
to every communication I send during a degraded-service event.

---

## 8-Minute Version — Primary (BTech Trust Angle) (~650 words)

> Use for virtual on-site loops.

**Situation:**  
My final-year BTech capstone project required building an ML model to predict
student academic performance. Thirty percent of our final grade. Presentation
to faculty and industry professionals. I was the ML lead — my teammates trusted
me to deliver the technical core.

The context that matters for Earn Trust: I was the person with the most
technical credibility on the team for this task. That credibility made the
moment of failure harder to own, but more important to handle correctly.

**Task:**  
My task was to deliver an accurate, working ML pipeline. I had also
implicitly committed to leading the technical direction. When I discovered the
model was failing badly, my task became more complex: not just fix the model,
but do it in a way that kept the team's trust and maintained our ability to
deliver.

**Action:**  
*Discovering the failure — 4 days out:*  
I ran full model evaluation and got **52% accuracy**. The model was not just
underperforming — it was predicting in the wrong direction in many cases. I
knew immediately this was a data-quality problem, not a model-tuning problem.
I also knew that trying to silently fix it alone over four days carried a high
risk of submitting something broken anyway — with no one else aware, and no
time to course-correct.

*The transparency decision:*  
Within one hour, I called a team meeting. I said exactly what had happened:
"I made a mistake. I skipped data preprocessing and feature selection because
I over-indexed on model complexity. The accuracy is 52%. Here is my analysis
of why. Here is the recovery plan. Here is what I need from each of you."

I did not hedge: "the data is probably bad" or "it might be fixable." I owned
it directly and moved to the plan immediately.

*Why this built trust, not eroded it:*  
The team's initial reaction was concern — understandably. But within 15 minutes
of the meeting, we had parallel tasks assigned, a four-day schedule, and clarity.
The transparency meant we had time. My teammates later told me that what they
respected most was that I didn't try to protect my reputation at the cost of
the team's outcome. I was more committed to the team's success than to looking
like I hadn't made an error.

*The recovery:*  
Data cleaning → feature selection (50+ → 10) → Decision Tree + Grid Search
tuning. All in four days, with daily check-ins at each milestone.

**Result:**  
Accuracy: **89%** (target: 85%). Processing time down **~40%**. At the
presentation, we explained the failure and pivot openly — the faculty panel
cited it as a model for intellectual honesty. My team lead wrote in our peer
evaluation that my communication during the crisis was what made the recovery
possible.

**What I learned:**  
Trust is most tested — and most built — in moments of failure, not success.
The instinct to protect your own credibility at the cost of transparency is
almost always the wrong trade-off. At AWS, whether it's an incident update or
a capacity forecast that's changed, I will tell stakeholders the honest picture
even when it's uncomfortable.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — Why Transparency Was Difficult Here
- Technical credibility as the ML lead: the social cost of admitting an error
- Time pressure: why transparency with 4 days left is very different from 1 day left
- Alternative paths I considered (and rejected): silent debugging, partial disclosure

### Chapter 2 — The Communication Act
- Exact framing of the admission: "I made a mistake" vs. "the model has issues"
- Why I included the cause, the impact, AND the plan in the same message
- How I structured the meeting to convert concern into action within 15 minutes

### Chapter 3 — Team Response & Dynamics
- Initial team reactions
- How task division and daily milestones maintained momentum
- Peer trust after the incident vs. before

### Chapter 4 — Academic Outcome & Recognition
- Evaluator comments on transparency
- Peer evaluation excerpts (if comfortable sharing)
- Grade outcome

### Chapter 5 — Application to DC/Operations Environments
- Incident communication standards: why silence is a trust risk
- How I apply the same principle to stakeholder updates during live incidents
- AWS SLA communication expectations

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "What would you have done if your team had been angry?" | Acknowledged the frustration, focused the conversation on the plan. Emotion is valid; paralysis is not. |
| "Could you have fixed it alone and never told them?" | Technically possible, but the risk of submitting still-broken work was high. And the long-term trust cost of hiding it would have been permanent. |
| "How do you handle situations where full transparency isn't possible (e.g., security restrictions)?" | Acknowledge what you can't share, explain why, and be transparent about everything you ARE allowed to share. "I can't tell you X, but I can tell you the impact and timeline." |
| "How does this apply in a 24/7 DC shift environment?" | Every handover is a trust event. Incomplete incident context passed to the next shift creates risk. I document every open issue with current status and next steps — no gaps. |
| "What if the stakeholder reacted badly to honest bad news?" | I'd focus on what we can control: the plan and the timeline. A stakeholder who is upset about honest information is in a better position than one who is blindsided later. |
