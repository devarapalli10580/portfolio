# Story: Dive Deep — ToR Switch / Loose Fiber / Packet Loss

**LP:** Dive Deep  
**Secondary LP:** Customer Obsession, Deliver Results  
**Experience:** IT Support & Technical Intern, ZelfStudie  
**Code name:** ToR-Fiber-Incident

---

## Metrics Checklist

- [ ] Time to full service restoration: **~30 minutes** ✓
- [ ] Incident reduction after monitoring enhancement: **~25% in the following quarter** ✓
- [ ] Number of affected servers: **[X servers]**
- [ ] Customer/stakeholder impact: **[Y users/applications affected]**
- [ ] Tool used to verify signal post-reseating: **Fluke tester** ✓
- [ ] Firmware update scheduled for: **[next maintenance window]**
- [ ] Alert type implemented: **automated link-state monitoring** ✓

---

## 2-Minute Version (~250 words)

> Use for phone screens.

A stakeholder escalated an urgent ticket: several production servers running
customer-facing applications were experiencing intermittent connectivity drops.
The symptoms were random-seeming — packets dropping, then recovering, then
dropping again.

I started methodically from the data, not a guess. I pulled server logs and
ran Wireshark to capture packets — within minutes I could see significant packet
loss and intermittent timeouts. That told me the disruption was at the network
level, not the application. I then ran `ping` and `traceroute` to map the path
and isolated the fault to the **Top-of-Rack (ToR) switch** directly upstream
of the affected servers.

Physical inspection confirmed a loose fiber cable on the primary uplink port —
intermittent enough to cause packet loss but not a full link-down event, which
is why monitoring hadn't caught it. I reseated the fiber, used a **Fluke tester**
to verify signal integrity (not just visual confirmation), and restored service.
While I was there, I flagged outdated switch firmware as a contributing
stability risk and scheduled a maintenance-window update with the network team.

Service was fully restored in **approximately 30 minutes**. I then documented
the event in ServiceNow and recommended automated link-state monitoring alerts
as a preventive measure. That recommendation was implemented, and similar
incidents dropped by **approximately 25% over the following quarter**.

The key was going past the symptom — "servers are dropping" — down to the
physical layer, using tools to confirm each layer before moving to the next.

---

## 8-Minute Version (~650 words)

> Use for virtual on-site loops.

**Situation:**  
I was on shift at ZelfStudie, responsible for infrastructure monitoring and first-
response troubleshooting. An urgent ticket came in from a key stakeholder: several
servers were experiencing frequent connectivity drops. These weren't background
servers — they were running customer-facing applications with real-time data
processing. Every minute of degraded performance had a direct customer impact.

Intermittent connectivity issues are among the hardest to diagnose because the
symptoms disappear and reappear, making it tempting to reseat a cable, declare
victory, and move on without confirming the root cause.

**Task:**  
I was responsible for first-response diagnosis and resolution. I also needed to
keep stakeholders informed in real time and produce a clear post-incident
record. Most importantly: I needed to confirm the root cause — not just make
the symptom go away — so we could prevent recurrence.

**Action:**  
*Layer 7 to Layer 1 — start with data, follow the signal down:*

**Step 1 — Server logs and monitoring tools.**  
I pulled server-side logs first to confirm that the issue was connectivity-
related, not application-level. Logs showed a high count of dropped connections
with no application errors — this was a network problem, not a software bug.

**Step 2 — Packet capture with Wireshark.**  
I ran Wireshark on one of the affected servers. The capture was clear: repeated
packet loss bursts, intermittent TCP retransmissions, and timeout events. The
pattern was consistent with a physical-layer intermittent fault — not a
misconfigured route or a flapping BGP session, which would look different.

**Step 3 — Hop-by-hop with ping and traceroute.**  
I ran `ping` to baseline the packet-loss rate (approximately [X%] loss to the
default gateway) and then `traceroute` to identify the failing hop. The RTT
spikes and drops were concentrated at **the first hop — the ToR switch**
directly connected to the affected servers. Everything downstream was clean.

**Step 4 — Physical inspection.**  
I went to the rack. The ToR switch's primary uplink port had a fiber cable that
was not fully seated — it had a very slight outward rotation, enough to degrade
the optical signal intermittently but not enough to trigger a link-down alarm.
This is a known failure mode with LC/SC connectors under slight cable tension.

