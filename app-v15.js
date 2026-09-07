(() => {
"use strict";

const KEY="midlifeOS_v15";
const VERSION=15;
const defaults={schemaVersion:VERSION,lang:"de",activeTab:"dashboard",entries:[],analysisRange:14,overlaySleep:true,reportRange:30,doctorNote:"",lastFeedback:""};

const I18N={
 de:{dashboard:"Dashboard",log:"Erfassen",analysis:"Verlauf",report:"Arzt & Profil",gm:"Guten Morgen",gd:"Guten Tag",ge:"Guten Abend",noCheck:"Heute noch kein Check-in",done:"Heute bereits eingecheckt",balanced:"Ausgeglichener Tag",busy:"Mehrere Beschwerden notiert",acute:"Akutes Symptom erfassen",acuteSub:"Hitzewallung, Unruhe oder Migräne in wenigen Sekunden.",checkin:"20-Sekunden-Check-in",checkinSub:"Leer starten, nur erfassen, was heute relevant ist.",spotlight:"Muster-Spotlight",notEnough:"Noch nicht genug Daten für ein sinnvolles Muster.",seven:"7-Tage-Überblick",sleep:"Schlaf",energy:"Energie",load:"Belastung",sleepHours:"Schlafdauer",sleepQuality:"Schlafqualität",physical:"Körper",mental:"Mental",mood:"Stimmung",fog:"Brain Fog",cycle:"Zyklus / HRT",hot:"Hitzewallung / Nachtschweiß",joints:"Gelenkbeschwerden",headache:"Kopfschmerz / Migräne",anxious:"Unruhe / Panik",palpitations:"Herzrasen",calm:"Ruhig",exhausted:"Erschöpft",irritable:"Gereizt",anxiousMood:"Ängstlich",fogNo:"Nein",fogLight:"Leicht",fogYes:"Deutlich",bleedNone:"Keine Blutung",bleedLight:"Leicht",bleedHeavy:"Stark",spotting:"Schmierblutung",hrt:"HRT/HET heute eingenommen",save:"Eintrag speichern",saved:"Gespeichert ✓",savedToast:"Eintrag erfasst ✓",acuteSaved:"Akut-Symptom erfasst ✓",intensity:"Intensität",mild:"Leicht",moderate:"Mittel",strong:"Stark",days7:"7 Tage",days30:"30 Tage",days90:"90 Tage",corr:"Schlaf überlagern",history:"Einträge",edit:"Bearbeiten",del:"Löschen",noData:"Noch keine Daten vorhanden.",symptom:"Symptom",frequency:"Häufigkeit",average:"Ø Intensität",peak:"Peak-Zeit",reportTitle:"Arzt-Zusammenfassung",period:"Erfassungszeitraum",sleepTrend:"Schlaftrend",bleedings:"Blutungen / Schmierblutungen",hrtConsistency:"HRT/HET-Dokumentation",patientNote:"Notiz der Patientin",doctorField:"Notizen für Arzt / Ärztin",print:"Report drucken / als PDF sichern",data:"Datenverwaltung",json:"JSON exportieren",csv:"CSV exportieren",deleteAll:"Alle Daten sicher löschen",confirmDelete:"Alle lokalen Einträge wirklich löschen?",cancel:"Abbrechen",deleteNow:"Daten löschen",medical:"Midlife OS zeigt Beobachtungen aus deinen Einträgen. Es stellt keine Diagnose und ersetzt keine medizinische Beratung.",observe:"Beobachtung",possible:"Möglicher Zusammenhang",insufficient:"Für diese Beobachtung sind noch zu wenige vergleichbare Tage vorhanden.",reflectionNeutral:"Erfasst. Dein Eintrag ist jetzt im Tagesbild und im Verlauf berücksichtigt.",reflectionHot:"Erfasst. Hitzewallungen sind heute dokumentiert – beobachte in den nächsten Tagen, ob Schlaf oder Tageszeit ein Muster zeigen.",reflectionLowSleep:"Erfasst. Deine Schlafdauer war heute eher kurz. Midlife OS vergleicht das künftig mit deinen Symptom-Einträgen.",acuteEdit:"Akut-Einträge können gelöscht, aber nicht nachträglich verändert werden."},
 en:{dashboard:"Dashboard",log:"Log",analysis:"History",report:"Doctor & Profile",gm:"Good morning",gd:"Good afternoon",ge:"Good evening",noCheck:"No check-in yet today",done:"Already checked in today",balanced:"Balanced day",busy:"Several symptoms noted",acute:"Log acute symptom",acuteSub:"Capture a hot flash, restlessness or migraine in seconds.",checkin:"20-second check-in",checkinSub:"Start empty and log only what matters today.",spotlight:"Pattern spotlight",notEnough:"Not enough data yet for a meaningful pattern.",seven:"7-day overview",sleep:"Sleep",energy:"Energy",load:"Symptom load",sleepHours:"Sleep duration",sleepQuality:"Sleep quality",physical:"Physical",mental:"Mental",mood:"Mood",fog:"Brain fog",cycle:"Cycle / HRT",hot:"Hot flash / night sweat",joints:"Joint discomfort",headache:"Headache / migraine",anxious:"Restlessness / panic",palpitations:"Palpitations",calm:"Calm",exhausted:"Exhausted",irritable:"Irritable",anxiousMood:"Anxious",fogNo:"No",fogLight:"Mild",fogYes:"Noticeable",bleedNone:"No bleeding",bleedLight:"Light",bleedHeavy:"Heavy",spotting:"Spotting",hrt:"HRT/MHT taken today",save:"Save entry",saved:"Saved ✓",savedToast:"Entry captured ✓",acuteSaved:"Acute symptom captured ✓",intensity:"Intensity",mild:"Mild",moderate:"Moderate",strong:"Strong",days7:"7 days",days30:"30 days",days90:"90 days",corr:"Overlay sleep",history:"Entries",edit:"Edit",del:"Delete",noData:"No data yet.",symptom:"Symptom",frequency:"Frequency",average:"Avg intensity",peak:"Peak time",reportTitle:"Doctor summary",period:"Tracking period",sleepTrend:"Sleep trend",bleedings:"Bleeding / spotting",hrtConsistency:"HRT/MHT documentation",patientNote:"Patient note",doctorField:"Clinician notes",print:"Print report / save as PDF",data:"Data management",json:"Export JSON",csv:"Export CSV",deleteAll:"Securely delete all data",confirmDelete:"Really delete all local entries?",cancel:"Cancel",deleteNow:"Delete data",medical:"Midlife OS shows observations from your entries. It does not diagnose and does not replace medical advice.",observe:"Observation",possible:"Possible association",insufficient:"There are not enough comparable days for this observation yet.",reflectionNeutral:"Captured. Your entry is now reflected in today's overview and your history.",reflectionHot:"Captured. Hot flashes are now documented today — over the next days, watch whether sleep or time of day forms a pattern.",reflectionLowSleep:"Captured. Your sleep duration was relatively short today. Midlife OS will compare this with future symptom entries.",acuteEdit:"Acute entries can be deleted but not edited later."}
};

const SYM=["hot","joints","headache","anxious","palpitations"], ACUTE=["hot","anxious","headache","palpitations"];
const blank=()=>({sleepHours:0,sleepQuality:0,energy:0,physical:[],mood:"",brainFog:"",bleeding:"",hrtTaken:false});

class AppState{
  constructor(){this.listeners=new Set();this.state=this.load()}
  subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn)}
  emit(){this.listeners.forEach(fn=>fn(this.state))}
  persist(){this.state.schemaVersion=VERSION;localStorage.setItem(KEY,JSON.stringify(this.state))}
  update(mutator){mutator(this.state);this.persist();this.emit()}
  safeParse(v){try{return JSON.parse(v)}catch{return null}}
  load(){
    const cur=this.safeParse(localStorage.getItem(KEY));
    if(cur?.schemaVersion===VERSION){
      cur.entries=Array.isArray(cur.entries)?cur.entries.map(normalize):[];
      return {...structuredClone(defaults),...cur}
    }
    const next=structuredClone(defaults);
    for(const k of ["midlifeOS_v14","midlifeOS_v13","midlifeOS_v12","midlifeOS_v10","midlifeOS_v9","midlifeOS_v8","midlifeOS_v7"]){
      const old=this.safeParse(localStorage.getItem(k)); if(!old)continue;
      if(["de","en"].includes(old.lang))next.lang=old.lang;
      if(Array.isArray(old.entries)) for(const e of old.entries){
        if(e.type==="acute"||e.kind==="acute-hot-flash"){
          next.entries.push(normalize({id:uid(),ts:e.ts,type:"acute",acuteSymptom:e.acuteSymptom||"hot",intensity:e.intensity||2}));
        } else {
          const p=[]; for(const id of SYM) if(e.values?.[id]&&e.values[id]!=="none")p.push(id);
          next.entries.push(normalize({id:uid(),ts:e.ts,type:"checkin",sleepHours:e.sleepHours||0,sleepQuality:e.sleepQuality||0,energy:e.energy||0,physical:p,mood:e.mood||"",brainFog:e.brainFog||"",bleeding:e.bleeding||"",hrtTaken:!!e.hrtTaken}));
        }
      }
    }
    localStorage.setItem(KEY,JSON.stringify(next)); return next
  }
}

