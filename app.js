(()=>{"use strict";

const VERSION=23;
const KEY="midlifeOS_v23";
const ONBOARD_KEY="midlife_onboarded";
const SYMPTOMS=["hot","brain","joints","headache","palpitations","sleepIssue"];
const ACUTE=["hot","anxious","headache","palpitations"];
const DEFAULT_STATE={schemaVersion:VERSION,lang:"de",activeTab:"dashboard",entries:[],analysisRange:30,overlaySleep:true,reportRange:30,doctorNote:""};

const COPY={
 de:{dashboard:"Dashboard",log:"Erfassen",analysis:"Verlauf",report:"Arzt & Profil",gm:"Guten Morgen",gd:"Guten Tag",ge:"Guten Abend",todayOpen:"Tages-Check-in offen",todayDone:"Heute erfasst ✓",adjust:"Heutigen Eintrag anpassen",startCheck:"20-Sekunden-Check-in starten",acute:"Akutes Symptom erfassen",acuteSub:"Hitzewallung, Unruhe, Kopfschmerz oder Herzrasen in wenigen Sekunden dokumentieren.",spotlight:"Muster-Spotlight",seven:"7-Tage-Überblick",sleep:"Schlaf",sleepDuration:"Schlafdauer",sleepQuality:"Schlafqualität",energy:"Energie",mood:"Stimmung",symptoms:"Beschwerden",cycle:"Zyklus / HRT",hot:"Hitzewallung",brain:"Brain Fog",joints:"Gelenke",headache:"Kopfschmerz",palpitations:"Herzrasen",sleepIssue:"Schlafstörung",anxious:"Unruhe / Panik",calm:"Ruhig",exhausted:"Erschöpft",irritable:"Gereizt",anxiousMood:"Ängstlich",veryPoor:"Sehr schlecht",poor:"Schlecht",okay:"Okay",good:"Gut",veryGood:"Sehr gut",empty:"Leer",low:"Niedrig",steady:"Okay",high:"Gut",full:"Voll",bleedNone:"Keine Blutung",bleedLight:"Leicht",bleedHeavy:"Stark",spotting:"Schmierblutung",bleeding:"Blutung",hrt:"HRT/HET heute eingenommen",save:"Check-in speichern",reset:"Zurücksetzen",saved:"Tages-Check-in gespeichert ✓",acuteSaved:"Akut-Symptom erfasst ✓",mild:"Leicht",moderate:"Mittel",strong:"Stark",history:"Einträge",edit:"Bearbeiten",del:"Löschen",overlay:"Schlafdauer überlagern",emptyChart:"Erfasse deine ersten Tage, um deinen Verlauf als Kurve zu sehen.",possible:"Bisher dokumentiert",observation:"Beobachtung",medical:"Midlife OS zeigt Beobachtungen aus deinen Einträgen. Es stellt keine Diagnose und ersetzt keine medizinische Beratung.",reportTitle:"Arzt-Zusammenfassung",period:"Erfassungszeitraum",symptom:"Symptom",frequency:"Häufigkeit",average:"Ø Intensität",peak:"Peak-Zeit",sleepTrend:"Schlaftrend",bleedings:"Blutungen / Schmierblutungen",hrtDoc:"HRT/HET-Dokumentation",patientNote:"Eigene Notizen für das Arztgespräch",patientPlaceholder:"Eigene Fragen oder Beobachtungen für das Arztgespräch notieren...",clinician:"Notizen für Arzt / Ärztin",print:"Report drucken / als PDF sichern",data:"Datenverwaltung",json:"JSON",csv:"CSV",deleteAll:"Alle Daten sicher löschen",confirmDelete:"Alle lokal gespeicherten Einträge wirklich löschen?",cancel:"Abbrechen",deleteNow:"Daten löschen",intro1:"Verstehe deinen Körper in 20 Sekunden am Tag.",intro1sub:"Ein kurzer Check-in macht Veränderungen sichtbar, ohne dass dein Alltag zur Tabelle wird.",intro2:"Erkenne Muster statt Einzelmomente.",intro2sub:"Schlaf, Energie, Stimmung und Beschwerden werden gemeinsam betrachtet.",intro3:"Gut vorbereitet ins Arztgespräch.",intro3sub:"Deine Daten bleiben lokal auf deinem Gerät. Du entscheidest, was du exportierst.",next:"Weiter",start:"Jetzt starten",private:"100% lokal auf deinem Gerät",scoreOpen:"Tages-Score berechnen",balanced:"Ausgeglichen",burden:"Erhöhte Belastung",stable:"Stabil & erholt",quickSleep:"Schlaf",quickMood:"Stimmung",quickLoad:"Belastung",noData:"Noch keine Daten",checkinTitle:"Tages-Check-in",checkinSub:"Kompakt erfassen, was heute relevant ist.",intensity:"Intensität"},
 en:{dashboard:"Dashboard",log:"Log",analysis:"History",report:"Doctor & Profile",gm:"Good morning",gd:"Good afternoon",ge:"Good evening",todayOpen:"Daily check-in open",todayDone:"Today captured ✓",adjust:"Adjust today's entry",startCheck:"Start 20-second check-in",acute:"Log acute symptom",acuteSub:"Capture a hot flash, restlessness, headache or palpitations in seconds.",spotlight:"Pattern spotlight",seven:"7-day overview",sleep:"Sleep",sleepDuration:"Sleep duration",sleepQuality:"Sleep quality",energy:"Energy",mood:"Mood",symptoms:"Symptoms",cycle:"Cycle / HRT",hot:"Hot flash",brain:"Brain fog",joints:"Joints",headache:"Headache",palpitations:"Palpitations",sleepIssue:"Sleep disturbance",anxious:"Restlessness / panic",calm:"Calm",exhausted:"Exhausted",irritable:"Irritable",anxiousMood:"Anxious",veryPoor:"Very poor",poor:"Poor",okay:"Okay",good:"Good",veryGood:"Very good",empty:"Empty",low:"Low",steady:"Okay",high:"Good",full:"Full",bleedNone:"No bleeding",bleedLight:"Light",bleedHeavy:"Heavy",spotting:"Spotting",bleeding:"Bleeding",hrt:"HRT/MHT taken today",save:"Save check-in",reset:"Reset",saved:"Daily check-in saved ✓",acuteSaved:"Acute symptom captured ✓",mild:"Mild",moderate:"Moderate",strong:"Strong",history:"Entries",edit:"Edit",del:"Delete",overlay:"Overlay sleep duration",emptyChart:"Log your first days to see your history as a chart.",possible:"Documented so far",observation:"Observation",medical:"Midlife OS shows observations from your entries. It does not diagnose and does not replace medical advice.",reportTitle:"Doctor summary",period:"Tracking period",symptom:"Symptom",frequency:"Frequency",average:"Avg intensity",peak:"Peak time",sleepTrend:"Sleep trend",bleedings:"Bleeding / spotting",hrtDoc:"HRT/MHT documentation",patientNote:"Your notes for the appointment",patientPlaceholder:"Add your own questions or observations for the appointment...",clinician:"Clinician notes",print:"Print report / save as PDF",data:"Data management",json:"JSON",csv:"CSV",deleteAll:"Securely delete all data",confirmDelete:"Really delete all locally stored entries?",cancel:"Cancel",deleteNow:"Delete data",intro1:"Understand your body in 20 seconds a day.",intro1sub:"A quick check-in makes changes visible without turning life into a spreadsheet.",intro2:"See patterns instead of isolated moments.",intro2sub:"Sleep, energy, mood and symptoms are viewed together.",intro3:"Walk into your appointment prepared.",intro3sub:"Your data stays local on this device. You choose what to export.",next:"Continue",start:"Get started",private:"100% local on your device",scoreOpen:"Calculate daily score",balanced:"Balanced",burden:"Higher load",stable:"Stable & restored",quickSleep:"Sleep",quickMood:"Mood",quickLoad:"Load",noData:"No data yet",checkinTitle:"Daily check-in",checkinSub:"Quickly capture what matters today.",intensity:"Intensity"}
};

const blankDraft=()=>({sleepDuration:"",sleepHours:0,sleepQuality:0,energy:0,mood:"",symptoms:{},bleeding:"",hrtTaken:false});
const t=k=>COPY[state().lang][k]||k;
const locale=()=>state().lang==="de"?"de-DE":"en-GB";
const uid=()=>globalThis.crypto?.randomUUID?.()||`e_${Date.now()}_${Math.random().toString(16).slice(2)}`;
const clamp=(n,min,max,def=0)=>Number.isFinite(+n)?Math.max(min,Math.min(max,+n)):def;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

function normalizeEntry(entry){
 const symptoms={};
 if(entry?.symptoms&&typeof entry.symptoms==="object"){
   for(const[id,val] of Object.entries(entry.symptoms)){
     if(!SYMPTOMS.includes(id)) continue;
     if(typeof val==="string") symptoms[id]=val;
     else symptoms[id]=val===1?"L":val===3?"S":"M";
   }
 }
 return{
   id:String(entry?.id||uid()),
   ts:new Date(entry?.ts||Date.now()).toISOString(),
   type:entry?.type==="acute"?"acute":"checkin",
   sleepDuration:String(entry?.sleepDuration||entry?.sleepBand||"").replace(/h+$/,""),
   sleepHours:clamp(entry?.sleepHours,0,12),
   sleepQuality:clamp(entry?.sleepQuality,0,5),
   energy:clamp(entry?.energy,0,5),
   mood:["calm","exhausted","irritable","anxiousMood"].includes(entry?.mood)?entry.mood:"",
   symptoms,
   bleeding:["bleedNone","bleedLight","bleedHeavy","spotting"].includes(entry?.bleeding)?entry.bleeding:"",
   hrtTaken:!!entry?.hrtTaken,
   acuteSymptom:ACUTE.includes(entry?.acuteSymptom)?entry.acuteSymptom:"",
   intensity:["L","M","S"].includes(entry?.intensity)?entry.intensity:(entry?.intensity===1?"L":entry?.intensity===3?"S":"M")
 };
}

class Store{
 constructor(){this.listeners=new Set();this.state=this.load()}
 parse(raw){try{return JSON.parse(raw)}catch{return null}}
 load(){
   const current=this.parse(localStorage.getItem(KEY));
   if(current?.schemaVersion===VERSION){
     return {...structuredClone(DEFAULT_STATE),...current,entries:Array.isArray(current.entries)?current.entries.map(normalizeEntry):[]};
   }
   const migrated=structuredClone(DEFAULT_STATE);
   for(const key of["midlifeOS_v22","midlifeOS_v21","midlifeOS_v20","midlifeOS_v19","midlifeOS_v18","midlifeOS_v17","midlifeOS_v15","midlifeOS_v14","midlifeOS_v13"]){
     const old=this.parse(localStorage.getItem(key));
     if(!old) continue;
     if(["de","en"].includes(old.lang)) migrated.lang=old.lang;
     if(old.doctorNote) migrated.doctorNote=old.doctorNote;
     if(Array.isArray(old.entries)) migrated.entries.push(...old.entries.map(normalizeEntry));
   }
   this.persistState(migrated);
   return migrated;
 }
 persistState(s){try{localStorage.setItem(KEY,JSON.stringify({...s,schemaVersion:VERSION}))}catch{}}
 persist(){this.persistState(this.state)}
 subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn)}
 emit(){for(const fn of this.listeners)fn(this.state)}
 update(fn){fn(this.state);this.persist();this.emit()}
}

