(()=>{"use strict";

const VERSION=29;
const KEY="luna_v29";
const ONBOARD="luna_onboarded";
const CORE=["hot","brain","sleepQualitySignal","moodSignal","joints","palpitations"];
const ACUTE=["hot","palpitations","headache","anxious"];
const DEFAULT_STATE={
  schemaVersion:VERSION,lang:"de",activeTab:"today",entries:[],
  analysisRange:30,reportRange:30,doctorNote:"",reminderTime:"20:00"
};

const TXT={
de:{
 today:"Heute",map:"Landkarte",appointment:"Termin",me:"Ich",checkin:"Check-in",
 gm:"Guten Morgen",gd:"Guten Tag",ge:"Guten Abend",todayOpen:"Tages-Check-in offen",todayDone:"Heute erfasst ✓",adjust:"Anpassen",
 start:"Täglichen Check-in starten (15 Sek.)",stable:"Stabil & Ausgeglichen",attention:"Erhöhte Achtsamkeit",
 energy:"Energie",recovery:"Erholung",signals:"Signale",focus:"Dein Impuls für heute",
 focusLow:"Erfasst. Dein Körper zeigt heute mehr Belastung. Nach unruhigen Nächten kann das vegetative Nervensystem empfindlicher reagieren. Plane heute bewusst kurze Pausen, trinke regelmäßig und reduziere zusätzliche Belastung, wenn es dir damit besser geht.",
 focusMid:"Deine Werte wirken heute gemischt, aber insgesamt stabil. Halte deinen Rhythmus ruhig, plane kleine Erholungspausen und beobachte, was Konzentration oder Unruhe spürbar verbessert.",
 focusHigh:"Deine Werte wirken heute ausgeglichen. Nutze die gute Basis für Bewegung, konzentrierte Aufgaben oder Zeit für Dinge, die dir Energie geben – ohne den Tag unnötig zu überladen.",
 knowledgeTitle:"Wusstest du schon?",brainKnowledge:"Östrogenrezeptoren im Gehirn beeinflussen unter anderem Energie- und Glukosestoffwechsel. Hormonelle Schwankungen können deshalb vorübergehend Konzentration und Wortfindung beeinträchtigen. Solche Beschwerden sind in der Perimenopause häufig und können sich wieder verändern.",
 acute:"Akut erfassen",acuteSub:"Hitzewallung oder Herzklopfen schnell dokumentieren",
 signalCapture:"Signal erfassen",signalCaptureSub:"In wenigen Sekunden dokumentiert",
 energyTitle:"Wie ist deine Energie?",empty:"Leer",low:"Niedrig",okay:"Okay",good:"Gut",full:"Voll",
 signalsTitle:"Was ist heute spürbar?",hot:"Hitzewallung",brain:"Brain Fog",sleepQualitySignal:"Schlafqualität",moodSignal:"Stimmung",joints:"Gelenkschmerz",palpitations:"Herzklopfen",headache:"Kopfschmerz",anxious:"Unruhe",
 light:"Leicht",medium:"Mittel",strong:"Stark",bleeding:"Blutung",none:"Keine",bleedLight:"Leicht",bleedMedium:"Mittel",bleedStrong:"Stark",spotting:"Spotting",
 finish:"Check-in abschließen ✓",saved:"Check-in gespeichert ✓",acuteSaved:"Akut-Eintrag gespeichert ✓",
 mapTitle:"Deine Landkarte",mapSub:"Muster statt Tabellen: lokal aus deinen Einträgen berechnet.",days7:"7 Tage",days30:"30 Tage",days60:"60 Tage",days90:"90 Tage",
 trend:"Muster-Hinweis",trendEmpty:"Mit mehreren Check-ins werden hier Zusammenhänge sichtbar.",bleedingHistory:"Blutung · letzte 30 Tage",entries:"Letzte Einträge",edit:"Bearbeiten",del:"Löschen",
 appointmentTitle:"Für meinen Termin",medical:"LUNA fasst dokumentierte Beobachtungen zusammen. Sie stellt keine Diagnose und ersetzt keine medizinische Beratung.",
 period:"Erfassungszeitraum",symptom:"Signal",frequency:"Häufigkeit",average:"Ø Intensität",peak:"Peak-Zeit",notes:"Eigene Notizen für das Arztgespräch",notesPlaceholder:"Fragen oder Beobachtungen für den Termin notieren...",print:"Bericht drucken / als PDF sichern",clinician:"Notizen für Ärztin / Arzt",
 profileTitle:"LUNA & deine Daten",privacy:"Privat auf deinem Gerät",privacyText:"Deine Check-ins werden lokal in diesem Browser gespeichert. Du entscheidest selbst, ob du Daten exportierst oder teilst.",
 reminder:"Check-in-Erinnerung",reminderSub:"Deine bevorzugte Uhrzeit wird lokal gespeichert.",data:"Daten verwalten",json:"JSON exportieren",csv:"CSV exportieren",deleteAll:"Alle lokalen Daten löschen",
 replay:"Einführung / Onboarding erneut ansehen",confirmDelete:"Alle lokal gespeicherten Check-ins wirklich löschen?",cancel:"Abbrechen",deleteNow:"Löschen",
 intro1:"Verstehe deinen Körper in 15 Sekunden am Tag.",intro1sub:"Ein kurzer Check-in macht Veränderungen sichtbar, ohne deinen Alltag in eine Tabelle zu verwandeln.",
 intro2:"Erkenne Muster statt Einzelmomente.",intro2sub:"LUNA verbindet Energie, Körpersignale und Blutung zu einer ruhigen persönlichen Landkarte.",
 intro3:"Gut vorbereitet ins nächste Arztgespräch.",intro3sub:"Deine Daten bleiben lokal. Du exportierst nur, was du selbst teilen möchtest.",
 next:"Weiter",onStart:"Jetzt starten",private:"100% lokal auf deinem Gerät",restful:"Erholsam",restless:"Unruhig",broken:"Unterbrochen",balanced:"Ausgeglichen",exhausted:"Erschöpft",irritable:"Gereizt",tense:"Angespannt",hrt:"HRT/HET heute"
},
en:{
 today:"Today",map:"Map",appointment:"Appointment",me:"Me",checkin:"Check-in",
 gm:"Good morning",gd:"Good afternoon",ge:"Good evening",todayOpen:"Daily check-in open",todayDone:"Captured today ✓",adjust:"Adjust",
 start:"Start daily check-in (15 sec.)",stable:"Stable & balanced",attention:"Needs more attention",
 energy:"Energy",recovery:"Recovery",signals:"Signals",focus:"Your focus for today",
 focusLow:"Captured. Your body shows more load today. After restless nights, the autonomic nervous system can feel more sensitive. Build in short pauses, drink regularly and reduce extra strain if that feels helpful.",
 focusMid:"Your values look mixed but overall steady. Keep the day calm, add short recovery pauses and notice what improves focus or restlessness.",
 focusHigh:"Your values look well balanced today. Use that foundation for movement, focused tasks or things that give you energy without overloading the day.",
 knowledgeTitle:"Did you know?",brainKnowledge:"Estrogen receptors in the brain influence energy and glucose metabolism. Hormonal fluctuations can temporarily affect concentration and word retrieval. These symptoms are common during perimenopause and can change again over time.",
 acute:"Quick log",acuteSub:"Capture a hot flash or palpitations quickly",signalCapture:"Log a signal",signalCaptureSub:"Documented in seconds",
 energyTitle:"How is your energy?",empty:"Empty",low:"Low",okay:"Okay",good:"Good",full:"Full",
 signalsTitle:"What do you notice today?",hot:"Hot flash",brain:"Brain fog",sleepQualitySignal:"Sleep quality",moodSignal:"Mood",joints:"Joint pain",palpitations:"Palpitations",headache:"Headache",anxious:"Restlessness",
 light:"Mild",medium:"Moderate",strong:"Strong",bleeding:"Bleeding",none:"None",bleedLight:"Light",bleedMedium:"Medium",bleedStrong:"Heavy",spotting:"Spotting",
 finish:"Complete check-in ✓",saved:"Check-in saved ✓",acuteSaved:"Quick entry saved ✓",
 mapTitle:"Your map",mapSub:"Patterns instead of tables, calculated locally from your entries.",days7:"7 days",days30:"30 days",days60:"60 days",days90:"90 days",
 trend:"Pattern insight",trendEmpty:"More check-ins will reveal useful relationships here.",bleedingHistory:"Bleeding · last 30 days",entries:"Recent entries",edit:"Edit",del:"Delete",
 appointmentTitle:"For my appointment",medical:"LUNA summarizes documented observations. It does not diagnose and does not replace medical advice.",
 period:"Tracking period",symptom:"Signal",frequency:"Frequency",average:"Avg intensity",peak:"Peak time",notes:"My notes for the appointment",notesPlaceholder:"Add questions or observations for the appointment...",print:"Print report / save as PDF",clinician:"Clinician notes",
 profileTitle:"LUNA & your data",privacy:"Private on your device",privacyText:"Your check-ins are stored locally in this browser. You choose whether to export or share them.",
 reminder:"Check-in reminder",reminderSub:"Your preferred time is stored locally.",data:"Manage data",json:"Export JSON",csv:"Export CSV",deleteAll:"Delete all local data",
 replay:"View introduction / onboarding again",confirmDelete:"Really delete all locally stored check-ins?",cancel:"Cancel",deleteNow:"Delete",
 intro1:"Understand your body in 15 seconds a day.",intro1sub:"A short check-in makes changes visible without turning life into a spreadsheet.",
 intro2:"See patterns instead of isolated moments.",intro2sub:"LUNA connects energy, body signals and bleeding into a calm personal map.",
 intro3:"Walk into your next appointment prepared.",intro3sub:"Your data stays local. You export only what you choose to share.",
 next:"Continue",onStart:"Get started",private:"100% local on your device",restful:"Restful",restless:"Restless",broken:"Interrupted",balanced:"Balanced",exhausted:"Exhausted",irritable:"Irritable",tense:"Tense",hrt:"HRT/MHT today"
}};

const blank=()=>({energy:0,symptoms:{},bleeding:"",hrtTaken:false});
const uid=()=>globalThis.crypto?.randomUUID?.()||`e_${Date.now()}_${Math.random().toString(16).slice(2)}`;
const clamp=(v,a,b,d=0)=>Number.isFinite(+v)?Math.max(a,Math.min(b,+v)):d;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

function normalize(e){
  const symptoms={};
  if(e?.symptoms&&typeof e.symptoms==="object"){
    for(const[id,v]of Object.entries(e.symptoms)){
      let target=id==="sleepIssue"?"sleepQualitySignal":id;
      if([...CORE,"headache"].includes(target))symptoms[target]=["L","M","S"].includes(v)?v:(+v===1?"L":+v===3?"S":"M");
    }
  }
  if(e?.sleepQuality&&e.sleepQuality<=2&&!symptoms.sleepQualitySignal)symptoms.sleepQualitySignal=e.sleepQuality===1?"S":"M";
  if(e?.mood&&["exhausted","irritable","tense","anxiousMood"].includes(e.mood)&&!symptoms.moodSignal)symptoms.moodSignal="M";
  const br=e?.bleeding||"";
  const bleeding=br==="none"||br==="bleedNone"?"none":br==="light"||br==="bleedLight"?"light":br==="heavy"||br==="bleedHeavy"||br==="strong"?"strong":br==="spotting"?"spotting":br==="medium"?"medium":"";
  const energy=e?.energy>3?clamp(e.energy,1,5):e?.energy===3?5:e?.energy===2?3:e?.energy===1?1:0;
  return{
    id:String(e?.id||uid()),ts:new Date(e?.ts||Date.now()).toISOString(),type:e?.type==="acute"?"acute":"checkin",
    sleepDuration:String(e?.sleepDuration||e?.sleepBand||"").replace(/h+$/,""),sleepHours:clamp(e?.sleepHours,0,12),
    sleepRecovery:["restful","restless","broken"].includes(e?.sleepRecovery)?e.sleepRecovery:"",
    sleepQuality:clamp(e?.sleepQuality,0,5),energy:clamp(energy,0,5),
    mood:["balanced","exhausted","irritable","tense"].includes(e?.mood)?e.mood:(e?.mood==="calm"?"balanced":e?.mood==="anxiousMood"?"tense":""),
    symptoms,bleeding,hrtTaken:!!e?.hrtTaken,acuteSymptom:ACUTE.includes(e?.acuteSymptom)?e.acuteSymptom:"",
    intensity:["L","M","S"].includes(e?.intensity)?e.intensity:(+e?.intensity===1?"L":+e?.intensity===3?"S":"M")
  };
}

class Store{
  constructor(){this.listeners=new Set();this.state=this.load()}
  parse(v){try{return JSON.parse(v)}catch{return null}}
  load(){
    const c=this.parse(localStorage.getItem(KEY));
    if(c?.schemaVersion===VERSION)return{...structuredClone(DEFAULT_STATE),...c,entries:Array.isArray(c.entries)?c.entries.map(normalize):[]};
    const n=structuredClone(DEFAULT_STATE);
    for(const k of["midlifeOS_v27","midlifeOS_v26","midlifeOS_v25","midlifeOS_v24","midlifeOS_v23","midlifeOS_v22","midlifeOS_v21"]){
      const o=this.parse(localStorage.getItem(k));if(!o)continue;
      if(["de","en"].includes(o.lang))n.lang=o.lang;
      if(o.doctorNote)n.doctorNote=o.doctorNote;
      if(o.reminderTime)n.reminderTime=o.reminderTime;
      if(Array.isArray(o.entries))n.entries.push(...o.entries.map(normalize));
      break;
    }
    this.persistState(n);return n;
  }
  persistState(s){try{localStorage.setItem(KEY,JSON.stringify({...s,schemaVersion:VERSION}))}catch{}}
  persist(){this.persistState(this.state)}
  update(fn){fn(this.state);this.persist();for(const l of this.listeners)l(this.state)}
  subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn)}
}