function uid(){return crypto?.randomUUID?.()||("e_"+Date.now()+"_"+Math.random().toString(16).slice(2))}
function clamp(v,a,b,d=0){const n=Number(v);return Number.isFinite(n)?Math.max(a,Math.min(b,n)):d}
function normalize(e){
  return {id:String(e?.id||uid()),ts:new Date(e?.ts||Date.now()).toISOString(),type:e?.type==="acute"?"acute":"checkin",
  sleepHours:clamp(e?.sleepHours,0,12),sleepQuality:clamp(e?.sleepQuality,0,5),energy:clamp(e?.energy,0,5),
  physical:Array.isArray(e?.physical)?e.physical.filter(x=>SYM.includes(x)):[],
  mood:["calm","exhausted","irritable","anxiousMood"].includes(e?.mood)?e.mood:"",
  brainFog:["fogNo","fogLight","fogYes"].includes(e?.brainFog)?e.brainFog:"",
  bleeding:["bleedNone","bleedLight","bleedHeavy","spotting"].includes(e?.bleeding)?e.bleeding:"",
  hrtTaken:!!e?.hrtTaken,acuteSymptom:ACUTE.includes(e?.acuteSymptom)?e.acuteSymptom:"",intensity:clamp(e?.intensity,1,3,2)}
}

