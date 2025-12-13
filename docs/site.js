const I18N={
hu:{
subtitle:"Működési elv",
intro_h:"Bevezetés",
intro_p:"Ez az oldal az ESP Thermostat Pro rendszer működését magyarázza el mérnöki pontossággal, de érthető formában.",
arch_h:"Rendszerarchitektúra",
arch_p:"A rendszer két ESP eszközből áll: az ESP32 a vezérlés és UI, az ESP‑01 a kazán relévezérlése.",
logic_h:"Vezérlési logika",
logic_p:"A termosztát folyamatosan értékeli az állapotokat és ennek megfelelően vezérli a fűtést.",
logic_auto:"Auto mód: ütemezés és tanult viselkedés alapján.",
logic_manual:"Manuál mód: kézi célhőmérséklet.",
logic_preheat:"Előfűtés: tanult felfűtési sebesség alapján.",
logic_away:"Away mód: jelenlét és kézi távollét.",
logic_adv:"Haladó ütemezés: 7 napos, több ponttal.",
learn_h:"Tanulás és előrejelzés",
learn_p:"A rendszer tanulja a felfűtési sebességet és az épület hőveszteségét.",
safety_h:"Biztonság és LoS",
safety_p:"Szenzorhiba esetén a rendszer biztonságos fallback módokra vált.",
gas_h:"Gáz és energia becslés",
gas_p:"A gázfogyasztás MJ alapú becsléssel és költségszámítással történik.",
ui_h:"Felhasználói felület stílusok",
footer:"GitHub Pages dokumentáció – statikus bemutató oldal."
},
en:{
subtitle:"How It Works",
intro_h:"Introduction",
intro_p:"This page explains the ESP Thermostat Pro system with engineering accuracy in a readable form.",
arch_h:"System Architecture",
arch_p:"The system uses two ESP devices: ESP32 for control/UI and ESP‑01 for boiler relay control.",
logic_h:"Control Logic",
logic_p:"The thermostat continuously evaluates conditions and controls heating accordingly.",
logic_auto:"Auto mode: schedule and learned behavior.",
logic_manual:"Manual mode: fixed target temperature.",
logic_preheat:"Preheat: based on learned heat‑up rate.",
logic_away:"Away mode: presence detection and manual override.",
logic_adv:"Advanced schedule: 7‑day multi‑point scheduling.",
learn_h:"Learning & Prediction",
learn_p:"The system learns heat‑up rate and building heat loss.",
safety_h:"Safety & LoS",
safety_p:"In case of sensor failure the system enters safe fallback modes.",
gas_h:"Gas & Energy Estimation",
gas_p:"Gas usage is estimated using MJ values and cost calculation.",
ui_h:"User Interface Styles",
footer:"GitHub Pages documentation – static demonstration site."
}};
let lang="en";
function apply(){document.querySelectorAll("[data-i18n]").forEach(e=>{
const k=e.dataset.i18n;e.textContent=I18N[lang][k]||"";});}
document.getElementById("langToggle").onclick=()=>{lang=lang==="en"?"hu":"en";apply();};
apply();
