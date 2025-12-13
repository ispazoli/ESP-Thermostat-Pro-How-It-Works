---
title: Áttekintés
nav_order: 1
has_children: true
---

# ESP Thermostat Pro — Áttekintés

Az ESP Thermostat Pro egy **két eszközből álló fűtésvezérlő rendszer**:

- **ESP32 Dev Module**: fő vezérlés + web UI + szoba szenzor (**DHT**).
- **ESP-01 (ESP8266)**: távoli relé egység + kazán oldali hőmérséklet szenzor (**DS18x20**), a kazán relés kapcsolásához.

Ez a dokumentáció bemutatja a rendszer működését, a felület képernyőit, és a biztonsági/fallback viselkedést — **a valós UI képeivel** illusztrálva.

![Thermostat UI](assets/screenshots/Thermostat2.jpg)

## Tartalom

- [Architektúra](architecture)
- [Web UI képernyők](ui)
- [Vezérlési logika](control-logic)
- [Tanulás & diagnosztika](learning)
- [Biztonság & fallback (LoS)](safety)
- [Gáz & energia becslés](gas-energy)
- [GitHub Pages beállítás](github-pages-setup)