const store=new AppState();
let draft=blank(), editing=null, modal=null, savedPulse=false;

function S(){return store.state}
function tr(k){return I18N[S().lang][k]||k}
function locale(){return S().lang==="de"?"de-DE":"en-GB"}
function sameDay(ts,d=new Date()){const x=new Date(ts);return x.getFullYear()===d.getFullYear()&&x.getMonth()===d.getMonth()&&x.getDate()===d.getDate()}
function cut(days){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-(days-1));return d}
function range(days){const c=cut(days);return S().entries.filter(e=>new Date(e.ts)>=c).sort((a,b)=>new Date(a.ts)-new Date(b.ts))}
function today(){return S().entries.filter(e=>sameDay(e.ts)).sort((a,b)=>new Date(b.ts)-new Date(a.ts))}
function fmtD(x){return new Date(x).toLocaleDateString(locale(),{day:"2-digit",month:"short",year:"numeric"})}
function fmtT(x){return new Date(x).toLocaleTimeString(locale(),{hour:"2-digit",minute:"2-digit"})}
function greet(){const h=new Date().getHours();return h<11?tr("gm"):h<18?tr("gd"):tr("ge")}
function avg(a){return a.length?a.reduce((x,y)=>x+y,0)/a.length:0}
function has(e,id){return e.type==="acute"?e.acuteSymptom===id:e.physical.includes(id)}
function loadScore(e){return e.type==="acute"?e.intensity:e.physical.length+(e.brainFog==="fogYes"?1:e.brainFog==="fogLight"?.5:0)}
function stats(es){const m={};for(const e of es){const ids=e.type==="acute"&&e.acuteSymptom?[e.acuteSymptom]:e.physical;for(const id of ids){m[id]??={count:0,sum:0};m[id].count++;m[id].sum+=e.type==="acute"?e.intensity:1}}return Object.entries(m).map(([id,v])=>({id,count:v.count,avg:v.sum/v.count})).sort((a,b)=>b.count-a.count||b.avg-a.avg)}
function top(es){const x=stats(es)[0];return x?{id:x.id,count:x.count}:null}
function peak(es,id){const hs=es.filter(e=>has(e,id)).map(e=>new Date(e.ts).getHours());if(!hs.length)return"—";const b=[[0,6],[6,12],[12,18],[18,24]],n=S().lang==="de"?["Nacht","Morgen","Nachmittag","Abend"]:["Night","Morning","Afternoon","Evening"],c=b.map(([a,z])=>hs.filter(h=>h>=a&&h<z).length);return n[c.indexOf(Math.max(...c))]}
function daily(days){const start=cut(days),out=[];for(let i=0;i<days;i++){const d=new Date(start);d.setDate(start.getDate()+i);const k=d.toISOString().slice(0,10),es=S().entries.filter(e=>e.ts.slice(0,10)===k),cs=es.filter(e=>e.type==="checkin");out.push({date:d,sleep:avg(cs.map(e=>e.sleepQuality).filter(Boolean)),energy:avg(cs.map(e=>e.energy).filter(Boolean)),load:es.reduce((z,e)=>z+loadScore(e),0)})}return out}

