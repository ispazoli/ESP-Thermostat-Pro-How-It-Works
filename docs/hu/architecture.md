---
title: Architektúra
parent: Áttekintés
nav_order: 2
---

# Rendszer architektúra

## Hardver blokkok

**ESP32 Dev Module (fő egység)**
- Fut rajta a termosztát logikája és a webes felület.
- Olvassa a **DHT** szobai (levegő) hőmérséklet/pára szenzort.

**ESP-01 relé egység (távoli)**
- Relével kapcsolja a kazánt.
- Olvassa a **DS18x20** hőmérséklet szenzort a kazán oldalon.

![ESP-01 placeholder vagy fotó](assets/screenshots/esp01.jpg)

## Kommunikáció

Az ESP32 és az ESP-01 **Wi‑Fi-n** (helyi hálózaton) kommunikál.  
Az ESP-01 célja, hogy a kazán kapcsolásához szükséges hardver (relé + DS18x20) külön, dedikált egység legyen.

## Fontos megjegyzés (biztonság)

Ez a dokumentáció a vezérlő működéséről szól, **nem villanyszerelési útmutató**.  
Gázkészülék vezérlésénél:
- válaszd szét a kisfeszültségű logikát a hálózati oldaltól
- megfelelő relé/érintkező terhelhetőséget használj
- tartsd be a helyi szabályokat
