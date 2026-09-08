(()=>{"use strict";

const VERSION=25, KEY="midlifeOS_v25", ONBOARD="midlife_onboarded";
const SYM=["hot","brain","joints","headache","palpitations","sleepIssue"];
const ACUTE=["hot","anxious","headache","palpitations"];
const BASE={schemaVersion:VERSION,lang:"de",activeTab:"dashboard",entries:[],analysisRange:30,overlaySleep:true,reportRange:30,doctorNote:""};

const C={
de:{dashboard:"Dashboard",log:"Erfassen",analysis:"Verlauf",report:"Arzt & Profil",gm:"Guten Morgen",gd:"Guten Tag",ge:"Guten Abend",todayOpen:"Tages-Check-in offen",todayDone:"Heute erfasst ✓",adjust:"Heutigen Eintrag anpassen",start:"20-Sekunden-Check-in starten",acute:"Akutes Symptom erfassen",acuteSub:"Hitzewallung, Unruhe, Kopfschmerz oder Herzrasen in zwei Schritten dokumentieren.",spot:"Muster-Spotlight",week:"7-Tage-Überblick",sleep:"Schlaf",sleepDuration:"Schlafdauer",sleepQuality:"Schlafqualität",energy:"Energie",mood:"Stimmung",symptoms:"Beschwerden",cycle:"Zyklus / HRT",hot:"Hitzewallung",brain:"Brain Fog",joints:"Gelenke",headache:"Kopfschmerz",palpitations:"Herzrasen",sleepIssue:"Schlafstörung",anxious:"Unruhe / Panik",calm:"Ruhig",exhausted:"Erschöpft",irritable:"Gereizt",anxiousMood:"Ängstlich",veryPoor:"Sehr schlecht",poor:"Schlecht",okay:"Okay",good:"Gut",veryGood:"Sehr gut",empty:"Leer",low:"Niedrig",steady:"Okay",high:"Gut",full:"Voll",bleedNone:"Keine Blutung",bleedLight:"Leicht",bleedHeavy:"Stark",spotting:"Schmierblutung",bleeding:"Blutung",hrt:"HRT/HET heute eingenommen",save:"Check-in speichern",reset:"Zurücksetzen",saved:"Tages-Check-in gespeichert ✓",acuteSaved:"Akut-Symptom erfasst ✓",mild:"Leicht",moderate:"Mittel",strong:"Stark",history:"Einträge",edit:"Bearbeiten",del:"Löschen",overlay:"Schlafdauer überlagern",emptyChart:"Erfasse deine ersten Tage, um deinen Verlauf als Kurve zu sehen.",possible:"Bisher dokumentiert",observation:"Beobachtung",medical:"Midlife OS zeigt Beobachtungen aus deinen Einträgen. Es stellt keine Diagnose und ersetzt keine medizinische Beratung.",reportTitle:"Arzt-Zusammenfassung",period:"Erfassungszeitraum",symptom:"Symptom",frequency:"Häufigkeit",average:"Ø Intensität",peak:"Peak-Zeit",sleepTrend:"Schlaftrend",bleedings:"Blutungen / Schmierblutungen",hrtDoc:"HRT/HET-Dokumentation",patientNote:"Eigene Notizen für das Arztgespräch",patientPlaceholder:"Eigene Fragen oder Beobachtungen für das Arztgespräch notieren...",clinician:"Notizen für Arzt / Ärztin",print:"Report drucken / als PDF sichern",data:"Datenverwaltung",json:"JSON",csv:"CSV",deleteAll:"Alle Daten sicher löschen",confirmDelete:"Alle lokal gespeicherten Einträge wirklich löschen?",cancel:"Abbrechen",deleteNow:"Daten löschen",intro1:"Verstehe deinen Körper in 20 Sekunden am Tag.",intro1sub:"Ein kurzer Check-in macht Veränderungen sichtbar, ohne dass dein Alltag zur Tabelle wird.",intro2:"Erkenne Muster statt Einzelmomente.",intro2sub:"Schlaf, Energie, Stimmung und Beschwerden werden gemeinsam betrachtet.",intro3:"Gut vorbereitet ins Arztgespräch.",intro3sub:"Deine Daten bleiben lokal auf deinem Gerät. Du entscheidest, was du exportierst.",next:"Weiter",go:"Jetzt starten",private:"100% lokal auf deinem Gerät",balanced:"Ausgeglichen",medium:"Mittlere Belastung",burden:"Erhöhte Belastung",quickSleep:"Schlaf",quickMood:"Stimmung",quickSymptoms:"Symptome",checkinTitle:"Tages-Check-in",checkinSub:"Kompakt erfassen, was heute relevant ist.",focusTitle:"Dein Fokus für heute",focusLow:"Heute ist die Belastung erhöht. Plane bewusst Erholungspausen, trinke regelmäßig und halte die Umgebung bei Hitzewallungen eher kühl. Sanfte Bewegung ist okay, wenn sie sich gut anfühlt.",focusMid:"Heute zeigt sich eine mittlere Belastung. Ein gleichmäßiger Tagesrhythmus, frische Luft und kurze Pausen können helfen, Energie und Konzentration stabil zu halten.",focusHigh:"Deine heutigen Werte wirken ausgeglichen. Nutze die gute Energie für Bewegung oder Aufgaben, die dir wichtig sind – ohne den Erholungsrhythmus aus dem Blick zu verlieren.",noData:"Noch keine Daten"},
en:{dashboard:"Dashboard",log:"Log",analysis:"History",report:"Doctor & Profile",gm:"Good morning",gd:"Good afternoon",ge:"Good evening",todayOpen:"Daily check-in open",todayDone:"Today captured ✓",adjust:"Adjust today's entry",start:"Start 20-second check-in",acute:"Log acute symptom",acuteSub:"Capture a hot flash, restlessness, headache or palpitations in two steps.",spot:"Pattern spotlight",week:"7-day overview",sleep:"Sleep",sleepDuration:"Sleep duration",sleepQuality:"Sleep quality",energy:"Energy",mood:"Mood",symptoms:"Symptoms",cycle:"Cycle / HRT",hot:"Hot flash",brain:"Brain fog",joints:"Joints",headache:"Headache",palpitations:"Palpitations",sleepIssue:"Sleep disturbance",anxious:"Restlessness / panic",calm:"Calm",exhausted:"Exhausted",irritable:"Irritable",anxiousMood:"Anxious",veryPoor:"Very poor",poor:"Poor",okay:"Okay",good:"Good",veryGood:"Very good",empty:"Empty",low:"Low",steady:"Okay",high:"Good",full:"Full",bleedNone:"No bleeding",bleedLight:"Light",bleedHeavy:"Heavy",spotting:"Spotting",bleeding:"Bleeding",hrt:"HRT/MHT taken today",save:"Save check-in",reset:"Reset",saved:"Daily check-in saved ✓",acuteSaved:"Acute symptom captured ✓",mild:"Mild",moderate:"Moderate",strong:"Strong",history:"Entries",edit:"Edit",del:"Delete",overlay:"Overlay sleep duration",emptyChart:"Log your first days to see your history as a chart.",possible:"Documented so far",observation:"Observation",medical:"Midlife OS shows observations from your entries. It does not diagnose and does not replace medical advice.",reportTitle:"Doctor summary",period:"Tracking period",symptom:"Symptom",frequency:"Frequency",average:"Avg intensity",peak:"Peak time",sleepTrend:"Sleep trend",bleedings:"Bleeding / spotting",hrtDoc:"HRT/MHT documentation",patientNote:"Your notes for the appointment",patientPlaceholder:"Add your own questions or observations for the appointment...",clinician:"Clinician notes",print:"Print report / save as PDF",data:"Data management",json:"JSON",csv:"CSV",deleteAll:"Securely delete all data",confirmDelete:"Really delete all locally stored entries?",cancel:"Cancel",deleteNow:"Delete data",intro1:"Understand your body in 20 seconds a day.",intro1sub:"A quick check-in makes changes visible without turning life into a spreadsheet.",intro2:"See patterns instead of isolated moments.",intro2sub:"Sleep, energy, mood and symptoms are viewed together.",intro3:"Walk into your appointment prepared.",intro3sub:"Your data stays local on this device. You choose what to export.",next:"Continue",go:"Get started",private:"100% local on your device",balanced:"Balanced",medium:"Medium load",burden:"Higher load",quickSleep:"Sleep",quickMood:"Mood",quickSymptoms:"Symptoms",checkinTitle:"Daily check-in",checkinSub:"Quickly capture what matters today.",focusTitle:"Your focus for today",focusLow:"Today's load is elevated. Build in recovery pauses, drink regularly and keep the room cooler if hot flashes are bothersome. Gentle movement is fine if it feels good.",focusMid:"Today's values show a medium load. A steady rhythm, fresh air and brief breaks may help keep energy and concentration more stable.",focusHigh:"Today's values look balanced. Use that energy for movement or meaningful tasks while keeping your recovery rhythm in view.",noData:"No data yet"}
};

const blank=()=>({sleepDuration:"",sleepHours:0,sleepQuality:0,energy:0,mood:"",symptoms:{},bleeding:"",hrtTaken:false});
const clone=x=>JSON.parse(JSON.stringify(x));
const uid=()=>globalThis.crypto?.randomUUID?.()||`e_${Date.now()}_${Math.random().toString(16).slice(2)}`;
const clamp=(n,a,b,d=0)=>Number.isFinite(+n)?Math.max(a,Math.min(b,+n)):d;

function norm(e){
 const symptoms={};
 if(e?.symptoms&&typeof e.symptoms==="object") for(const [id,v] of Object.entries(e.symptoms)){
  if(!SYM.includes(id)) continue;
  symptoms[id]=["L","M","S"].includes(v)?v:(+v===1?"L":+v===3?"S":"M");
 }
 return{id:String(e?.id||uid()),ts:new Date(e?.ts||Date.now()).toISOString(),type:e?.type==="acute"?"acute":"checkin",sleepDuration:String(e?.sleepDuration||e?.sleepBand||"").replace(/h+$/,""),sleepHours:clamp(e?.sleepHours,0,12),sleepQuality:clamp(e?.sleepQuality,0,5),energy:clamp(e?.energy,0,5),mood:["calm","exhausted","irritable","anxiousMood"].includes(e?.mood)?e.mood:"",symptoms,bleeding:["bleedNone","bleedLight","bleedHeavy","spotting"].includes(e?.bleeding)?e.bleeding:"",hrtTaken:!!e?.hrtTaken,acuteSymptom:ACUTE.includes(e?.acuteSymptom)?e.acuteSymptom:"",intensity:["L","M","S"].includes(e?.intensity)?e.intensity:(+e?.intensity===1?"L":+e?.intensity===3?"S":"M")};
}

class Store{
 constructor(){this.listeners=new Set();this.state=this.load()}
 parse(v){try{return JSON.parse(v)}catch{return null}}
 load(){
  const now=this.parse(localStorage.getItem(KEY));
  if(now?.schemaVersion===VERSION)return{...clone(BASE),...now,entries:Array.isArray(now.entries)?now.entries.map(norm):[]};
  const next=clone(BASE);
  for(const k of["midlifeOS_v24","midlifeOS_v23","midlifeOS_v22","midlifeOS_v21","midlifeOS_v20","midlifeOS_v19","midlifeOS_v18","midlifeOS_v17","midlifeOS_v15","midlifeOS_v14"]){
   const old=this.parse(localStorage.getItem(k)); if(!old)continue;
   if(["de","en"].includes(old.lang))next.lang=old.lang;
   if(old.doctorNote)next.doctorNote=old.doctorNote;
   if(Array.isArray(old.entries))next.entries.push(...old.entries.map(norm));
  }
  this.save(next);return next;
 }
 save(s=this.state){try{localStorage.setItem(KEY,JSON.stringify({...s,schemaVersion:VERSION}))}catch{}}
 update(fn){fn(this.state);this.save();for(const l of this.listeners)l(this.state)}
 subscribe(fn){this.listeners.add(fn)}
}
const store=new Store(); let draft=blank(),editingId=null,modal=null,onStep=0;
const S=()=>store.state,t=k=>C[S().lang][k]||k,loc=()=>S().lang==="de"?"de-DE":"en-GB";

function dayKey(v){const d=v instanceof Date?v:new Date(v);return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function sameDay(v,d=new Date()){return dayKey(v)===dayKey(d)}
function cut(days){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-(days-1));return d}
function entries(days){const c=cut(days);return S().entries.filter(e=>new Date(e.ts)>=c).sort((a,b)=>new Date(a.ts)-new Date(b.ts))}
function today(){return S().entries.filter(e=>sameDay(e.ts)).sort((a,b)=>new Date(b.ts)-new Date(a.ts))}
function fmtD(v){return new Date(v).toLocaleDateString(loc(),{day:"2-digit",month:"short",year:"numeric"})}
function fmtT(v){return new Date(v).toLocaleTimeString(loc(),{hour:"2-digit",minute:"2-digit"})}
function greet(){const h=new Date().getHours();return h<11?t("gm"):h<18?t("gd"):t("ge")}
function avg(a){return a.length?a.reduce((x,y)=>x+y,0)/a.length:0}
function num(v){return v==="L"?1:v==="S"?3:2}
function sev(v){return v==="L"?t("mild"):v==="S"?t("strong"):t("moderate")}
function has(e,id){return e.type==="acute"?e.acuteSymptom===id:Object.hasOwn(e.symptoms,id)}
function intensity(e,id){return e.type==="acute"?num(e.intensity):num(e.symptoms[id])}
function stats(es){const m={};for(const e of es){const ids=e.type==="acute"&&e.acuteSymptom?[e.acuteSymptom]:Object.keys(e.symptoms);for(const id of ids){m[id]??={count:0,sum:0};m[id].count++;m[id].sum+=intensity(e,id)}}return Object.entries(m).map(([id,v])=>({id,count:v.count,avg:v.sum/v.count})).sort((a,b)=>b.count-a.count||b.avg-a.avg)}
function peak(es,id){const hs=es.filter(e=>has(e,id)).map(e=>new Date(e.ts).getHours());if(!hs.length)return"—";const b=[[0,6],[6,12],[12,18],[18,24]],labs=S().lang==="de"?["Nacht","Morgen","Nachmittag","Abend"]:["Night","Morning","Afternoon","Evening"],c=b.map(([a,z])=>hs.filter(h=>h>=a&&h<z).length);return labs[c.indexOf(Math.max(...c))]}

function score(entry){
 if(!entry)return null;let s=100;
 if(entry.sleepDuration==="<6")s-=20;else if(entry.sleepDuration==="6-7")s-=10;
 s+=(entry.sleepQuality-3)*10;s+=(entry.energy-3)*5;
 for(const v of Object.values(entry.symptoms))s-=v==="L"?5:v==="S"?15:10;
 s=Math.max(15,Math.min(100,Math.round(s)));
 return{score:s,tone:s>=75?"sage":s>=45?"sand":"terra",label:s>=75?t("balanced"):s>=45?t("medium"):t("burden")};
}
function ring(entry){const r=66,c=2*Math.PI*r,s=score(entry);if(!s)return`<div class="ring-wrap"><svg class="ring" viewBox="0 0 180 180"><circle class="ring-empty" cx="90" cy="90" r="${r}"/></svg><div class="ring-text empty"><strong>–</strong><span>${t("todayOpen")}</span></div></div>`;return`<div class="ring-wrap"><svg class="ring" viewBox="0 0 180 180" role="img" aria-label="${s.score}% ${s.label}"><circle class="ring-base" cx="90" cy="90" r="${r}"/><circle class="ring-value ${s.tone}" cx="90" cy="90" r="${r}" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${(c*(1-s.score/100)).toFixed(2)}"/></svg><div class="ring-text ${s.tone}"><strong>${s.score}%</strong><span>${s.label}</span></div></div>`}
function quick(entry){if(!entry)return"";const q=["","veryPoor","poor","okay","good","veryGood"][entry.sleepQuality],sl=entry.sleepDuration?`${entry.sleepDuration}h${q?` · ${t(q)}`:""}`:"—";return`<div class="quick"><span>☾ ${t("quickSleep")}: ${sl}</span><span>🌿 ${t("quickMood")}: ${entry.mood?t(entry.mood):"—"}</span><span>⚡ ${t("quickSymptoms")}: ${Object.keys(entry.symptoms).length}</span></div>`}
function focus(entry){const s=score(entry);if(!s)return"";return`<section class="focus ${s.tone}"><div class="focus-icon"><svg viewBox="0 0 24 24"><path d="M19.5 4.5C13 4.6 7.8 7.4 6.2 12.2c-1.1 3.5.2 5.9.2 5.9s2.4 1.3 5.9.2c4.8-1.6 7.6-6.8 7.7-13.3l-.5-.5Z"/><path d="M5 19c3.3-4.8 7-8 11.6-10.4"/></svg></div><div><strong>${t("focusTitle")}</strong><p>${s.score<45?t("focusLow"):s.score<75?t("focusMid"):t("focusHigh")}</p></div></section>`}
function spotlight(days){const st=stats(entries(days));if(!st.length)return{title:t("observation"),text:S().lang==="de"?"Noch nicht genug Daten für ein sinnvolles Muster.":"Not enough data yet for a meaningful pattern."};const x=st[0],v=x.avg<1.5?"L":x.avg>=2.5?"S":"M";return{title:t("possible"),text:S().lang==="de"?`${x.count}× ${t(x.id)} (Durchschnitt: ${sev(v)}).`:`${x.count}× ${t(x.id)} (average: ${sev(v)}).`}}

function svgIcon(k){const d={home:'<path d="M4 11.5 12 5l8 6.5V20H4z"/><path d="M9 20v-6h6v6"/>',plus:'<path d="M12 5v14M5 12h14"/>',trend:'<path d="M4 17l5-5 4 3 7-8"/>',report:'<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/>'}[k];return`<svg viewBox="0 0 24 24">${d}</svg>`}
function nav(tab,ic){return`<button data-tab="${tab}" class="${S().activeTab===tab?"active":""}">${svgIcon(ic)}<span>${t(tab)}</span></button>`}

function dashboard(){
 const check=today().find(e=>e.type==="checkin"),sp=spotlight(14),week=entries(7);
 return`<div class="stack"><section class="card hero"><div class="hero-head"><div class="eyebrow">${t("dashboard")}</div><h1>${greet()}</h1><p class="sub ${check?"good-text":""}">${check?t("todayDone"):t("todayOpen")}</p></div>${ring(check)}${quick(check)}${focus(check)}${check?`<button class="text-link" id="adjustToday">${t("adjust")}</button>`:`<button class="primary" data-go="log">${t("start")}</button>`}</section><button class="acute-card" id="acute"><span><strong>${t("acute")}</strong><small>${t("acuteSub")}</small></span><i>+</i></button><section class="card"><div class="eyebrow">${t("spot")}</div><div class="insight"><strong>${sp.title}</strong><span>${sp.text}</span></div></section><section class="card"><div class="section-head"><div><div class="eyebrow">${t("week")}</div><h2>${week.length} ${S().lang==="de"?"Einträge":"entries"}</h2></div><span class="pill">7D</span></div><div class="chart-shell">${chart(7,null,false)}</div></section></div>`;
}

function tone(group,val){if(group==="sleepDuration")return val==="<6"?"bad":val==="6-7"?"neutral":"good";if(group==="sleepQuality"||group==="energy")return +val<=2?"bad":+val===3?"neutral":"good";if(group==="mood")return val==="calm"?"good":"bad";if(group==="bleeding")return val==="bleedNone"?"good":val==="bleedHeavy"?"bad":"neutral";return""}
function seg(attr,label,on,group,val){return`<button ${attr} class="${on?`active ${tone(group,val)}`:""}">${label}</button>`}
function symptomTile(id){
 const on=draft.symptoms[id], ints=["L","M","S"];
 return`<div class="symptom-tile ${on?"active":""}"><button class="symptom-main" data-sym="${id}"><span>${on?"✓":"+"}</span><strong>${t(id)}</strong></button><div class="tile-intensity ${on?"show":""}">${ints.map(v=>`<button data-intensity="${id}:${v}" class="${on===v?"active":""}">${v}</button>`).join("")}</div></div>`;
}
function logView(){
 return`<div class="stack"><header class="page-head"><div class="eyebrow">${t("log")}</div><h1>${editingId?t("edit"):t("checkinTitle")}</h1><p class="sub">${t("checkinSub")}</p></header><section class="card compact"><div class="eyebrow">${t("sleep")}</div><div class="field"><label>${t("sleepDuration")}</label><div class="seg four">${[["<6",5],["6-7",6.5],["7-8",7.5],[">8",9]].map(([v,h])=>seg(`data-sleep="${v}:${h}"`,`${v}h`,draft.sleepDuration===v,"sleepDuration",v)).join("")}</div></div><div class="field"><label>${t("sleepQuality")}</label><div class="seg five">${[[1,"veryPoor"],[2,"poor"],[3,"okay"],[4,"good"],[5,"veryGood"]].map(([n,k])=>seg(`data-scale="sleepQuality:${n}"`,t(k),draft.sleepQuality===n,"sleepQuality",n)).join("")}</div></div><div class="field"><label>${t("energy")}</label><div class="seg five">${[[1,"empty"],[2,"low"],[3,"steady"],[4,"high"],[5,"full"]].map(([n,k])=>seg(`data-scale="energy:${n}"`,t(k),draft.energy===n,"energy",n)).join("")}</div></div></section><section class="card compact"><div class="eyebrow">${t("symptoms")}</div><div class="symptom-matrix">${SYM.map(symptomTile).join("")}</div></section><section class="card compact"><div class="eyebrow">${t("mood")}</div><div class="seg four">${["calm","exhausted","irritable","anxiousMood"].map(k=>seg(`data-mood="${k}"`,t(k),draft.mood===k,"mood",k)).join("")}</div></section><section class="card compact"><div class="eyebrow">${t("cycle")}</div><div class="seg four">${["bleedNone","bleedLight","bleedHeavy","spotting"].map(k=>seg(`data-bleeding="${k}"`,t(k),draft.bleeding===k,"bleeding",k)).join("")}</div><div class="toggle-row"><span>${t("hrt")}</span><button id="hrt" class="toggle ${draft.hrtTaken?"on":""}"><i></i></button></div></section><div class="form-actions"><button class="primary" id="saveEntry">${t("save")}</button><button class="secondary" id="resetForm">${t("reset")}</button></div></div>`;
}

function historyCard(e){
 const status=[],sym=[];
 if(e.type==="acute")sym.push(`<span class="badge symptom">${t(e.acuteSymptom)}: ${e.intensity}</span>`);
 else{
  if(e.sleepDuration)status.push(`<span class="badge meta">${t("sleep")}: ${e.sleepDuration}h${e.sleepQuality?` (${t(["","veryPoor","poor","okay","good","veryGood"][e.sleepQuality])})`:""}</span>`);
  if(e.mood)status.push(`<span class="badge mood">${t("mood")}: ${t(e.mood)}</span>`);
  if(e.hrtTaken)status.push(`<span class="badge meta">HRT ✓</span>`);
  if(e.bleeding)status.push(`<span class="badge meta">${t("bleeding")}: ${t(e.bleeding)}</span>`);
  for(const[id,v]of Object.entries(e.symptoms))sym.push(`<span class="badge symptom">${t(id)}: ${v}</span>`);
 }
 return`<article class="entry"><div class="entry-head"><strong>${fmtT(e.ts)}</strong><span>${fmtD(e.ts)}</span></div>${status.length?`<div class="badge-row">${status.join("")}</div>`:""}${sym.length?`<div class="badge-row symptom-row">${sym.join("")}</div>`:""}<div class="entry-actions"><button data-edit="${e.id}">${t("edit")}</button><button data-delete="${e.id}" class="danger">${t("del")}</button></div></article>`;
}
function analysisView(){
 const es=entries(S().analysisRange),st=stats(es),top=st[0],sp=spotlight(S().analysisRange);
 return`<div class="stack"><header class="page-head"><div class="eyebrow">${t("analysis")}</div><h1>${S().lang==="de"?"Muster auf einen Blick":"Patterns at a glance"}</h1><p class="sub">${t("medical")}</p></header><div class="tabs">${[7,30,90].map(n=>`<button data-range="${n}" class="${S().analysisRange===n?"active":""}">${n} ${S().lang==="de"?"Tage":"days"}</button>`).join("")}</div><section class="card"><div class="section-head"><div><div class="eyebrow">${t("spot")}</div><h2>${top?t(top.id):(S().lang==="de"?"Dein Verlauf":"Your history")}</h2></div><span class="pill">${es.length}</span></div><div class="overlay-row"><span>${t("overlay")}</span><button id="overlay" class="toggle ${S().overlaySleep?"on":""}"><i></i></button></div><div class="chart-shell">${chart(S().analysisRange,top?.id||null,S().overlaySleep)}</div></section><div class="insight"><strong>${sp.title}</strong><span>${sp.text}</span></div><section class="card"><div class="eyebrow">${t("history")}</div><div class="entry-list">${es.length?[...es].reverse().map(historyCard).join(""):`<div class="empty-state">${t("emptyChart")}</div>`}</div></section></div>`;
}
function reportView(){
 const es=entries(S().reportRange),st=stats(es),checks=es.filter(e=>e.type==="checkin"),bleed=checks.filter(e=>e.bleeding&&e.bleeding!=="bleedNone").length,hrt=checks.filter(e=>e.hrtTaken).length,sh=avg(checks.map(e=>e.sleepHours).filter(Boolean)),sq=avg(checks.map(e=>e.sleepQuality).filter(Boolean));
 return`<div class="stack report-screen"><header class="page-head report-head"><div class="eyebrow">${t("report")}</div><h1>${t("reportTitle")}</h1><p class="sub">${t("medical")}</p></header><div class="tabs no-print">${[30,60,90].map(n=>`<button data-report-range="${n}" class="${S().reportRange===n?"active":""}">${n} ${S().lang==="de"?"Tage":"days"}</button>`).join("")}</div><section class="card"><div class="report-period"><div><div class="eyebrow">${t("period")}</div><div class="nowrap">${fmtD(cut(S().reportRange))} – ${fmtD(new Date())}</div></div><span class="pill">${es.length}</span></div></section><section class="card table-card"><table><thead><tr><th>${t("symptom")}</th><th>${t("frequency")}</th><th>${t("average")}</th><th>${t("peak")}</th></tr></thead><tbody>${st.length?st.slice(0,6).map(x=>`<tr><td>${t(x.id)}</td><td>${x.count}</td><td>${x.avg.toFixed(1)}</td><td>${peak(es,x.id)}</td></tr>`).join(""):`<tr><td colspan="4">${t("noData")}</td></tr>`}</tbody></table></section><section class="card summary"><div><strong>${t("sleepTrend")}</strong><span>${checks.length?`${sh?sh.toFixed(1)+"h":"—"} · ${sq?sq.toFixed(1)+"/5":"—"}`:t("noData")}</span></div><div><strong>${t("bleedings")}</strong><span>${bleed}</span></div><div><strong>${t("hrtDoc")}</strong><span>${checks.length?`${hrt}/${checks.length}`:"—"}</span></div></section><section class="card"><label class="eyebrow" for="doctorNote">${t("patientNote")}</label><textarea id="doctorNote" class="notes" placeholder="${t("patientPlaceholder")}">${escapeHtml(S().doctorNote)}</textarea></section><section class="print-clinician"><div class="eyebrow">${t("clinician")}</div><div class="print-line"></div></section><button class="primary no-print" id="print">${t("print")}</button><section class="card no-print"><div class="eyebrow">${t("data")}</div><div class="data-actions"><button class="secondary" id="json">${t("json")}</button><button class="secondary" id="csv">${t("csv")}</button></div><button class="danger-link" id="deleteAll">${t("deleteAll")}</button></section></div>`;
}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function chart(days,id,overlay){
 const es=entries(days);if(!es.length)return`<div class="empty-state">${t("emptyChart")}</div>`;
 const active=[...new Set(es.map(e=>dayKey(e.ts)))].sort();let keys;
 if(days>7&&active.length<=6)keys=active;
 else{const start=cut(days);keys=[];for(let i=0;i<days;i++){const d=new Date(start);d.setDate(start.getDate()+i);keys.push(dayKey(d))}}
 const series=keys.map(k=>{const de=es.filter(e=>dayKey(e.ts)===k);let v=0;if(id){const vals=de.filter(e=>has(e,id)).map(e=>intensity(e,id));v=vals.length?Math.max(...vals):0}else{const vals=[];for(const e of de)e.type==="acute"?vals.push(num(e.intensity)):Object.values(e.symptoms).forEach(x=>vals.push(num(x)));v=vals.length?Math.max(...vals):0}return{date:new Date(`${k}T12:00:00`),v,sleep:avg(de.filter(e=>e.type==="checkin").map(e=>e.sleepHours).filter(Boolean))}}).filter(s=>days<=7||active.length>6||s.v||s.sleep);
 if(!series.length)return`<div class="empty-state">${t("emptyChart")}</div>`;
 const W=360,H=204,L=30,R=12,T=18,B=44,PW=W-L-R,PH=H-T-B,x=i=>L+(i+.5)*(PW/series.length),y=v=>T+PH-(v/3)*PH,ys=h=>T+PH-((Math.max(4,Math.min(10,h))-4)/6)*PH,bw=Math.max(14,Math.min(36,PW/series.length*.58));
 let grid="",bars="",labs="",sleep="";for(let n=1;n<=3;n++){const yy=y(n);grid+=`<line class="grid-line" x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}"/><text class="axis-text" x="8" y="${yy+3}">${n}</text>`}
 const step=Math.max(1,Math.ceil(series.length/7));series.forEach((s,i)=>{if(s.v){const yy=y(s.v);bars+=`<rect class="bar" x="${x(i)-bw/2}" y="${yy}" width="${bw}" height="${T+PH-yy}" rx="7"/>`}if(i%step===0||i===series.length-1){const label=series.length<=7?s.date.toLocaleDateString(loc(),{weekday:"short",day:"2-digit"}):s.date.toLocaleDateString(loc(),{day:"2-digit",month:"2-digit"});labs+=`<text class="axis-text" x="${x(i)}" y="${H-10}" text-anchor="middle">${label}</text>`}});
 if(overlay&&series.some(s=>s.sleep)){const pts=series.map((s,i)=>s.sleep?`${x(i)},${ys(s.sleep)}`:null).filter(Boolean).join(" ");sleep=`<polyline class="sleep-line" points="${pts}"/>`+series.map((s,i)=>s.sleep?`<circle class="sleep-point" cx="${x(i)}" cy="${ys(s.sleep)}" r="3"/>`:"").join("")}
 return`<svg class="trend-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Trend chart">${grid}${bars}${sleep}${labs}</svg>`;
}

function freshLog(){draft=blank();editingId=null;store.update(s=>s.activeTab="log")}
function render(){
 document.documentElement.lang=S().lang;
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===S().lang));
 document.getElementById("view-root").innerHTML=S().activeTab==="log"?logView():S().activeTab==="analysis"?analysisView():S().activeTab==="report"?reportView():dashboard();
 document.getElementById("bottom-nav").innerHTML=nav("dashboard","home")+nav("log","plus")+nav("analysis","trend")+nav("report","report");
 bind();onboarding();if(modal)modalView();
}
function bind(){
 document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>store.update(s=>s.lang=b.dataset.lang));
 document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{const tab=b.dataset.tab;if(tab==="log"){draft=blank();editingId=null}store.update(s=>s.activeTab=tab);window.scrollTo({top:0,behavior:"smooth"})});
 document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>b.dataset.go==="log"?freshLog():store.update(s=>s.activeTab=b.dataset.go));
 document.getElementById("adjustToday")?.addEventListener("click",()=>{const e=today().find(x=>x.type==="checkin");if(e)editEntry(e.id)});
 document.getElementById("acute")?.addEventListener("click",()=>{modal={type:"acute",symptom:"",intensity:"M"};modalView()});
 document.querySelectorAll("[data-sleep]").forEach(b=>b.onclick=()=>{const[v,h]=b.dataset.sleep.split(":");draft.sleepDuration=v;draft.sleepHours=+h;render()});
 document.querySelectorAll("[data-scale]").forEach(b=>b.onclick=()=>{const[k,v]=b.dataset.scale.split(":");draft[k]=+v;render()});
 document.querySelectorAll("[data-sym]").forEach(b=>b.onclick=()=>{const id=b.dataset.sym;if(draft.symptoms[id])delete draft.symptoms[id];else draft.symptoms[id]="M";render()});
 document.querySelectorAll("[data-intensity]").forEach(b=>b.onclick=e=>{e.stopPropagation();const[id,v]=b.dataset.intensity.split(":");draft.symptoms[id]=v;render()});
 document.querySelectorAll("[data-mood]").forEach(b=>b.onclick=()=>{draft.mood=b.dataset.mood;render()});
 document.querySelectorAll("[data-bleeding]").forEach(b=>b.onclick=()=>{draft.bleeding=b.dataset.bleeding;render()});
 document.getElementById("hrt")?.addEventListener("click",()=>{draft.hrtTaken=!draft.hrtTaken;render()});
 document.getElementById("resetForm")?.addEventListener("click",()=>{draft=blank();editingId=null;render()});
 document.getElementById("saveEntry")?.addEventListener("click",saveEntry);
 document.querySelectorAll("[data-range]").forEach(b=>b.onclick=()=>store.update(s=>s.analysisRange=+b.dataset.range));
 document.getElementById("overlay")?.addEventListener("click",()=>store.update(s=>s.overlaySleep=!s.overlaySleep));
 document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editEntry(b.dataset.edit));
 document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>deleteEntry(b.dataset.delete));
 document.querySelectorAll("[data-report-range]").forEach(b=>b.onclick=()=>store.update(s=>s.reportRange=+b.dataset.reportRange));
 document.getElementById("doctorNote")?.addEventListener("input",e=>{S().doctorNote=e.target.value;store.save()});
 document.getElementById("print")?.addEventListener("click",()=>window.print());
 document.getElementById("json")?.addEventListener("click",exportJson);document.getElementById("csv")?.addEventListener("click",exportCsv);
 document.getElementById("deleteAll")?.addEventListener("click",()=>{modal={type:"delete"};modalView()});
}
function saveEntry(){if(!(draft.sleepDuration||draft.sleepQuality||draft.energy||draft.mood||Object.keys(draft.symptoms).length||draft.bleeding||draft.hrtTaken)){toast(S().lang==="de"?"Bitte mindestens einen Wert auswählen.":"Please choose at least one value.");return}const old=editingId?S().entries.find(e=>e.id===editingId):null,e=norm({id:editingId||uid(),ts:old?.ts||new Date(),type:"checkin",...draft});store.update(s=>{if(editingId)s.entries=s.entries.map(x=>x.id===editingId?e:x);else s.entries.push(e)});draft=blank();editingId=null;toast(t("saved"));setTimeout(()=>store.update(s=>s.activeTab="dashboard"),350)}
function editEntry(id){const e=S().entries.find(x=>x.id===id);if(!e)return;if(e.type==="acute"){modal={type:"acute",symptom:e.acuteSymptom,intensity:e.intensity,editId:id};modalView();return}editingId=id;draft={sleepDuration:e.sleepDuration,sleepHours:e.sleepHours,sleepQuality:e.sleepQuality,energy:e.energy,mood:e.mood,symptoms:{...e.symptoms},bleeding:e.bleeding,hrtTaken:e.hrtTaken};store.update(s=>s.activeTab="log")}
function deleteEntry(id){store.update(s=>s.entries=s.entries.filter(e=>e.id!==id));toast(S().lang==="de"?"Eintrag gelöscht.":"Entry deleted.")}

