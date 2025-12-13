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
    nav_home: "Áttekintés",
    nav_arch: "Architektúra",
    nav_ui: "Felület",
    nav_logic: "Vezérlés",
    nav_safety: "Biztonság",
    nav_energy: "Gáz & energia",
    nav_install: "GitHub Pages",
	nav_learn: "Tanulás",
    
    diag_h: "Diagnosztika",
    diag_h_p: "A rendszer folyamatosan figyeli saját egészségét és a környezeti változókat.",
    diag_conn_h: "Kapcsolat",
    diag_conn_p: "A Wi-Fi jelerősség (RSSI) és az NTP szinkron státusz jelzi a hálózat stabilitását.",
    diag_res_h: "Erőforrások",
    diag_res_p: "A CPU terhelés és a szabad memória (Heap) mutatja, hogy a vezérlő nem 'izzad'.",
    diag_shots_h: "Élő diagnosztikai nézetek",
    diag_cap_1: "Diagnosztika – kapcsolat, erőforrások, tanulás",
    diag_cap_2: "Élő konzol log és analitika",

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

    theme_apple: "Apple",
    theme_siemens: "Siemens",
    theme_nest: "Nest",
    theme_cap_apple: "Apple (alapértelmezett)",
    theme_cap_siemens: "Siemens (ipari)",
    theme_cap_nest: "Nest (kerek / minimál)",
    lang: "EN",

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

    arch_h: "Rendszerarchitektúra",
    arch_p: "Két eszköz, két feladat. Az ESP32 a 'agy' (UI + logika), az ESP-01 a 'kéz' (relé a kazánhoz).",
    arch_hw_h: "Hardver blokkvázlat",
    arch_hw_p: "A Wi‑Fi kapcsolat csak parancs / státusz kommunikációra szolgál. A kazán kapcsolás fizikailag az ESP‑01 relén történik.",
    arch_flow_h: "Adatút",
    arch_flow_p: "A vezérlés alapja a kiválasztott szenzor (Fő/DHT/Átlag/Auto). A célhőmérsékletet az ütemezés, a manuális beállítás, vagy az okos módok módosíthatják.",
    arch_photos_h: "Hardver fotók",
    arch_cap_esp32: "ESP32 Dev Module (A fő vezérlő)",
    arch_cap_esp01: "ESP-01 Relé modul (Kazánhoz)",
	
    ui_h: "Web felület",
    ui_p: "A UI 'mobile-first' szemlélettel készült. Cél: egyértelmű állapotok, gyors beavatkozás, és diagnosztika egy helyen.",
    ui_tabs_h: "Fülek",
    ui_tabs_p: "A bemutató a termosztát, rendszer, időjárás, diagnosztika és ütemezés oldalak logikáját magyarázza.",
    ui_themes_h: "Témák összehasonlítása",
    ui_themes_p: "Apple az alap téma, de Siemens és Nest stílus is elérhető. A működés ugyanaz, csak a megjelenés változik.",

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

    safety_h: "Biztonság és LoS (Sensor Loss) védelem",
    safety_p: "Gázkazán vezérlésnél a legfontosabb: hiba esetén is legyen kiszámítható és biztonságos működés.",
    safety_los_h: "LoS lépések (vizuálisan)",
    safety_los_p: "A logika három lépcsőben reagál: 1) Soft timeout, 2) Safe‑Heat duty cycle, 3) Fagyvédelmi célhőmérséklet (tartós hiba esetén).",
    safety_why_h: "Miért így?",
    safety_why_p: "A cél nem a 'maximális fűtés', hanem hogy a rendszer ne hagyja elfagyni a házat, és ne fűtsön kontroll nélkül, amíg a hiba javításra nem kerül.",
    safety_fig_los: "LoS (jelvesztés) biztonsági folyamat",
	
    energy_h: "Gáz & energia becslés",
    energy_p: "A rendszer gáz MJ és költség számítást is támogat. Ez becslés: a relé be/ki idők és a beállított paraméterek alapján ad napi összképet.",
    energy_mj_h: "MJ logika",
    energy_mj_p: "A fűtőérték (MJ/m³) és az ár (Ft/m³) paraméterezhető. A napi összegzés segít követni a trendeket (időjárás, szokások, beállítások hatása).",
    energy_cycles_h: "Ciklusok és fűtési idő",
    energy_cycles_p: "A ciklusszámláló és fűtési idő együtt jól jelzi, hogy a szabályozás mennyire 'darabolja' a kazánt, és segít finomhangolni a hiszterézist / TPI jellegű működést.",

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
    nav_home: "Overview",
    nav_arch: "Architecture",
    nav_ui: "UI",
    nav_logic: "Control Logic",
    nav_safety: "Safety",
    nav_energy: "Gas & Energy",
    nav_install: "GitHub Pages",
	nav_learn: "Learning",

    diag_h: "Diagnostics",
    diag_h_p: "The system continuously monitors its own health and environmental variables.",
    diag_conn_h: "Connectivity",
    diag_conn_p: "Wi-Fi RSSI and NTP sync status confirm network stability.",
    diag_res_h: "Resources",
    diag_res_p: "CPU load and free Heap memory show that the controller is running smoothly.",
    diag_shots_h: "Live diagnostics views",
    diag_cap_1: "Diagnostics – connection, resources, learning",
    diag_cap_2: "Live console log & analytics",

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
	
    theme_apple: "Apple",
    theme_siemens: "Siemens",
    theme_nest: "Nest",
    theme_cap_apple: "Apple (default)",
    theme_cap_siemens: "Siemens (industrial)",
    theme_cap_nest: "Nest (round / minimal)",
    lang: "HU",

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

    arch_h: "System architecture",
    arch_p: "Two devices, two roles. The ESP32 is the 'brain' (UI + logic), and the ESP‑01 is the 'hand' (relay to the boiler).",
    arch_hw_h: "Hardware block diagram",
    arch_hw_p: "Wi‑Fi is used only for commands/status exchange. Physical boiler switching happens on the ESP‑01 relay.",
    arch_flow_h: "Data flow",
    arch_flow_p: "Control is driven by the selected sensor source (Main/DHT/Average/Auto). The target temperature comes from schedule, manual setting, and/or smart modifiers.",
    arch_photos_h: "Hardware photos",
    arch_cap_esp32: "ESP32 Dev Module (Main Controller)",
    arch_cap_esp01: "ESP-01 Relay Module (Boiler side)",
	
    ui_h: "Web interface",
    ui_p: "The UI is designed mobile-first: clear states, quick actions, and diagnostics in one place.",
    ui_tabs_h: "Tabs",
    ui_tabs_p: "This documentation explains the Thermostat, System, Weather, Diagnostics and Schedule tabs and how they relate to backend decisions.",
    ui_themes_h: "Theme comparison",
    ui_themes_p: "Apple is the default theme, with Siemens and Nest styles available. Behavior stays identical; only visuals change.",

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

    safety_h: "Safety & LoS (Sensor Loss) protection",
    safety_p: "With gas boiler control, the top priority is predictable and safe behavior even during faults.",
    safety_los_h: "LoS steps (visual)",
    safety_los_p: "Three-stage response: 1) Soft timeout, 2) Safe‑Heat duty cycle, 3) Freeze-protect target for prolonged failure.",
    safety_why_h: "Why this approach?",
    safety_why_p: "The goal is not 'maximum heating', but preventing freeze risk without uncontrolled heating until the fault is fixed.",
    safety_fig_los: "LoS fallback flow (static diagram)",
	
    energy_h: "Gas & energy estimation",
    energy_p: "The system includes gas MJ and cost estimation. It is an estimate: based on relay ON/OFF time and configured parameters, it gives a daily overview.",
    energy_mj_h: "MJ logic",
    energy_mj_p: "Heating value (MJ/m³) and price (Ft/m³) are configurable. Daily totals help track trends (weather, habits, tuning changes).",
    energy_cycles_h: "Cycles and heating time",
    energy_cycles_p: "Cycle count and heating time together show how 'choppy' the control is and help tune hysteresis / TPI-like behavior.",

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
  // default: English
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

  // Arrays
  const stepsEl = document.getElementById("installSteps");
  if(stepsEl && Array.isArray(t.install_steps)){
    stepsEl.innerHTML = t.install_steps.map(s=>`<li>${s}</li>`).join("");
  }

  // Language button label (show other language)
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

  // UI theme compare tabs
  document.querySelectorAll("[data-compare]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const group = btn.closest("[data-compare-group]");
      if(!group) return;
      group.querySelectorAll(".pill").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      const show = btn.getAttribute("data-compare");
      group.querySelectorAll("[data-compare-panel]").forEach(p=>{
        p.style.display = (p.getAttribute("data-compare-panel") === show) ? "block" : "none";
      });
    });
  });
});