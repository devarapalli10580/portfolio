# Practice Drills — Mock Interview Exercises

This file contains structured drills for both the behavioural LP track and
the technical track. Work through all sessions before your interview.

---

## How to Use This File

1. **Solo drill:** Record yourself on your phone (audio or video). Play it
   back and score yourself using the rubric at the bottom of this file.
2. **Partner drill:** Ask a friend, colleague, or study partner to read the
   questions and play the role of the interviewer. Brief them with the
   "Interviewer notes" column.
3. **Target:** Score at least "Hire" on every LP story before the interview.
   Score "Strong Hire" on your two best stories.

---

## Part 1 — LP Behavioural Drills

### Session A: 30-Minute Rapid-Fire (Phone Screen Simulation)

**Instructions:** Answer each question in ≤ 2 minutes. No notes. Record audio.

| # | Question | LP | Primary Story to Use |
|---|---|---|---|
| 1 | Tell me about a time you took action without waiting for all the information. | Bias for Action | Login/MFA Fix |
| 2 | Tell me about a time you failed and what you learned. | Learn & Be Curious | BTech ML Capstone |
| 3 | Describe a time you disagreed with a decision. What did you do? | Have Backbone | Cabling Rework |
| 4 | Tell me about a time you dug deep to find the root cause of a problem. | Dive Deep | ToR Fiber Incident |
| 5 | Tell me about a time you admitted a mistake to your team. | Earn Trust | BTech ML Capstone (Trust angle) |
| 6 | Tell me about something you did outside your formal job scope. | Ownership | Incident Response Efficiency |
| 7 | Tell me about a time you delivered a result despite obstacles. | Deliver Results | Engagement/Retention |

**After recording:** Listen back and check:
- [ ] Each answer ≤ 2 minutes when spoken
- [ ] "I" used instead of "we" for your actions
- [ ] At least one metric in every Result
- [ ] No filler phrases ("um", "like", "basically") more than twice per answer
- [ ] Clear ending — no trailing off

---

### Session B: 50-Minute Deep Dive (Virtual On-Site Simulation)

**Instructions:** Partner plays interviewer. Each LP gets 8 minutes: 5 for
your story, 3 for follow-ups from the list below. Rotate through 4 LPs per
session, then do the remaining 3 in a second session.

#### Dive Deep — Follow-up Script for Interviewer

> Read your questions naturally; don't telegraph which LP you're testing.

1. "Walk me through your diagnostic process step by step."
2. "How did you confirm the root cause before taking action?"
3. "What would have happened if you had acted on a wrong assumption?"
4. "What tools did you use and why did you choose those over alternatives?"
5. "Was there anything you missed on your first pass?"

#### Bias for Action — Follow-up Script for Interviewer
1. "How did you assess the risk before acting?"
2. "What information did you not have at the time? How did you handle that gap?"
3. "What would you have done differently if the action turned out to be wrong?"
4. "How did you communicate the risk to your stakeholders?"
5. "Was there a faster option? Why didn't you choose it?"

#### Earn Trust — Follow-up Script for Interviewer
1. "How did the other people react when you admitted the mistake?"
2. "Could you have fixed it without telling anyone? Why didn't you?"
3. "How do you keep stakeholders informed in a fast-moving incident?"
4. "What's the hardest piece of honest feedback you've given someone?"
5. "Tell me about a time when your transparency created more problems, not fewer."

#### Ownership — Follow-up Script for Interviewer
1. "Did anyone ask you to do this or did you take it on yourself?"
2. "What would have happened if you hadn't done this?"
3. "How did you get buy-in from management?"
4. "What did you do to make sure the improvement lasted after you were done?"
5. "How did this affect your other responsibilities?"

#### Have Backbone — Follow-up Script for Interviewer
1. "What was the other person's strongest argument for their position?"
2. "At what point did you decide to commit even though you disagreed?"
3. "How did you make sure your objection was heard professionally?"
4. "What would you have done if they still said no after you explained your reasoning?"
5. "Has there been a time you raised a concern and turned out to be wrong? What happened?"

#### Learn & Be Curious — Follow-up Script for Interviewer
1. "What specifically did you read or practise to learn this?"
2. "How did you measure whether you had actually learned it?"
3. "How did this change the way you approach similar problems now?"
4. "Was there a time you learned something new and it still wasn't enough? What did you do?"
5. "What are you currently learning? Why?"