**Step 5 — Verify, don't assume.**  
I reseated the cable. Then — critically — I used a **Fluke fiber tester** to
measure signal strength and confirm the link was performing within spec. A
visual reseat can look right but still have marginal attenuation. The Fluke
measurement gave me objective confirmation.

**Step 6 — Look one layer further.**  
While I had the switch open, I checked firmware. It was two versions behind the
current stable release. Outdated firmware on a network switch can introduce
subtle stability issues. I couldn't update it immediately without a maintenance
window, so I coordinated with the network team to schedule the update and
documented the firmware version in the incident ticket.

**Result:**  
Full service restoration in **approximately 30 minutes** from the time I took
ownership of the ticket. No further connectivity complaints from the stakeholder.
I documented the full diagnostic chain in ServiceNow — symptoms, tools used,
each step, findings, actions, and verification steps.

I also recommended implementing automated **link-state monitoring alerts**
(triggers when a port goes into a degraded state rather than waiting for full
link-down). This was implemented, and similar intermittent-connectivity incidents
dropped by **approximately 25% in the following quarter**.

My manager specifically cited the proactive monitoring recommendation in my
next performance review.

**What I'd do differently:**  
Start with a quick visual check of physical connections *before* the full
software-layer analysis. In this case, the physical cause was simple; I spent
several minutes on software layers first. A structured physical inspection at
step one (power → cabling → ports → optics) would have gotten me to the answer
faster.

---

## 15–20 Minute Expandable Outline

### Chapter 1 — Environment & Stakes
- ZelfStudie DC environment: rack count, network topology, customer-facing applications
- Why intermittent packet loss is harder to diagnose than a full link-down
- Stakeholder expectations and SLA context

### Chapter 2 — OSI-Layer Diagnostic Methodology
- Why I started at Layer 7 (application logs) and worked down to Layer 1
- Wireshark capture methodology: filter expressions used, how I read the output
- `ping` vs. `traceroute`: what each tells you and what it doesn't

### Chapter 3 — Network Topology Understanding
- ToR switch role: why it's the first hop for all rack servers
- How the uplink topology (ToR → aggregation → core) shapes the blast radius
- Why a fault on the ToR primary uplink affects all servers in that rack

### Chapter 4 — Physical Layer Diagnosis in Detail
- Types of fiber connectors (LC, SC) and common failure modes
- How slight cable tension causes intermittent signal loss
- Fluke tester: what dB loss range is acceptable, what I measured, what out-of-spec looks like

### Chapter 5 — Firmware as a Risk Factor
- Why outdated firmware is relevant to stability (CRC errors, hardware-offload bugs)
- How to schedule a firmware update with minimal risk (maintenance window, rollback plan)
- Communication with network team: what I included in the request

### Chapter 6 — Post-Incident Actions
- ServiceNow documentation: fields I filled in, ticket categorisation
- Link-state monitoring: what it monitors, how it differs from SNMP polling
- Preventive measure implementation timeline and owner

### Chapter 7 — Lessons for AWS Scale
- At AWS scale, intermittent faults on ToR switches can affect hundreds of servers
- Importance of automated link-state alerting in large DC environments
- Why physical layer verification tools (OPM, Fluke, VFL) are non-negotiable

---

## Common Follow-Up Questions & Strong Answer Bullets

| Follow-up | Key points |
|---|---|
| "How did you confirm it was the ToR and not a server NIC?" | `traceroute` showed clean baseline from the servers themselves to the first hop; the loss only appeared AT the first hop — the ToR switch. |
| "Why use Fluke and not just check the link LED?" | Link LEDs show link-up/link-down. They don't show marginal signal strength. A Fluke measures actual dBm loss, which can flag a degraded-but-connected cable. |
| "Why didn't you just swap the cable immediately without testing?" | Swapping without measuring would have resolved the symptom but not confirmed the fix. If the new cable also showed marginal attenuation, I would have swapped again indefinitely. |
| "What if it had been a Layer 3 routing problem instead?" | Then `traceroute` would have shown consistent high latency or dropped hops at a Layer 3 device further upstream. The per-hop data steers the diagnosis. |
| "How did you communicate with stakeholders during the 30 minutes?" | I sent one initial acknowledgement ("I have the ticket, here's what I'm investigating"), one midpoint update ("isolated to the ToR switch, investigating physical layer"), and a closure message with the root cause and fix summary. |