function insight(days){
  const es=range(days),cs=es.filter(e=>e.type==="checkin"&&e.sleepHours>0),hots=es.filter(e=>has(e,"hot"));
  if(cs.length<5||hots.length<3)return{title:tr("observe"),text:tr("notEnough")};
  const low=new Set(cs.filter(e=>e.sleepHours<6).map(e=>e.ts.slice(0,10))),good=new Set(cs.filter(e=>e.sleepHours>=6).map(e=>e.ts.slice(0,10)));
  if(low.size<2||good.size<2)return{title:tr("observe"),text:tr("insufficient")};
  const mean=set=>avg(es.filter(e=>set.has(e.ts.slice(0,10))&&has(e,"hot")).map(e=>e.type==="acute"?e.intensity:1));
  const a=mean(low),b=mean(good); if(!a||!b)return{title:tr("observe"),text:tr("insufficient")};
  return{title:tr("possible"),text:S().lang==="de"?`In deinen letzten ${days} Tagen lag die dokumentierte Hitzewallungs-Intensität an Tagen mit < 6 h Schlaf bei Ø ${a.toFixed(1)} gegenüber Ø ${b.toFixed(1)} an Tagen mit ≥ 6 h Schlaf. Beobachtung, keine Ursache-Wirkung-Aussage.`:`Across your last ${days} days, documented hot-flash intensity averaged ${a.toFixed(1)} on days with < 6 h sleep versus ${b.toFixed(1)} on days with ≥ 6 h sleep. Observation, not a causal claim.`}
}

function feedbackFor(e){
  if(e.type==="acute")return tr("reflectionNeutral");
  if(e.physical.includes("hot"))return tr("reflectionHot");
  if(e.sleepHours>0&&e.sleepHours<6)return tr("reflectionLowSleep");
  return tr("reflectionNeutral")
}

function icon(k){const p={home:'<path d="M4 11.5 12 5l8 6.5V20H4z"/><path d="M9 20v-6h6v6"/>',plus:'<path d="M12 5v14M5 12h14"/>',trend:'<path d="M4 17l5-5 4 3 7-8"/>',report:'<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/>'}[k];return`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`}
function nav(id,ic){return`<button data-tab="${id}" class="${S().activeTab===id?"active":""}">${icon(ic)}<span>${tr(id)}</span></button>`}
function button(attr,on,label){return`<button ${attr} class="${on?"active":""}">${label}</button>`}
function scale(k,label){return`<div class="scale"><div class="row"><strong>${label}</strong><span class="pill">${draft[k]?draft[k]+"/5":"—"}</span></div><div class="scale-buttons">${[1,2,3,4,5].map(n=>button(`data-scale="${k}:${n}"`,draft[k]===n,n)).join("")}</div></div>`}

function render(){
  document.documentElement.lang=S().lang;
  document.getElementById("app").innerHTML=`<div class="shell">
    <header class="topbar"><div class="brand">Midlife <b>OS.</b></div><div class="lang"><button data-lang="de" class="${S().lang==="de"?"active":""}">DE</button><button data-lang="en" class="${S().lang==="en"?"active":""}">EN</button></div></header>
    <main class="view">${view()}</main>
    ${S().activeTab==="dashboard"?`<button class="fab" id="fab">${tr("acute")}</button>`:""}
    <nav class="bottom-nav" aria-label="Main navigation">${nav("dashboard","home")}${nav("log","plus")}${nav("analysis","trend")}${nav("report","report")}</nav>
  </div>`;
  bind();
  if(modal)showModal()
}

function view(){return S().activeTab==="log"?logView():S().activeTab==="analysis"?analysisView():S().activeTab==="report"?reportView():dashView()}