const store=new Store();
let draft=blank(),editingId=null,modal=null,onboardingStep=0;
const S=()=>store.state,T=k=>TXT[S().lang][k]||k,locale=()=>S().lang==="de"?"de-DE":"en-GB";
const localKey=v=>{const d=v instanceof Date?v:new Date(v);return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const sameDay=(ts,d=new Date())=>localKey(ts)===localKey(d);
const todayEntries=()=>S().entries.filter(e=>sameDay(e.ts)).sort((a,b)=>new Date(b.ts)-new Date(a.ts));

function range(days){
  const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-(days-1));
  return S().entries.filter(e=>new Date(e.ts)>=d).sort((a,b)=>new Date(a.ts)-new Date(b.ts));
}
const fmtDate=v=>new Date(v).toLocaleDateString(locale(),{day:"2-digit",month:"short",year:"numeric"});
const fmtTime=v=>new Date(v).toLocaleTimeString(locale(),{hour:"2-digit",minute:"2-digit"});
const greeting=()=>new Date().getHours()<11?T("gm"):new Date().getHours()<18?T("gd"):T("ge");
const intNum=v=>v==="L"?1:v==="S"?3:2;
const sevWord=v=>v==="L"?T("light"):v==="S"?T("strong"):T("medium");

function score(e){
  if(!e)return null;
  let v=100;
  v+=((e.sleepQuality||3)-3)*8;
  v+=((e.energy||3)-3)*6;
  if(e.sleepDuration==="<6")v-=16;else if(e.sleepDuration==="6-7")v-=8;
  for(const x of Object.values(e.symptoms||{}))v-=x==="L"?5:x==="M"?10:15;
  v=Math.max(15,Math.min(100,Math.round(v)));
  return{value:v,tone:v>=70?"sage":v>=45?"trust":"amber",label:v>=70?T("stable"):T("attention")};
}