function modalView(){
 document.querySelector(".backdrop")?.remove();if(!modal)return;const w=document.createElement("div");w.className="backdrop";
 if(modal.type==="acute")w.innerHTML=`<section class="sheet"><div class="grabber"></div><div class="sheet-head"><div><div class="eyebrow">${t("acute")}</div><h2>${S().lang==="de"?"Was passiert gerade?":"What is happening now?"}</h2></div><button class="close" id="close">×</button></div><div class="acute-options">${ACUTE.map(id=>`<button data-acute="${id}" class="${modal.symptom===id?"active":""}">${t(id)}</button>`).join("")}</div><div class="acute-intensity">${["L","M","S"].map(v=>`<button data-acute-int="${v}" class="${modal.intensity===v?"active":""}">${v}</button>`).join("")}</div><button class="primary" id="saveAcute">${t("save")}</button></section>`;
 else w.innerHTML=`<section class="sheet"><div class="grabber"></div><h2>${t("deleteAll")}</h2><p class="sub">${t("confirmDelete")}</p><div class="data-actions"><button class="secondary" id="cancel">${t("cancel")}</button><button class="secondary danger-text" id="confirm">${t("deleteNow")}</button></div></section>`;
 document.body.appendChild(w);w.onclick=e=>{if(e.target===w){modal=null;w.remove()}};
 document.getElementById("close")?.addEventListener("click",()=>{modal=null;w.remove()});
 document.querySelectorAll("[data-acute]").forEach(b=>b.onclick=()=>{modal.symptom=b.dataset.acute;modalView()});
 document.querySelectorAll("[data-acute-int]").forEach(b=>b.onclick=()=>{modal.intensity=b.dataset.acuteInt;modalView()});
 document.getElementById("saveAcute")?.addEventListener("click",()=>{if(!modal.symptom)return;const old=modal.editId?S().entries.find(e=>e.id===modal.editId):null,e=norm({id:modal.editId||uid(),ts:old?.ts||new Date(),type:"acute",acuteSymptom:modal.symptom,intensity:modal.intensity});store.update(s=>{if(modal.editId)s.entries=s.entries.map(x=>x.id===modal.editId?e:x);else s.entries.push(e)});modal=null;w.remove();toast(t("acuteSaved"));render()});
 document.getElementById("cancel")?.addEventListener("click",()=>{modal=null;w.remove()});
 document.getElementById("confirm")?.addEventListener("click",()=>{const lang=S().lang;store.state={...clone(BASE),lang};store.save();draft=blank();editingId=null;modal=null;w.remove();render();toast(lang==="de"?"Alle Daten gelöscht.":"All data deleted.")});
}
function toast(msg){document.querySelector(".toast")?.remove();const e=document.createElement("div");e.className="toast";e.textContent=msg;document.body.appendChild(e);navigator.vibrate?.(20);setTimeout(()=>e.remove(),1700)}
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportJson(){download(`midlife-os-${dayKey(new Date())}.json`,JSON.stringify(S(),null,2),"application/json")}
function csvCell(v){const s=String(v??"");return/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}
function exportCsv(){const h=["id","timestamp","type","sleepDuration","sleepHours","sleepQuality","energy","mood","symptoms","bleeding","hrtTaken","acuteSymptom","intensity"],rows=S().entries.map(e=>h.map(k=>csvCell(k==="timestamp"?e.ts:k==="symptoms"?JSON.stringify(e.symptoms):e[k])).join(","));download(`midlife-os-${dayKey(new Date())}.csv`,[h.join(","),...rows].join("\n"),"text/csv;charset=utf-8")}