const store=new Store();
let draft=blankDraft();
let editingId=null;
let modal=null;
let onboardingStep=0;
const state=()=>store.state;

function localDayKey(value){const d=value instanceof Date?value:new Date(value);return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function sameDay(ts,date=new Date()){return localDayKey(ts)===localDayKey(date)}
function startOfRange(days){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-(days-1));return d}
function entriesInRange(days){const c=startOfRange(days);return state().entries.filter(e=>new Date(e.ts)>=c).sort((a,b)=>new Date(a.ts)-new Date(b.ts))}
function todayEntries(){return state().entries.filter(e=>sameDay(e.ts)).sort((a,b)=>new Date(b.ts)-new Date(a.ts))}
function fmtDate(value){return new Date(value).toLocaleDateString(locale(),{day:"2-digit",month:"short",year:"numeric"})}
function fmtTime(value){return new Date(value).toLocaleTimeString(locale(),{hour:"2-digit",minute:"2-digit"})}
function greeting(){const h=new Date().getHours();return h<11?t("gm"):h<18?t("gd"):t("ge")}
function avg(list){return list.length?list.reduce((a,b)=>a+b,0)/list.length:0}
function sevLabel(v){return v==="L"?t("mild"):v==="S"?t("strong"):t("moderate")}
function sevShort(v){return v||"M"}
function numericIntensity(v){return v==="L"?1:v==="S"?3:2}
function symptomIntensity(e,id){return e.type==="acute"&&e.acuteSymptom===id?numericIntensity(e.intensity):numericIntensity(e.symptoms[id])}
function hasSymptom(e,id){return e.type==="acute"?e.acuteSymptom===id:Object.prototype.hasOwnProperty.call(e.symptoms,id)}
function symptomStats(es){
 const map={};
 for(const e of es){
   const ids=e.type==="acute"&&e.acuteSymptom?[e.acuteSymptom]:Object.keys(e.symptoms);
   for(const id of ids){map[id]??={count:0,sum:0};map[id].count++;map[id].sum+=symptomIntensity(e,id)}
 }
 return Object.entries(map).map(([id,v])=>({id,count:v.count,avg:v.sum/v.count})).sort((a,b)=>b.count-a.count||b.avg-a.avg);
}
function peakTime(es,id){
 const hours=es.filter(e=>hasSymptom(e,id)).map(e=>new Date(e.ts).getHours());
 if(!hours.length)return"—";
 const buckets=[[0,6],[6,12],[12,18],[18,24]];
 const labels=state().lang==="de"?["Nacht","Morgen","Nachmittag","Abend"]:["Night","Morning","Afternoon","Evening"];
 const counts=buckets.map(([a,z])=>hours.filter(h=>h>=a&&h<z).length);
 return labels[counts.indexOf(Math.max(...counts))];
}