function ring(e){
  const s=score(e),r=67,c=2*Math.PI*r;
  if(!s)return`<div class="luna-ring"><svg viewBox="0 0 190 190" aria-hidden="true"><circle class="ring-track dash" cx="95" cy="95" r="67"/></svg><div class="ring-copy"><strong>–</strong><span>${T("todayOpen")}</span></div></div>`;
  const end=s.tone==="amber"?"#E5A962":"#8FA98C";
  return`<div class="luna-ring">
    <svg viewBox="0 0 190 190" role="img" aria-label="${s.value}% ${s.label}">
      <defs>
        <linearGradient id="ringGradient" x1="20%" y1="10%" x2="86%" y2="92%"><stop offset="0%" stop-color="#2B2A4A"/><stop offset="100%" stop-color="${end}"/></linearGradient>
        <filter id="ringGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle class="ring-track" cx="95" cy="95" r="67"/>
      <circle class="ring-value" cx="95" cy="95" r="67" stroke="url(#ringGradient)" filter="url(#ringGlow)" stroke-dasharray="${c.toFixed(2)}" style="--ring-offset:${(c*(1-s.value/100)).toFixed(2)}"/>
    </svg>
    <div class="ring-copy"><strong>${s.value}%</strong><span><i class="pulse-dot ${s.tone}"></i>${s.label}</span></div>
  </div>`;
}