function dashView(){
  const t=today(),check=t.find(e=>e.type==="checkin"),week=range(7),i=insight(14),cs=week.filter(e=>e.type==="checkin");
  const feedback=S().lastFeedback?`<div class="insight"><strong>${tr("saved")}</strong>${escapeHtml(S().lastFeedback)}</div>`:"";
  return`<div class="stack">
    <section class="card"><div class="eyebrow">${tr("dashboard")}</div><h1 style="margin-top:4px">${greet()}</h1><div class="sub">${!check?tr("noCheck"):`${tr("done")} · ${t.length>2?tr("busy"):tr("balanced")}`}</div></section>
    ${feedback}
    <div class="action-grid"><button class="action sos" id="acute"><strong>${tr("acute")}</strong><small>${tr("acuteSub")}</small></button><button class="action" data-go="log"><strong>${tr("checkin")}</strong><small>${tr("checkinSub")}</small></button></div>
    <section class="card"><div class="eyebrow">${tr("spotlight")}</div><div class="insight" style="margin-top:10px"><strong>${i.title}</strong>${i.text}</div></section>
    <section class="card"><div class="row-top"><div><div class="eyebrow">${tr("seven")}</div><h2>${week.length} ${S().lang==="de"?"Einträge":"entries"}</h2></div><span class="pill">7D</span></div>
      <div class="metric-grid" style="margin-top:10px"><div class="metric"><span>${tr("sleep")}</span><strong>${fmtMetric(avg(cs.map(e=>e.sleepQuality).filter(Boolean)))}</strong></div><div class="metric"><span>${tr("energy")}</span><strong>${fmtMetric(avg(cs.map(e=>e.energy).filter(Boolean)))}</strong></div><div class="metric"><span>${tr("load")}</span><strong>${fmtMetric(avg(week.map(loadScore)))}</strong></div></div>
      <div class="chart">${svgOverview(7)}</div>
    </section>
  </div>`
}

function fmtMetric(v){return v?v.toFixed(1):"—"}

function logView(){
  return`<div class="stack">
    <div><div class="eyebrow">${tr("log")}</div><h1>${editing?tr("edit"):tr("checkin")}</h1><p class="sub">${tr("checkinSub")}</p></div>
    <section class="card section"><div class="eyebrow">${tr("sleep")}</div>
      <div class="scale"><div class="row"><strong>${tr("sleepHours")}</strong><span class="pill">${draft.sleepHours||"—"}h</span></div><div class="choice-grid four">${[4,6,8,10].map(n=>button(`data-hours="${n}"`,draft.sleepHours===n,n+"h")).join("")}</div></div>
      ${scale("sleepQuality",tr("sleepQuality"))}${scale("energy",tr("energy"))}
    </section>
    <section class="card section"><div class="eyebrow">${tr("physical")}</div><div class="chips">${["hot","joints","headache","palpitations"].map(id=>`<button class="chip ${draft.physical.includes(id)?"active":""}" data-phys="${id}">${tr(id)}</button>`).join("")}</div></section>
    <section class="card section"><div class="eyebrow">${tr("mental")}</div>
      <div><strong style="font-size:13px">${tr("mood")}</strong><div class="choice-grid" style="margin-top:7px">${["calm","exhausted","irritable","anxiousMood"].map(x=>button(`data-mood="${x}"`,draft.mood===x,tr(x))).join("")}</div></div>
      <div><strong style="font-size:13px">${tr("fog")}</strong><div class="choice-grid three" style="margin-top:7px">${["fogNo","fogLight","fogYes"].map(x=>button(`data-fog="${x}"`,draft.brainFog===x,tr(x))).join("")}</div></div>
    </section>
    <section class="card section"><div class="eyebrow">${tr("cycle")}</div><div class="choice-grid">${["bleedNone","bleedLight","bleedHeavy","spotting"].map(x=>button(`data-bleed="${x}"`,draft.bleeding===x,tr(x))).join("")}</div><div class="toggle-row"><strong style="font-size:13px">${tr("hrt")}</strong><button class="toggle ${draft.hrtTaken?"on":""}" id="hrt"><i></i></button></div></section>
    <button class="primary ${savedPulse?"saved":""}" id="saveEntry">${savedPulse?tr("saved"):tr("save")}</button>
  </div>`
}

function analysisView(){
  const es=range(S().analysisRange),tp=top(es),i=insight(S().analysisRange);
  return`<div class="stack">
    <div><div class="eyebrow">${tr("analysis")}</div><h1>${S().lang==="de"?"Muster statt Datenmüll":"Patterns, not data clutter"}</h1><p class="sub">${tr("medical")}</p></div>
    <div class="tabs">${[7,30,90].map(n=>`<button data-range="${n}" class="${S().analysisRange===n?"active":""}">${tr("days"+n)}</button>`).join("")}</div>
    <section class="card"><div class="row-top"><div><div class="eyebrow">${tr("spotlight")}</div><h2>${tp?tr(tp.id):tr("noData")}</h2></div><span class="pill">${es.length}</span></div><div class="correlation"><label>${tr("corr")}</label><button class="toggle ${S().overlaySleep?"on":""}" id="overlay"><i></i></button></div><div class="chart tall">${svgSymptom(S().analysisRange,tp?.id||"hot")}</div></section>
    <div class="insight"><strong>${i.title}</strong>${i.text}</div>
    <section class="card"><div class="eyebrow">${tr("history")}</div><div class="list" style="margin-top:10px">${es.length?[...es].reverse().map(entryHtml).join(""):`<div class="empty">${tr("noData")}</div>`}</div></section>
  </div>`
}