#### Deliver Results — Follow-up Script for Interviewer
1. "What was the biggest obstacle and how did you get past it?"
2. "How did you prioritise when you had competing demands?"
3. "What would you have done if you couldn't hit the target?"
4. "How did you communicate progress (or lack of it) to your stakeholders?"
5. "How did you know the result was actually good enough?"

---

### Session C: "Say It Out Loud" Exercises

These are rapid-fire short-form exercises. Say each answer aloud in ≤ 30 seconds.
No notes. The goal is fluency, not perfection.

1. Describe the ToR fiber incident in one sentence.
2. State the result of the Login/MFA project with the metric.
3. State the result of the BTech ML project with before/after accuracy.
4. Name three tools you would use to diagnose a network connectivity issue
   and what each one tells you.
5. Explain VLAN in one sentence to a non-technical person.
6. Explain Spine-Leaf topology in two sentences.
7. Name two Amazon Leadership Principles and their definitions.
8. What is the difference between an incident and a problem?
9. State your strongest story and which LP it maps to.
10. Finish this sentence: "The main thing I would bring to AWS is ___."

---

## Part 2 — Technical Drills

### Session D: Subnetting Speed Drill

Work through these without a calculator. Target: < 90 seconds each.

| # | Question | Answer |
|---|---|---|
| S1 | Network address of `10.10.10.130/26`? | `10.10.10.128` |
| S2 | Broadcast of `192.168.1.200/28`? | `192.168.1.207` |
| S3 | How many /27 subnets in a /24? | 8 |
| S4 | Usable hosts in a /29? | 6 |
| S5 | Is `10.0.0.200` in the same /25 as `10.0.0.100`? | No (100 is in .0/25; 200 is in .128/25) |
| S6 | Summary route for `192.168.4.0/24` and `192.168.5.0/24`? | `192.168.4.0/23` |
| S7 | Network address of `172.31.200.150/20`? | `172.31.192.0` |

**Mark yourself:**
- [ ] All 7 correct in < 10 minutes — good
- [ ] All 7 correct in < 7 minutes — strong
- [ ] All 7 correct in < 5 minutes — excellent

---

### Session E: Whiteboard/Paper Network Scenario

Draw this topology on paper and answer the questions:

```
Internet
    |
  Router R1 (10.0.0.1/30 WAN; 192.168.1.1/24 LAN)
    |
  L3 Switch SW1 (192.168.1.2/24 uplink; VLAN 10: 10.10.10.1/24, VLAN 20: 10.10.20.1/24)
   / \
 SW2  SW3   (access switches, VLAN 10 and VLAN 20 respectively)
  |    |
Server-A  Server-B
(VLAN 10)  (VLAN 20)
```

**Questions:**

1. Server-A (10.10.10.100/24) tries to ping Server-B (10.10.20.100/24).
   What path does the traffic take?

   **Answer:** Server-A → SW2 (access, VLAN 10) → SW1 (inter-VLAN routing:
   routes from 10.10.10.0/24 to 10.10.20.0/24) → SW3 (access, VLAN 20) → Server-B.
   The traffic goes through SW1's Layer-3 routing function.

2. Server-A cannot reach the internet. Server-B can. What do you check first?

   **Answer outline:**  
   (1) Confirm Server-A's default gateway is 10.10.10.1.  
   (2) Ping Server-A's default gateway from Server-A.  
   (3) Confirm SW1 has a default route pointing to R1.  
   (4) Check whether R1 has a route back to 10.10.10.0/24 (or a route to
   SW1 that covers it).  
   (5) Compare Server-A and Server-B configs — is there a different route or
   ACL applied to VLAN 10?

3. R1's WAN link goes down. What happens to Server-A and Server-B connectivity?

   **Answer:** Both lose internet access. They can still communicate with each
   other because that traffic stays within SW1's inter-VLAN routing (does not
   need R1). All traffic destined for the internet will be dropped at R1.

---

### Session F: CLI Recall Drill

Write (or type) each command from memory before checking:

| Task | Cisco IOS | JunOS |
|---|---|---|
| Show all interfaces and their status | `show interfaces status` | `show interfaces terse` |
| Show routing table | `show ip route` | `show route` |
| Show MAC address table | `show mac address-table` | `show ethernet-switching table` |
| Show STP state for VLAN 10 | `show spanning-tree vlan 10` | `show spanning-tree bridge` |
| Show ARP table | `show ip arp` | `show arp` |
| Show BGP neighbor summary | `show bgp summary` | `show bgp summary` |
| Save configuration | `copy run start` | `commit` (already persistent) |
| Roll back last change | `configure replace` (or restore from archive) | `rollback 1` then `commit` |

