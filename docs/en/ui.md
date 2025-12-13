---
title: Web UI
parent: Overview
nav_order: 3
---

# Web UI walkthrough (screens)

The live UI runs on the ESP32 device. The GitHub Pages site is static documentation only.

## Thermostat / Dashboard

Typical elements shown:
- current temperature
- heating state (ON/OFF badge)
- mode: **Auto** vs **Manual**
- status badges (e.g., pre‑heat / away / fallback)

![Thermostat](assets/screenshots/Thermostat1.jpg)

## System & statistics

This area focuses on system state and counters (today / totals), and exposes system actions (depending on firmware build).

![System](assets/screenshots/System1.jpg)
![System - details](assets/screenshots/System2.jpg)

## Diagnostics & health

Connection health (RSSI), resource usage (CPU/heap), and learning-related diagnostics are displayed here.

![Diagnostics](assets/screenshots/Diag&Health1.jpg)
![Diagnostics - details](assets/screenshots/Diag&Health2.jpg)

## Weather

Weather is shown as a convenience layer for context (outdoor conditions).  
(Actual availability depends on configured weather endpoint/API in the firmware.)

![Weather](assets/screenshots/Weather.jpg)

## Night mode

The UI supports a dark/night mode for comfortable viewing.

![Night mode](assets/screenshots/Night_mode.jpg)

## Theme comparison (Apple / Siemens / Nest)

The UI can be displayed in different themes.

| Apple | Siemens | Nest |
|---|---|---|
| ![](assets/screenshots/Apple.jpg) | ![](assets/screenshots/Siemens.jpg) | ![](assets/screenshots/Nest.jpg) |