function focusCard(e){
  const s=score(e);if(!s)return"";
  const text=s.value<45?T("focusLow"):s.value<70?T("focusMid"):T("focusHigh");
  return`<section class="nugget"><div class="nugget-icon">✦</div><div><h3>${T("focus")}</h3><p>${text}</p></div></section>`;
}
function knowledgeCard(e){
  if(!e?.symptoms?.brain)return"";
  const key=`luna_knowledge_brain_${localKey(new Date())}`;
  if(localStorage.getItem(key)==="1")return"";
  return`<section class="knowledge-card" data-knowledge-key="${key}">
    <button class="knowledge-close" data-close-knowledge aria-label="Schließen">×</button>
    <strong>${T("knowledgeTitle")}</strong><p>${T("brainKnowledge")}</p>
  </section>`;
}
function metrics(e){
  if(!e)return"";
  return`<div class="hero-metrics"><div><span>${T("energy")}</span><strong>${e.energy?Math.round(e.energy/5*100)+"%":"—"}</strong></div><div><span>${T("recovery")}</span><strong>${e.sleepRecovery?T(e.sleepRecovery):(e.sleepQuality?e.sleepQuality+"/5":"—")}</strong></div><div><span>${T("signals")}</span><strong>${Object.keys(e.symptoms).length}</strong></div></div>`;
}
function icon(n){
  const d={today:'<path d="M4 11.5 12 5l8 6.5V20H4z"/><path d="M9 20v-6h6v6"/>',map:'<path d="M4 18V8l5-3 6 3 5-3v10l-5 3-6-3-5 3Z"/><path d="M9 5v10M15 8v10"/>',appointment:'<path d="M6 4h12v16H6z"/><path d="M9 9h6M9 13h6"/>',me:'<circle cx="12" cy="8" r="3"/><path d="M5 20c.7-4 3.2-6 7-6s6.3 2 7 6"/>'}[n];
  return`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
}

function todayView(){
  const e=todayEntries().find(x=>x.type==="checkin");
  return`<div class="stack"><header class="page-head today-head"><div class="eyebrow">${T("today")}</div><h1>${greeting()}</h1><p>${e?T("todayDone"):T("todayOpen")}</p></header>
  <section class="hero card">${ring(e)}${metrics(e)}${focusCard(e)}${knowledgeCard(e)}${e?`<button class="text-action" id="adjustToday">${T("todayDone")} · ${T("adjust")}</button>`:`<button class="primary" data-start>${T("start")}</button>`}</section>
  <button class="acute-card" id="acute"><span class="acute-icon">+</span><div><strong>${T("acute")}</strong><small>${T("acuteSub")}</small></div><b>›</b></button></div>`;
}

function energySegments(){
  return[[1,"empty"],[2,"low"],[3,"okay"],[4,"good"],[5,"full"]].map(([v,k])=>`<button data-energy="${v}" class="${draft.energy===v?"active":""}">${T(k)}</button>`).join("");
}
function tile(id){
  const v=draft.symptoms[id];
  return`<article class="signal-tile ${v?"active":""}"><button class="signal-main" data-sym="${id}"><strong>${T(id)}</strong><span>${v?"✓":"+"}</span></button><div class="signal-levels ${v?"show":""}">${["L","M","S"].map((x,i)=>`<button data-level="${id}:${x}" class="${v===x?"active":""}" aria-label="${sevWord(x)}"><span>${"•".repeat(i+1)}</span></button>`).join("")}</div></article>`;
}
function checkinView(){
  return`<div class="stack checkin"><header class="page-head checkin-head"><div class="eyebrow">${T("checkin")}</div><h1>${T("start")}</h1></header>
  <section class="card compact"><h2>${T("energyTitle")}</h2><div class="energy-segments">${energySegments()}</div></section>
  <section class="card compact"><h2>${T("signalsTitle")}</h2><div class="signal-grid">${CORE.map(tile).join("")}</div></section>
  <section class="card compact"><h2>${T("bleeding")}</h2><div class="bleed-row">${[["none","none"],["light","bleedLight"],["medium","bleedMedium"],["strong","bleedStrong"],["spotting","spotting"]].map(([v,k])=>`<button data-bleeding="${v}" class="${draft.bleeding===v?"active":""}">${T(k)}</button>`).join("")}</div><label class="hrt-row"><span>${T("hrt")}</span><button id="hrt" class="switch ${draft.hrtTaken?"on":""}"><i></i></button></label></section>
  <button class="primary finish" id="saveCheck">${T("finish")}</button></div>`;
}

function stats(es){
  const m={};
  for(const e of es){
    const ids=e.type==="acute"?[e.acuteSymptom]:Object.keys(e.symptoms);
    for(const id of ids){
      if(!id)continue;
      const v=e.type==="acute"?e.intensity:e.symptoms[id];
      m[id]??={count:0,sum:0,hours:[]};m[id].count++;m[id].sum+=intNum(v);m[id].hours.push(new Date(e.ts).getHours());
    }
  }
  return Object.entries(m).map(([id,x])=>({id,count:x.count,avg:x.sum/x.count,peak:peak(x.hours)})).sort((a,b)=>b.count-a.count);
}
function peak(hours){
  if(!hours.length)return"—";
  const b=[[0,6],[6,12],[12,18],[18,24]],l=S().lang==="de"?["Nacht","Morgen","Nachmittag","Abend"]:["Night","Morning","Afternoon","Evening"],c=b.map(([a,z])=>hours.filter(h=>h>=a&&h<z).length);
  return l[c.indexOf(Math.max(...c))];
}
function insight(days){
  const checks=range(days).filter(e=>e.type==="checkin"),hot=checks.filter(e=>e.symptoms.hot),short=hot.filter(e=>e.sleepDuration==="<6"||e.sleepQuality<=2);
  if(hot.length>=2&&short.length){const p=Math.round(short.length/hot.length*100);return S().lang==="de"?`${p}% deiner dokumentierten Tage mit Hitzewallungen lagen nach kurzer oder unruhigerem Schlaf.`:`${p}% of documented hot-flash days followed shorter or more restless sleep.`}
  const s=stats(range(days));if(s[0])return S().lang==="de"?`${T(s[0].id)} war in diesem Zeitraum dein häufigstes dokumentiertes Signal.`:`${T(s[0].id)} was your most frequently documented signal in this period.`;
  return T("trendEmpty");
}
function smoothPath(points){
  if(points.length<2)return"";
  let d=`M ${points[0].x} ${points[0].y}`;
  for(let i=0;i<points.length-1;i++){
    const p0=points[i-1]||points[i],p1=points[i],p2=points[i+1],p3=points[i+2]||p2;
    d+=` C ${p1.x+(p2.x-p0.x)/6} ${p1.y+(p2.y-p0.y)/6}, ${p2.x-(p3.x-p1.x)/6} ${p2.y-(p3.y-p1.y)/6}, ${p2.x} ${p2.y}`;
  }
  return d;
}
function wave(days){
  const es=range(days);if(!es.length)return`<div class="empty-state">${T("trendEmpty")}</div>`;
  const keys=[...new Set(es.map(e=>localKey(e.ts)))].sort();
  const ser=keys.map(k=>{const day=es.filter(e=>localKey(e.ts)===k),vals=[];let sleep=0;for(const e of day){if(e.type==="acute")vals.push(intNum(e.intensity));else{vals.push(...Object.values(e.symptoms).map(intNum));if(e.sleepQuality)sleep=Math.max(sleep,e.sleepQuality)}}return{date:new Date(k+"T12:00:00"),sym:vals.length?Math.max(...vals):0,sleep}}).filter(x=>x.sym||x.sleep);
  if(!ser.length)return`<div class="empty-state">${T("trendEmpty")}</div>`;
  const w=360,h=190,l=20,r=14,t=20,b=38,pw=w-l-r,ph=h-t-b,base=t+ph;
  if(ser.length===1){
    const y=base-((ser[0].sym||1)/3)*ph,points=[{x:24,y:y+7},{x:100,y:y-3},{x:180,y},{x:260,y:y+4},{x:342,y:y-5}],path=smoothPath(points),area=`${path} L 342 ${base} L 24 ${base} Z`;
    const label=ser[0].date.toLocaleDateString(locale(),{weekday:"short",day:"2-digit"});
    return`<svg class="wave-chart" viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2B2A4A" stop-opacity=".10"/><stop offset="100%" stop-color="#2B2A4A" stop-opacity="0"/></linearGradient></defs><path class="wave-grid" d="M${l} ${base}H${w-r}"/><path class="wave-area" d="${area}"/><path class="sym-wave" d="${path}"/><circle class="sym-dot" cx="180" cy="${y}" r="5"><title>${label}</title></circle><g class="wave-tooltip"><rect x="129" y="${Math.max(10,y-34)}" width="102" height="24" rx="12"/><text x="180" y="${Math.max(25,y-18)}" text-anchor="middle">${label}</text></g><text x="180" y="${h-10}" text-anchor="middle" class="axis-text">${label}</text></svg>`;
  }
  const x=i=>l+i*(pw/(ser.length-1)),ys=v=>base-(v/3)*ph;
  const points=ser.map((s,i)=>({x:x(i),y:ys(s.sym||1)})),path=smoothPath(points),area=`${path} L ${points.at(-1).x} ${base} L ${points[0].x} ${base} Z`;
  const step=Math.max(1,Math.ceil(ser.length/6));
  const labels=ser.map((s,i)=>(i%step===0||i===ser.length-1)?`<text x="${x(i)}" y="${h-10}" text-anchor="middle" class="axis-text">${s.date.toLocaleDateString(locale(),{day:"2-digit",month:"2-digit"})}</text>`:"").join("");
  return`<svg class="wave-chart" viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2B2A4A" stop-opacity=".10"/><stop offset="100%" stop-color="#2B2A4A" stop-opacity="0"/></linearGradient></defs><path class="wave-grid" d="M${l} ${base}H${w-r}"/><path class="wave-area" d="${area}"/><path class="sym-wave" d="${path}"/>${points.map((p,i)=>`<circle class="sym-dot" cx="${p.x}" cy="${p.y}" r="4"><title>${ser[i].date.toLocaleDateString(locale(),{weekday:"short",day:"2-digit"})}</title></circle>`).join("")}${labels}</svg>`;
}
function bleedingStrip(){
  const days=[];const now=new Date();now.setHours(12,0,0,0);
  for(let i=29;i>=0;i--){const d=new Date(now);d.setDate(now.getDate()-i);const entries=S().entries.filter(e=>e.type==="checkin"&&sameDay(e.ts,d));let level="none";for(const e of entries){if(e.bleeding==="strong"){level="strong";break}if(e.bleeding==="medium")level=level==="strong"?level:"medium";else if(e.bleeding==="light"&&level==="none")level="light";else if(e.bleeding==="spotting"&&level==="none")level="spotting"}days.push({date:d,level})}
  return`<section class="bleeding-strip"><div class="strip-head"><strong>${T("bleedingHistory")}</strong><span>${T("days30")}</span></div><div class="dot-matrix">${days.map(d=>`<i class="bleed-dot ${d.level}" title="${d.date.toLocaleDateString(locale(),{day:"2-digit",month:"2-digit"})}"></i>`).join("")}</div><div class="strip-legend"><span><i class="bleed-dot spotting"></i>${T("spotting")}</span><span><i class="bleed-dot light"></i>${T("bleedLight")}</span><span><i class="bleed-dot strong"></i>${T("bleedStrong")}</span></div></section>`;
}
function entryCard(e){
  const b=[];if(e.type==="acute")b.push(`<span class="badge warm">${T(e.acuteSymptom)} · ${e.intensity}</span>`);else{if(e.energy)b.push(`<span class="badge">${T("energy")}: ${e.energy}/5</span>`);for(const[id,v]of Object.entries(e.symptoms))b.push(`<span class="badge signal">${T(id)} · ${v}</span>`);if(e.bleeding)b.push(`<span class="badge berry">${T("bleeding")}</span>`);if(e.hrtTaken)b.push(`<span class="badge">HRT ✓</span>`)}
  return`<article class="entry"><header><strong>${fmtTime(e.ts)}</strong><span>${fmtDate(e.ts)}</span></header><div class="badges">${b.join("")}</div><footer><button data-edit="${e.id}">${T("edit")}</button><button data-delete="${e.id}" class="danger">${T("del")}</button></footer></article>`;
}
function mapView(){
  const es=range(S().analysisRange);
  return`<div class="stack"><header class="page-head"><div class="eyebrow">${T("map")}</div><h1>${T("mapTitle")}</h1><p>${T("mapSub")}</p></header><div class="tabs">${[7,30,90].map(n=>`<button data-range="${n}" class="${S().analysisRange===n?"active":""}">${T(`days${n}`)}</button>`).join("")}</div><section class="card"><div class="card-head"><h2>${T("trend")}</h2><span>${es.length}</span></div>${wave(S().analysisRange)}<p class="insight-copy">${insight(S().analysisRange)}</p>${bleedingStrip()}</section><section class="card"><div class="card-head"><h2>${T("entries")}</h2></div><div class="entry-list">${es.length?[...es].reverse().slice(0,12).map(entryCard).join(""):`<div class="empty-state">${T("trendEmpty")}</div>`}</div></section></div>`;
}
function appointmentView(){
  const es=range(S().reportRange),s=stats(es);
  return`<div class="stack report"><header class="page-head report-head"><div class="eyebrow">${T("appointment")}</div><h1>${T("appointmentTitle")}</h1><p>${T("medical")}</p></header><div class="tabs no-print">${[30,60,90].map(n=>`<button data-report-range="${n}" class="${S().reportRange===n?"active":""}">${T(`days${n}`)}</button>`).join("")}</div><section class="card period"><div><small>${T("period")}</small><strong>${fmtDate(new Date(Date.now()-(S().reportRange-1)*86400000))} – ${fmtDate(new Date())}</strong></div><b>${es.length}</b></section><section class="card table-card"><table><thead><tr><th>${T("symptom")}</th><th>${T("frequency")}</th><th>${T("average")}</th><th>${T("peak")}</th></tr></thead><tbody>${s.length?s.slice(0,7).map(x=>`<tr><td>${T(x.id)}</td><td>${x.count}</td><td>${x.avg.toFixed(1)}</td><td>${x.peak}</td></tr>`).join(""):`<tr><td colspan="4">—</td></tr>`}</tbody></table></section><section class="card"><label class="note-label" for="doctorNote">${T("notes")}</label><textarea id="doctorNote" placeholder="${T("notesPlaceholder")}">${esc(S().doctorNote)}</textarea></section><section class="print-notes"><strong>${T("clinician")}</strong><div></div></section><button class="primary no-print" id="print">${T("print")}</button></div>`;
}
function meView(){
  return`<div class="stack"><header class="page-head"><div class="eyebrow">${T("me")}</div><h1>${T("profileTitle")}</h1></header><section class="card privacy-card"><div class="privacy-icon">⌁</div><div><h2>${T("privacy")}</h2><p>${T("privacyText")}</p></div></section><section class="card profile-card"><h2>${T("reminder")}</h2><p>${T("reminderSub")}</p><label class="time-field"><span>${T("reminder")}</span><input id="reminderTime" type="time" value="${esc(S().reminderTime||"20:00")}"></label></section><section class="card"><h2>${T("data")}</h2><div class="export-row"><button id="json">${T("json")}</button><button id="csv">${T("csv")}</button></div><button class="secondary-wide" id="replayOnboarding">${T("replay")}</button><button class="delete-link" id="deleteAll">${T("deleteAll")}</button></section></div>`;
}