function entryHtml(e){
  const d=e.type==="acute"?`${tr(e.acuteSymptom)} · ${["",tr("mild"),tr("moderate"),tr("strong")][e.intensity]}`:[e.sleepHours?`${tr("sleepHours")}: ${e.sleepHours}h`:"",e.sleepQuality?`${tr("sleepQuality")}: ${e.sleepQuality}/5`:"",e.energy?`${tr("energy")}: ${e.energy}/5`:"",...e.physical.map(tr),e.mood?tr(e.mood):"",e.brainFog?`${tr("fog")}: ${tr(e.brainFog)}`:"",e.bleeding?tr(e.bleeding):"",e.hrtTaken?tr("hrt"):""].filter(Boolean).join(" · ");
  return`<div class="entry"><div class="entry-head"><strong>${fmtT(e.ts)}</strong><small>${fmtD(e.ts)}</small></div><div class="sub">${d||"—"}</div><div class="entry-actions"><button data-edit="${e.id}">${tr("edit")}</button><button class="danger" data-del="${e.id}">${tr("del")}</button></div></div>`
}

function reportView(){
  const es=range(S().reportRange),st=stats(es),cs=es.filter(e=>e.type==="checkin"),bleed=cs.filter(e=>e.bleeding&&e.bleeding!=="bleedNone"),hrt=cs.filter(e=>e.hrtTaken).length;
  return`<div class="stack print-report">
    <div><div class="eyebrow">${tr("report")}</div><h1>${tr("reportTitle")}</h1><p class="sub">${tr("medical")}</p></div>
    <div class="tabs no-print">${[30,60,90].map(n=>`<button data-report-range="${n}" class="${S().reportRange===n?"active":""}">${tr("days"+n)}</button>`).join("")}</div>
    <section class="card"><div class="row"><div><div class="eyebrow">${tr("period")}</div><h2>${fmtD(cut(S().reportRange))} – ${fmtD(new Date())}</h2></div><span class="pill">${es.length}</span></div></section>
    <section class="card"><table class="report-table"><thead><tr><th>${tr("symptom")}</th><th>${tr("frequency")}</th><th>${tr("average")}</th><th>${tr("peak")}</th></tr></thead><tbody>${st.length?st.slice(0,5).map(x=>`<tr><td>${tr(x.id)}</td><td>${x.count}</td><td>${x.avg.toFixed(1)}</td><td>${peak(es,x.id)}</td></tr>`).join(""):`<tr><td colspan="4">${tr("noData")}</td></tr>`}</tbody></table></section>
    <section class="card profile-grid"><div class="profile-row"><strong>${tr("sleepTrend")}</strong><small>${cs.length?`${tr("sleepHours")}: ${fmtMetric(avg(cs.map(e=>e.sleepHours).filter(Boolean)))}h · ${tr("sleepQuality")}: ${fmtMetric(avg(cs.map(e=>e.sleepQuality).filter(Boolean)))}/5`:tr("noData")}</small></div><div class="profile-row"><strong>${tr("bleedings")}</strong><small>${bleed.length}</small></div><div class="profile-row"><strong>${tr("hrtConsistency")}</strong><small>${cs.length?`${hrt}/${cs.length} ${S().lang==="de"?"Check-ins dokumentiert":"check-ins documented"}`:tr("noData")}</small></div></section>
    <section class="card"><div class="eyebrow">${tr("patientNote")}</div><textarea class="notes" id="doctorNote">${escapeHtml(S().doctorNote||"")}</textarea></section>
    <section class="card"><div class="eyebrow">${tr("doctorField")}</div><div style="min-height:92px;border-bottom:1px solid #CBD5E1"></div></section>
    <button class="primary no-print" id="print">${tr("print")}</button>
    <section class="card no-print"><div class="eyebrow">${tr("data")}</div><div class="export-grid" style="margin-top:10px"><button id="json">${tr("json")}</button><button id="csv">${tr("csv")}</button></div><button class="danger-btn" id="deleteAll" style="margin-top:8px">${tr("deleteAll")}</button></section>
  </div>`
}

function svgOverview(days){
  const a=daily(days),w=340,h=140,p=16,max=Math.max(1,...a.map(x=>x.load)),points=(k,m)=>a.map((d,i)=>({x:p+i*((w-2*p)/Math.max(1,a.length-1)),y:h-p-(d[k]/m)*(h-2*p)}));
  const x=points("load",max),y=points("sleep",5),pa=x.map(q=>`${q.x},${q.y}`).join(" "),pb=y.map(q=>`${q.x},${q.y}`).join(" ");
  return`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline class="area-a" points="${p},${h-p} ${pa} ${w-p},${h-p}"></polyline><polyline class="line-a" points="${pa}"></polyline><polyline class="line-b" points="${pb}"></polyline></svg>`
}

