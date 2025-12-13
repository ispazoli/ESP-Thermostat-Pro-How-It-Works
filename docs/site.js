const LANG_KEY = 'docs_lang';
const SUPPORTED = ['hu','en'];

function setLang(lang){
  if(!SUPPORTED.includes(lang)) lang='hu';
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || '';
    if(val === '') return;
    if(el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  });
  // Update toggle button label
  const btn = document.getElementById('langBtn');
  if(btn) btn.textContent = (lang==='hu') ? 'EN' : 'HU';
}

function toggleLang(){
  const cur = document.documentElement.lang || 'hu';
  setLang(cur === 'hu' ? 'en' : 'hu');
}

const I18N = {
  hu: {
    title: "ESP Thermostat Pro",
    subtitle: "GitHub Pages bemutató · valós funkciók · statikus dokumentáció",
    intro_h: "Mi ez?",
    intro_p: "Egy két eszközös (ESP32 + ESP‑01) Wi‑Fi termosztát rendszer gázkazán vezérléshez. Az ESP32 adja a webes kezelőfelületet és a vezérlési logikát, az ESP‑01 relén keresztül kapcsolja a kazánt. A kazánnál DS18x20, a vezérlőnél DHT szenzor ad mérést.",
    quick_h: "Gyors áttekintés",
    q_hw: "Hardver",
    q_hw_v: "ESP32 Dev Module + DHT · ESP‑01 relé + DS18x20",
    q_ui: "Web UI",
    q_ui_v: "Apple alap téma + Siemens/Nest váltható",
    q_tabs: "Fülek",
    q_tabs_v: "Termosztát · Rendszer · Időjárás · Diagnosztika · Ütemterv",
    q_safe: "Biztonság",
    q_safe_v: "LoS / Fallback · Safe-Heat · fagyvédelem",
    toc_h: "Tartalom",
    toc_1: "Rendszer felépítése",
    toc_2: "Web UI bemutató (képekkel)",
    toc_3: "Vezérlési logika",
    toc_4: "Biztonság és fallback",
    toc_5: "Hardver bekötés (áttekintés)",
    callout_h: "Demo mód",
    callout_p: "Ez a GitHub Pages oldal statikus bemutató. Nincs élő ESP32 kapcsolat, nincs Live Log, és nincs cloud feltöltés (pl. ThingSpeak / Sheets). Így a bemutató semmit nem befolyásol az éles rendszerben.",
    arch_h: "1) Rendszer felépítése",
    arch_p: "A vezérlés két eszközre van bontva: az ESP32 kezeli az UI-t és a logikát, az ESP‑01 pedig megbízhatóan kapcsolja a kazánt relével és méri a kazánközeli hőmérsékletet DS18x20 szenzorral.",
    ui_h: "2) Web UI bemutató (valós képek)",
    ui_p: "Az alábbi képek a projekt jelenlegi felületét mutatják. Apple téma az alap, de a Siemens és Nest is választható.",
    ui_apple: "Apple téma (alap)",
    ui_dash: "Termosztát főképernyő (Dashboard)",
    ui_sys: "Rendszer / Statisztika / Gáz",
    ui_weather: "Időjárás & előrejelzés",
    ui_diag: "Diagnosztika & Health",
    ui_night: "Éjszakai mód",
    logic_h: "3) Vezérlési logika – érthetően",
    logic_p: "A termosztát az aktuális hőmérsékletet (szenzor(ok)), a célhőmérsékletet (program / kézi mód), és a biztonsági állapotokat figyeli. Ezek alapján dönt a fűtés BE/KI állapotáról.",
    logic_list: "<ul><li><b>Auto / Manual:</b> automatikus program vagy kézi célhőmérséklet.</li><li><b>Hiszterézis:</b> elkerüli a gyors ki-be kapcsolgatást.</li><li><b>Tanuló mód (Learning slope):</b> a ház tehetetlenségét figyelembe veszi (ha engedélyezett).</li><li><b>Ütemterv:</b> alap (hétköznap/hétvége) és haladó ütemezés (ha be van kapcsolva).</li></ul>",
    safety_h: "4) Biztonság és Fallback (LoS)",
    safety_p: "Ha a szenzor hibás értéket ad, vagy eltűnik (LoS – Loss of Sensor), a rendszer biztonsági módba lép. Ilyenkor Safe‑Heat ciklussal és/vagy fagyvédelmi célhőmérséklettel védi az épületet.",
    safety_list: "<ul><li><b>Soft timeout:</b> rövid ideig az utolsó jó értéket használja.</li><li><b>Safe‑Heat ciklus:</b> periodikus BE/KI, hogy ne hűljön le a ház.</li><li><b>Fagyvédelem:</b> tartós hiba esetén fix célhőmérséklet.</li></ul>",
    hw_h: "5) Hardver áttekintés",
    hw_p: "A kazán vezérlése egy relés ESP‑01 modullal történik (kétvezetékes termosztát kör megszakítása). A DS18x20 a kazán közelében mér, a DHT a lakótérben ad komfort-adatokat (hőmérséklet/pára).",
    hw_note: "ESP‑01 fotó: ha nálad megvan a kép, tedd be a docs/assets/screenshots/ mappába <code>esp01.jpg</code> néven, és automatikusan megjelenik itt.",
    footer: "Készült GitHub Pages-hez. A bemutató oldal csak dokumentáció; az éles vezérlő UI az ESP32-n fut."
  },
  en: {
    title: "ESP Thermostat Pro",
    subtitle: "GitHub Pages showcase · real features · static documentation",
    intro_h: "What is this?",
    intro_p: "A two-device (ESP32 + ESP‑01) Wi‑Fi thermostat system for gas boiler control. The ESP32 provides the web UI and control logic, while the ESP‑01 switches the boiler via relay. Temperature sensing uses DS18x20 near the boiler and a DHT sensor at the controller side.",
    quick_h: "Quick overview",
    q_hw: "Hardware",
    q_hw_v: "ESP32 Dev Module + DHT · ESP‑01 relay + DS18x20",
    q_ui: "Web UI",
    q_ui_v: "Apple theme default + Siemens/Nest selectable",
    q_tabs: "Tabs",
    q_tabs_v: "Thermostat · System · Weather · Diagnostics · Schedule",
    q_safe: "Safety",
    q_safe_v: "LoS / Fallback · Safe-Heat · freeze protection",
    toc_h: "Contents",
    toc_1: "Architecture",
    toc_2: "Web UI (with screenshots)",
    toc_3: "Control logic",
    toc_4: "Safety & fallback",
    toc_5: "Hardware overview",
    callout_h: "Demo mode",
    callout_p: "This GitHub Pages site is a static showcase. No live ESP32 calls, no Live Log, and no cloud uploads (e.g., ThingSpeak / Sheets). The demo cannot affect your real device.",
    arch_h: "1) Architecture",
    arch_p: "Control is split into two devices: ESP32 handles the UI and logic, while ESP‑01 reliably switches the boiler using a relay and measures near-boiler temperature with a DS18x20 sensor.",
    ui_h: "2) Web UI showcase (real screenshots)",
    ui_p: "Screenshots below come from the current project UI. Apple is the default theme, Siemens and Nest are also available.",
    ui_apple: "Apple theme (default)",
    ui_dash: "Thermostat dashboard",
    ui_sys: "System / Stats / Gas",
    ui_weather: "Weather & forecast",
    ui_diag: "Diagnostics & Health",
    ui_night: "Night mode",
    logic_h: "3) Control logic (plain English)",
    logic_p: "The thermostat watches current temperature (sensor(s)), target temperature (schedule/manual), and safety states. Based on these it decides heating ON/OFF.",
    logic_list: "<ul><li><b>Auto / Manual:</b> scheduled targets or manual setpoint.</li><li><b>Hysteresis:</b> prevents rapid relay toggling.</li><li><b>Learning slope:</b> considers thermal inertia (when enabled).</li><li><b>Scheduling:</b> simple weekday/weekend and advanced schedule (if enabled).</li></ul>",
    safety_h: "4) Safety & Fallback (LoS)",
    safety_p: "If the sensor reports errors or disappears (LoS – Loss of Sensor), the system enters a safe mode using Safe‑Heat cycles and/or a fixed freeze-protection target temperature.",
    safety_list: "<ul><li><b>Soft timeout:</b> uses last known good value for a short time.</li><li><b>Safe‑Heat cycle:</b> periodic ON/OFF to avoid overcooling.</li><li><b>Freeze protection:</b> fixed target temperature during prolonged errors.</li></ul>",
    hw_h: "5) Hardware overview",
    hw_p: "Boiler control is performed by a relay-based ESP‑01 module (interrupting the thermostat loop). DS18x20 measures near the boiler, while DHT provides comfort data (temperature/humidity) in the living area.",
    hw_note: "ESP‑01 photo: if you have it, place it into docs/assets/screenshots/ as <code>esp01.jpg</code> and it will appear here.",
    footer: "Built for GitHub Pages. This page is documentation only; the live control UI runs on the ESP32 device."
  }
};

document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem(LANG_KEY) || 'hu';
  setLang(saved);
  const btn = document.getElementById('langBtn');
  if(btn) btn.addEventListener('click', toggleLang);
});