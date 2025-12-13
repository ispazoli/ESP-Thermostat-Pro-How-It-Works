---
title: Biztonság & fallback (LoS)
parent: Áttekintés
nav_order: 6
---

# Biztonság & fallback (LoS)

A LoS (Loss of Sensor) / fallback célja, hogy szenzorhiba esetén is **kiszámítható** maradjon a működés.

## Vizuális lépések (diagram)

```mermaid
flowchart TD
  A[Normál működés] --> B{Szenzor adat érvényes?}
  B -- Igen --> A
  B -- Nem --> C[Soft timeout: utolsó jó érték használata]
  C --> D{Helyreáll?}
  D -- Igen --> A
  D -- Nem --> E[Safe‑Heat ciklus: BE perc / KI perc]
  E --> F{Hosszú hiba / fagyveszély?}
  F -- Nem --> E
  F -- Igen --> G[Fagyvédelmi célhőmérséklet]
```

## Mit lehet konfigurálni?

A UI jellemzően enged:
- Soft timeout (másodperc)
- Safe‑Heat BE/KI (perc)
- Fagyvédelmi célhőm. (°C)

Fallback alatt a UI jelvényt mutat, és a program szöveg helyett fallback státusz is megjelenhet.
