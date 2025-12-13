# ESP Thermostat Pro – How It Works

This repository contains a **GitHub Pages** documentation site in `docs/`.

## Publish on GitHub Pages (GitHub Desktop friendly)

1. Copy the `docs/` folder into your repository (root).
2. Commit & Push with GitHub Desktop.
3. On GitHub: **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`
   - Save

After a minute your site should be available under:

`https://<username>.github.io/<repo>/`

## Language (HU/EN)

Use the **HU / EN** buttons in the left sidebar.  
The selection is saved in `localStorage` and applied on every page.

## Note

This is **documentation only**:
- No live ESP API calls
- No ThingSpeak / Spreadsheet uploads
- No polling loops

The real controller UI runs on your ESP32.
