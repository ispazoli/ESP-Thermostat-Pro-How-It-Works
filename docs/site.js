// ESP Thermostat Pro – How It Works (Docs Site)
// Static documentation only. No live ESP calls.

const I18N = {
  hu: {
  "site_title": "ESP Thermostat Pro – Működési elv",
  "site_sub": "Dokumentáció és mérnöki jegyzetek (statikus bemutató oldal)",
  "nav_home": "Kezdőlap",
  "nav_arch": "Architektúra",
  "nav_ctrl": "Vezérlési logika",
  "nav_learn": "Tanulás",
  "nav_safety": "Biztonság (LoS)",
  "nav_gas": "Gáz & energia",
  "nav_ui": "UI témák",
  "nav_diag": "Diagnosztika",
  "nav_setup": "GitHub Pages beállítás",
  "badge_static": "STATIKUS DOKSI",
  "badge_no_cloud": "Nincs kötelező felhő",
  "badge_dual": "Két eszköz (ESP32 + ESP‑01)",
  "home_h": "Áttekintés",
  "home_h_p": "<b>Statikus dokumentáció.</b> Ez a GitHub Pages oldal nem hív élő ESP API-kat, nem vezérli a kazánt, és nem küld adatot felhőbe. A cél: érthetően bemutatni, hogyan működik a rendszer a valós telepítésben.",
  "home_p1": "Ez a weboldal az ESP Thermostat Pro projektet magyarázza el: mit csinál, hogyan dönt, és milyen biztonsági mechanizmusokkal védi a fűtést.",
  "home_p2": "A valós rendszer két mikrokontrollerből áll: az <b>ESP32 Dev Module</b> futtatja a logikát és a webes felületet, míg egy <b>ESP‑01 (ESP8266)</b> végzi a relés kazánkapcsolást és a kazán-közeli DS18x20 hőmérő olvasását.",
  "home_quick_h": "Gyors tények",
  "home_q1": "<b>Fő vezérlő:</b> ESP32 Dev Module + DHT (szoba levegő hőm./pára).",
  "home_q2": "<b>Relé egység:</b> ESP‑01 (ESP8266) + DS18x20 (kazán-közeli referencia).",
  "home_q3": "<b>Kapcsolat:</b> Wi‑Fi kommunikáció a két eszköz között.",
  "home_q4": "<b>Vezérlés:</b> Auto / Manual mód, ütemezés, haladó ütemezés, jelenlét (Away), Pre‑Heat, LoS Fallback.",
  "home_q5": "<b>Energia:</b> napi gáz MJ és Ft becslés relé bekapcsolási idő alapján.",
  "home_gallery_h": "Képernyőképek",
  "home_gallery_p": "Az alábbi képek a valós UI-ból származnak (Apple téma az alap).",
  "arch_h": "Rendszerarchitektúra",
  "arch_h_p": "Áttekintjük a hardver felépítését (ESP32 + ESP‑01), a szenzorokat (DHT + DS18x20), és az adatfolyamot. A cél: legyen világos, mi hol fut, és miért.",
  "arch_p": "Itt azt mutatjuk meg, hogyan kapcsolódik össze az ESP32, az ESP‑01 relé egység, a szenzorok, és a kazán.",
  "arch_block1_h": "Két eszköz, két feladat",
  "arch_block1_p": "Az ESP32 a „agy”: itt fut a vezérlés, tanulás, ütemezés és a web UI. Az ESP‑01 a „kéz”: relével kapcsolja a kazánt, és méri a kazán oldali hőmérsékletet DS18x20 szenzorral.",
  "arch_block2_h": "Szenzorok",
  "arch_block2_p": "A DHT az ESP32-n a szoba levegő hőmérsékletét/páráját adja. A DS18x20 az ESP‑01-en stabil referencia (pl. kazán közeli). A vezérlés forrása beállítható (fő / nappali / átlag / auto követő).",
  "arch_block3_h": "Adatfolyam",
  "arch_block3_p": "A web UI az ESP32 állapotát jeleníti meg, az ESP32 pedig kommunikál a relé egységgel. A GitHub Pages doksiban minden élő hívás ki van kapcsolva.",
  "arch_diagram_h": "Egyszerű diagram",
  "arch_note": "Ha szeretnél, ide készíthetünk pontos bekötési rajzot is (kazán kapcsok / relé / táp / szenzorok).",
  "ctrl_h": "Vezérlési logika",
  "ctrl_h_p": "Itt a <b>döntési folyamatot</b> magyarázzuk el: Auto/Manual, ütemezés, Pre‑Heat, Away és Haladó ütemezés. A cél: érthető legyen, mikor miért indul/leáll a fűtés.",
  "ctrl_p": "Ebben a részben lépésről lépésre elmagyarázzuk, hogyan dönt a termosztát arról, hogy mikor kapcsolja a relét.",
  "ctrl_auto_h": "Auto mód",
  "ctrl_auto_p": "Auto módban a célhőmérsékletet az ütemezés (hétköznap/hétvége) vagy a haladó ütemezés adja. A vezérlés hiszterézist használ.",
  "ctrl_manual_h": "Manual mód",
  "ctrl_manual_p": "Kézi módban a felhasználó közvetlenül állít célhőmérsékletet. A biztonsági logikák (szenzorhiba/LoS) felülírhatják a normál döntést.",
  "ctrl_preheat_h": "Pre‑Heat",
  "ctrl_preheat_p": "A Pre‑Heat a „jókor legyen meleg” funkció: a tanult felfűtési sebesség alapján a rendszer kiszámolja, mennyivel korábban kell indítani a fűtést a következő ütemezési ponthoz.",
  "ctrl_away_h": "Away (Jelenlét alapú távollét)",
  "ctrl_away_p": "IP-cím ping alapú jelenlét. Ha a megadott eszközök nem elérhetők a timeout ideig, Away mód aktiválódik és alacsonyabb célhőmérsékletet használ (manuális Away célértékkel is).",
  "ctrl_adv_h": "Haladó ütemezés (7 napos)",
  "ctrl_adv_p": "Több pont, több nap: a termosztát a legutóbbi múltbeli esemény célját használja. A pontok engedélyezhetők/törölhetők, és NVS-be mentődnek.",
  "ctrl_sensor_src_h": "Vezérlő szenzor kiválasztás",
  "ctrl_sensor_src_p": "Beállítható, hogy a vezérlés melyik mért hőmérsékletre támaszkodjon: kazán-közeli (DS18x20), szobai (DHT), átlag, vagy automatikus követés (nappal/éj logika).",
  "learn_h": "Tanulás és előrejelzés",
  "learn_h_p": "A tanulás célja nem „AI”, hanem stabil és kiszámítható szabályozás: hőveszteség és felfűtési sebesség becslése, ami segít a Pre‑Heat-ben és a finom döntésekben.",
  "learn_p": "A tanuló rész gyakorlati paramétereket becsül: mennyire gyors a felfűtés, és mennyire gyorsan hűl a ház.",
  "learn_gain_h": "Felfűtési sebesség (Gain / Heat‑up rate)",
  "learn_gain_p": "Fűtés alatt megfigyeli a hőmérséklet emelkedését és ebből becsli a felfűtési sebességet.",
  "learn_loss_h": "Hőveszteség (Loss / Building efficiency)",
  "learn_loss_p": "Hűlési szakaszokból becsli, milyen gyorsan csökken a hőmérséklet.",
  "learn_ui_h": "Megjelenítés a Diagnosztikában",
  "learn_ui_p": "A tanult értékek a diagnosztikai nézetben mérőkkel/százalékokkal jelennek meg.",
  "safety_h": "Biztonság és LoS Fallback",
  "safety_h_p": "Szenzorhiba esetén a rendszer <b>kiszámítható védelmi módba</b> lép. Itt vizuálisan is bemutatjuk a Soft timeout → Safe‑Heat ciklus → Fagyvédelem lépéseket.",
  "safety_p": "Ha a szenzor hibás adatot ad vagy eltűnik, a rendszer kontrollált, konfigurálható védelmi módba lép.",
  "safety_steps_h": "LoS lépések (vizuális)",
  "safety_step1": "<b>1) Soft Timeout:</b> rövid ideig még az utolsó érvényes hőmérsékletet használja.",
  "safety_step2": "<b>2) Safe‑Heat ciklus:</b> tartós hiba esetén ciklikusan fűt (BE / KI percek).",
  "safety_step3": "<b>3) Fagyvédelem:</b> hidegben fix célhőmérsékletre áll.",
  "safety_cfg_h": "Beállítható paraméterek",
  "safety_cfg_p": "Soft timeout (mp), Safe‑Heat BE/KI (perc), fagyvédelmi célhőmérséklet (°C).",
  "safety_note": "A cél nem a tökéletes komfort hiba alatt, hanem a <b>biztonságos és kiszámítható</b> működés.",
  "gas_h": "Gáz & energia becslés",
  "gas_h_p": "A napi fűtési idő alapján a rendszer MJ és Ft becslést készít. Nem mérőóra, hanem trend és összehasonlítás — különösen hasznos finomhangolásnál.",
  "gas_p": "A rendszer képes a napi fűtési időből becsült gáz-energiát (MJ) és költséget (Ft) számolni.",
  "gas_logic_h": "MJ és Ft logika",
  "gas_logic_p": "Relé BE idő + beállított fűtőérték (MJ/m³) + ár (Ft/MJ). A paraméterek az UI-ban módosíthatók.",
  "gas_today_h": "Napi összegzés",
  "gas_today_p": "Mai MJ, becsült m³ és mai költség jelenik meg. A napi számlálók NVS-ben tárolódnak.",
  "gas_limits_h": "Korlátok",
  "gas_limits_p": "A becslés pontossága a kazán teljesítményétől és a relé–fogyasztás korrelációtól függ. Trendfigyelésre kiváló.",
  "ui_h": "UI témák összehasonlítása",
  "ui_h_p": "Három téma: Apple (alap), Siemens, Nest. Itt egymás mellett mutatjuk a stílusokat a feltöltött képekkel.",
  "ui_p": "A web UI több témát támogat.",
  "ui_apple": "Apple téma (alap)",
  "ui_siemens": "Siemens téma",
  "ui_nest": "Nest téma",
  "diag_h": "Diagnosztika & egészség",
  "diag_h_p": "Wi‑Fi RSSI, NTP, CPU/heap, jelenlét ping, tanulási értékek és fallback állapotok. A cél: gyorsan lásd, „minden rendben van-e”.",
  "diag_p": "A diagnosztikai nézet segít gyorsan látni a rendszer állapotát.",
  "diag_live_h": "Miért nincs „Live log” a GitHub Pages oldalon?",
  "diag_live_p": "Mert ez dokumentáció: minden aktív lekérés le van tiltva.",
  "setup_h": "GitHub Pages beállítás (lépésről lépésre)",
  "setup_h_p": "Ez a weboldal <b>/docs</b> mappából publikálható. Kövesd a lépéseket GitHub Desktop + GitHub Pages beállítással.",
  "setup_p": "Lépésről lépésre beállítás.",
  "setup_s1_h": "1) Repo struktúra",
  "setup_s1_p": "A repo gyökerében legyen <b>docs/</b> mappa (ebben van az index.html).",
  "setup_s2_h": "2) GitHub Desktop – commit & push",
  "setup_s2_p": "Másold be a docs mappát, commitold, majd pushold.",
  "setup_s3_h": "3) GitHub Pages bekapcsolása",
  "setup_s3_p": "Settings → Pages → Deploy from a branch → main → /docs → Save.",
  "setup_tip_h": "Tipp: ha nem frissül",
  "setup_tip_p": "CTRL+F5 hard reload, vagy a Pages oldalon Save újra. 1–3 perc késés normális.",
  "hw_esp01_missing": "ESP-01 relémodul (fotó nem elérhető)",
  "footer": "Készült GitHub Pages-hez. A bemutató oldal csak dokumentáció; az éles vezérlő UI az ESP32-n fut."
},
  en: {
  "site_title": "ESP Thermostat Pro – How It Works",
  "site_sub": "Documentation & engineering notes (static demo site)",
  "nav_home": "Home",
  "nav_arch": "Architecture",
  "nav_ctrl": "Control Logic",
  "nav_learn": "Learning",
  "nav_safety": "Safety (LoS)",
  "nav_gas": "Gas & Energy",
  "nav_ui": "UI Themes",
  "nav_diag": "Diagnostics",
  "nav_setup": "GitHub Pages Setup",
  "badge_static": "STATIC DOCS",
  "badge_no_cloud": "No mandatory cloud",
  "badge_dual": "Dual device (ESP32 + ESP‑01)",
  "home_h": "Overview",
  "home_h_p": "<b>Static documentation.</b> This GitHub Pages site does not call live ESP APIs, does not control the boiler, and does not upload to cloud services. Goal: explain how the real system works.",
  "home_p1": "This website explains the ESP Thermostat Pro project: what it does, how decisions are made, and which safety mechanisms protect heating control.",
  "home_p2": "The real system consists of two microcontrollers: the <b>ESP32 Dev Module</b> runs the logic and the web UI, while an <b>ESP‑01 (ESP8266)</b> unit performs relay-based boiler switching and reads a boiler-side DS18x20 temperature sensor.",
  "home_quick_h": "Quick facts",
  "home_q1": "<b>Main controller:</b> ESP32 Dev Module + DHT (room air temp/humidity).",
  "home_q2": "<b>Relay unit:</b> ESP‑01 (ESP8266) + DS18x20 (boiler-side reference).",
  "home_q3": "<b>Link:</b> Wi‑Fi communication between the devices.",
  "home_q4": "<b>Control:</b> Auto / Manual mode, schedules, advanced schedule, presence-based Away, Pre‑Heat, LoS Fallback.",
  "home_q5": "<b>Energy:</b> daily gas MJ and HUF estimate from relay ON time.",
  "home_gallery_h": "Screenshots",
  "home_gallery_p": "The images below are captured from the real UI (Apple theme is the default).",
  "arch_h": "System architecture",
  "arch_h_p": "We cover the hardware split (ESP32 + ESP‑01), sensors (DHT + DS18x20), and basic data flow. The goal is clarity: what runs where and why.",
  "arch_p": "This section shows how the ESP32, the ESP‑01 relay unit, sensors, and the boiler fit together.",
  "arch_block1_h": "Two devices, two responsibilities",
  "arch_block1_p": "The ESP32 is the “brain”: control, learning, schedules and the web UI live here. The ESP‑01 is the “hand”: it switches the boiler relay and measures boiler-side temperature with a DS18x20 sensor.",
  "arch_block2_h": "Sensors",
  "arch_block2_p": "The ESP32’s DHT provides room air temperature/humidity. The ESP‑01’s DS18x20 provides a stable reference (near the boiler). The control source can be selected (main / living / average / auto-follow).",
  "arch_block3_h": "Data flow",
  "arch_block3_p": "The web UI displays ESP32 state; the ESP32 exchanges state with the relay unit. On GitHub Pages, all live calls are disabled.",
  "arch_diagram_h": "Simple diagram",
  "arch_note": "If you want, we can add an exact wiring diagram (boiler terminals / relay / power / sensors).",
  "ctrl_h": "Control logic",
  "ctrl_h_p": "We explain the <b>decision path</b>: Auto/Manual, schedules, Pre‑Heat, Away and Advanced Schedule. Goal: understand why heating starts/stops.",
  "ctrl_p": "Here we explain, step-by-step, how the thermostat decides when to switch the relay.",
  "ctrl_auto_h": "Auto mode",
  "ctrl_auto_p": "In Auto mode, target comes from schedule or advanced schedule. Control uses hysteresis.",
  "ctrl_manual_h": "Manual mode",
  "ctrl_manual_p": "Manual mode sets target directly. Safety logic (sensor/LoS) can override for protection.",
  "ctrl_preheat_h": "Pre‑Heat",
  "ctrl_preheat_p": "Pre‑Heat ensures comfort at the scheduled time by starting earlier based on learned heat-up rate.",
  "ctrl_away_h": "Away (presence-based)",
  "ctrl_away_p": "Presence inferred by pinging configured IPs. If none are reachable for the timeout, Away activates and uses a lower target (optionally manual Away target).",
  "ctrl_adv_h": "Advanced schedule (7-day)",
  "ctrl_adv_p": "Multiple setpoints across 7 days. The thermostat uses the most recent event that has already passed. Points are stored in NVS.",
  "ctrl_sensor_src_h": "Selecting the control sensor",
  "ctrl_sensor_src_p": "Control can use boiler-side sensor, room sensor (DHT), average, or auto-follow (day/night). Boiler-side reacts fast; room air maps comfort.",
  "learn_h": "Learning & prediction",
  "learn_h_p": "Not marketing “AI”. Learning estimates heat-up rate and heat loss, supporting Pre‑Heat and stable decisions.",
  "learn_p": "The learning module estimates practical parameters: how fast temperature rises and how fast the building cools.",
  "learn_gain_h": "Heat-up rate (Gain)",
  "learn_gain_p": "Observes temperature increase during heating to estimate an effective heat-up rate.",
  "learn_loss_h": "Heat loss (Loss / building efficiency)",
  "learn_loss_p": "Uses cooling periods to estimate how quickly temperature falls.",
  "learn_ui_h": "Displayed in Diagnostics",
  "learn_ui_p": "Learned values are shown as gauges/indicators in the diagnostics view.",
  "safety_h": "Safety & LoS fallback",
  "safety_h_p": "On sensor failure the system enters a <b>predictable safety mode</b>. We show the Soft timeout → Safe‑Heat cycle → Freeze protection steps visually.",
  "safety_p": "If a sensor becomes invalid or disappears, the system enters a controlled, configurable safety mode.",
  "safety_steps_h": "LoS steps (visual)",
  "safety_step1": "<b>1) Soft timeout:</b> temporarily reuse the last valid temperature.",
  "safety_step2": "<b>2) Safe‑Heat cycle:</b> if it persists, heat in an ON/OFF cycle.",
  "safety_step3": "<b>3) Freeze protection:</b> in freezing conditions use a fixed target.",
  "safety_cfg_h": "Configurable parameters",
  "safety_cfg_p": "Soft timeout (s), Safe‑Heat ON/OFF (min), freeze target (°C).",
  "safety_note": "Goal is not perfect comfort during failure, but <b>predictable and safe</b> behavior.",
  "gas_h": "Gas & energy estimation",
  "gas_h_p": "From daily heating ON time the system estimates MJ and cost. Not a meter — a trend and comparison tool, useful for tuning.",
  "gas_p": "The system can estimate daily gas energy (MJ) and cost (HUF) from heating ON time.",
  "gas_logic_h": "MJ and cost logic",
  "gas_logic_p": "Relay ON time + heating value (MJ/m³) + price (HUF/MJ). Adjustable in UI.",
  "gas_today_h": "Daily summary",
  "gas_today_p": "Shows today MJ, estimated m³, and today cost. Stored in NVS.",
  "gas_limits_h": "Limitations",
  "gas_limits_p": "Accuracy depends on boiler power and correlation between relay ON time and gas use. Great for trends.",
  "ui_h": "UI themes comparison",
  "ui_h_p": "Three themes: Apple (default), Siemens, Nest. Shown side-by-side using your screenshots.",
  "ui_p": "The web UI supports multiple themes.",
  "ui_apple": "Apple theme (default)",
  "ui_siemens": "Siemens theme",
  "ui_nest": "Nest theme",
  "diag_h": "Diagnostics & health",
  "diag_h_p": "Wi‑Fi RSSI, NTP, CPU/heap, presence ping, learned values and fallback status. Goal: quickly see if everything is OK.",
  "diag_p": "Diagnostics help you see system status quickly.",
  "diag_live_h": "Why no “Live log” on GitHub Pages?",
  "diag_live_p": "Because this is documentation: all active polling is disabled.",
  "setup_h": "GitHub Pages setup (step-by-step)",
  "setup_h_p": "This site publishes from <b>/docs</b>. Follow the steps using GitHub Desktop and GitHub Pages settings.",
  "setup_p": "Step-by-step setup.",
  "setup_s1_h": "1) Repository structure",
  "setup_s1_p": "Repository root contains <b>docs/</b> folder (with index.html).",
  "setup_s2_h": "2) GitHub Desktop – commit & push",
  "setup_s2_p": "Copy docs folder, commit, then push.",
  "setup_s3_h": "3) Enable GitHub Pages",
  "setup_s3_p": "Settings → Pages → Deploy from a branch → main → /docs → Save.",
  "setup_tip_h": "Tip: if it doesn’t refresh",
  "setup_tip_p": "CTRL+F5 hard reload, or re-save Pages settings. 1–3 min lag is normal.",
  "hw_esp01_missing": "ESP‑01 relay module (photo not available)",
  "footer": "Built for GitHub Pages. This site is documentation only; the live control UI runs on the ESP32."
}
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyI18n(lang);
  updateLangButtons(lang);
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const isHtml = el.getAttribute('data-i18n-html') === '1';
    const v = dict[key];
    if (v === undefined) return;
    if (isHtml) el.innerHTML = v;
    else el.textContent = v;
  });
}

function updateLangButtons(lang) {
  const bHu = document.getElementById('langHU');
  const bEn = document.getElementById('langEN');
  if (bHu) bHu.classList.toggle('active', lang === 'hu');
  if (bEn) bEn.classList.toggle('active', lang === 'en');
}

function markActiveNav() {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    a.classList.toggle('active', href === path);
  });
}

function init() {
  markActiveNav();
  const lang = localStorage.getItem('lang') || 'hu';
  setLang(lang);

  const t = document.getElementById('navToggle');
  const s = document.querySelector('.sidebar');
  if (t && s) {
    t.addEventListener('click', () => s.classList.toggle('open'));
  }

  // ESP‑01 image fallback (optional)
  const espImg = document.querySelector('#esp01Figure img');
  const fb = document.getElementById('esp01Fallback');
  if (espImg && fb) {
    espImg.addEventListener('error', () => {
      espImg.style.display = 'none';
      fb.style.display = 'block';
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
