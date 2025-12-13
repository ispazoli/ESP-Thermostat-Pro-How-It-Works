---
title: GitHub Pages setup
parent: Overview
nav_order: 8
---

# Publish this documentation on GitHub Pages

This documentation uses the **Just the Docs** GitHub Pages theme.

## 1) Put files under `/docs`

Your repository should contain:

- `docs/_config.yml`
- `docs/index.md`
- `docs/en/...`
- `docs/hu/...`
- `docs/assets/screenshots/...`

## 2) Enable Pages

On GitHub:
1. **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`
4. Folder: `/docs`
5. Save

## 3) Force refresh

If images don’t show immediately:
- do a hard reload: **Ctrl + F5**
- GitHub Pages can take 1–3 minutes to redeploy after pushing commits

## 4) Replace the ESP‑01 placeholder

This ZIP includes a placeholder image at:
- `docs/assets/screenshots/esp01.jpg`

You can overwrite it with your real photo using the same filename.