function wellbeing(entry){
 if(!entry)return null;
 let score=100;
 if(entry.sleepDuration==="<6") score-=20;
 else if(entry.sleepDuration==="6-7") score-=10;
 score+=(entry.sleepQuality-3)*10;
 score+=(entry.energy-3)*5;
 for(const intensity of Object.values(entry.symptoms||{})){
   if(intensity==="L") score-=5;
   else if(intensity==="M") score-=10;
   else if(intensity==="S") score-=15;
 }
 const finalScore=Math.max(15,Math.min(100,Math.round(score)));
 return{
   score:finalScore,
   label:finalScore>=70?t("stable"):finalScore>=45?t("balanced"):t("burden"),
   tone:finalScore>=70?"sage":finalScore>=45?"sand":"terra"
 };
}

function ring(entry){
 const score=wellbeing(entry);
 const radius=66,circ=2*Math.PI*radius;
 if(!score){
   return`<div class="ring-wrap"><svg class="wellbeing-ring" viewBox="0 0 180 180" aria-hidden="true"><circle class="ring-empty" cx="90" cy="90" r="66"/></svg><div class="ring-copy empty"><strong>–</strong><span>${t("todayOpen")}</span></div></div>`;
 }
 const offset=circ*(1-score.score/100);
 return`<div class="ring-wrap"><svg class="wellbeing-ring" viewBox="0 0 180 180" role="img" aria-label="${score.score}% ${score.label}"><circle class="ring-base" cx="90" cy="90" r="66"/><circle class="ring-value ${score.tone}" cx="90" cy="90" r="66" stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"/></svg><div class="ring-copy ${score.tone}"><strong>${score.score}%</strong><span>${score.label}</span></div></div>`;
}
function quickStats(entry){
 if(!entry)return"";
 const sleep=entry.sleepDuration?`${entry.sleepDuration}h${entry.sleepQuality?` · ${t(["","veryPoor","poor","okay","good","veryGood"][entry.sleepQuality])}`:""}`:"—";
 const mood=entry.mood?t(entry.mood):"—";
 const symptomCount=Object.keys(entry.symptoms).length;
 return`<div class="quick-stats"><span>☾ ${t("quickSleep")}: ${sleep}</span><span>🌿 ${t("quickMood")}: ${mood}</span><span>⚡ ${t("quickLoad")}: ${symptomCount}</span></div>`;
}

