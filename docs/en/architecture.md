---
title: Architecture
parent: Overview
nav_order: 2
---

# System architecture

## Hardware blocks

**ESP32 Dev Module (main unit)**
- Runs the thermostat logic and serves the web interface.
- Reads the **DHT** room sensor (temperature/humidity).

**ESP-01 relay unit (remote)**
- Switches the boiler via a relay output.
- Reads the **DS18x20** temperature sensor placed on the boiler side.

![ESP-01 placeholder or photo](assets/screenshots/esp01.jpg)

## Communication

The ESP32 communicates with the ESP-01 over **Wi‑Fi** (local network).  
The ESP-01 acts as a dedicated “I/O + sensor” module so that the boiler switching hardware stays isolated from the main UI/controller.

## Practical wiring note

This documentation is about the *controller*, not electrical installation.  
When controlling any gas appliance:
- keep low-voltage logic separated from mains wiring
- use proper relay modules/ratings and enclosure
- follow local regulations
