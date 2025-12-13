---
title: Web UI képernyők
parent: Áttekintés
nav_order: 3
---

# Web UI bemutató (képernyők)

Az éles vezérlő felületet az **ESP32** szolgálja ki. A GitHub Pages itt csak **statikus dokumentáció**.

## Termosztát / Dashboard

Jellemzően látható:
- aktuális hőmérséklet
- fűtés állapota (BE/KI jelvény)
- mód: **Auto** / **Kézi**
- jelvények (pl. előfűtés / távollét / fallback)

![Termosztát](assets/screenshots/Thermostat1.jpg)

## Rendszer & statisztika

Rendszer információk, számlálók (ma / összes), és vezérlési gombok (firmware függő).

![System](assets/screenshots/System1.jpg)
![System részletek](assets/screenshots/System2.jpg)

## Diagnosztika & állapot

Kapcsolat (RSSI), erőforrás (CPU/heap), és tanulási diagnosztika elemek.

![Diag](assets/screenshots/Diag&Health1.jpg)
![Diag részletek](assets/screenshots/Diag&Health2.jpg)

## Időjárás

Kiegészítő információként időjárás megjelenítés.  
(Elérhetőség a beállított endpoint / API függvénye.)

![Weather](assets/screenshots/Weather.jpg)

## Éjszakai mód

A felület támogatja a dark/night módot.

![Night](assets/screenshots/Night_mode.jpg)

## Téma összehasonlítás (Apple / Siemens / Nest)

A UI több témát támogat.

| Apple | Siemens | Nest |
|---|---|---|
| ![](assets/screenshots/Apple.jpg) | ![](assets/screenshots/Siemens.jpg) | ![](assets/screenshots/Nest.jpg) |