function render(){
  document.documentElement.lang=S().lang;
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===S().lang));
  document.getElementById("view-root").innerHTML=S().activeTab==="checkin"?checkinView():S().activeTab==="map"?mapView():S().activeTab==="appointment"?appointmentView():S().activeTab==="me"?meView():todayView();
  const tabs=["today","map","appointment","me"];
  document.getElementById("bottom-nav").innerHTML=tabs.map(tab=>`<button data-tab="${tab}" class="${S().activeTab===tab?"active":""}">${icon(tab)}<span>${T(tab)}</span></button>`).join("");
  bind();renderOnboarding();if(modal)renderModal();
}
function bind(){
  document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>store.update(s=>s.lang=b.dataset.lang));
  document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{store.update(s=>s.activeTab=b.dataset.tab);window.scrollTo({top:0,behavior:"smooth"})});
  document.querySelectorAll("[data-start]").forEach(b=>b.onclick=()=>{draft=blank();editingId=null;store.update(s=>s.activeTab="checkin")});
  document.getElementById("adjustToday")?.addEventListener("click",()=>{const e=todayEntries().find(x=>x.type==="checkin");if(e)editEntry(e.id)});
  document.getElementById("acute")?.addEventListener("click",()=>{modal={type:"acute",symptom:"hot",intensity:"M"};renderModal()});
  document.querySelectorAll("[data-energy]").forEach(b=>b.onclick=()=>{draft.energy=+b.dataset.energy;render()});
  document.querySelectorAll("[data-sym]").forEach(b=>b.onclick=()=>{const id=b.dataset.sym;if(draft.symptoms[id])delete draft.symptoms[id];else draft.symptoms[id]="M";render()});
  document.querySelectorAll("[data-level]").forEach(b=>b.onclick=e=>{e.stopPropagation();const[id,v]=b.dataset.level.split(":");draft.symptoms[id]=v;render()});
  document.querySelectorAll("[data-bleeding]").forEach(b=>b.onclick=()=>{draft.bleeding=b.dataset.bleeding;render()});
  document.getElementById("hrt")?.addEventListener("click",()=>{draft.hrtTaken=!draft.hrtTaken;render()});
  document.getElementById("saveCheck")?.addEventListener("click",saveEntry);
  document.querySelectorAll("[data-range]").forEach(b=>b.onclick=()=>store.update(s=>s.analysisRange=+b.dataset.range));
  document.querySelectorAll("[data-report-range]").forEach(b=>b.onclick=()=>store.update(s=>s.reportRange=+b.dataset.reportRange));
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editEntry(b.dataset.edit));
  document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{store.update(s=>s.entries=s.entries.filter(e=>e.id!==b.dataset.delete));feedback(T("del"))});
  document.querySelector("[data-close-knowledge]")?.addEventListener("click",e=>{const card=e.target.closest("[data-knowledge-key]");if(card){localStorage.setItem(card.dataset.knowledgeKey,"1");card.remove()}});
  document.getElementById("doctorNote")?.addEventListener("input",e=>{S().doctorNote=e.target.value;store.persist()});
  document.getElementById("reminderTime")?.addEventListener("change",e=>store.update(s=>s.reminderTime=e.target.value));
  document.getElementById("replayOnboarding")?.addEventListener("click",()=>{localStorage.removeItem(ONBOARD);onboardingStep=0;renderOnboarding()});
  document.getElementById("print")?.addEventListener("click",()=>window.print());
  document.getElementById("json")?.addEventListener("click",exportJson);
  document.getElementById("csv")?.addEventListener("click",exportCsv);
  document.getElementById("deleteAll")?.addEventListener("click",()=>{modal={type:"delete"};renderModal()});
}
function saveEntry(){
  const has=draft.energy||Object.keys(draft.symptoms).length||draft.bleeding||draft.hrtTaken;
  if(!has){feedback(S().lang==="de"?"Bitte mindestens einen Wert auswählen.":"Please choose at least one value.");return}
  const old=editingId?S().entries.find(e=>e.id===editingId):null,e=normalize({id:editingId||uid(),ts:old?.ts||new Date(),type:"checkin",...old,...draft,symptoms:{...draft.symptoms}});
  store.update(s=>{if(editingId)s.entries=s.entries.map(x=>x.id===editingId?e:x);else s.entries.push(e)});
  draft=blank();editingId=null;complete();setTimeout(()=>store.update(s=>s.activeTab="today"),380);
}
function editEntry(id){
  const e=S().entries.find(x=>x.id===id);if(!e)return;
  if(e.type==="acute"){modal={type:"acute",symptom:e.acuteSymptom,intensity:e.intensity,editId:id};renderModal();return}
  draft={energy:e.energy,symptoms:{...e.symptoms},bleeding:e.bleeding,hrtTaken:e.hrtTaken};editingId=id;store.update(s=>s.activeTab="checkin");
}
function renderModal(){
  document.querySelector(".modal-backdrop")?.remove();if(!modal)return;
  const w=document.createElement("div");w.className="modal-backdrop";
  if(modal.type==="acute")w.innerHTML=`<section class="modal-sheet"><div class="grabber"></div><header><div><h2>${T("signalCapture")}</h2><p>${T("signalCaptureSub")}</p></div><button id="closeModal">×</button></header><div class="acute-grid">${ACUTE.map(id=>`<button data-acute="${id}" class="${modal.symptom===id?"active":""}">${T(id)}</button>`).join("")}</div><div class="acute-levels">${["L","M","S"].map(v=>`<button data-acute-level="${v}" class="${modal.intensity===v?"active":""}">${v}</button>`).join("")}</div><button class="primary" id="saveAcute">${T("finish")}</button></section>`;
  else w.innerHTML=`<section class="modal-sheet"><div class="grabber"></div><h2>${T("deleteAll")}</h2><p>${T("confirmDelete")}</p><div class="modal-actions"><button id="cancelDelete">${T("cancel")}</button><button id="confirmDelete" class="danger">${T("deleteNow")}</button></div></section>`;
  document.body.appendChild(w);
  w.onclick=e=>{if(e.target===w){modal=null;w.remove()}};
  document.getElementById("closeModal")?.addEventListener("click",()=>{modal=null;w.remove()});
  document.querySelectorAll("[data-acute]").forEach(b=>b.onclick=()=>{modal.symptom=b.dataset.acute;renderModal()});
  document.querySelectorAll("[data-acute-level]").forEach(b=>b.onclick=()=>{modal.intensity=b.dataset.acuteLevel;renderModal()});
  document.getElementById("saveAcute")?.addEventListener("click",()=>{
    const editId=modal.editId,symptom=modal.symptom,intensity=modal.intensity,old=editId?S().entries.find(e=>e.id===editId):null;
    const e=normalize({id:editId||uid(),ts:old?.ts||new Date(),type:"acute",acuteSymptom:symptom,intensity});
    modal=null;w.remove();
    store.update(s=>{if(editId)s.entries=s.entries.map(x=>x.id===editId?e:x);else s.entries.push(e)});
    feedback(T("acuteSaved"));
  });
  document.getElementById("cancelDelete")?.addEventListener("click",()=>{modal=null;w.remove()});
  document.getElementById("confirmDelete")?.addEventListener("click",()=>{
    const lang=S().lang,reminderTime=S().reminderTime;
    store.state={...structuredClone(DEFAULT_STATE),lang,reminderTime};store.persist();modal=null;w.remove();render();
  });
}
function complete(){document.querySelector(".completion")?.remove();const e=document.createElement("div");e.className="completion";e.textContent="✓";document.body.appendChild(e);navigator.vibrate?.(18);setTimeout(()=>e.remove(),700)}
function feedback(m){document.querySelector(".soft-feedback")?.remove();const e=document.createElement("div");e.className="soft-feedback";e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),1400)}
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),800)}
function exportJson(){download(`luna-${localKey(new Date())}.json`,JSON.stringify(S(),null,2),"application/json")}
function cell(v){const s=String(v??"");return/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}
function exportCsv(){const h=["id","timestamp","type","energy","symptoms","bleeding","hrtTaken","acuteSymptom","intensity","sleepDuration","sleepHours","sleepQuality"],rows=S().entries.map(e=>h.map(k=>cell(k==="timestamp"?e.ts:k==="symptoms"?JSON.stringify(e.symptoms):e[k])).join(","));download(`luna-${localKey(new Date())}.csv`,[h.join(","),...rows].join("\n"),"text/csv;charset=utf-8")}