function spotlight(days){
 const stats=symptomStats(entriesInRange(days));
 if(!stats.length)return{title:t("observation"),text:state().lang==="de"?"Noch nicht genug Daten für ein sinnvolles Muster.":"Not enough data yet for a meaningful pattern."};
 const x=stats[0];
 return{title:t("possible"),text:state().lang==="de"?`${x.count}× ${t(x.id)} (Durchschnitt: ${sevLabel(x.avg<1.5?"L":x.avg>=2.5?"S":"M")}).`:`${x.count}× ${t(x.id)} (average: ${sevLabel(x.avg<1.5?"L":x.avg>=2.5?"S":"M")}).`};
}

function icon(name){
 const d={home:'<path d="M4 11.5 12 5l8 6.5V20H4z"/><path d="M9 20v-6h6v6"/>',plus:'<path d="M12 5v14M5 12h14"/>',trend:'<path d="M4 17l5-5 4 3 7-8"/>',report:'<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/>'}[name];
 return`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
}
function navButton(tab,ic){return`<button type="button" data-tab="${tab}" class="${state().activeTab===tab?"active":""}">${icon(ic)}<span>${t(tab)}</span></button>`}

function dashboardView(){
 const check=todayEntries().find(e=>e.type==="checkin");
 const sp=spotlight(14);
 const week=entriesInRange(7);
 return`<div class="stack">
   <section class="hero-card card">
     <div class="hero-head"><div><div class="eyebrow">${t("dashboard")}</div><h1>${greeting()}</h1><p class="sub ${check?"status-good":""}">${check?t("todayDone"):t("todayOpen")}</p></div></div>
     ${ring(check)}
     ${quickStats(check)}
     ${check?`<button class="link-action" id="adjustToday">${t("adjust")}</button>`:`<button class="primary" data-go="log">${t("startCheck")}</button>`}
   </section>
   <button class="acute-card" id="acute"><span><strong>${t("acute")}</strong><small>${t("acuteSub")}</small></span><span class="acute-plus">+</span></button>
   <section class="card"><div class="eyebrow">${t("spotlight")}</div><div class="insight"><strong>${sp.title}</strong><span>${sp.text}</span></div></section>
   <section class="card"><div class="section-head"><div><div class="eyebrow">${t("seven")}</div><h2>${week.length} ${state().lang==="de"?"Einträge":"entries"}</h2></div><span class="pill">7D</span></div><div class="chart-shell">${trendChart(7,null,false)}</div></section>
 </div>`;
}

function buttonClass(group,val,selected){
 if(!selected)return"";
 if(group==="sleepDuration") return val==="<6"?"burden":val==="6-7"?"neutral":"positive";
 if(group==="sleepQuality"||group==="energy") return val<=2?"burden":val===3?"neutral":"positive";
 if(group==="mood") return val==="calm"?"positive":"burden";
 if(group==="bleeding") return val==="bleedNone"?"positive":val==="bleedHeavy"?"burden":"neutral";
 return"";
}
function seg(attr,label,selected,group,val){return`<button type="button" ${attr} class="${selected?`active ${buttonClass(group,val,true)}`:""}">${label}</button>`}

function logView(){
 return`<div class="stack">
   <header class="page-head"><div class="eyebrow">${t("log")}</div><h1>${editingId?t("edit"):t("checkinTitle")}</h1><p class="sub">${t("checkinSub")}</p></header>
   <section class="card compact"><div class="eyebrow">${t("sleep")}</div><div class="field"><label>${t("sleepDuration")}</label><div class="seg four">${[["<6",5],["6-7",6.5],["7-8",7.5],[">8",9]].map(([v,h])=>seg(`data-sleep="${v}:${h}"`,`${v}h`,draft.sleepDuration===v,"sleepDuration",v)).join("")}</div></div><div class="field"><label>${t("sleepQuality")}</label><div class="seg five">${[[1,"veryPoor"],[2,"poor"],[3,"okay"],[4,"good"],[5,"veryGood"]].map(([n,k])=>seg(`data-scale="sleepQuality:${n}"`,t(k),draft.sleepQuality===n,"sleepQuality",n)).join("")}</div></div><div class="field"><label>${t("energy")}</label><div class="seg five">${[[1,"empty"],[2,"low"],[3,"steady"],[4,"high"],[5,"full"]].map(([n,k])=>seg(`data-scale="energy:${n}"`,t(k),draft.energy===n,"energy",n)).join("")}</div></div></section>
   <section class="card compact"><div class="eyebrow">${t("symptoms")}</div><div class="symptom-cloud">${SYMPTOMS.map(id=>`<div class="symptom-unit"><button type="button" data-sym="${id}" class="symptom-chip ${draft.symptoms[id]?"active":""}">${draft.symptoms[id]?"✓":"+"} ${t(id)}</button>${draft.symptoms[id]?`<div class="inline-intensity"><span>${t("intensity")}</span><div>${["L","M","S"].map(v=>`<button type="button" data-intensity="${id}:${v}" class="${draft.symptoms[id]===v?"active":""}">${v}</button>`).join("")}</div></div>`:""}</div>`).join("")}</div></section>
   <section class="card compact"><div class="eyebrow">${t("mood")}</div><div class="seg four">${["calm","exhausted","irritable","anxiousMood"].map(k=>seg(`data-mood="${k}"`,t(k),draft.mood===k,"mood",k)).join("")}</div></section>
   <section class="card compact"><div class="eyebrow">${t("cycle")}</div><div class="seg four">${["bleedNone","bleedLight","bleedHeavy","spotting"].map(k=>seg(`data-bleeding="${k}"`,t(k),draft.bleeding===k,"bleeding",k)).join("")}</div><div class="toggle-row"><span>${t("hrt")}</span><button type="button" id="hrt" class="toggle ${draft.hrtTaken?"on":""}"><i></i></button></div></section>
   <div class="form-actions"><button class="primary" id="saveEntry">${t("save")}</button><button class="secondary" id="resetForm">${t("reset")}</button></div>
 </div>`;
}

function historyEntry(entry){
 const status=[];const symptoms=[];
 if(entry.type==="acute") symptoms.push(`<span class="badge symptom">${t(entry.acuteSymptom)}: ${sevShort(entry.intensity)}</span>`);
 else{
   if(entry.sleepDuration) status.push(`<span class="badge meta">${t("sleep")}: ${entry.sleepDuration}h${entry.sleepQuality?` (${t(["","veryPoor","poor","okay","good","veryGood"][entry.sleepQuality])})`:""}</span>`);
   if(entry.mood) status.push(`<span class="badge mood">${t("mood")}: ${t(entry.mood)}</span>`);
   if(entry.hrtTaken) status.push(`<span class="badge meta">HRT ✓</span>`);
   if(entry.bleeding) status.push(`<span class="badge meta">${t("bleeding")}: ${t(entry.bleeding)}</span>`);
   for(const[id,v] of Object.entries(entry.symptoms)) symptoms.push(`<span class="badge symptom">${t(id)}: ${v}</span>`);
 }
 return`<article class="entry-card"><div class="entry-head"><strong>${fmtTime(entry.ts)}</strong><span>${fmtDate(entry.ts)}</span></div>${status.length?`<div class="badge-row status-row">${status.join("")}</div>`:""}${symptoms.length?`<div class="badge-row symptom-row">${symptoms.join("")}</div>`:""}<div class="entry-actions"><button type="button" data-edit="${entry.id}">${t("edit")}</button><button type="button" data-delete="${entry.id}" class="danger">${t("del")}</button></div></article>`;
}

function analysisView(){
 const es=entriesInRange(state().analysisRange),stats=symptomStats(es),top=stats[0],sp=spotlight(state().analysisRange);
 return`<div class="stack"><header class="page-head"><div class="eyebrow">${t("analysis")}</div><h1>${state().lang==="de"?"Muster auf einen Blick":"Patterns at a glance"}</h1><p class="sub">${t("medical")}</p></header><div class="tabs">${[7,30,90].map(n=>`<button type="button" data-range="${n}" class="${state().analysisRange===n?"active":""}">${state().lang==="de"?`${n} Tage`:`${n} days`}</button>`).join("")}</div><section class="card"><div class="section-head"><div><div class="eyebrow">${t("spotlight")}</div><h2>${top?t(top.id):(state().lang==="de"?"Dein Verlauf":"Your history")}</h2></div><span class="pill">${es.length}</span></div><div class="overlay-row"><span>${t("overlay")}</span><button type="button" id="overlay" class="toggle ${state().overlaySleep?"on":""}"><i></i></button></div><div class="chart-shell">${trendChart(state().analysisRange,top?.id||null,state().overlaySleep)}</div></section><div class="insight"><strong>${sp.title}</strong><span>${sp.text}</span></div><section class="card"><div class="eyebrow">${t("history")}</div><div class="entry-list">${es.length?[...es].reverse().map(historyEntry).join(""):`<div class="empty-state">${t("emptyChart")}</div>`}</div></section></div>`;
}

function reportView(){
 const es=entriesInRange(state().reportRange),stats=symptomStats(es),checks=es.filter(e=>e.type==="checkin"),bleedings=checks.filter(e=>e.bleeding&&e.bleeding!=="bleedNone").length,hrt=checks.filter(e=>e.hrtTaken).length,sleepH=avg(checks.map(e=>e.sleepHours).filter(Boolean)),sleepQ=avg(checks.map(e=>e.sleepQuality).filter(Boolean));
 return`<div class="stack print-report"><header class="page-head"><div class="eyebrow">${t("report")}</div><h1>${t("reportTitle")}</h1><p class="sub">${t("medical")}</p></header><div class="tabs no-print">${[30,60,90].map(n=>`<button type="button" data-report-range="${n}" class="${state().reportRange===n?"active":""}">${state().lang==="de"?`${n} Tage`:`${n} days`}</button>`).join("")}</div><section class="card"><div class="report-period"><div><div class="eyebrow">${t("period")}</div><div class="nowrap">${fmtDate(startOfRange(state().reportRange))} – ${fmtDate(new Date())}</div></div><span class="pill">${es.length}</span></div></section><section class="card table-card"><table><thead><tr><th>${t("symptom")}</th><th>${t("frequency")}</th><th>${t("average")}</th><th>${t("peak")}</th></tr></thead><tbody>${stats.length?stats.slice(0,6).map(s=>`<tr><td>${t(s.id)}</td><td>${s.count}</td><td>${s.avg.toFixed(1)}</td><td>${peakTime(es,s.id)}</td></tr>`).join(""):`<tr><td colspan="4">${t("noData")}</td></tr>`}</tbody></table></section><section class="card summary-card"><div><strong>${t("sleepTrend")}</strong><span>${checks.length?`${sleepH?sleepH.toFixed(1)+"h":"—"} · ${sleepQ?sleepQ.toFixed(1)+"/5":"—"}`:t("noData")}</span></div><div><strong>${t("bleedings")}</strong><span>${bleedings}</span></div><div><strong>${t("hrtDoc")}</strong><span>${checks.length?`${hrt}/${checks.length}`:"—"}</span></div></section><section class="card"><label class="eyebrow" for="doctorNote">${t("patientNote")}</label><textarea id="doctorNote" class="notes" placeholder="${t("patientPlaceholder")}">${esc(state().doctorNote)}</textarea></section><section class="print-clinician"><div class="eyebrow">${t("clinician")}</div><div class="print-line"></div></section><button class="primary no-print" id="print">${t("print")}</button><section class="card no-print"><div class="eyebrow">${t("data")}</div><div class="data-actions"><button class="secondary" id="json">${t("json")}</button><button class="secondary" id="csv">${t("csv")}</button></div><button class="danger-link" id="deleteAll">${t("deleteAll")}</button></section></div>`;
}

function trendChart(days,id,overlay){
 const es=entriesInRange(days);
 if(!es.length)return`<div class="empty-state">${t("emptyChart")}</div>`;
 const dayKeys=[...new Set(es.map(e=>localDayKey(e.ts)))].sort();
 let shownKeys=dayKeys;
 if(days>7&&dayKeys.length<=6) shownKeys=dayKeys;
 else if(days>7){
   const start=startOfRange(days);shownKeys=[];for(let i=0;i<days;i++){const d=new Date(start);d.setDate(start.getDate()+i);shownKeys.push(localDayKey(d))}
 }
 const series=shownKeys.map(k=>{
   const day=es.filter(e=>localDayKey(e.ts)===k);
   let value=0;
   if(id){const vals=day.filter(e=>hasSymptom(e,id)).map(e=>symptomIntensity(e,id));value=vals.length?Math.max(...vals):0}
   else{const vals=[];for(const e of day){if(e.type==="acute")vals.push(numericIntensity(e.intensity));else for(const v of Object.values(e.symptoms))vals.push(numericIntensity(v))}value=vals.length?Math.max(...vals):0}
   const checks=day.filter(e=>e.type==="checkin");
   return{key:k,date:new Date(`${k}T12:00:00`),value,sleep:avg(checks.map(e=>e.sleepHours).filter(Boolean))};
 }).filter((s,i)=>days<=7||dayKeys.length>6||s.value>0||s.sleep>0);
 if(!series.length)return`<div class="empty-state">${t("emptyChart")}</div>`;
 const width=360,height=200,left=30,right=12,top=16,bottom=42,plotW=width-left-right,plotH=height-top-bottom;
 const x=i=>left+(i+.5)*(plotW/series.length), y=v=>top+plotH-(v/3)*plotH, ySleep=h=>top+plotH-((Math.max(4,Math.min(10,h))-4)/6)*plotH;
 const barW=Math.max(14,Math.min(34,plotW/series.length*.56));
 let grid="",bars="",labels="",sleep="";
 for(let n=1;n<=3;n++){const yy=y(n);grid+=`<line class="grid-line" x1="${left}" y1="${yy}" x2="${width-right}" y2="${yy}"/><text class="axis-text" x="8" y="${yy+3}">${n}</text>`}
 const labelStep=Math.max(1,Math.ceil(series.length/7));
 series.forEach((s,i)=>{if(s.value){const yy=y(s.value);bars+=`<rect class="bar" x="${x(i)-barW/2}" y="${yy}" width="${barW}" height="${top+plotH-yy}" rx="6"/>`}if(i%labelStep===0||i===series.length-1){const lab=series.length<=7?s.date.toLocaleDateString(locale(),{weekday:"short",day:"2-digit"}):s.date.toLocaleDateString(locale(),{day:"2-digit",month:"2-digit"});labels+=`<text class="axis-text" x="${x(i)}" y="${height-10}" text-anchor="middle">${lab}</text>`}});
 if(overlay&&series.some(s=>s.sleep>0)){const pts=series.map((s,i)=>s.sleep?`${x(i)},${ySleep(s.sleep)}`:null).filter(Boolean).join(" ");sleep=`<polyline class="sleep-line" points="${pts}"/>`+series.map((s,i)=>s.sleep?`<circle class="sleep-point" cx="${x(i)}" cy="${ySleep(s.sleep)}" r="3"/>`:"").join("")}
 return`<svg class="trend-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Trend chart">${grid}${bars}${sleep}${labels}</svg>`;
}

function render(){
 document.documentElement.lang=state().lang;
 document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===state().lang));
 document.getElementById("view-root").innerHTML=state().activeTab==="log"?logView():state().activeTab==="analysis"?analysisView():state().activeTab==="report"?reportView():dashboardView();
 document.getElementById("bottom-nav").innerHTML=navButton("dashboard","home")+navButton("log","plus")+navButton("analysis","trend")+navButton("report","report");
 bind();renderOnboarding();if(modal)renderModal();
}

function bind(){
 document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>store.update(s=>s.lang=b.dataset.lang));
 document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{store.update(s=>s.activeTab=b.dataset.tab);window.scrollTo({top:0,behavior:"smooth"})});
 document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>store.update(s=>s.activeTab=b.dataset.go));
 document.getElementById("adjustToday")?.addEventListener("click",()=>{const e=todayEntries().find(e=>e.type==="checkin");if(e)editEntry(e.id)});
 document.getElementById("acute")?.addEventListener("click",()=>{modal={type:"acute",symptom:"",intensity:"M",editId:null};renderModal()});
 document.querySelectorAll("[data-sleep]").forEach(b=>b.onclick=()=>{const[v,h]=b.dataset.sleep.split(":");draft.sleepDuration=v;draft.sleepHours=+h;render()});
 document.querySelectorAll("[data-scale]").forEach(b=>b.onclick=()=>{const[k,v]=b.dataset.scale.split(":");draft[k]=+v;render()});
 document.querySelectorAll("[data-sym]").forEach(b=>b.onclick=()=>{const id=b.dataset.sym;if(draft.symptoms[id])delete draft.symptoms[id];else draft.symptoms[id]="M";render()});
 document.querySelectorAll("[data-intensity]").forEach(b=>b.onclick=()=>{const[id,v]=b.dataset.intensity.split(":");draft.symptoms[id]=v;render()});
 document.querySelectorAll("[data-mood]").forEach(b=>b.onclick=()=>{draft.mood=b.dataset.mood;render()});
 document.querySelectorAll("[data-bleeding]").forEach(b=>b.onclick=()=>{draft.bleeding=b.dataset.bleeding;render()});
 document.getElementById("hrt")?.addEventListener("click",()=>{draft.hrtTaken=!draft.hrtTaken;render()});
 document.getElementById("resetForm")?.addEventListener("click",()=>{draft=blankDraft();editingId=null;render()});
 document.getElementById("saveEntry")?.addEventListener("click",saveEntry);
 document.querySelectorAll("[data-range]").forEach(b=>b.onclick=()=>store.update(s=>s.analysisRange=+b.dataset.range));
 document.getElementById("overlay")?.addEventListener("click",()=>store.update(s=>s.overlaySleep=!s.overlaySleep));
 document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editEntry(b.dataset.edit));
 document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>deleteEntry(b.dataset.delete));
 document.querySelectorAll("[data-report-range]").forEach(b=>b.onclick=()=>store.update(s=>s.reportRange=+b.dataset.reportRange));
 document.getElementById("doctorNote")?.addEventListener("input",e=>{state().doctorNote=e.target.value;store.persist()});
 document.getElementById("print")?.addEventListener("click",()=>window.print());
 document.getElementById("json")?.addEventListener("click",exportJson);
 document.getElementById("csv")?.addEventListener("click",exportCsv);
 document.getElementById("deleteAll")?.addEventListener("click",()=>{modal={type:"delete"};renderModal()});
}

function saveEntry(){
 const hasValue=draft.sleepDuration||draft.sleepQuality||draft.energy||draft.mood||Object.keys(draft.symptoms).length||draft.bleeding||draft.hrtTaken;
 if(!hasValue){toast(state().lang==="de"?"Bitte mindestens einen Wert auswählen.":"Please choose at least one value.");return}
 const old=editingId?state().entries.find(e=>e.id===editingId):null;
 const entry=normalizeEntry({id:editingId||uid(),ts:old?.ts||new Date(),type:"checkin",...draft});
 store.update(s=>{if(editingId)s.entries=s.entries.map(e=>e.id===editingId?entry:e);else s.entries.push(entry)});
 draft=blankDraft();editingId=null;toast(t("saved"));setTimeout(()=>store.update(s=>s.activeTab="dashboard"),350);
}
function editEntry(id){
 const e=state().entries.find(x=>x.id===id);if(!e)return;
 if(e.type==="acute"){modal={type:"acute",symptom:e.acuteSymptom,intensity:e.intensity,editId:id};renderModal();return}
 editingId=id;draft={sleepDuration:e.sleepDuration,sleepHours:e.sleepHours,sleepQuality:e.sleepQuality,energy:e.energy,mood:e.mood,symptoms:{...e.symptoms},bleeding:e.bleeding,hrtTaken:e.hrtTaken};store.update(s=>s.activeTab="log");
}
function deleteEntry(id){store.update(s=>s.entries=s.entries.filter(e=>e.id!==id));toast(state().lang==="de"?"Eintrag gelöscht.":"Entry deleted.")}

function renderModal(){
 document.querySelector(".backdrop")?.remove();if(!modal)return;
 const wrap=document.createElement("div");wrap.className="backdrop";
 if(modal.type==="acute"){
   wrap.innerHTML=`<section class="sheet"><div class="grabber"></div><div class="sheet-head"><div><div class="eyebrow">${t("acute")}</div><h2>${state().lang==="de"?"Was passiert gerade?":"What is happening now?"}</h2></div><button class="close" id="closeModal">×</button></div><div class="symptom-cloud modal-cloud">${ACUTE.map(id=>`<button type="button" data-acute="${id}" class="symptom-chip ${modal.symptom===id?"active":""}">${t(id)}</button>`).join("")}</div><div class="inline-intensity modal-intensity"><span>${t("intensity")}</span><div>${["L","M","S"].map(v=>`<button type="button" data-acute-int="${v}" class="${modal.intensity===v?"active":""}">${v}</button>`).join("")}</div></div><button class="primary" id="saveAcute">${t("save")}</button></section>`;
 }else{
   wrap.innerHTML=`<section class="sheet"><div class="grabber"></div><h2>${t("deleteAll")}</h2><p class="sub">${t("confirmDelete")}</p><div class="data-actions"><button class="secondary" id="cancelDelete">${t("cancel")}</button><button class="secondary danger-text" id="confirmDelete">${t("deleteNow")}</button></div></section>`;
 }
 document.body.appendChild(wrap);
 wrap.onclick=e=>{if(e.target===wrap){modal=null;wrap.remove()}};
 document.getElementById("closeModal")?.addEventListener("click",()=>{modal=null;wrap.remove()});
 document.querySelectorAll("[data-acute]").forEach(b=>b.onclick=()=>{modal.symptom=b.dataset.acute;renderModal()});
 document.querySelectorAll("[data-acute-int]").forEach(b=>b.onclick=()=>{modal.intensity=b.dataset.acuteInt;renderModal()});
 document.getElementById("saveAcute")?.addEventListener("click",()=>{if(!modal.symptom)return;const old=modal.editId?state().entries.find(e=>e.id===modal.editId):null;const entry=normalizeEntry({id:modal.editId||uid(),ts:old?.ts||new Date(),type:"acute",acuteSymptom:modal.symptom,intensity:modal.intensity});store.update(s=>{if(modal.editId)s.entries=s.entries.map(e=>e.id===modal.editId?entry:e);else s.entries.push(entry)});modal=null;wrap.remove();toast(t("acuteSaved"));render()});
 document.getElementById("cancelDelete")?.addEventListener("click",()=>{modal=null;wrap.remove()});
 document.getElementById("confirmDelete")?.addEventListener("click",()=>{const lang=state().lang;store.state={...structuredClone(DEFAULT_STATE),lang};store.persist();draft=blankDraft();editingId=null;modal=null;wrap.remove();render();toast(lang==="de"?"Alle Daten gelöscht.":"All data deleted.")});
}

function toast(message){document.querySelector(".toast")?.remove();const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.appendChild(el);navigator.vibrate?.(20);setTimeout(()=>el.remove(),1700)}
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportJson(){download(`midlife-os-${localDayKey(new Date())}.json`,JSON.stringify(state(),null,2),"application/json")}
function csvCell(v){const s=String(v??"");return/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}
function exportCsv(){const headers=["id","timestamp","type","sleepDuration","sleepHours","sleepQuality","energy","mood","symptoms","bleeding","hrtTaken","acuteSymptom","intensity"],rows=state().entries.map(e=>headers.map(k=>csvCell(k==="timestamp"?e.ts:k==="symptoms"?JSON.stringify(e.symptoms):e[k])).join(","));download(`midlife-os-${localDayKey(new Date())}.csv`,[headers.join(","),...rows].join("\n"),"text/csv;charset=utf-8")}

function onboardingVisual(step){
 if(step===0)return`<svg viewBox="0 0 140 140" aria-hidden="true"><circle cx="48" cy="50" r="22" fill="#F1D8D0"/><path d="M48 15v10M48 75v10M13 50h10M73 50h10M24 26l8 8M64 66l8 8M72 26l-8 8M32 66l-8 8" stroke="#BA5D48" stroke-width="4" stroke-linecap="round"/><path d="M103 32a31 31 0 1 0 0 62 35 35 0 0 1 0-62Z" fill="#E1EAE4" stroke="#4E725F" stroke-width="2"/></svg>`;
 if(step===1)return`<svg viewBox="0 0 140 140" aria-hidden="true"><circle cx="30" cy="85" r="16" fill="#F1D8D0"/><circle cx="70" cy="48" r="16" fill="#E1EAE4"/><circle cx="110" cy="85" r="16" fill="#F0E5D2"/><path d="M43 75 58 58M82 58l15 17" stroke="#4E725F" stroke-width="4" stroke-linecap="round"/><path d="M23 85h14M63 48h14M103 85h14" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`;
 return`<svg viewBox="0 0 140 140" aria-hidden="true"><rect x="34" y="18" width="72" height="104" rx="16" fill="#fff" stroke="#DDD5CC" stroke-width="2"/><path d="M50 45h40M50 64h40M50 83h27" stroke="#4E725F" stroke-width="4" stroke-linecap="round"/><circle cx="98" cy="96" r="16" fill="#F1D8D0"/><path d="m91 96 5 5 10-12" fill="none" stroke="#BA5D48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function renderOnboarding(){
 const root=document.getElementById("onboarding");
 if(localStorage.getItem(ONBOARD_KEY)!==null){root.hidden=true;return}
 root.hidden=false;
 const slides=[[t("intro1"),t("intro1sub")],[t("intro2"),t("intro2sub")],[t("intro3"),t("intro3sub")]],slide=slides[onboardingStep];
 root.innerHTML=`<div class="onboarding-card"><div class="onboarding-brand">Midlife <b>OS.</b></div><div class="onboarding-body"><div class="onboarding-visual">${onboardingVisual(onboardingStep)}</div><h1>${slide[0]}</h1><p>${slide[1]}</p></div><div class="dots">${slides.map((_,i)=>`<i class="${i===onboardingStep?"active":""}"></i>`).join("")}</div><button class="primary" id="onNext">${onboardingStep===2?t("start"):t("next")}</button><small>${t("private")}</small></div>`;
 document.getElementById("onNext").onclick=()=>{if(onboardingStep<2){onboardingStep++;renderOnboarding()}else{localStorage.setItem(ONBOARD_KEY,"1");root.hidden=true;store.update(s=>s.activeTab="dashboard")}};
}

store.subscribe(render);
render();
})();