function onboardingVisual(step){if(step===0)return`<svg viewBox="0 0 140 140"><circle cx="48" cy="50" r="22" fill="#F0D8D0"/><path d="M48 15v10M48 75v10M13 50h10M73 50h10M24 26l8 8M64 66l8 8M72 26l-8 8M32 66l-8 8" stroke="#B85D43" stroke-width="4" stroke-linecap="round"/><path d="M103 32a31 31 0 1 0 0 62 35 35 0 0 1 0-62Z" fill="#E1E9E4" stroke="#4E6E5D" stroke-width="2"/></svg>`;if(step===1)return`<svg viewBox="0 0 140 140"><circle cx="30" cy="85" r="16" fill="#F0D8D0"/><circle cx="70" cy="48" r="16" fill="#E1E9E4"/><circle cx="110" cy="85" r="16" fill="#EFE4DA"/><path d="M43 75 58 58M82 58l15 17" stroke="#4E6E5D" stroke-width="4" stroke-linecap="round"/></svg>`;return`<svg viewBox="0 0 140 140"><rect x="34" y="18" width="72" height="104" rx="16" fill="#fff" stroke="#DDD5CC" stroke-width="2"/><path d="M50 45h40M50 64h40M50 83h27" stroke="#4E6E5D" stroke-width="4" stroke-linecap="round"/><circle cx="98" cy="96" r="16" fill="#F0D8D0"/><path d="m91 96 5 5 10-12" fill="none" stroke="#B85D43" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
function onboarding(){const root=document.getElementById("onboarding");if(localStorage.getItem(ONBOARD)!==null){root.hidden=true;return}root.hidden=false;const slides=[[t("intro1"),t("intro1sub")],[t("intro2"),t("intro2sub")],[t("intro3"),t("intro3sub")]],s=slides[onStep];root.innerHTML=`<div class="onboarding-card"><div class="onboarding-brand">Midlife <b>OS.</b></div><div class="onboarding-body"><div class="onboarding-visual">${onboardingVisual(onStep)}</div><h1>${s[0]}</h1><p>${s[1]}</p></div><div class="dots">${slides.map((_,i)=>`<i class="${i===onStep?"active":""}"></i>`).join("")}</div><button class="primary" id="onNext">${onStep===2?t("go"):t("next")}</button><small>${t("private")}</small></div>`;document.getElementById("onNext").onclick=()=>{if(onStep<2){onStep++;onboarding()}else{localStorage.setItem(ONBOARD,"1");root.hidden=true;store.update(s=>s.activeTab="dashboard")}}}

store.subscribe(render);render();
})();