function svgSymptom(days,id){
  const a=daily(days),w=340,h=180,p=18,start=cut(days),z=[];
  for(let i=0;i<days;i++){const d=new Date(start);d.setDate(start.getDate()+i);const k=d.toISOString().slice(0,10),es=S().entries.filter(e=>e.ts.slice(0,10)===k&&has(e,id));z.push({v:es.length?avg(es.map(e=>e.type==="acute"?e.intensity:1)):0})}
  const x=z.map((d,i)=>({x:p+i*((w-2*p)/Math.max(1,days-1)),y:h-p-(d.v/3)*(h-2*p)}));
  let sl="";if(S().overlaySleep){const y=a.map((d,i)=>({x:p+i*((w-2*p)/Math.max(1,days-1)),y:h-p-(d.sleep/5)*(h-2*p)}));sl=`<polyline class="line-b" points="${y.map(q=>`${q.x},${q.y}`).join(" ")}"></polyline>`}
  return`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline class="line-a" points="${x.map(q=>`${q.x},${q.y}`).join(" ")}"></polyline>${sl}</svg>`
}

function bind(){
  document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>store.update(s=>s.lang=b.dataset.lang));
  document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{store.update(s=>s.activeTab=b.dataset.tab);window.scrollTo({top:0,behavior:"smooth"})});
  document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>store.update(s=>s.activeTab=b.dataset.go));
  document.getElementById("fab")?.addEventListener("click",openAcute);document.getElementById("acute")?.addEventListener("click",openAcute);
  document.querySelectorAll("[data-hours]").forEach(b=>b.onclick=()=>{draft.sleepHours=+b.dataset.hours;render()});
  document.querySelectorAll("[data-scale]").forEach(b=>b.onclick=()=>{const[k,n]=b.dataset.scale.split(":");draft[k]=+n;render()});
  document.querySelectorAll("[data-phys]").forEach(b=>b.onclick=()=>{const id=b.dataset.phys;draft.physical=draft.physical.includes(id)?draft.physical.filter(x=>x!==id):[...draft.physical,id];render()});
  document.querySelectorAll("[data-mood]").forEach(b=>b.onclick=()=>{draft.mood=b.dataset.mood;render()});
  document.querySelectorAll("[data-fog]").forEach(b=>b.onclick=()=>{draft.brainFog=b.dataset.fog;render()});
  document.querySelectorAll("[data-bleed]").forEach(b=>b.onclick=()=>{draft.bleeding=b.dataset.bleed;render()});
  document.getElementById("hrt")?.addEventListener("click",()=>{draft.hrtTaken=!draft.hrtTaken;render()});
  document.getElementById("saveEntry")?.addEventListener("click",saveEntry);
  document.querySelectorAll("[data-range]").forEach(b=>b.onclick=()=>store.update(s=>s.analysisRange=+b.dataset.range));
  document.getElementById("overlay")?.addEventListener("click",()=>store.update(s=>s.overlaySleep=!s.overlaySleep));
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editEntry(b.dataset.edit));
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>deleteEntry(b.dataset.del));
  document.querySelectorAll("[data-report-range]").forEach(b=>b.onclick=()=>store.update(s=>s.reportRange=+b.dataset.reportRange));
  document.getElementById("doctorNote")?.addEventListener("input",e=>{S().doctorNote=e.target.value;store.persist()});
  document.getElementById("print")?.addEventListener("click",()=>window.print());
  document.getElementById("json")?.addEventListener("click",exportJson);
  document.getElementById("csv")?.addEventListener("click",exportCsv);
  document.getElementById("deleteAll")?.addEventListener("click",openDeleteAll)
}

function saveEntry(){
  if(!draft.sleepHours&&!draft.sleepQuality&&!draft.energy&&!draft.physical.length&&!draft.mood&&!draft.brainFog&&!draft.bleeding&&!draft.hrtTaken){toast(S().lang==="de"?"Bitte mindestens einen Wert auswählen.":"Please choose at least one value.");return}
  const old=editing?S().entries.find(e=>e.id===editing):null;
  const entry=normalize({id:editing||uid(),ts:old?.ts||new Date(),type:"checkin",...draft});
  store.update(s=>{if(editing)s.entries=s.entries.map(x=>x.id===editing?entry:x);else s.entries.push(entry);s.lastFeedback=feedbackFor(entry)});
  draft=blank();editing=null;savedPulse=true;render();toast(tr("savedToast"));
  setTimeout(()=>{savedPulse=false;store.update(s=>s.activeTab="dashboard")},450)
}

