---
title: Control logic
parent: Overview
nav_order: 4
---

# Control logic (detailed)

This section describes the control behavior as exposed by the UI and the endpoints used by the web app (e.g. `/status`, `/toggle`, schedule save endpoints).

## Auto vs Manual

**Auto**
- Uses schedule and learned behavior (if enabled).
- Continually tracks current temperature vs target temperature and decides heating ON/OFF.

**Manual**
- Allows direct user target or manual heating actions (depending on firmware settings).
- The UI indicates Manual vs Auto clearly.

> In the UI code, the current mode is derived from the status response (`manual` flag) and shown as **Auto/Manual**.

## Schedule (weekday/weekend)

The “simple” schedule typically has:
- Weekday morning / evening
- Weekend morning / evening

The controller chooses the active target based on current time.

## Advanced schedule (7‑day)

When advanced schedule is enabled:
- the schedule tab shows a 7‑day list of points
- points can be enabled/disabled
- the controller uses the **most recent past** schedule point as the current target

> The UI supports adding up to a fixed number of points and includes delete / enable controls.

## Pre‑heat

Pre‑heat is displayed as a badge when active.  
Conceptually, it means the controller starts heating **before** the scheduled target time so the room reaches the target on time.  
Pre‑heat behavior typically relies on the learning rates (see next section).

## Away mode (presence)

Away can be triggered by:
- **Smart presence** (monitored IP addresses + timeout)
- **Manual away toggle**

When away is active, the UI shows an “Away” badge and the controller uses an away target temperature (configured value).

## Eco / Boost (if enabled)

Some builds include:
- Eco: reduced target / reduced duty
- Boost: temporary heating emphasis

Badges and remaining time (for Boost) can be shown on the dashboard.
