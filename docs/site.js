/* ESP Thermostat Pro – How It Works (Docs)
   Static documentation site for GitHub Pages.
   No live device calls. No cloud uploads. */

const I18N = {
  hu: {
    title: "ESP Thermostat Pro – Működési elv",
    subtitle: "Mérnöki jegyzetek + érthető magyarázat. A GitHub Pages oldal statikus dokumentáció, nem vezérli az eszközt.",
    badge_static: "Static Docs",
    badge_no_cloud: "No forced cloud",
    badge_dual: "ESP32 + ESP-01",
    
    // Navigáció menüpontok
    nav_home: "Áttekintés",
    nav_arch: "Architektúra",
    nav_ui: "Felület",
    nav_logic: "Vezérlés",
    nav_safety: "Biztonság",
    nav_energy: "Gáz & energia",
    nav_install: "GitHub Pages",
    nav_learn: "Tanulás",

    // Lapozó gombok
    lbl_prev: "Előző oldal",
    lbl_next: "Következő oldal",

    // --- Diagnosztika ---
    diag_h: "Diagnosztika",
    diag_h_p: "A rendszer folyamatosan figyeli saját egészségét és a környezeti változókat.",
    diag_conn_h: "Kapcsolat",
    diag_conn_p: "A Wi-Fi jelerősség (RSSI) és az NTP szinkron státusz jelzi a hálózat stabilitását.",
    diag_res_h: "Erőforrások",
    diag_res_p: "A CPU terhelés és a szabad memória (Heap) mutatja, hogy a vezérlő nem 'izzad'.",
    diag_shots_h: "Élő diagnosztikai nézetek",
    diag_cap_1: "Diagnosztika – kapcsolat, erőforrások, tanulás",
    diag_cap_2: "Élő konzol log és analitika",

    // --- Tanulás ---
    learn_h: "Okos tanulás",
    learn_h_p: "A termosztát idővel megtanulja az épület fizikáját, hogy pontosabb és takarékosabb legyen.",
    learn_gain_h: "Felfűtési sebesség (°C/h)",
    learn_gain_p: "Milyen gyorsan emelkedik a hőmérséklet, ha a kazán megy? Ebből számolja a rendszer a Preheat idejét.",
    learn_loss_h: "Hőveszteség (Hatékonyság)",
    learn_loss_p: "Milyen gyorsan hűl a ház? Ez segít elkerülni a túllendülést és simábbá teszi a vezérlést.",
    learn_practical_h: "Gyakorlati hatások",
    learn_preheat_h: "Preheat (Előfűtés)",
    learn_stability_h: "Stabilitás",
    learn_ui_h: "Megjelenés a felületen",
    learn_ui_p: "A tanult paraméterek (meredek, hőveszteség) és az időjárási adatok nyomon követhetők a Diagnosztika és Időjárás füleken.",

    // --- Témák és Nyelv ---
    theme_apple: "Apple",
    theme_siemens: "Siemens",
    theme_nest: "Nest",
    theme_cap_apple: "Apple (alapértelmezett)",
    theme_cap_siemens: "Siemens (ipari)",
    theme_cap_nest: "Nest (kerek / minimál)",
    lang: "EN",

    // --- Home ---
    home_h: "Áttekintés",
    home_p1: "Ez az oldal az <b>ESP Thermostat Pro</b> rendszer működését mutatja be képekkel és lépésről lépésre. Nem marketing, hanem valódi működés: <b>ESP32 Dev Module</b> a vezérlő és web UI, a kazánt pedig egy <b>ESP-01 (ESP8266) relémodul</b> kapcsolja, a kazánoldalon <b>DS18x20</b> szenzorral. A szobában az ESP32 oldalon <b>DHT</b> mér.",
    home_p2: "A dokumentáció célja: a rendszer átlátható legyen (mi miért van), és bárki vissza tudja követni a döntési logikát (Auto/Manual, Preheat, Away, Advanced schedule, LoS fallback).",
    quick_h: "Gyors tények",
    q1k: "Fő vezérlő", q1v: "ESP32 Dev Module (Web UI + vezérlés + DHT)",
    q2k: "Kazán kapcsolás", q2v: "ESP-01 (ESP8266) relé kimenet",
    q3k: "Kazánoldali szenzor", q3v: "DS18x20 (vezetékes)",
    q4k: "Cél", q4v: "Biztonságos, helyi, magyarázható fűtésvezérlés",
    note_static_t: "Fontos",
    note_static_b: "A GitHub Pages verzió <b>statikus</b> bemutató. Nincs élő ESP-hívás, nincs log letöltés, nincs ThingSpeak/Sheets feltöltés.",
    shots_h: "Képernyőképek (valós UI)",
    shots_p: "A következő oldalak a programod tényleges felületéről készült képekre épülnek.",

    // --- Architektúra ---
    arch_h: "Rendszerarchitektúra",
    arch_p: "Két eszköz, két feladat. Az ESP32 a 'agy' (UI + logika), az ESP-01 a 'kéz' (relé a kazánhoz).",
    arch_hw_h: "Hardver blokkvázlat",
    arch_hw_p: "A Wi‑Fi kapcsolat csak parancs / státusz kommunikációra szolgál. A kazán kapcsolás fizikailag az ESP‑01 relén történik.",
    arch_flow_h: "Adatút",
    arch_flow_p: "A vezérlés alapja a kiválasztott szenzor (Fő/DHT/Átlag/Auto). A célhőmérsékletet az ütemezés, a manuális beállítás, vagy az okos módok módosíthatják.",
    arch_photos_h: "Hardver fotók",
    arch_cap_esp32: "ESP32 Dev Module (A fő vezérlő)",
    arch_cap_esp01: "ESP-01 Relé modul (Kazánhoz)",
    card_inputs_h: "Bemenetek",
    card_inputs_1: "Szobalevegő: DHT (ESP32)",
    card_inputs_2: "Kazánoldal: DS18x20 (ESP-01)",
    card_inputs_3: "Kültéri: opcionális / számított",
    card_decision_h: "Döntés",
    card_dec_1: "Célhőmérséklet (időrend/kézi)",
    card_dec_2: "Szenzorforrás kiválasztása",
    card_dec_3: "Okos módosítók (Előfűtés, Távol)",
    card_dec_4: "Biztonsági feltételek (Jelvesztés)",
    card_act_h: "Végrehajtás",
    card_act_1: "Az ESP32 dönt a KI/BE állapotról",
    card_act_2: "Az ESP‑01 kapcsolja a relét",
    card_act_3: "Állapot megjelenítése a felületen",
    
    // --- UI ---
    ui_h: "Web felület",
    ui_p: "A UI 'mobile-first' szemlélettel készült. Cél: egyértelmű állapotok, gyors beavatkozás, és diagnosztika egy helyen.",
    ui_tabs_h: "Fülek",
    ui_tabs_p: "A bemutató a termosztát, rendszer, időjárás, diagnosztika és ütemezés oldalak logikáját magyarázza.",
    ui_themes_h: "Témák összehasonlítása",
    ui_themes_p: "Apple az alap téma, de Siemens és Nest stílus is elérhető. A működés ugyanaz, csak a megjelenés változik.",

    // --- Logika ---
    logic_h: "Vezérlési logika (A+B: érthető + mérnöki)",
    logic_p: "Ebben a részben végigmegyünk azon, hogyan dönt a rendszer: mikor fűt, mikor nem, és mi történik speciális helyzetekben.",
    logic_auto_h: "Auto vs Manual",
    logic_auto_p: "<b>Auto:</b> az ütemezés (simple vagy advanced) és az okos módok adják a célhőmérsékletet. <b>Manual:</b> a felhasználó beállít egy célt (és opcionálisan eco/boost módot).",
    logic_preheat_h: "Preheat (előfűtés)",
    logic_preheat_p: "A preheat célja, hogy <i>ne késve</i> érje el a ház a célhőmérsékletet. Ehhez a rendszer a korábbi felfűtési sebességből (tanult slope) becsül, és a fűtést korábban indíthatja.",
    logic_away_h: "Away (jelenlét alapú takarék)",
    logic_away_p: "Az Away mód IP-címek pingelésével becsli, van‑e valaki otthon. Ha nincs elérhető eszköz az időtúllépésen túl, a célhőmérséklet eco értékre csökken.",
    logic_adv_h: "Advanced Schedule (7 napos pontok)",
    logic_adv_p: "A haladó ütemezés legfeljebb 21 pontot kezel. A termosztát mindig a legutóbbi <i>múltbeli</i> pontot használja. Így stabil és jól követhető a viselkedés.",
    logic_src_h: "Vezérlő szenzor kiválasztása",
    logic_src_p: "Fő szenzor (kazán), DHT (szoba), Átlag, vagy Auto (nappal DHT, éjjel fő). Ezzel a szabályozás valóban a kívánt térhez igazítható.",

    // --- Biztonság ---
    safety_h: "Biztonság és LoS (Sensor Loss) védelem",
    safety_p: "Gázkazán vezérlésnél a legfontosabb: hiba esetén is legyen kiszámítható és biztonságos működés.",
    safety_los_h: "LoS lépések (vizuálisan)",
    safety_los_p: "A logika három lépcsőben reagál: 1) Soft timeout, 2) Safe‑Heat duty cycle, 3) Fagyvédelmi célhőmérséklet (tartós hiba esetén).",
    safety_why_h: "Miért így?",
    safety_why_p: "A cél nem a 'maximális fűtés', hanem hogy a rendszer ne hagyja elfagyni a házat, és ne fűtsön kontroll nélkül, amíg a hiba javításra nem kerül.",
    safety_fig_los: "LoS (jelvesztés) biztonsági folyamat",
    
    // --- BIZTONSÁG ÁBRA SZÖVEGEI (SVG) ---
    svg_step1: "1) Átmeneti türelem",
    svg_step1_sub1: "Utolsó érvényes adat",
    svg_step1_sub2: "tartása rövid ideig",
    svg_step2: "2) Biztonsági ciklus",
    svg_step2_sub1: "Szakaszos üzem (BE/KI)",
    svg_step2_sub2: "a fagyás elkerülésére",
    svg_step3: "3) Fagyvédelem",
    svg_step3_sub1: "Biztonsági minimum",
    svg_step3_sub2: "hőfok tartása",
    svg_note_main: "Mindig: kiszámítható működés + látható jelzés a felületen",
    svg_note_sub: "Cél: biztonságos üzem szenzorhiba esetén a javításig. Nem a maximális fűtés.",

    // --- Energia & Gáz ---
    energy_h: "Gáz & energia becslés",
    energy_p: "A rendszer gáz MJ és költség számítást is támogat. Ez becslés: a relé be/ki idők és a beállított paraméterek alapján ad napi összképet.",
    energy_mj_h: "MJ logika",
    energy_mj_p: "A fűtőérték (MJ/m³) és az ár (Ft/m³) paraméterezhető. A napi összegzés segít követni a trendeket (időjárás, szokások, beállítások hatása).",
    energy_cycles_h: "Ciklusok és fűtési idő",
    energy_cycles_p: "A ciklusszámláló és fűtési idő együtt jól jelzi, hogy a szabályozás mennyire 'darabolja' a kazánt, és segít finomhangolni a hiszterézist / TPI jellegű működést.",
    
    // --- GÁZOS TIPPEK (Lista elemek) ---
    energy_tip_1: "A magas ciklusszám gyakran túl szűk hiszterézist (vagy nagyon érzékeny rendszert) jelent.",
    energy_tip_2: "A hosszú fűtési idő alacsony komfort mellett nagy hőveszteségre (szigetelés hiánya) vagy alacsony kazánteljesítményre utalhat.",
    
    gas_h: "Gáz & Energia Részletek",
    gas_h_p: "Hogyan számolja a rendszer a fogyasztást és hogyan segít a diagnosztikában.",
    gas_logic_h: "Számítási logika",
    gas_logic_p: "A kazán bekapcsolt állapotának idejét szorozza a konfigurált égőteljesítménnyel vagy átalányértékkel.",
    gas_today_h: "Mai adatok",
    gas_today_p: "Az aktuális nap (éjféltől éjfélig) összesített adatai azonnali visszajelzést adnak a módosítások hatásáról.",
    gas_limits_h: "Korlátok és Beállítások",
    gas_limits_p: "A pontos méréshez kalibrálni kell a fűtőértéket és a gáz árát a 'System' fülön.",
    gas_practical_h: "Gyakorlati tippek",
    gas_compare_h: "Összehasonlítás",
    gas_compare_p: "Használd a MJ/HUF becslést 'hasonló időjárású' napok összehasonlítására. Így validálhatod a preheat vagy hiszterézis beállításokat.",
    gas_detect_h: "Hibakeresés",
    gas_detect_p: "Egy hirtelen ugrás a napi energiában beragadt relét, szenzor elcsúszást vagy rossz ütemezést is jelezhet.",

    // --- Telepítés ---
    install_h: "GitHub Pages beállítás (lépésről lépésre)",
    install_p: "A dokumentáció statikus HTML/CSS/JS. Nem kell semmilyen build, csak a /docs mappa.",
    install_steps: [
      "A repo-ban legyen benne a <b>/docs</b> mappa (ezt a ZIP biztosítja).",
      "GitHub → <b>Settings</b> → <b>Pages</b>.",
      "Source: <b>Deploy from a branch</b>.",
      "Branch: <b>main</b>, Folder: <b>/docs</b> → Save.",
      "Nyisd meg a kapott URL-t. Frissítéshez néha <b>CTRL+F5</b> kell (cache)."
    ],
    install_template_h: "Template megjegyzés",
    install_template_p: "Ha szeretnél, használhatsz Jekyll template-et (pl. Cayman), de ennél a projektnél a statikus site előnye: teljes kontroll és 0 függőség.",
    install_opt_title: "Opcionális: GitHub sablon út",
    install_opt_desc: "Ha kész GitHub Pages „témát” szeretnél, a Beállítások → Pages menüben választhatsz (pl. Cayman).<br>Viszont ez a projekt statikus HTML, így nincs szükség Jekyll-re. Statikus = kevesebb meglepetés.",
    
    footer: "Készült GitHub Pages-hez. A bemutató oldal csak dokumentáció; az éles vezérlő UI az ESP32-n fut."
  },

  en: {
    title: "ESP Thermostat Pro – How It Works",
    subtitle: "Engineering notes + friendly explanations. This GitHub Pages site is static documentation and does not control the device.",
    badge_static: "Static Docs",
    badge_no_cloud: "No forced cloud",
    badge_dual: "ESP32 + ESP-01",
    
    // Navigation
    nav_home: "Overview",
    nav_arch: "Architecture",
    nav_ui: "UI",
    nav_logic: "Control Logic",
    nav_safety: "Safety",
    nav_energy: "Gas & Energy",
    nav_install: "GitHub Pages",
    nav_learn: "Learning",

    // Navigation Buttons
    lbl_prev: "Previous page",
    lbl_next: "Next page",

    // --- Diagnostics ---
    diag_h: "Diagnostics",
    diag_h_p: "The system continuously monitors its own health and environmental variables.",
    diag_conn_h: "Connectivity",
    diag_conn_p: "Wi-Fi RSSI and NTP sync status confirm network stability.",
    diag_res_h: "Resources",
    diag_res_p: "CPU load and free Heap memory show that the controller is running smoothly.",
    diag_shots_h: "Live diagnostics views",
    diag_cap_1: "Diagnostics – connection, resources, learning",
    diag_cap_2: "Live console log & analytics",

    // --- Learning ---
    learn_h: "Smart Learning",
    learn_h_p: "The thermostat learns the building physics over time.",
    learn_gain_h: "Heat-up Rate (°C/h)",
    learn_gain_p: "How fast temperature rises when boiler is ON. Used for Preheat calculations.",
    learn_loss_h: "Heat Loss (Efficiency)",
    learn_loss_p: "How fast the house cools down. Helps avoid overshoot.",
    learn_practical_h: "Practical effects",
    learn_preheat_h: "Preheat",
    learn_stability_h: "Stability",
    learn_ui_h: "UI Integration",
    learn_ui_p: "Learned parameters (slope, efficiency) and weather data are visible on the Diagnostics and Weather tabs.",
    
    // --- Themes & Lang ---
    theme_apple: "Apple",
    theme_siemens: "Siemens",
    theme_nest: "Nest",
    theme_cap_apple: "Apple (default)",
    theme_cap_siemens: "Siemens (industrial)",
    theme_cap_nest: "Nest (round / minimal)",
    lang: "HU",

    // --- Home ---
    home_h: "Overview",
    home_p1: "This site explains the <b>ESP Thermostat Pro</b> system with real screenshots and step-by-step reasoning. The design matches your setup: an <b>ESP32 Dev Module</b> as the main controller + web UI (with a <b>DHT</b> sensor), and an <b>ESP-01 (ESP8266)</b> remote relay module switching the boiler, with a <b>DS18x20</b> sensor near the boiler.",
    home_p2: "The purpose is clarity: what each feature does, why it exists, and how the decision logic works (Auto/Manual, Preheat, Away, Advanced schedule, LoS fallback).",
    quick_h: "Quick facts",
    q1k: "Main controller", q1v: "ESP32 Dev Module (Web UI + logic + DHT)",
    q2k: "Boiler switching", q2v: "ESP-01 (ESP8266) relay output",
    q3k: "Boiler-side sensor", q3v: "DS18x20 (wired)",
    q4k: "Goal", q4v: "Safe, local, explainable heating control",
    note_static_t: "Important",
    note_static_b: "The GitHub Pages site is a <b>static</b> demo. No live ESP calls, no log downloads, no ThingSpeak/Sheets uploads.",
    shots_h: "Screenshots (real UI)",
    shots_p: "All pages below are based on your project's actual UI screenshots.",

    // --- Architecture ---
    arch_h: "System architecture",
    arch_p: "Two devices, two roles. The ESP32 is the 'brain' (UI + logic), and the ESP‑01 is the 'hand' (relay to the boiler).",
    arch_hw_h: "Hardware block diagram",
    arch_hw_p: "Wi‑Fi is used only for commands/status exchange. Physical boiler switching happens on the ESP‑01 relay.",
    arch_flow_h: "Data flow",
    arch_flow_p: "Control is driven by the selected sensor source (Main/DHT/Average/Auto). The target temperature comes from schedule, manual setting, and/or smart modifiers.",
    arch_photos_h: "Hardware photos",
    arch_cap_esp32: "ESP32 Dev Module (Main Controller)",
    arch_cap_esp01: "ESP-01 Relay Module (Boiler side)",
    card_inputs_h: "Inputs",
    card_inputs_1: "Room air: DHT (ESP32)",
    card_inputs_2: "Boiler-side: DS18x20 (ESP-01)",
    card_inputs_3: "Outdoor: optional / derived",
    card_decision_h: "Decision",
    card_dec_1: "Target temperature (schedule/manual)",
    card_dec_2: "Sensor source selection",
    card_dec_3: "Smart modifiers (Preheat, Away)",
    card_dec_4: "Safety gates (LoS)",
    card_act_h: "Actuation",
    card_act_1: "ESP32 decides ON/OFF",
    card_act_2: "ESP‑01 toggles relay",
    card_act_3: "Status displayed in UI",
    
    // --- UI ---
    ui_h: "Web interface",
    ui_p: "The UI is designed mobile-first: clear states, quick actions, and diagnostics in one place.",
    ui_tabs_h: "Tabs",
    ui_tabs_p: "This documentation explains the Thermostat, System, Weather, Diagnostics and Schedule tabs and how they relate to backend decisions.",
    ui_themes_h: "Theme comparison",
    ui_themes_p: "Apple is the default theme, with Siemens and Nest styles available. Behavior stays identical; only visuals change.",

    // --- Logic ---
    logic_h: "Control logic (A+B: friendly + engineering)",
    logic_p: "Here we walk through how the controller decides: when to heat, when not to, and what happens in special cases.",
    logic_auto_h: "Auto vs Manual",
    logic_auto_p: "<b>Auto:</b> schedule (simple or advanced) defines targets, smart modes may adjust them. <b>Manual:</b> user sets a target (optionally eco/boost).",
    logic_preheat_h: "Preheat",
    logic_preheat_p: "Preheat prevents arriving late to the target temperature. The system estimates warm-up time using learned heat-up rate (slope) and may start heating earlier.",
    logic_away_h: "Away (presence-based eco)",
    logic_away_p: "Away mode pings configured IP addresses. If nobody is reachable beyond the timeout, target temperature drops to an eco value.",
    logic_adv_h: "Advanced Schedule (7-day points)",
    logic_adv_p: "Advanced schedule supports up to 21 points. The thermostat uses the last point that has already passed, which keeps behavior stable and predictable.",
    logic_src_h: "Control sensor source",
    logic_src_p: "Main (boiler-side), DHT (room air), Average, or Auto (day: DHT, night: main). This makes control match the real comfort zone.",

    // --- Safety ---
    safety_h: "Safety & LoS (Sensor Loss) protection",
    safety_p: "With gas boiler control, the top priority is predictable and safe behavior even during faults.",
    safety_los_h: "LoS steps (visual)",
    safety_los_p: "Three-stage response: 1) Soft timeout, 2) Safe‑Heat duty cycle, 3) Freeze-protect target for prolonged failure.",
    safety_why_h: "Why this approach?",
    safety_why_p: "The goal is not 'maximum heating', but preventing freeze risk without uncontrolled heating until the fault is fixed.",
    safety_fig_los: "LoS fallback flow (static diagram)",
    
    // --- SAFETY DIAGRAM TEXTS (SVG) ---
    svg_step1: "1) Soft timeout",
    svg_step1_sub1: "Keep last valid temp",
    svg_step1_sub2: "for a limited time",
    svg_step2: "2) Safe‑Heat cycle",
    svg_step2_sub1: "Duty control (ON/OFF)",
    svg_step2_sub2: "to avoid freeze risk",
    svg_step3: "3) Freeze target",
    svg_step3_sub1: "Hold a safe minimum",
    svg_step3_sub2: "temperature",
    svg_note_main: "Always: predictable behavior + visible badge in UI",
    svg_note_sub: "Goal: safe operation during sensor faults until repair. Not maximum heating.",

    // --- Energy & Gas ---
    energy_h: "Gas & energy estimation",
    energy_p: "The system includes gas MJ and cost estimation. It is an estimate: based on relay ON/OFF time and configured parameters, it gives a daily overview.",
    energy_mj_h: "MJ logic",
    energy_mj_p: "Heating value (MJ/m³) and price (Ft/m³) are configurable. Daily totals help track trends (weather, habits, tuning changes).",
    energy_cycles_h: "Cycles and heating time",
    energy_cycles_p: "Cycle count and heating time together show how 'choppy' the control is and help tune hysteresis / TPI-like behavior.",
    
    // --- ENERGY TIPS (List items) ---
    energy_tip_1: "High cycle count often means hysteresis too tight (or very responsive system).",
    energy_tip_2: "Long heating time with low comfort can indicate building heat loss (insulation) or low boiler power.",

    gas_h: "Gas & Energy Details",
    gas_h_p: "How the system calculates consumption and helps with diagnostics.",
    gas_logic_h: "Calculation Logic",
    gas_logic_p: "Boiler ON time is multiplied by the configured burner power or flat rate.",
    gas_today_h: "Today's Data",
    gas_today_p: "Total data for the current day (midnight to midnight) gives immediate feedback on changes.",
    gas_limits_h: "Limits & Settings",
    gas_limits_p: "For accurate measurement, calibrate the heating value and gas price in the 'System' tab.",
    gas_practical_h: "Practical Tips",
    gas_compare_h: "Comparison",
    gas_compare_p: "Use MJ/HUF estimate to compare “similar weather” days and validate tuning (hysteresis, pre-heat, schedule).",
    gas_detect_h: "Troubleshooting",
    gas_detect_p: "A sudden jump in daily energy can indicate a stuck relay, a sensor drift, or a schedule issue.",
    
    install_h: "GitHub Pages setup (step-by-step)",
    install_p: "This documentation is static HTML/CSS/JS. No build required—only the /docs folder.",
    install_steps: [
      "Make sure the repo contains the <b>/docs</b> folder (this ZIP includes it).",
      "On GitHub: <b>Settings</b> → <b>Pages</b>.",
      "Source: <b>Deploy from a branch</b>.",
      "Branch: <b>main</b>, Folder: <b>/docs</b> → Save.",
      "Open the provided URL. If updates don't show, use <b>CTRL+F5</b> (cache)."
    ],
    install_template_h: "Template note",
    install_template_p: "You can use a Jekyll theme (e.g., Cayman) if you prefer, but for this project a static site keeps full control with zero dependencies.",
    install_opt_title: "Optional: GitHub template route",
    install_opt_desc: "If you want a ready-made GitHub Pages “theme”, you can enable a Jekyll theme (e.g., Cayman) in Settings → Pages.<br>However, this project ships as static HTML, so no Jekyll is required. Static = fewer surprises.",
    
    footer: "Made for GitHub Pages. This site is documentation only; the live control UI runs on the ESP32."
  }
};

