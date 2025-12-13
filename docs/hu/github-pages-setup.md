---
title: GitHub Pages beállítás
parent: Áttekintés
nav_order: 8
---

# GitHub Pages publikálás

Ez a dokumentáció a GitHub Pages **Just the Docs** témáját használja.

## 1) Fájlok a `/docs` alatt

A repóban legyen:

- `docs/_config.yml`
- `docs/index.md`
- `docs/en/...`
- `docs/hu/...`
- `docs/assets/screenshots/...`

## 2) Pages bekapcsolása

GitHub-on:
1. **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`
4. Folder: `/docs`
5. Save

## 3) Frissítés erőltetése

Ha nem látszik rögtön:
- hard reload: **Ctrl + F5**
- a Pages néha 1–3 perc alatt frissül push után

## 4) ESP‑01 placeholder cseréje

A ZIP tartalmaz egy helykitöltőt itt:
- `docs/assets/screenshots/esp01.jpg`

Ezt nyugodtan írd felül a saját fotóddal **ugyanazzal a névvel**.
