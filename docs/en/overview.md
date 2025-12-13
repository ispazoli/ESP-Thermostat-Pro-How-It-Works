---
title: Overview
nav_order: 1
has_children: true
---

# ESP Thermostat Pro — Overview

ESP Thermostat Pro is a **two-device heating controller**:

- **ESP32 Dev Module**: main logic + web UI + room sensor (**DHT**).
- **ESP-01 (ESP8266)**: remote relay unit + boiler-side temperature sensor (**DS18x20**), switching the boiler via relay.

This documentation explains **how the system works**, what each UI screen shows, and what the safety/fallback behavior is — using screenshots from the real interface.

![Thermostat UI](assets/screenshots/Thermostat2.jpg)

## Navigation

- [Architecture](architecture)
- [Web UI](ui)
- [Control logic](control-logic)
- [Learning & diagnostics](learning)
- [Safety & fallback (LoS)](safety)
- [Gas & energy estimation](gas-energy)
- [GitHub Pages setup](github-pages-setup)
