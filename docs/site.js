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
  "footer": "Készült GitHub Pages-hez. A bemutató oldal csak dokumentáció; az éles vezérlő UI az ESP32-n fut.",
  "home_notes_h": "Projekt jegyzetek",
  "home_notes_p1": "Ez a doksi oldal a firmware repóban a <span class=\"kbd\">/docs</span> mappában él. A <b>valódi vezérlő UI</b> továbbra is az ESP32-n fut.",
  "home_notes_p2": "Tipp: ha képek nem jelennek meg push után → ellenőrizd a fájlneveket (kis/nagybetű számít), majd frissíts keményen (CTRL+F5).",
  "cap_thermo_main": "Termosztát – fő nézet",
  "cap_night_mode": "Éjszakai mód – sötét téma / éjszakai állapot",
  "cap_system_settings": "Rendszer – beállítások és statisztika",
  "cap_diag_health": "Diagnosztika – egészség és jelzések",
  "gas_practical_h": "Gyakorlati használat",
  "gas_compare_h": "Napok összehasonlítása",
  "gas_compare_p": "MJ/Ft becsléssel jól össze tudsz hasonlítani „hasonló időjárású” napokat, és visszaellenőrizni a finomhangolást (hiszterézis, pre‑heat, ütemezés).",
  "gas_detect_h": "Anomáliák észlelése",
  "gas_detect_p": "Ha hirtelen megugrik a napi energia, az jelezhet beragadt relét, szenzor driftet vagy ütemezési hibát.",
  "cap_gas_settings": "Rendszer – gáz MJ és ár beállítások",
  "cap_daily_summary": "Rendszer – napi MJ / költség összegzés",
  "learn_practical_h": "Miért hasznos a tanulás (gyakorlatban)",
  "learn_preheat_h": "Pre‑Heat időzítés",
  "learn_preheat_p": "Tanulás nélkül a 07:00 azt jelenti: „07:00-kor indul a fűtés”.<br>Tanulással a 07:00 azt jelenti: „07:00-ra legyen meleg”.<br>A vezérlő a tanult felfűtési sebességből optimális indítási időt számol.",
  "learn_stability_h": "Stabilitás",
  "learn_stability_p": "A hőveszteség becslés segít elkerülni a túlfűtést / alulfűtést, és simábbá teszi a szabályozást időjárás-változásnál.<br>Nagy célhőmérséklet ugrások után is kiszámíthatóbb viselkedést ad.",
  "cap_learn_gauges": "Diagnosztika – tanulási mérők",
  "cap_weather_influences": "Időjárás – bemenetek, amik a valós viselkedést befolyásolják",
  "safety_callout": "<b>Biztonság az első:</b> ha a szenzor hibázik, a cél a <b>kiszámíthatóság</b>. A komfort ilyenkor másodlagos.",
  "safety_step_label1": "1. lépés",
  "safety_step_label2": "2. lépés",
  "safety_step_label3": "3. lépés",
  "safety_diagram": "<pre>Sensor OK?
  ├─ Igen → Normál vezérlés (Auto / Manual / Ütemezés)
  └─ Nem  → Soft timeout (utolsó érvényes T)
             ├─ Helyreállt → vissza normálra
             └─ Továbbra is rossz → Safe‑Heat ciklus (BE/KI percek)
                               └─ Fagyveszély → Fix fagyvédelmi cél</pre>",
  "cap_fallback_config": "Rendszer – fallback konfiguráció",
  "cap_fallback_badge": "Diagnosztika – fallback / hiba jelzések",
  "setup_template_h": "„Template” opció (nem kötelező)",
  "setup_template_p": "Ehhez a projekthez <i>nem kell</i> külön GitHub Pages template, mert ez a doksi már tartalmaz egy kész docs‑layoutot.<br>Ha mégis template‑szerű workflow-t szeretnél: hozz létre egy új repót, majd másold bele ezt a <span class=\"kbd\">/docs</span> mappát.<br>A Pages beállítás ugyanaz: publikálás <span class=\"kbd\">main /docs</span>-ból.",
  "ui_changes_h": "Mit változtat a téma?",
  "ui_changes_layout_h": "Elrendezés és tipográfia",
  "ui_changes_layout_p": "A témák főleg a vizuális stílust módosítják (térközök, lekerekítések, ikonok). A vezérlési logika ugyanaz marad.",
  "ui_changes_why_h": "Miért jó a több téma?",
  "ui_changes_why_p": "Más felhasználók más „érzetet” szeretnek: Apple letisztult, Siemens ipari, Nest otthonos. Használhatóságot javít, viselkedést nem változtat.",
  "ui_sections_h": "UI képek (szekciók)",
  "cap_tab_thermostat": "Termosztát fül",
  "cap_tab_weather": "Időjárás fül",
  "arch_hw_h": "Hardver fotók",
  "arch_hw_p": "Képernyőképek és fotók a repódból.",
  "arch_diagram": "<pre>[Szoba levegő]                 Wi‑Fi                [Kazán környéke]
  DHT22/11  ──> ESP32  <───────────────>  ESP‑01 (ESP8266) ──> Relé ──> Kazán

  • Web UI (helyi)                           • DS18x20 hőmérséklet
  • Ütemezés / Haladó ütemezés               • Relé kapcsolás
  • Pre‑Heat + tanulás                       • Egyszerű szenzor/relé node
  • LoS fallback vezérlés</pre>",
  "cap_system_detail": "Rendszer – részletes nézet",
  "cap_esp01_photo": "ESP‑01 relé modul (a te fotód)",
  "ctrl_callout": "<b>Fontos:</b> Ez az oldal a valós vezérlési viselkedést írja le, de továbbra is dokumentáció.<br>A GitHub Pages oldal nem tartalmaz vezérlő gombokat és nem futtat periodikus lekérdezéseket.",
  "ctrl_auto_target_h": "Célhőmérséklet kiválasztás (Auto)",
  "ctrl_auto_target_p": "1) Ha a Haladó ütemezés aktív, a legutóbbi engedélyezett pont a cél.<br>2) Különben a hétköznap / hétvége blokkok adnak célt.<br>3) Ha Away aktív, felülírja a célt az Away célérték.<br>4) Ha LoS fallback aktív, a fallback cél/ciklus felülírhat mindent.",
  "ctrl_hyst_h": "Relé döntés (Hiszterézis)",
  "ctrl_hyst_p": "A fűtés <b>BE</b> kapcsol, ha a mért hőmérséklet a <b>(cél − hiszterézis)</b> alá esik.<br>A fűtés <b>KI</b> kapcsol, ha eléri/átlépi a célt (módtól függően a sávon belül).<br>Ez védi a relét a gyors kapcsolgatástól és stabilabbá teszi a rendszert.",
  "cap_manual_controls": "Termosztát – kézi vezérlés terület",
  "ctrl_manual_target_h": "Kézi célhőmérséklet",
  "ctrl_manual_target_p": "Kézi módban a felhasználó által beállított célhőmérséklet érvényes. Az ütemezés a háttérben fut, de a kézi cél elsőbbséget élvez.<br>A biztonsági (LoS) logika továbbra is érvényesül.",
  "ctrl_manual_tip": "Tipp: érdemes ésszerű hiszterézist használni (pl. 0,2–0,4 °C) a relé élettartama miatt.",
  "cap_badges": "Termosztát – badge-ek (Pre‑Heat / Away / Fallback)",
  "ctrl_preheat_what_h": "Mit csinál pontosan a Pre‑Heat?",
  "ctrl_preheat_what_p": "A termosztát megbecsüli, mennyi idő kell a jelenlegi hőmérsékletről a következő ütemezett célértékig felfűteni.<br>Ez alapján a tényleges indítást ennyivel korábbra tolja (biztonsági korláttal).<br>Ezért lehet a szoba meleg <i>pont</i> az ütemezett időpontra, nem 30–60 perccel később.",
  "ctrl_presence_h": "Hogyan működik a jelenlét (ping)?",
  "ctrl_presence_p": "• Megadsz egy vagy több IP címet (telefon, PC, router).<br>• A vezérlő időnként megpingeli őket.<br>• Ha egyik sem elérhető a timeout ideig → Away aktiválódik.<br>• Opcionálisan manuális Away mód is kényszeríthető.",
  "cap_presence_ping": "Diagnosztika – jelenlét ping jelző",
  "cap_adv_controls": "Rendszer – ütemezés / haladó ütemezés vezérlők",
  "ctrl_adv_rules_h": "Szabályok",
  "ctrl_adv_rules_p": "• A pontok nap + idő szerint rendeződnek.<br>• Az aktív pont: a legutóbbi engedélyezett pont, ami nincs a jövőben.<br>• Egy nap több pont is lehet (a firmware limitig).<br>• A pontok újraindítás után is megmaradnak (NVS).",
  "cap_sensor_values": "Diagnosztika / Health – szenzor értékek",
  "ctrl_sensor_why_h": "Miért fontos ez?",
  "ctrl_sensor_why_p": "A kazán-közeli hőmérséklet gyorsabban reagál és védi a kazánkört.<br>A szoba levegő hőmérséklete jobban követi a komfortot.<br>Váltás/átlagolás természetesebb „érzetet” adhat.",
  "diag_conn_h": "Kapcsolat és idő",
  "diag_conn_p": "A Wi‑Fi RSSI és az NTP szinkron segít ellenőrizni a stabil kapcsolatot és a pontos időt (fontos az ütemezéshez).",
  "diag_res_h": "Erőforrások",
  "diag_res_p": "A CPU terhelés és a heap használat megmutatja, hogy az ESP32 egészséges-e és van-e memória tartalék.",
  "diag_shots_h": "Képernyőképek",
  "cap_diag_conn_res": "Diagnosztika – kapcsolat, erőforrás, tanulás",
  "cap_health_comfort": "Health – beltéri/kültéri értékek és komfort tippek",
  "diag_static_log": "Ha szeretnél <b>statikus</b> „példa log”-ot, tegyél egy sima szövegfájlt a <span class=\"kbd\">docs/assets</span> alá, és illeszd be kódként. Így a doksi biztonságos és offline marad."
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
    else el.textContent = v;,
  "home_notes_h": "Project notes",
  "home_notes_p1": "This docs site is designed to live inside your firmware repository under <span class=\"kbd\">/docs</span>. The <b>real controller UI</b> stays on the ESP32.",
  "home_notes_p2": "Tip: If images don’t show after push → check case‑sensitive filenames and do a hard refresh (CTRL+F5).",
  "cap_thermo_main": "Thermostat – main screen",
  "cap_night_mode": "Night mode – dark theme / night state",
  "cap_system_settings": "System – settings & stats",
  "cap_diag_health": "Diagnostics – health & indicators",
  "gas_practical_h": "Practical use",
  "gas_compare_h": "Compare days",
  "gas_compare_p": "Use the MJ/HUF estimate to compare “similar weather” days and validate tuning (hysteresis, pre‑heat, schedule).",
  "gas_detect_h": "Detect anomalies",
  "gas_detect_p": "A sudden jump in daily energy can indicate a stuck relay, sensor drift, or a schedule issue.",
  "cap_gas_settings": "System – gas MJ and price settings",
  "cap_daily_summary": "System – daily MJ / cost summary",
  "learn_practical_h": "Why learning helps (practical)",
  "learn_preheat_h": "Pre‑Heat timing",
  "learn_preheat_p": "Without learning, schedule time means “start heating at 07:00”.<br>With learning, it means “be warm at 07:00”.<br>The controller uses heat‑up rate to compute an optimal start time.",
  "learn_stability_h": "Stability",
  "learn_stability_p": "Heat loss estimation helps avoid overshoot/undershoot and makes control smoother across weather changes.<br>It also makes the system more predictable after big setpoint jumps.",
  "cap_learn_gauges": "Diagnostics – learning gauges",
  "cap_weather_influences": "Weather – inputs that influence real-life behavior",
  "safety_callout": "<b>Safety first:</b> if sensors fail, the system aims for <b>predictability</b>. Comfort is secondary.",
  "safety_step_label1": "Step 1",
  "safety_step_label2": "Step 2",
  "safety_step_label3": "Step 3",
  "safety_diagram": "<pre>Sensor OK?
  ├─ Yes → Normal control (Auto / Manual / Schedule)
  └─ No  → Soft timeout (use last valid T)
             ├─ Recovered → back to normal
             └─ Still bad → Safe‑Heat cycle (ON/OFF minutes)
                               └─ Freezing outside → Freeze target</pre>",
  "cap_fallback_config": "System – fallback configuration controls",
  "cap_fallback_badge": "Diagnostics – fallback / error indicators",
  "setup_template_h": "“Template” option (optional)",
  "setup_template_p": "You <i>don’t need</i> a GitHub Pages template because this site already includes a ready‑to‑publish docs layout.<br>If you still want a template workflow: create a new repo, then copy this <span class=\"kbd\">/docs</span> folder into it.<br>The Pages setting stays the same: publish from <span class=\"kbd\">main /docs</span>.",
  "ui_changes_h": "What changes with themes?",
  "ui_changes_layout_h": "Layout & typography",
  "ui_changes_layout_p": "Themes mainly change visual style (spacing, rounded corners, icons). The underlying control logic is identical.",
  "ui_changes_why_h": "Why have multiple?",
  "ui_changes_why_p": "Different users prefer different “feel”: Apple clean, Siemens industrial, Nest cozy. It improves usability without changing behavior.",
  "ui_sections_h": "UI screenshots (sections)",
  "cap_tab_thermostat": "Thermostat tab",
  "cap_tab_weather": "Weather tab",
  "arch_hw_h": "Hardware photos",
  "arch_hw_p": "Screenshots and photos from your repository.",
  "arch_diagram": "<pre>[Room air]                 Wi‑Fi                [Boiler area]
  DHT22/11  ──> ESP32  <───────────────>  ESP‑01 (ESP8266) ──> Relay ──> Boiler

  • Web UI (local)                           • DS18x20 temperature
  • Schedule / Advanced schedule             • Relay switching
  • Pre‑Heat + Learning                      • Simple sensor/relay node
  • LoS fallback control</pre>",
  "cap_system_detail": "System – detail view",
  "cap_esp01_photo": "ESP‑01 relay module (your photo)",
  "ctrl_callout": "<b>Important:</b> This page describes real control behavior, but it is still documentation.<br>The GitHub Pages site does not include any control buttons or polling loops.",
  "ctrl_auto_target_h": "Target selection (Auto)",
  "ctrl_auto_target_p": "1) If Advanced Schedule is enabled, use the most recent active point.<br>2) Otherwise use Weekday / Weekend schedule blocks.<br>3) If Away mode is active, override target with Away target.<br>4) If LoS fallback is active, override with fallback target/cycle.",
  "ctrl_hyst_h": "Relay decision (Hysteresis)",
  "ctrl_hyst_p": "Heating turns <b>ON</b> when measured temperature is below <b>(target − hysteresis)</b>.<br>Heating turns <b>OFF</b> when it reaches/exceeds target (or within the band depending on mode).<br>This prevents rapid relay toggling and keeps the system stable.",
  "cap_manual_controls": "Thermostat – manual controls area",
  "ctrl_manual_target_h": "Manual target",
  "ctrl_manual_target_p": "Manual mode uses a user‑set target temperature. The scheduler still runs in the background, but manual target is preferred.<br>Safety (LoS) still applies.",
  "ctrl_manual_tip": "Tip: keep hysteresis reasonable (e.g. 0.2–0.4°C) for relay longevity.",
  "cap_badges": "Thermostat – badges (Pre‑Heat / Away / Fallback)",
  "ctrl_preheat_what_h": "What Pre‑Heat actually does",
  "ctrl_preheat_what_p": "The thermostat estimates how long it needs to heat from current temperature to the next scheduled target.<br>It then shifts the effective start time earlier by that amount (with a safety cap).<br>This is why the room can be warm <i>exactly</i> at the schedule time, not 30–60 minutes later.",
  "ctrl_presence_h": "How presence is evaluated",
  "ctrl_presence_p": "• You provide one or more IP addresses (phones, PCs, routers).<br>• The controller periodically pings them.<br>• If none are reachable for the configured timeout → Away becomes active.<br>• Optionally you can force manual Away mode.",
  "cap_presence_ping": "Diagnostics – presence ping indicator",
  "cap_adv_controls": "System – schedule / advanced schedule controls",
  "ctrl_adv_rules_h": "Rules",
  "ctrl_adv_rules_p": "• Points are sorted by day + time.<br>• Active point is the last enabled point that is not in the future.<br>• Multiple points per day are supported (up to firmware limit).<br>• Points persist across reboots (NVS).",
  "cap_sensor_values": "Diagnostics / Health – sensor values",
  "ctrl_sensor_why_h": "Why this matters",
  "ctrl_sensor_why_p": "Boiler‑side temperature reacts quickly and protects the boiler loop.<br>Room air temperature tracks comfort better.<br>Switching or averaging can make the system feel more natural.",
  "diag_conn_h": "Connection & time",
  "diag_conn_p": "Wi‑Fi RSSI and NTP sync help confirm stable connectivity and correct timekeeping (important for schedules).",
  "diag_res_h": "Resources",
  "diag_res_p": "CPU load and heap usage show whether the ESP32 is healthy and has enough memory headroom.",
  "diag_shots_h": "Screenshots",
  "cap_diag_conn_res": "Diagnostics – connection, resources, learning",
  "cap_health_comfort": "Health – indoor/outdoor values and comfort hints",
  "diag_static_log": "If you want a <b>static</b> “example log”, add a plain text file under <span class=\"kbd\">docs/assets</span> and embed it as a code block. That keeps the docs safe and offline."
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
