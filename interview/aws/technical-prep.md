# Technical Preparation Guide — AWS DC Technician

This guide covers all listed competency areas with:
- Concept summaries
- Sample interview questions (with answer outlines)
- Mini-labs you can run on a laptop or free cloud instance

---

## How to Use This Guide

Work through sections 1–13 in order over days 4, 6, and 9 of the study plan.
For each section:
1. Read the concept summary.
2. Answer the sample questions out loud before reading the answer outline.
3. Complete the mini-lab (mark ✅ when done).
4. If you don't have lab access, write out the steps you would take.

---

## Section 1 — Communication (Verbal & Written)

### Key Principles
- **Structured communication:** Lead with the conclusion, then the evidence
  (BLUF: Bottom Line Up Front). Useful for incident summaries and status updates.
- **Audience calibration:** Technical depth should match the listener — junior
  technician vs. engineering manager vs. end-user requires different language.
- **Written standards:** Incident tickets should include: what was observed,
  what was done, what the outcome was, and what the next step is. No ambiguity.
- **Verbal in incidents:** Use read-back confirmation ("I'm going to power-cycle
  port 24 on rack A3 — confirming that's approved?").

### Sample Questions
1. **Q:** How do you communicate a technical incident to a non-technical stakeholder?  
   **A outline:** Start with impact ("X users are affected"), then action ("I am
   currently investigating Y"), then timeline ("I expect an update in Z minutes").
   Avoid jargon. Update proactively — don't wait to be asked.

2. **Q:** Walk me through how you document a completed incident ticket.  
   **A outline:** Symptom description → initial hypothesis → investigation steps
   taken (with tools and findings) → root cause → fix applied → verification
   method → preventive recommendation. Every field filled; no "resolved" with
   no description.

---

## Section 2 — Networking Fundamentals & OSI Model (L1/L2/L3)

### Layer Reference

| Layer | Name | Devices / Protocols | Relevant Tools |
|---|---|---|---|
| L1 | Physical | Cables, fiber, SFPs, transceivers | VFL, OPM, Fluke, OTDR |
| L2 | Data Link | Ethernet, MAC addresses, VLANs, STP, LACP | `show mac address-table`, `show spanning-tree` |
| L3 | Network | IP, ICMP, routing protocols (OSPF, BGP) | `ping`, `traceroute`, `show ip route` |
| L4 | Transport | TCP, UDP | Wireshark, `netstat`, `ss` |
| L7 | Application | HTTP/S, DNS, DHCP | `curl`, `dig`, `nslookup` |

### Key Concepts
- **STP (Spanning Tree Protocol):** Prevents Layer-2 loops by blocking
  redundant paths. Modern variant: RSTP (802.1w) for faster convergence.
- **VLAN:** Logical segmentation of a broadcast domain. Tagged (802.1Q) vs.
  untagged (access) ports.
- **ARP:** Resolves IP to MAC. `arp -a` shows the local ARP table.
  Stale ARP entries can cause connectivity issues.
- **LACP / Port-Channel:** Bundles multiple physical links into one logical
  link for redundancy and increased bandwidth.

### Sample Questions
3. **Q:** A server can ping its default gateway but not an external IP. What do
   you check?  
   **A outline:**  
   (1) Confirm the default gateway is reachable (already confirmed).  
   (2) Check if the gateway has a route to the destination: `show ip route [destination]`.  
   (3) Check DNS is not the issue: ping by IP, not hostname.  
   (4) Check firewall ACLs on the gateway or upstream device.  
   (5) Check whether the issue is specific to one server or all servers on the subnet (isolates whether it's a host config or network config problem).

4. **Q:** What is a broadcast storm and how do you prevent it?  
   **A outline:** A broadcast storm occurs when a Layer-2 loop causes broadcast
   frames to circulate indefinitely, saturating bandwidth. STP prevents loops by
   placing redundant ports in a blocking state. Storm control (rate-limiting
   broadcast traffic) is a complementary protection. In modern DCs, RSTP
   converges in 1–2 seconds vs. STP's 30–50 seconds.

### Mini-Lab
```
# On any Linux host with ip/iproute2:
ip addr show          # view interfaces and IP assignments
ip route show         # view routing table
arp -a                # view ARP cache
ping -c 4 8.8.8.8     # basic connectivity test
traceroute 8.8.8.8    # hop-by-hop path
```

---

## Section 3 — Subnetting

### CIDR Quick-Reference

| Prefix | Subnet Mask | Hosts per Subnet |
|---|---|---|
| /24 | 255.255.255.0 | 254 |
| /25 | 255.255.255.128 | 126 |
| /26 | 255.255.255.192 | 62 |
| /27 | 255.255.255.224 | 30 |
| /28 | 255.255.255.240 | 14 |
| /29 | 255.255.255.248 | 6 |
| /30 | 255.255.255.252 | 2 |

**Formula:** Hosts = 2^(32 − prefix) − 2  
**Network address** = first address in block; **Broadcast** = last address.

### Practice Subnetting Question 1

**Question:** You are given the network `192.168.10.0/25`. What is the:
- Subnet mask?
- Network address?
- Broadcast address?
- Usable host range?
- Number of usable hosts?

**Worked answer:**
- Subnet mask: `255.255.255.128`
- Network address: `192.168.10.0`
- Broadcast: `192.168.10.127`
- Usable range: `192.168.10.1 – 192.168.10.126`
- Usable hosts: 2^(32−25) − 2 = 2^7 − 2 = 128 − 2 = **126**

---

### Practice Subnetting Question 2

**Question:** You need to create 4 equal subnets from `10.0.0.0/24`. What
prefix length do you use? List all four network addresses.

**Worked answer:**
- 4 subnets require 2 additional bits borrowed → /24 + 2 = **/26**
- Each /26 has 64 addresses (62 usable)
- Subnet 1: `10.0.0.0/26`   (10.0.0.0 – 10.0.0.63)
- Subnet 2: `10.0.0.64/26`  (10.0.0.64 – 10.0.0.127)
- Subnet 3: `10.0.0.128/26` (10.0.0.128 – 10.0.0.191)
- Subnet 4: `10.0.0.192/26` (10.0.0.192 – 10.0.0.255)

---

### Practice Subnetting Question 3

**Question:** A device has IP `172.16.45.200/20`. What is its network address
and broadcast address?

**Worked answer:**
- /20 mask: `255.255.240.0`
- The third octet block size is 256 − 240 = **16**
- Subnets in the third octet: 0, 16, 32, 48, …
- 45 falls in the 32–47 range (32 + 16 = 48 → 45 < 48)
- Network address: `172.16.32.0`
- Broadcast: `172.16.47.255`
- Usable range: `172.16.32.1 – 172.16.47.254`

---

## Section 4 — Linux Familiarity

### Essential Commands for DC Operations

```bash
# Hardware / system info
lshw -short             # hardware summary
dmidecode -t 17         # memory slot info
lspci                   # PCI device list (NICs, HBAs)
lsblk                   # block device layout
df -h                   # disk usage
free -h                 # memory usage
uptime                  # load averages

# Networking
ip addr show            # interface IPs
ip link show            # link status (up/down)
ip route show           # routing table
ss -tuln                # listening ports (TCP/UDP)
netstat -rn             # routing table (legacy)
ethtool eth0            # NIC speed/duplex/link status

# Process / service
ps aux | grep <name>    # find process
systemctl status <svc>  # service status
journalctl -u <svc> -n 50  # last 50 log lines for service
dmesg | tail -50        # kernel ring buffer (hardware errors)

# File / log
tail -f /var/log/syslog       # live system log
grep -i error /var/log/messages | tail -20
```

### Sample Questions
5. **Q:** A server has no network connectivity after a reboot. How do you
   diagnose on the Linux command line?  
   **A outline:**  
   (1) `ip link show` — is the interface up?  
   (2) `ip addr show` — does it have an IP?  
   (3) Check `/etc/network/interfaces` or NetworkManager config.  
   (4) `ping 127.0.0.1` — loopback OK.  
   (5) `ping <default gateway>` — Layer 3 reachability.  
   (6) `dmesg | grep -i eth` — driver or hardware error?  
   (7) Check `ethtool <iface>` for link status (is the cable plugged in?).

6. **Q:** How do you find which process is listening on port 443?  
   **A outline:** `ss -tlnp | grep :443` or `netstat -tlnp | grep :443`.
   Output shows the PID and process name.

### Mini-Lab
```bash
# Run on any Linux VM or WSL:
ip addr show
ip route show
ss -tuln
dmesg | tail -20
df -h && free -h
```

---

## Section 5 — Fiber Optic Testing Tools

### Tool Reference

| Tool | Full Name | What It Measures | When to Use |
|---|---|---|---|
| **VFL** | Visual Fault Locator | Visible red laser shows breaks, bends, dirty connectors | Quick fault localisation; visible for up to ~5 km on SM fiber |
| **OPM / Light Meter** | Optical Power Meter | Received optical power in dBm | Verify signal strength at receiver end; confirm link budget |
| **OTDR** | Optical Time-Domain Reflectometer | Distance to every splice, connector, and break | Long runs, characterise the entire link, find buried faults |
| **Loopback** | Loopback connector/adapter | Reflects TX signal back to RX for equipment self-test | Verify transceiver TX/RX functionality before blaming the fiber |

### Key Metrics
- **Insertion loss:** Acceptable loss per connector ≤ 0.3 dB (LC); per splice ≤ 0.1 dB
- **Link budget:** Total allowed loss from TX power to RX sensitivity
  (e.g., a 10GBASE-LR SFP+ has a typical link budget of ~8–10 dB for a 10 km run)
- **OPM reading:** If power at receiver is below the RX sensitivity threshold
  (e.g., −14 dBm for 10GBASE-SR), the link will not come up

### Sample Questions
7. **Q:** You install a new fiber run and the link doesn't come up. Walk
   through your fiber testing process.  
   **A outline:**  
   (1) Check patch panel seating and connector cleanliness (inspect with
   fiber microscope or use cleaning kit).  
   (2) Use VFL to confirm there is no visible break or severe bend.  
   (3) Use OPM to measure received power. If below RX sensitivity, there is
   excessive loss — use OTDR to localise it.  
   (4) Run loopback test on the transceiver to confirm the optic itself is
   working.  
   (5) Check TX/RX polarity (TX on one end must connect to RX on the other).

8. **Q:** What is the difference between single-mode and multi-mode fiber?  
   **A outline:**  
   - **Multi-mode (OM3/OM4):** Larger core (50 µm), LED/VCSEL light source,
     shorter distances (up to ~400 m for 10G), lower cost. Used within DCs.  
   - **Single-mode (OS2):** Smaller core (9 µm), laser light source, longer
     distances (up to 10+ km), higher cost. Used between buildings or campuses.  
   - Key sign on the cable: orange = OM1/OM2, aqua = OM3/OM4, yellow = OS2.

---

## Section 6 — Cabling Best Practices

### Key Standards
- **TIA-942:** Data Center structured cabling standard (zones, pathways, spaces)
- **ANSI/TIA-568:** Commercial building telecommunications cabling
- **BICSI TDMM:** Data Center design and infrastructure management

### Best Practices Checklist
- [ ] Label both ends of every cable before installation
- [ ] Follow hot-aisle/cold-aisle separation for cable pathways
- [ ] Leave service loops at patch panels for moves/adds/changes
- [ ] Do not over-bend fiber (minimum bend radius: 10× cable OD in service,
  15× during installation)
- [ ] Bundle power and data cables separately (EMI prevention)
- [ ] Use correct cable categories: Cat6A for 10G runs; Cat6 for 1G
- [ ] Maintain consistent color coding: e.g., blue = data, red = admin, yellow = WAN/internet
- [ ] Document every run in a cable management system before closing the rack

### Sample Questions
9. **Q:** Why is cable management important in a data center from an
   operational perspective (not just aesthetics)?  
   **A outline:**  
   Three reasons: (1) Airflow — poor cable management in hot aisles restricts
   exhaust, raising temperatures and increasing cooling costs. (2)
   Troubleshooting speed — a well-labelled, accessible cable run lets you
   isolate a fault in minutes rather than hours. (3) Change management — moves,
   adds, and changes require disconnecting and reconnecting cables; poor
   management increases the risk of accidentally pulling the wrong cable.

---

## Section 7 — Major Network CLIs

### Cisco IOS — Essential Commands

```
! Interface status
show interfaces status
show interfaces GigabitEthernet0/1

! Routing
show ip route
show ip route 10.0.0.0 255.0.0.0

! Switching
show mac address-table
show vlan brief
show spanning-tree

! Diagnostics
ping 10.0.0.1 source GigabitEthernet0/0
traceroute 8.8.8.8
show log | tail

! Configuration
configure terminal
  interface GigabitEthernet0/1
    description SERVER-01
    switchport mode access
    switchport access vlan 10
    no shutdown
  end
copy running-config startup-config
```

### Juniper JunOS — Essential Commands

```
# Operational mode (>)
show interfaces terse
show route 10.0.0.0/8
show arp
show bgp summary
show log messages | last 20

# Configuration mode (# after 'configure')
set interfaces ge-0/0/1 description "SERVER-02"
set interfaces ge-0/0/1 unit 0 family ethernet-switching interface-mode access
set interfaces ge-0/0/1 unit 0 family ethernet-switching vlan members vlan10
commit
show | compare   # diff before commit
rollback 1       # revert last committed change
```

### Sample Questions
10. **Q:** You need to verify that a Cisco switch port connected to a server
    is up, in the correct VLAN, and not in a STP blocking state. What commands
    do you run?  
    **A outline:**  
    ```
    show interfaces GigabitEthernet0/X status   # link state, VLAN, duplex
    show vlan id 10                              # which ports are in VLAN 10
    show spanning-tree vlan 10 interface GigabitEthernet0/X  # STP state
    ```
    If in BLK state: verify STP topology, check for BPDUGuard, consider PORTFAST
    if this is an end-host port.

---

## Section 8 — Ethernet & IP Networking

### Key Concepts
- **Auto-negotiation:** Speed/duplex negotiated at link establishment.
  Duplex mismatch (one end forced full-duplex, other auto-negotiates to half)
  causes high collision rates and poor throughput — diagnose with `show interface`
  looking for CRC errors and late collisions.
- **Jumbo frames:** MTU > 1500 bytes (commonly 9000 bytes). Required for
  storage (iSCSI, NFS) and high-performance computing. Must be enabled
  end-to-end; a single device with standard MTU will cause fragmentation
  or drops.
- **802.3ad LACP:** Dynamic link aggregation. Requires matching speed,
  duplex, and VLAN on both sides.

### Sample Questions
11. **Q:** What causes CRC errors on a switch interface and how do you
    diagnose them?  
    **A outline:**  
    CRC errors indicate corrupted frames arriving at the interface.
    Causes: (1) cable fault or bad connector, (2) electromagnetic interference,
    (3) duplex mismatch, (4) faulty NIC or transceiver.
    Diagnose: `show interface GigabitEthernet0/X` — look at CRC error count
    trend (incrementing?), duplex setting, input errors. Physical: inspect
    cable and connector, swap cable, check transceiver seating.

---

## Section 9 — Large-Scale DC Networking Implementations & Support

### Topology Patterns
- **Three-tier (Core / Distribution / Access):** Traditional enterprise DC.
  Core = routing, Distribution = policy/aggregation, Access = server connectivity.
- **Spine-Leaf (two-tier):** Modern DC standard. Every Leaf connects to every
  Spine; no Leaf-to-Leaf links. Predictable, low-latency east-west traffic.
  Scales by adding Leaf switches (increases server density) or Spine switches
  (increases east-west bandwidth).
- **Fat-tree:** Research/HPC variant of Spine-Leaf with full bisectional bandwidth.

### Operational Considerations at Scale
- Change management: all changes in a large DC must go through a formal
  process (CAB at enterprise, automated gating at hyperscale)
- Maintenance windows: justify, scope, communicate, validate, rollback-plan
- Redundancy: dual-homed servers, LAG, ECMP routing, redundant power paths
- Monitoring: SNMP traps + streaming telemetry; alert on interface utilisation,
  error counters, temperature, power

### Sample Questions
12. **Q:** Describe how you would approach a network maintenance window in a
    production DC.  
    **A outline:**  
    (1) Document the change: what, why, expected impact, rollback plan.
    (2) Notify stakeholders: who, when, expected downtime window.
    (3) Validate pre-change state: capture `show` command outputs, confirm
    baseline.
    (4) Execute change step-by-step with a peer watching.
    (5) Validate post-change: repeat `show` commands, confirm traffic is
    flowing, ping critical paths.
    (6) Update the change ticket with outcome.
    (7) If something goes wrong: execute rollback before the window closes.

---

## Section 10 — Virtualised Enterprise Networking

### Key Technologies
- **VLANs on virtual switches:** Hypervisors (VMware ESXi, Hyper-V, KVM/OVS)
  have virtual switches. Server VLANs must match the upstream physical switch
  trunk configuration.
- **NIC teaming / bonding:** Multiple physical NICs bonded for redundancy
  and throughput. In ESXi: vSwitch teaming policies (active/active, active/standby).
- **SR-IOV:** Single Root I/O Virtualisation — partitions a physical NIC into
  multiple virtual functions for low-latency VM networking.
- **Overlay networks (VXLAN):** Tunnels L2 traffic over L3 routed networks.
  Used in SDN environments (VMware NSX, Cisco ACI) to decouple logical from
  physical topology. VNI (VXLAN Network Identifier) = analogous to VLAN ID,
  but 24-bit (16 M+ segments).

### Sample Questions
13. **Q:** A VM has no network connectivity after being migrated to a new host.
    What is your diagnostic process?  
    **A outline:**  
    (1) Confirm VM NIC is connected in hypervisor config.
    (2) Confirm VM is assigned to correct port group / vSwitch.
    (3) Confirm port group VLAN ID matches the physical switch trunk VLAN.
    (4) Check physical NIC on the new host: is the link up? `ethtool` or
    hypervisor host health.
    (5) If using overlay (VXLAN): confirm VTEP can reach peer VTEP (ping the
    VTEP IPs), confirm VNI is configured.

---

## Section 11 — IT Frameworks (ITIL, LEAN, AGILE)

### ITIL (IT Infrastructure Library)
- **Key processes relevant to DC operations:**
  - **Incident Management:** Restore service ASAP. MTTR is the key metric.
  - **Problem Management:** Find and eliminate root causes of recurring
    incidents. Creates Known Error records.
  - **Change Management:** CAB approval, change records, rollback plans.
  - **Configuration Management (CMDB):** Authoritative record of all CI
    (Configuration Items) — hardware, software, network devices.
  - **Service Level Management:** SLAs define expected availability (e.g.,
    99.9% = ≤8.7h downtime/year; 99.99% = ≤52 min/year).

### LEAN in Operations
- Eliminate waste (muda): over-processing tickets, waiting on approvals,
  redundant steps in runbooks
- Value stream mapping: trace the steps from "incident reported" to "resolved"
  and identify delays
- 5S in a DC: Sort (remove unused equipment), Set in order (labelled racks),
  Shine (cleanliness = early fault detection), Standardise (consistent processes),
  Sustain (audits)

### AGILE in IT Operations
- Kanban boards for operational work (work in progress limits, flow metrics)
- Sprint-based infrastructure projects: two-week iterations, clear deliverables
- Retrospectives: after each incident or project phase, what went well / what
  to improve

### Sample Questions
14. **Q:** What is the difference between an incident and a problem in ITIL?  
    **A outline:**  
    **Incident:** An unplanned interruption or degradation of service. Goal is
    to restore service as quickly as possible, not necessarily to fix the root
    cause. Example: a switch port goes down → restore by moving the cable.
    **Problem:** The underlying root cause of one or more incidents. Goal is
    elimination. Example: after three switch port failures, a problem record
    investigates whether the switch model has a known firmware defect.

---

## Section 12 — Fabric-Based Design Basics

### Common Terms
- **Fabric:** The interconnected network of switches in a DC, treated as a
  logical unit rather than individual devices. Management plane is often
  centralised.
- **Underlay:** The physical IP network that carries the overlay traffic.
  Typically routed with OSPF or BGP; point-to-point /30 or /31 links between
  spine and leaf.
- **Overlay:** The logical network (VXLAN, MPLS) that runs on top of the
  underlay and carries tenant/application traffic.
- **ECMP (Equal-Cost Multi-Path):** Multiple equal-cost routes to the same
  destination; traffic load-balanced across all paths. Essential for Spine-Leaf.
- **BGP Unnumbered:** RFC 5549 extension that allows BGP sessions over links
  without IP addresses, using IPv6 link-local addresses. Simplifies Spine-Leaf
  configuration.
- **VRF (Virtual Routing and Forwarding):** Creates multiple independent
  routing tables on one device — used for tenant isolation.
- **ACI (Application Centric Infrastructure):** Cisco's fabric solution.
  Key terms: APIC (controller), EPG (Endpoint Group), Contract (policy between EPGs).
- **EVPN:** BGP address-family used to distribute MAC/IP reachability in
  VXLAN fabrics. Replaces flood-and-learn.

### Sample Questions
15. **Q:** In a Spine-Leaf fabric, why are there no direct links between
    Leaf switches?  
    **A outline:**  
    Direct Leaf-to-Leaf links would create a non-uniform topology where some
    server-to-server paths are one hop and others are three hops, introducing
    asymmetric latency. In Spine-Leaf, all traffic traverses exactly two hops
    (Leaf → Spine → Leaf), giving predictable, uniform latency. Adding Leaf-to-
    Leaf links would also complicate ECMP and loop prevention.

---

## Section 13 — Enterprise Infrastructure (Routers, Switches, LBs, Firewalls)

### Device Roles

| Device | Layer | Function | Common Vendors |
|---|---|---|---|
| **Access switch** | L2/L3 | Server and end-device connectivity, VLANs | Cisco Catalyst, Arista |
| **Distribution/aggregation switch** | L3 | Inter-VLAN routing, policy, redundancy | Cisco Nexus, Juniper EX |
| **Core router/switch** | L3 | High-speed routing between DC zones and WAN | Cisco ASR, Juniper MX |
| **Load balancer** | L4/L7 | Distributes traffic across server pool; health checks | F5 BIG-IP, Nginx, HAProxy |
| **Firewall** | L3/L4/L7 | Stateful packet inspection, zone-based policy | Palo Alto, Cisco Firepower, Fortinet |
| **ToR switch** | L2/L3 | First network hop for servers in a rack | Cisco Nexus, Arista, Juniper QFX |

### Sample Questions
16. **Q:** What is the difference between a Layer-4 and Layer-7 load balancer,
    and when would you use each?  
    **A outline:**  
    **Layer-4 LB:** Routes based on IP/TCP/UDP headers. Fast, low overhead. Use
    for TCP services where content-awareness isn't needed (e.g., distributing
    raw TCP connections).  
    **Layer-7 LB:** Inspects HTTP headers, URLs, cookies. Can route `/api`
    to one server pool and `/static` to another. Required for HTTP/HTTPS
    applications with path-based routing or session persistence. Higher overhead.

---

## Mini-Lab Checklist

- [ ] Completed Linux networking commands lab (Section 4)
- [ ] Completed `ip`, `ss`, `ping`, `traceroute` exercises
- [ ] Practised subnetting all three questions without looking at answers
- [ ] Written out Cisco IOS `show` commands from memory
- [ ] Written out JunOS operational commands from memory
- [ ] Described Spine-Leaf topology on a whiteboard or paper diagram
- [ ] Explained ITIL Incident vs. Problem to someone unfamiliar with ITIL