---

## Part 3 — Full Mock Interview (60 minutes)

### Structure
| Segment | Time | Content |
|---|---|---|
| Intro & "Tell me about yourself" | 5 min | 90-second background pitch |
| LP Round 1 (2 LP questions) | 20 min | 8-min stories + follow-ups |
| Technical Round | 20 min | Mix from Sessions D, E, F |
| LP Round 2 (2 LP questions) | 10 min | 2-min versions only |
| Candidate Q&A | 5 min | 2–3 prepared questions for the interviewer |

### "Tell Me About Yourself" Script Template

> Target: 90 seconds. Structured as: Background → Current Role → Why AWS.

"I'm Naga Devarapalli — I have a background in data center operations and
networking, currently working as a [title] at [company] where I [one sentence:
key responsibility]. Before that I was a [prior role] at [prior company] where
I [one sentence]. I'm pursuing my Master's in AI and Data Analytics at Indiana
Wesleyan University, which has deepened my understanding of [relevant area].
I'm interested in this role because [one sentence connecting your experience to
the specific AWS role]. [Closing: what you bring specifically.]"

---

### Prepared Questions to Ask the Interviewer

Use 2–3 of these. Avoid questions answered in the JD.

1. "What does the first 90 days typically look like for someone in this role —
   is there a structured ramp-up or do new technicians get thrown straight in?"
2. "What are the most common incident types you see in this DC, and what does
   the on-call escalation path look like?"
3. "How does the team approach knowledge sharing between shifts — are there
   formal handover templates or is it more informal?"
4. "What does progression look like from Technician level — what skills
   distinguish someone who advances quickly?"
5. "What's the biggest operational challenge the team is working through right now?"

---

## Self-Scoring Rubric

Use this rubric after every recorded session. Score each dimension 1–4.

### LP Story Scoring

| Dimension | 1 — Needs Work | 2 — Developing | 3 — Hire | 4 — Strong Hire |
|---|---|---|---|---|
| **Situation** | Vague/generic | Some context, unclear stakes | Clear context, stakes apparent | Vivid, relevant, exactly what the LP needs |
| **Task** | "We" throughout | Some "I", unclear ownership | "I" used, responsibility clear | Specific, unambiguous personal ownership |
| **Action** | One vague step | Multiple steps but "why" missing | Steps + some reasoning | Steps + reasoning + alternatives considered |
| **Result** | No metric | Vague improvement ("better") | One metric with timeframe | Multiple metrics, stakeholder reaction, and lasting impact |
| **LP Alignment** | Could be any LP | Loosely related | Story clearly supports the LP | Story is the best possible illustration of the LP |
| **Timing** | < 1 min or > 4 min (2-min version) | 2:15–2:30 | 1:45–2:15 | 1:50–2:05 — crisp, nothing wasted |
| **Delivery** | Multiple filler words, trailing off | Occasional filler | Confident, clear | Conversational + confident, pauses for effect |

**Score interpretation:**
- 24–28: Strong Hire territory — minimal refinement needed
- 18–23: Hire territory — work on the weakest 1–2 dimensions
- < 18: Focus here first — re-draft the story using the worksheet

---

### Technical Scoring

| Dimension | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **Accuracy** | Major error | Minor error | Correct but incomplete | Correct and complete |
| **Structure** | No structure | Some structure | C-A-R-T framework attempted | C-A-R-T applied naturally |
| **Depth** | Surface only | One layer deep | Two layers deep | Volunteers tradeoffs and edge cases |
| **Speed** | > 3× target time | 2× target time | Within 1.5× target | At or under target |

---

## Weekly Self-Assessment Tracker

| Date | Session | Weakest Dimension | Score (avg) | Action for Next Session |
|---|---|---|---|---|
| | A (30-min rapid fire) | | | |
| | B (deep dive LP) | | | |
| | C (say it out loud) | | | |
| | D (subnetting speed) | | | |
| | E (whiteboard scenario) | | | |
| | F (CLI recall) | | | |
| | Full mock | | | |

---

*The goal is not perfection — it is reliability. A consistent 3 on every
dimension beats an occasional 4 with frequent 1s. Practise until your
stories are automatic, then focus on conversational naturalness.*
