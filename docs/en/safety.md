---
title: Safety & fallback (LoS)
parent: Overview
nav_order: 6
---

# Safety & fallback (LoS)

LoS (Loss of Sensor) / fallback exists to keep the system **predictable** if a sensor becomes unreliable.

## Visual steps (diagram)

```mermaid
flowchart TD
  A[Normal operation] --> B{Sensor data valid?}
  B -- Yes --> A
  B -- No --> C[Soft timeout: keep last valid temp]
  C --> D{Temp recovers?}
  D -- Yes --> A
  D -- No --> E[Safe‑Heat cycle: ON minutes / OFF minutes]
  E --> F{Prolonged error / freezing risk?}
  F -- No --> E
  F -- Yes --> G[Freeze protection target temperature]
```

## What you can configure

The UI typically exposes:
- Soft timeout (seconds)
- Safe‑Heat ON/OFF minutes
- Freeze‑protect target temperature

When fallback is active, the UI shows a **fallback badge** and may replace program text with a fallback label.
