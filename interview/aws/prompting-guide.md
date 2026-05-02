# AWS Interview Prep — Prompting Guide

> **Who this is for:** Naga Devarapalli preparing for an AWS Data Center Technician / Network Technician role.  
> Copy any prompt block below, paste it into ChatGPT or GitHub Copilot Chat, fill in the `[PLACEHOLDERS]`, and hit send.

---

## Table of Contents

1. [Input Checklist — what to gather before prompting](#1-input-checklist)
2. [Master Prompt Template](#2-master-prompt-template)
3. [Example Filled Prompts](#3-example-filled-prompts)
   - 3a. Customer Obsession — login/MFA ticket reduction
   - 3b. Bias for Action — ToR switch loose fiber incident
   - 3c. Dive Deep — engagement/retention analysis
4. [Length-Tuning Patterns](#4-length-tuning-patterns)
5. [Metric & LP Mapping Pattern](#5-metric--lp-mapping-pattern)
6. [Follow-Up Question Generator](#6-follow-up-question-generator)
7. [Technical Q&A Practice Pattern](#7-technical-qa-practice-pattern)
8. [Avoiding Fabrication — Ground Rules](#8-avoiding-fabrication--ground-rules)

---

## 1. Input Checklist

Fill this out **before** writing any prompt. The more you provide, the less the model has to invent.

| # | Field | Your value |
|---|-------|-----------|
| 1 | Target role & level | e.g. *Data Center Technician I, AWS* |
| 2 | Leadership Principle(s) to address | e.g. *Customer Obsession, Bias for Action* |
| 3 | Story title / incident name | e.g. *ToR switch loose fiber* |
| 4 | Employer & dates (real or placeholder) | e.g. *ZelfStudie, Jan–Aug 2023* |
| 5 | Your exact job title at the time | e.g. *IT Support & Technical Intern* |
| 6 | Situation (1–2 sentences, your words) | paste raw notes |
| 7 | Task (your specific responsibility) | paste raw notes |
| 8 | Actions you took (bullet list) | paste raw notes |
| 9 | Measurable results | e.g. *30 min MTTR, 25 % incident reduction* |
| 10 | Tools & tech used | e.g. *Wireshark, Fluke tester, ServiceNow, fiber OTDR* |
| 11 | Stakeholders impacted | e.g. *network engineers, IT manager, end-users* |
| 12 | Constraints | e.g. *no change window available, skeleton crew* |
| 13 | What you would do differently | honest reflection |
| 14 | Target answer length | 2 min / 8 min / 15–20 min |

> **Placeholder convention:** Use `[COMPANY]`, `[DATE]`, `[METRIC]` for any detail you are unsure of. Tell the model *"do not invent values for placeholders — ask me instead."*

---

## 2. Master Prompt Template

````text
You are an Amazon interview coach specialising in Leadership Principle behavioural interviews for
[TARGET ROLE] at [LEVEL, e.g. "L4 Data Center Technician"].

## My story inputs
- **Situation:** [Paste your raw situation notes here]
- **Task:** [Paste your raw task notes here]
- **Actions:** [Paste your raw action bullet points here]
- **Result:** [Paste your raw result notes, including any metrics]
- **Tools / tech used:** [List tools, protocols, hardware]
- **LP(s) to highlight:** [List 1–3 Leadership Principles]
- **Target length:** [2 min | 8 min | 15–20 min]

## Instructions
1. Rewrite the story in clean STAR format (Situation → Task → Action → Result).
2. Open with a one-sentence hook that names the LP.
3. Use active voice and first person throughout.
4. Embed the measurable result in the Result section using the exact numbers I provided.
5. If any metrics are missing, insert the placeholder [METRIC] and ask me what the real value was — do NOT invent numbers.
6. End with a one-sentence takeaway that maps back to the LP and the AWS role.
7. Keep names (companies, managers) exactly as I write them; never substitute alternatives.
8. After the story, add a "What to watch out for" callout with 2–3 tricky follow-up questions the interviewer may ask.
````

---

## 3. Example Filled Prompts

### 3a. Customer Obsession — login/MFA ticket reduction

````text
You are an Amazon interview coach for a Data Center Technician I (L4) role.

## My story inputs
- **Situation:** At ZelfStudie (edtech company, IT Support & Technical Intern, Jan–Aug 2023),
  teachers and staff filed 15–20 login/MFA support tickets per week. Locked-out teachers could
  not access lesson plans or grading tools, directly disrupting the customer (student) experience.
- **Task:** Reduce login-related IT tickets and eliminate downtime for end users without adding
  headcount.
- **Actions:**
  - Pulled 3 months of ServiceNow data; found ~50 % were password resets, ~30 % MFA confusion.
  - Interviewed affected users to confirm root cause: lack of awareness about self-service options.
  - Created step-by-step screenshot guides; published on intranet homepage, login page, and posted
    physical flyers in teacher lounges.
  - Added MFA walkthrough to new-employee onboarding.
  - Created a dedicated Slack channel for quick login help, bypassing the ticket queue.
- **Result:** Login-related tickets dropped by 40 % within two months. Employees resolved their
  own issues in minutes instead of waiting hours. IT team redirected time to higher-priority
  infrastructure work.
- **Tools / tech used:** ServiceNow, Slack, intranet CMS, MFA (unspecified provider).
- **LP(s) to highlight:** Customer Obsession, Bias for Action.
- **Target length:** 8 min (≈ 600–700 words spoken).

## Instructions
1. Rewrite as a polished STAR answer, 600–700 spoken words.
2. Open with a one-sentence LP hook.
3. Embed the 40 % metric and the 2-month timeframe naturally — do not invent other numbers.
4. If a metric is missing, insert [METRIC] and ask me.
5. End with a sentence connecting this behaviour to supporting AWS customers' uptime expectations.
6. After the story, list 3 follow-up questions this story may trigger.
````

---

### 3b. Bias for Action — ToR switch loose fiber incident

````text
You are an Amazon interview coach for a Data Center Technician I (L4) role.

## My story inputs
- **Situation:** At ZelfStudie (IT Support & Technical Intern), a stakeholder escalated an urgent
  ticket: critical servers running customer-facing applications were dropping connections
  intermittently. Real-time data processing was affected.
- **Task:** Diagnose and restore service as fast as possible; keep network engineers and IT
  management informed; document for future prevention.
- **Actions:**
  - Reviewed server logs and network monitoring dashboards; observed high dropped-connection counts.
  - Used Wireshark packet capture — identified significant packet loss and intermittent timeouts.
  - Ran ping and traceroute; localised fault to the Top-of-Rack (ToR) switch on the primary uplink.
  - Physical inspection revealed a loose fiber cable on the primary uplink port.
  - Reseated fiber cable; verified with Fluke tester — signal confirmed stable.
  - Noted switch was running outdated firmware; flagged to network team for a scheduled off-hours
    update to prevent recurrence.
  - Ran post-fix Wireshark, ping, and traceroute — all clean.
  - Documented full troubleshooting steps in ServiceNow.
  - Recommended automated link-state monitoring alerts; recommendation was later implemented.
- **Result:** Full service restored within 30 minutes. Zero further complaints from stakeholders.
  Automated link-state alerts implemented next quarter; similar incidents reduced by 25 %.
- **Tools / tech used:** Wireshark, ping, traceroute, Fluke cable tester, fiber optic cables,
  ToR switch, ServiceNow.
- **LP(s) to highlight:** Bias for Action, Dive Deep, Ownership.
- **Target length:** 8 min (≈ 600–700 words spoken).

## Instructions
1. Rewrite as a polished STAR answer, 600–700 spoken words.
2. Emphasise the speed of decision-making (Bias for Action) and physical root-cause work (Dive Deep).
3. Use exact figures: 30 min MTTR, 25 % incident reduction — do NOT alter them.
4. Any missing metric → insert [METRIC] and ask me.
5. Close with a sentence on how this approach maps to AWS data center SLA expectations.
6. After the story, list 3 likely follow-up questions.
````

---

### 3c. Dive Deep — engagement/retention analysis (BTech capstone)

````text
You are an Amazon interview coach for a Data Center Technician I (L4) role.

## My story inputs
- **Situation:** BTech Computer Science final-year capstone (2022–2023). Built a student
  performance prediction model for a panel of faculty and industry judges. Accounted for 30 % of
  final grade. Chose a deep learning model (3 hidden layers, 128 neurons each, 10,000+ records)
  without thorough data preprocessing.
- **Task:** Achieve ≥ 85 % accuracy. Discover and fix the root cause when the model only hit 52 %
  with four days remaining.
- **Actions:**
  - Admitted the failure to teammates immediately; called an emergency meeting.
  - Dove into the dataset: found missing values, inconsistent grading scales, irrelevant features
    (50+ attributes) introducing noise.
  - Cleaned data: removed ~5 % corrupted records, normalised grading scales.
  - Feature selection: reduced from 50+ to the 10 most predictive attributes.
  - Switched model from deep neural network to a Decision Tree Classifier (simpler, interpretable).
  - Hyperparameter tuned with Grid Search.
- **Result:** Accuracy jumped from 52 % to 89 %, exceeding the 85 % goal. Processing time reduced
  by 40 %. Panel praised the ability to identify mistakes and pivot quickly.
- **Tools / tech used:** Python (scikit-learn), pandas, Grid Search CV, Decision Tree Classifier.
- **LP(s) to highlight:** Dive Deep, Learn and Be Curious, Earn Trust.
- **Target length:** 8 min (≈ 600–700 words spoken).

## Instructions
1. Rewrite as a polished STAR answer, 600–700 spoken words.
2. Emphasise the diagnostic process (Dive Deep) and the willingness to abandon a sunk-cost
   approach.
3. Use exact figures: 52 % → 89 %, 40 % processing reduction, 4 days remaining.
4. Do NOT invent professor names, university grades, or team member names.
5. Close with a sentence connecting this experience to diagnosing ambiguous data center faults.
6. After the story, list 3 likely follow-up questions.
````

---

## 4. Length-Tuning Patterns

### Tighten to 60 seconds (~120 words)

````text
Take the STAR answer below and compress it to a 60-second elevator version (~120 words spoken).
Keep: the LP hook, the single most impressive action, and the headline metric.
Cut: all secondary actions, background context beyond one sentence, and the "what I'd do
differently" section.

[PASTE YOUR FULL STAR ANSWER HERE]
````

---

### Expand to 15–20 minutes (chaptered outline)

````text
Take the STAR answer below and expand it into a 15–20 minute deep-dive presentation outline.
Structure it as 5 chapters with headers:
  1. Context & Stakes (why this mattered to the customer / business)
  2. Diagnosis Deep-Dive (exact steps, tools used, what each tool revealed)
  3. Decision Points (trade-offs considered, why you chose each action)
  4. Results & Verification (metrics, how you confirmed the fix held)
  5. Lessons & What I'd Change (honest reflection, process improvements driven)
Under each chapter, provide bullet talking points, not prose.

[PASTE YOUR FULL STAR ANSWER HERE]
````

---

### Two-minute version (~240 words)

````text
Condense the STAR answer below to a crisp 2-minute version (~240 words spoken).
- Keep: situation (1 sentence), task (1 sentence), top 3 actions, headline result + metric.
- Remove: all "step N" sub-bullets and the recommendation/follow-up work.
- Do NOT drop any real numbers already present.

[PASTE YOUR FULL STAR ANSWER HERE]
````

---

## 5. Metric & LP Mapping Pattern

Use this when you have a draft answer and want to stress-test it against Amazon's criteria.

````text
Review the STAR answer below and:
1. List every quantitative metric present. Flag any claim that sounds impressive but has no number
   (insert [NEEDS METRIC] next to it).
2. Map each action to the most relevant Amazon Leadership Principle. If an action doesn't clearly
   map to any LP, flag it as [WEAK LP LINK].
3. Suggest one additional metric I could add to make the Result section more compelling (give me
   a specific question to think about, e.g. "How many tickets per week before vs. after?").
4. Confirm the opening hook names the correct primary LP.

[PASTE YOUR STAR ANSWER HERE]
````

---

## 6. Follow-Up Question Generator

Interviewers probe for depth after a STAR answer. Use this pattern on any finished story.

````text
I am practising for an Amazon behavioural interview for a Data Center Technician role.
Here is my STAR answer for [LP NAME]:

[PASTE YOUR STAR ANSWER HERE]

Generate 8 realistic follow-up questions an Amazon interviewer might ask, covering:
- Clarifying the scale of impact ("How many customers were affected?")
- Challenging the decision ("Why didn't you escalate sooner?")
- Probing ownership ("What would have happened if you hadn't spotted this?")
- Testing judgement ("Would you make the same call again?")
- Checking technical depth ("Walk me through what Wireshark showed you.")
- Exploring failure modes ("What could have gone wrong with your fix?")
- LP cross-check ("Where does Frugality show up here?")
- Improvement mindset ("What process did you change after this?")

For each question, provide a one-sentence hint on what the interviewer is really testing.
````

---

## 7. Technical Q&A Practice Pattern

Use this to drill the hard-skills portion of an AWS data center interview.

````text
You are a senior AWS data center interviewer. Quiz me on the following technical topics.
Ask ONE question at a time, wait for my answer, then give brief feedback (correct / partially
correct / incorrect + explanation), and move to the next question.

Topics to cover:
- OSI model layers 1–3 (physical signals, MAC addressing, IP routing)
- Subnetting: CIDR notation, /24 vs /25 vs /30, calculating usable hosts
- Linux command-line: find, grep, df, top, netstat/ss, systemctl, journalctl
- Fiber optics: single-mode vs multi-mode, LC vs SC connectors, OTDR usage, cleaning procedures,
  dB loss thresholds
- Network CLI tools: ping, traceroute/tracert, iperf3, tcpdump, nmap (basic), ip addr / ifconfig
- Structured cabling: TIA-568 standards, cable categories (Cat5e / Cat6 / Cat6A), patch panel best
  practices
- Data center power: PDU types, UPS, hot-aisle/cold-aisle containment
- ToR / EoR switch architectures, uplink redundancy, LACP/bonding basics
- Ticketing and ITSM: ServiceNow ticket lifecycle, P1/P2/P3 severity definitions, escalation paths

Start with an easy warm-up question and increase difficulty progressively.
If I answer incorrectly twice on the same topic, give me a brief explanation and move on.
````

---

## 8. Avoiding Fabrication — Ground Rules

Follow these rules every time you prompt an AI for interview content.

### ✅ DO

- **Provide your own numbers.** Give the AI the exact metric (e.g., "30 minutes MTTR") and tell it to use that figure verbatim.
- **Use named placeholders.** Write `[MANAGER_NAME]`, `[COMPANY]`, `[DATE]` anywhere you are unsure. Instruct the model: *"Do not fill in placeholders — ask me first."*
- **Anchor stories to real tools.** List every tool you actually used (Wireshark, Fluke tester, ServiceNow, fiber OTDR, ping, traceroute). The AI will weave them in accurately.
- **Review every number.** After the AI responds, manually check every figure against your input. If a new number appeared that you didn't supply, delete or replace it.
- **Keep company names consistent.** Decide once: *ZelfStudie* or *Zelfstudie*? Use exactly that spelling in every prompt.

### ❌ DON'T

- **Don't ask the AI to "make up a good story."** Always start from real events.
- **Don't accept invented metrics.** If the AI writes "reduced downtime by 60 %" and you never said 60 %, flag it immediately.
- **Don't let the AI name real people** (managers, colleagues) unless you supplied those names.
- **Don't use AI-generated technical details** you cannot explain yourself. If you can't walk an interviewer through how a Fluke tester works, remove the reference.
- **Don't change company names or dates** between stories. Interviewers cross-reference.

### Consistency checklist before any interview

- [ ] All company names spelled identically across every story.
- [ ] All dates are plausible and non-overlapping.
- [ ] Every metric you quote is one you can defend with a brief explanation.
- [ ] You can pronounce and explain every tool you mention.
- [ ] Each story maps to a *different* primary Leadership Principle (avoid reusing the same LP more than twice).
- [ ] No placeholder `[BRACKET]` text remains in your final answer.

---

*Last updated: May 2026 — tailored for Naga Devarapalli, AWS Data Center Technician / Network Technician interview preparation.*