function onboardVisual(s){
  if(s===0)return`<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="42" class="o-bg"/><circle cx="60" cy="60" r="30" class="o-ring"/><path d="M60 30a30 30 0 0 1 28 18" class="o-accent"/></svg>`;
  if(s===1)return`<svg viewBox="0 0 120 120"><path d="M14 75c17-28 32 13 48-14s29 10 44-19" class="o-wave"/><circle cx="30" cy="59" r="5" class="o-dot"/><circle cx="62" cy="61" r="5" class="o-dot"/><circle cx="94" cy="48" r="5" class="o-dot"/></svg>`;
  return`<svg viewBox="0 0 120 120"><rect x="28" y="18" width="64" height="84" rx="16" class="o-card"/><path d="M42 44h36M42 59h36M42 74h24" class="o-line"/><circle cx="82" cy="87" r="11" class="o-sage"/></svg>`;
}
function renderOnboarding(){
  const r=document.getElementById("onboarding");
  if(localStorage.getItem(ONBOARD)!==null){r.hidden=true;return}
  r.hidden=false;
  const slides=[[T("intro1"),T("intro1sub")],[T("intro2"),T("intro2sub")],[T("intro3"),T("intro3sub")]],s=slides[onboardingStep];
  r.innerHTML=`<div class="onboarding-card"><div class="brand">LUNA</div><div class="onboarding-body"><div class="onboarding-visual">${onboardVisual(onboardingStep)}</div><h1>${s[0]}</h1><p>${s[1]}</p></div><div class="onboarding-dots">${slides.map((_,i)=>`<i class="${i===onboardingStep?"active":""}"></i>`).join("")}</div><button class="primary" id="onNext">${onboardingStep===2?T("onStart"):T("next")}</button><small>${T("private")}</small></div>`;
  document.getElementById("onNext").onclick=()=>{if(onboardingStep<2){onboardingStep++;renderOnboarding()}else{localStorage.setItem(ONBOARD,"1");r.hidden=true;store.update(s=>s.activeTab="today")}};
}
store.subscribe(render);render();
})();