function editEntry(id){
  const e=S().entries.find(x=>x.id===id);if(!e)return;
  if(e.type==="acute"){toast(tr("acuteEdit"));return}
  editing=id;draft={sleepHours:e.sleepHours,sleepQuality:e.sleepQuality,energy:e.energy,physical:[...e.physical],mood:e.mood,brainFog:e.brainFog,bleeding:e.bleeding,hrtTaken:e.hrtTaken};
  store.update(s=>s.activeTab="log")
}

function deleteEntry(id){store.update(s=>s.entries=s.entries.filter(e=>e.id!==id));toast(S().lang==="de"?"Eintrag gelöscht.":"Entry deleted.")}

function openAcute(){modal={type:"acute",symptom:"",intensity:2};showModal()}
function openDeleteAll(){modal={type:"deleteAll"};showModal()}
function showModal(){
  document.querySelector(".backdrop")?.remove();
  const w=document.createElement("div");w.className="backdrop";
  if(modal.type==="acute")w.innerHTML=`<section class="sheet"><div class="grabber"></div><div class="sheet-head"><div><div class="eyebrow">${tr("acute")}</div><h2>${S().lang==="de"?"Was passiert gerade?":"What is happening now?"}</h2></div><button class="close" id="close">×</button></div><div class="sos-list">${ACUTE.map(id=>`<button class="sos-choice ${modal.symptom===id?"active":""}" data-acute="${id}">${tr(id)}</button>`).join("")}</div><div class="eyebrow" style="margin-top:12px">${tr("intensity")}</div><div class="intensity">${[[1,"mild"],[2,"moderate"],[3,"strong"]].map(([n,k])=>`<button data-int="${n}" class="${modal.intensity===n?"active":""}">${tr(k)}</button>`).join("")}</div><button class="primary" id="saveAcute" style="margin-top:12px">${tr("save")}</button></section>`;
  else w.innerHTML=`<section class="sheet"><div class="grabber"></div><h2>${tr("deleteAll")}</h2><p class="sub">${tr("confirmDelete")}</p><div class="export-grid" style="margin-top:14px"><button id="cancel">${tr("cancel")}</button><button id="confirm" style="color:var(--danger)">${tr("deleteNow")}</button></div></section>`;
  document.body.appendChild(w);w.onclick=e=>{if(e.target===w){modal=null;w.remove()}};
  document.getElementById("close")?.addEventListener("click",()=>{modal=null;w.remove()});
  document.querySelectorAll("[data-acute]").forEach(b=>b.onclick=()=>{modal.symptom=b.dataset.acute;showModal()});
  document.querySelectorAll("[data-int]").forEach(b=>b.onclick=()=>{modal.intensity=+b.dataset.int;showModal()});
  document.getElementById("saveAcute")?.addEventListener("click",()=>{if(!modal.symptom)return;const e=normalize({id:uid(),ts:new Date(),type:"acute",acuteSymptom:modal.symptom,intensity:modal.intensity});store.update(s=>{s.entries.push(e);s.lastFeedback=feedbackFor(e)});modal=null;w.remove();toast(tr("acuteSaved"));render()});
  document.getElementById("cancel")?.addEventListener("click",()=>{modal=null;w.remove()});
  document.getElementById("confirm")?.addEventListener("click",()=>{const lang=S().lang;store.state={...structuredClone(defaults),lang};store.persist();draft=blank();editing=null;modal=null;w.remove();render();toast(lang==="de"?"Alle Daten gelöscht.":"All data deleted.")})
}

function toast(msg){document.querySelector(".toast")?.remove();const e=document.createElement("div");e.className="toast";e.textContent=msg;document.body.appendChild(e);navigator.vibrate?.(20);setTimeout(()=>e.remove(),1800)}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function download(name,content,type){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function exportJson(){download(`midlife-os-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(S(),null,2),"application/json")}
function csv(v){const s=String(v??"");return/[",\n]/.test(s)?`"${s.replace(/"/g,'""')}"`:s}
function exportCsv(){const h=["id","timestamp","type","sleepHours","sleepQuality","energy","physical","mood","brainFog","bleeding","hrtTaken","acuteSymptom","intensity"];const rows=S().entries.map(e=>h.map(k=>csv(Array.isArray(e[k])?e[k].join("|"):e[k])).join(","));download(`midlife-os-${new Date().toISOString().slice(0,10)}.csv`,[h.join(","),...rows].join("\n"),"text/csv;charset=utf-8")}

store.subscribe(()=>render());
render();
})();