function getLang(){
  const stored = localStorage.getItem("lang");
  if(stored === "hu" || stored === "en") return stored;
  return "en";
}

function setLang(lang){
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang(){
  const L = getLang();
  const t = I18N[L];

  document.documentElement.lang = L;

  // Text nodes by data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = t[key];
    if(val === undefined) return;
    if(el.getAttribute("data-i18n-html")==="1") el.innerHTML = val;
    else el.textContent = val;
  });

  // Steps list (Install page)
  const stepsEl = document.getElementById("installSteps");
  if(stepsEl && Array.isArray(t.install_steps)){
    stepsEl.innerHTML = t.install_steps.map(s=>`<li>${s}</li>`).join("");
  }

  // Language button label
  const langBtn = document.getElementById("langBtn");
  if(langBtn) langBtn.textContent = t.lang;

  // Title
  document.title = t.title;
}

function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    const active = (href === path) || (path === "" && href === "index.html");
    a.classList.toggle("active", active);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();
  applyLang();
  document.getElementById("langBtn")?.addEventListener("click", ()=>{
    const L = getLang();
    setLang(L === "en" ? "hu" : "en");
  });

  // Mobile menu toggle logic (ha szükséges, bár a HTML-ben a topbar fix)
  const navToggle = document.getElementById("navToggle");
});