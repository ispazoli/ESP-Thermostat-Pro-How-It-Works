---
title: Vezérlési logika
parent: Áttekintés
nav_order: 4
---

# Vezérlési logika (részletes)

Ez a rész a vezérlést magyarázza úgy, ahogy a UI is mutatja (pl. `/status`, mód váltás, ütemterv mentés).

## Auto vs Kézi

**Auto**
- Ütemterv + tanult viselkedés alapján dolgozik (ha engedélyezve van).
- Folyamatosan figyeli az aktuális hőmérséklet és a célhőmérséklet különbségét, és ennek alapján kapcsol.

**Kézi**
- A felhasználó közvetlen célértéket vagy kézi kapcsolást ad (build függő).
- A UI egyértelműen jelzi: Auto / Kézi.

## Ütemezés (hétköznap / hétvége)

Az „egyszerű” ütemezés tipikusan:
- Hétköznap reggel / este
- Hétvége reggel / este

A termosztát az idő alapján választja ki az aktív célt.

## Haladó ütemezés (7 nap)

Ha a haladó ütemezés aktív:
- 7 napos lista / időpontok
- pontok engedélyezése / tiltása
- a termosztát a **legutóbbi múltbeli** pont alapján tartja a célt

## Előfűtés (Pre‑Heat)

Az „ELŐFŰTÉS” jelvény akkor jelenik meg, amikor a rendszer a célidő előtt elindítja a fűtést, hogy a hőmérséklet **pont időre** meglegyen.  
Az előfűtés jellemzően a tanult felfűtési sebességre támaszkodik.

## Távollét (Away / jelenlét)

A távollét aktiválódhat:
- **Jelenlét figyelés** (IP címek + időtúllépés)
- **Kézi távollét kapcsoló**

Távollét esetén a rendszer egy külön célhőmérsékletet használ, és a UI jelvényt mutat.

## Eco / Boost (ha engedélyezett)

Egyes buildekben elérhető:
- Eco: visszafogottabb fűtés
- Boost: ideiglenes rásegítés

A dashboard jelvényekkel és (Boost esetén) hátralévő idővel jelezhet.
