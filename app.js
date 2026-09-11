(()=>{
  'use strict';

  const VERSION=32;
  const KEY='luna_v32';
  const ONBOARD='luna_onboarded';
  const CORE=['hot','brain','sleepQualitySignal','moodSignal','joints','palpitations'];
  const ACUTE=['hot','palpitations','brain','pain'];
  const DEFAULT_STATE={schemaVersion:VERSION,lang:'de',activeTab:'today',entries:[],analysisRange:30,reportRange:30,doctorNote:'',reminderTime:'20:00'};

  const TXT={
    de:{
      today:'Heute',patterns:'Muster',toolkit:'Toolkit',doctor:'Arzt',checkin:'Check-in',
      balance:'Tages-Balance',startDay:'Jetzt Tag erfassen',todayFocus:'Tagesfokus',
      level:'Level 1',levelName:'Rhythmus-Pionierin',daysCaptured:'Tage erfasst',patternActive:'Hormonmuster aktiv',
      energy:'Energie',signals:'Signale',cycle:'Zyklus',cycleCalm:'Ruhe',
      breathReset:'60s Nerven-Reset',breathResetSub:'4–6 · runterregeln',acuteSOS:'Akut-SOS',acuteSOSSub:'3 Sekunden · direkt helfen',
      impulse:'Tages-Impuls',impulseDefault:'Dein System profitiert heute von kleinen, planbaren Pausen statt von Perfektion.',
      dailyTitle:'10-Sekunden Check-in',dailySub:'Einmal pro Tag. Schnell, ruhig, ohne Bewertung.',energyQ:'Wie startet deine Energie?',
      symptomsToday:'Wie stark sind diese Signale heute?',hot:'Hitzewallung',brain:'Brain Fog',sleepQualitySignal:'Schlafqualität',moodSignal:'Stimmung',joints:'Gelenkschmerz',palpitations:'Herzklopfen',
      bleeding:'Blutung',none:'Keine',spotting:'Spotting',light:'Leicht',medium:'Mittel',strong:'Stark',hrt:'HRT/HET heute',finish:'Check-in abschließen ✓',
      patternTitle:'Was deine Daten erzählen',patternSub:'Zusammenhänge statt einzelner schlechter Tage.',
      wellbeing:'Balance im Verlauf',correlations:'Aha-Momente',notEnough:'Noch nicht genug Daten für ein belastbares Muster.',
      toolkitTitle:'Midlife-Toolkit',toolkitSub:'Sofort-Hilfe für Situationen, die gerade passieren.',
      calm46:'4–6 Beruhigung',calm46Sub:'Bei Hitzewallung, Unruhe oder Herzklopfen',focus444:'4–4–4 Fokus',focus444Sub:'Bei Brain Fog und mentaler Überlastung',
      nightSOS:'Nacht-SOS',nightSOSSub:'Wenn du um 3:00 Uhr hellwach bist',coolPoints:'Kühl- & Nervenpunkte',coolPointsSub:'Diskrete Punkte für Meeting, Bahn oder Alltag',
      doctorTitle:'Vorbereitet ins Gespräch',doctorSub:'Die letzten Daten kompakt statt aus dem Gedächtnis.',avgBalance:'Ø Tages-Balance',commonSignals:'Häufigste Signale',acuteEvents:'Akut-Signale',notes:'Deine Notizen',notesPlaceholder:'Was möchtest du beim Termin ansprechen?',print:'Als PDF / Drucken',
      quickTitle:'Akut-SOS',quickSub:'Was ist gerade los?',saveQuick:'Speichern & Hilfe zeigen',mild:'Sanft',noticeable:'Deutlich',heavy:'Heftig',pain:'Gelenk- / Kopfschmerz',
      tipHot:'SOS-Tipp: Kühle Handgelenke oder Nacken 30–60 Sekunden mit angenehm kühlem Wasser.',
      tipPalp:'SOS-Tipp: Schultern lösen, hinsetzen und länger aus- als einatmen. Bei Brustschmerz, Ohnmacht oder Atemnot sofort medizinische Hilfe holen.',
      tipBrain:'SOS-Tipp: Ein Glas Wasser, 60 Sekunden Reizpause und genau eine kleine nächste Aufgabe.',
      tipPain:'SOS-Tipp: Position wechseln, betroffene Region entlasten und für 60 Sekunden ruhig ausatmen; neue starke Schmerzen bitte abklären.',
      breatheIn:'Einatmen',breatheOut:'Ausatmen',hold:'Halten',done:'Geschafft',start:'Starten',close:'Schließen',
      night1:'Kein Uhrzeit-Check: Display wegdrehen und Licht niedrig halten.',night2:'Körper beruhigen: 6 langsame Ausatmungen, ohne Schlaf erzwingen zu wollen.',night3:'Wenn du nach etwa 20 Minuten wach bist: kurz aufstehen, etwas Ruhiges bei wenig Licht tun.',
      cool1:'Handgelenke: angenehm kühl, 30–60 Sekunden.',cool2:'Nacken / Schlüsselbein: kühlen Stoff auflegen.',cool3:'Daumenballen sanft drücken und lange ausatmen.',
      insightHot:'Deine Hitzewallungen häufen sich aktuell. Plane heute einen kleinen Temperatur-Puffer und halte Wasser griffbereit.',
      insightBrain:'Brain Fog ist zuletzt häufiger. Heute helfen klare Einzelschritte und ein kurzer Reiz-Reset mehr als Multitasking.',
      insightSleep:'Deine Schlafqualität war zuletzt öfter auffällig. Plane heute bewusst weniger späten Leistungsdruck ein.',
      focusGood:'Heute wirkt dein System stabil. Nutze die Energie, aber lass bewusst einen kleinen Puffer.',
      focusMedium:'Heute ist solide, aber nicht grenzenlos. Plane einen Puffer für den Nachmittag.',
      focusLow:'Heute braucht dein System weniger Druck. Priorisiere das Nötigste und baue kurze Erholung ein.'
    },
    en:{
      today:'Today',patterns:'Patterns',toolkit:'Toolkit',doctor:'Doctor',checkin:'Check-in',
      balance:'Daily balance',startDay:'Log today',todayFocus:'Today’s focus',level:'Level 1',levelName:'Rhythm pioneer',daysCaptured:'days captured',patternActive:'patterns activating',
      energy:'Energy',signals:'Signals',cycle:'Cycle',cycleCalm:'Calm',breathReset:'60s nervous-system reset',breathResetSub:'4–6 · downshift',acuteSOS:'Acute SOS',acuteSOSSub:'3 seconds · immediate help',
      impulse:'Daily insight',impulseDefault:'Your system benefits more from small planned pauses today than from perfection.',
      dailyTitle:'10-second check-in',dailySub:'Once a day. Quick, calm, no judgement.',energyQ:'How is your energy starting?',symptomsToday:'How strong are these signals today?',
      hot:'Hot flush',brain:'Brain fog',sleepQualitySignal:'Sleep quality',moodSignal:'Mood',joints:'Joint pain',palpitations:'Palpitations',bleeding:'Bleeding',none:'None',spotting:'Spotting',light:'Light',medium:'Medium',strong:'Strong',hrt:'HRT/MHT today',finish:'Complete check-in ✓',
      patternTitle:'What your data is saying',patternSub:'Connections, not isolated bad days.',wellbeing:'Balance over time',correlations:'Aha moments',notEnough:'Not enough data for a reliable pattern yet.',
      toolkitTitle:'Midlife toolkit',toolkitSub:'Immediate help for what is happening right now.',calm46:'4–6 calm',calm46Sub:'For hot flushes, restlessness or palpitations',focus444:'4–4–4 focus',focus444Sub:'For brain fog and mental overload',nightSOS:'Night SOS',nightSOSSub:'When you are wide awake at 3am',coolPoints:'Cooling & nerve points',coolPointsSub:'Discreet options for meetings, travel or daily life',
      doctorTitle:'Ready for your appointment',doctorSub:'Recent data in one place instead of from memory.',avgBalance:'Average daily balance',commonSignals:'Most common signals',acuteEvents:'Acute signals',notes:'Your notes',notesPlaceholder:'What do you want to discuss?',print:'Print / save as PDF',
      quickTitle:'Acute SOS',quickSub:'What is happening right now?',saveQuick:'Save & show help',mild:'Mild',noticeable:'Noticeable',heavy:'Intense',pain:'Joint / headache',
      tipHot:'SOS tip: Cool your wrists or neck with comfortably cool water for 30–60 seconds.',tipPalp:'SOS tip: Drop your shoulders, sit down and exhale longer than you inhale. Seek urgent help for chest pain, fainting or breathlessness.',tipBrain:'SOS tip: Drink a glass of water, take a 60-second input break and choose exactly one next task.',tipPain:'SOS tip: Change position, unload the painful area and exhale slowly for 60 seconds; new severe pain should be checked.',
      breatheIn:'Breathe in',breatheOut:'Breathe out',hold:'Hold',done:'Done',start:'Start',close:'Close',
      night1:'Do not check the time: turn the display away and keep light low.',night2:'Settle the body: six slow exhalations without forcing sleep.',night3:'If you are still awake after roughly 20 minutes, get up briefly and do something quiet in low light.',
      cool1:'Wrists: comfortably cool for 30–60 seconds.',cool2:'Neck / collarbone: place a cool cloth.',cool3:'Gently press the base of the thumb while extending the exhale.',
      insightHot:'Hot flushes have been more frequent lately. Build in a small temperature buffer and keep water close today.',insightBrain:'Brain fog has been showing up more often. Single-tasking and a short input reset will likely help more than multitasking.',insightSleep:'Sleep quality has been flagged more often lately. Reduce late-day pressure where you can.',
      focusGood:'Your system looks steady today. Use the energy, but keep a little buffer.',focusMedium:'Today looks solid, not unlimited. Keep some room for the afternoon.',focusLow:'Your system needs less pressure today. Prioritise essentials and short recovery breaks.'
    }
  };

  let state=load();
  let draft={energy:0,symptoms:{},bleeding:'',hrtTaken:false};
  let editingId=null;
  let modal=null;
  let toast=null;
  let toastTimer=null;
  let breathTimer=null;
  let breathMode='46';
  let breathEnd=0;
  let lastBreathPhase='';

  const root=document.getElementById('view-root');
  const navEl=document.getElementById('bottom-nav');
  const overlay=document.getElementById('overlay-root');
  const T=k=>TXT[state.lang][k]||k;
  const uid=()=>globalThis.crypto?.randomUUID?.()||`e_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,Number(v)||0));
  const haptic=(pattern=12)=>{try{navigator.vibrate?.(pattern)}catch{}};
  const localKey=value=>{const d=new Date(value);return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};

  function normalize(e){
    if(e?.type==='tool')return{id:String(e.id||uid()),ts:new Date(e.ts||Date.now()).toISOString(),type:'tool',tool:String(e.tool||'')};
    const symptoms={};
    if(e?.symptoms)for(const [id,v] of Object.entries(e.symptoms))if(CORE.includes(id))symptoms[id]=['L','M','S'].includes(v)?v:'M';
    return{
      id:String(e?.id||uid()),ts:new Date(e?.ts||Date.now()).toISOString(),type:e?.type==='acute'?'acute':'checkin',
      energy:clamp(e?.energy,0,5),symptoms,
      bleeding:['none','spotting','light','medium','strong'].includes(e?.bleeding)?e.bleeding:'',
      hrtTaken:!!e?.hrtTaken,acuteSymptom:e?.acuteSymptom||'',intensity:['L','M','S'].includes(e?.intensity)?e.intensity:'M'
    };
  }

  function load(){
    try{
      const cur=JSON.parse(localStorage.getItem(KEY)||'null');
      if(cur?.schemaVersion===VERSION)return{...DEFAULT_STATE,...cur,activeTab:mapLegacyTab(cur.activeTab),entries:Array.isArray(cur.entries)?cur.entries.map(normalize):[]};
    }catch{}
    for(const k of ['luna_v31','luna_v30','luna_v29','midlifeOS_v27']){
      try{const old=JSON.parse(localStorage.getItem(k)||'null');if(old)return{...DEFAULT_STATE,...old,schemaVersion:VERSION,activeTab:'today',entries:Array.isArray(old.entries)?old.entries.map(normalize):[]}}catch{}
    }
    return structuredClone(DEFAULT_STATE);
  }

  function mapLegacyTab(tab){
    return tab==='map'?'patterns':tab==='appointment'?'doctor':tab==='me'?'today':tab==='checkin'?'today':(['today','patterns','toolkit','doctor'].includes(tab)?tab:'today');
  }

  function persist(){localStorage.setItem(KEY,JSON.stringify({...state,schemaVersion:VERSION}))}
  function latestToday(){return state.entries.filter(e=>e.type==='checkin'&&localKey(e.ts)===localKey(new Date())).sort((a,b)=>new Date(b.ts)-new Date(a.ts))[0]}
  function score(e){if(!e||e.type!=='checkin')return null;let v=100+(e.energy-3)*7;for(const x of Object.values(e.symptoms||{}))v-=x==='L'?5:x==='M'?10:15;return clamp(Math.round(v),18,100)}
  function intNum(v){return v==='L'?1:v==='S'?3:2}
  function daysCaptured(){return new Set(state.entries.filter(e=>e.type==='checkin').map(e=>localKey(e.ts))).size}
  function cycleLabel(v){return T(v||'none')}

  function header(){
    return `<header class="luna-header"><div class="brand-lockup"><span class="moon-mark" aria-hidden="true"></span><strong>LUNA</strong></div><div class="lang-toggle"><button data-lang="de" class="${state.lang==='de'?'active':''}">DE</button><span>|</span><button data-lang="en" class="${state.lang==='en'?'active':''}">EN</button></div></header>`;
  }

  function nav(){
    const items=[['today','☀️',T('today')],['patterns','📈',T('patterns')],['checkin','+',T('checkin')],['toolkit','🌿',T('toolkit')],['doctor','📋',T('doctor')]];
    navEl.innerHTML=`<div class="nav-inner">${items.map(([tab,ic,label])=>tab==='checkin'?`<button id="btn-main-checkin" class="nav-main" aria-label="${label}">${ic}</button>`:`<button class="nav-item ${state.activeTab===tab?'active':''}" data-tab="${tab}"><span class="nav-icon">${ic}</span><span>${label}</span></button>`).join('')}</div>`;
  }

  function ring(e){
    const s=score(e),open=s==null,r=78,c=2*Math.PI*r,offset=open?c:c*(1-s/100);
    const focus=open?'':focusText(s);
    return `<section class="hero-zone">
      <button class="balance-ring ${open?'open':'done'}" id="heroRing" aria-label="${open?T('startDay'):`${s}%`}">
        <svg viewBox="0 0 200 200" aria-hidden="true">
          <defs><linearGradient id="lunaRingGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5B8E7D"/><stop offset="70%" stop-color="#2B2A4A"/><stop offset="100%" stop-color="#F2C57C"/></linearGradient></defs>
          <circle class="ring-track" cx="100" cy="100" r="78"/>
          ${open?'':`<circle class="ring-progress" cx="100" cy="100" r="78" stroke-dasharray="${c}" style="--ring-offset:${offset};--ring-circ:${c}"/>`}
        </svg>
        <div class="ring-copy">${open?`<span>${T('balance')}</span><strong>${T('startDay')}</strong><i>+</i>`:`<strong class="score">${s}%</strong><span>${T('todayFocus')}</span>`}</div>
        ${open?'':`<span class="ring-glint" style="--angle:${-90+s*3.6}deg" aria-hidden="true"></span>`}
      </button>
      ${open?'':`<p class="focus-line">${focus}</p>`}
      ${levelBadge()}
      ${statusPills(e)}
    </section>`;
  }

  function focusText(s){return s>=82?T('focusGood'):s>=60?T('focusMedium'):T('focusLow')}

  function levelBadge(){
    const n=daysCaptured();
    if(!n)return `<div class="level-badge muted">✨ ${T('level')} · ${T('levelName')}</div>`;
    return `<div class="level-badge">✨ ${T('level')} · ${Math.min(n,7)}/7 ${T('daysCaptured')} · ${T('patternActive')}</div>`;
  }

  function statusPills(e){
    if(!e)return'';
    const signalCount=Object.keys(e.symptoms||{}).length;
    return `<div class="status-pills"><span>⚡️ <b>${T('energy')} ${e.energy}/5</b></span><span>💓 <b>${signalCount} ${T('signals')}</b></span><span>🩸 <b>${T('cycle')} ${cycleLabel(e.bleeding)}</b></span></div>`;
  }

  function insightText(){
    const recent=state.entries.filter(e=>e.type==='checkin').sort((a,b)=>new Date(b.ts)-new Date(a.ts)).slice(0,5);
    if(!recent.length)return T('impulseDefault');
    const counts={};
    for(const e of recent)for(const id of Object.keys(e.symptoms||{}))counts[id]=(counts[id]||0)+1;
    const top=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0];
    if(top==='hot')return T('insightHot');
    if(top==='brain')return T('insightBrain');
    if(top==='sleepQualitySignal')return T('insightSleep');
    return T('impulseDefault');
  }

  function today(){
    const e=latestToday();
    return `<div class="screen today-screen">${header()}${toastHtml()}${ring(e)}<section class="action-dock"><button class="action-card" id="openBreath"><span class="action-emoji">🌬</span><strong>${T('breathReset')}</strong><small>${T('breathResetSub')}</small></button><button class="action-card" id="openQuick"><span class="action-emoji">⚡️</span><strong>${T('acuteSOS')}</strong><small>${T('acuteSOSSub')}</small></button></section><section class="insight-card"><div><span>${T('impulse')}</span><p>${insightText()}</p></div></section></div>`;
  }

  function chartSvg(days=30){
    const start=new Date();start.setHours(0,0,0,0);start.setDate(start.getDate()-days+1);
    const entries=state.entries.filter(e=>e.type==='checkin'&&new Date(e.ts)>=start).sort((a,b)=>new Date(a.ts)-new Date(b.ts));
    const by={};for(const e of entries)by[localKey(e.ts)]=e;
    const vals=Object.values(by);if(vals.length<2)return `<div class="empty-state">${T('notEnough')}</div>`;
    const w=340,h=150,p=18;const pts=vals.map((e,i)=>({x:p+i*((w-2*p)/Math.max(1,vals.length-1)),y:p+(100-score(e))*(h-2*p)/82}));
    const d=pts.map((p,i)=>`${i?'L':'M'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    return `<svg class="pattern-chart" viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FA98C" stop-opacity=".24"/><stop offset="1" stop-color="#8FA98C" stop-opacity="0"/></linearGradient></defs><path class="chart-area" d="${d} L ${pts.at(-1).x} ${h-p} L ${pts[0].x} ${h-p} Z"/><path class="chart-line" d="${d}"/>${pts.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="3.5"/>`).join('')}</svg>`;
  }

  function correlationCards(){
    const checks=state.entries.filter(e=>e.type==='checkin');
    if(checks.length<4)return `<div class="empty-state">${T('notEnough')}</div>`;
    const stats={};
    for(const e of checks)for(const [id,v] of Object.entries(e.symptoms||{})){stats[id]??={count:0,severity:0};stats[id].count++;stats[id].severity+=intNum(v)}
    const top=Object.entries(stats).sort((a,b)=>b[1].count-a[1].count).slice(0,2);
    if(!top.length)return `<div class="insight-row"><span>✨</span><p>${state.lang==='de'?'An symptomarmen Tagen bleibt deine Balance sichtbar stabiler. Sammle weiter Daten, damit LUNA Zeitfenster erkennen kann.':'On lower-symptom days your balance stays visibly steadier. Keep tracking so LUNA can detect timing patterns.'}</p></div>`;
    return top.map(([id,s])=>`<div class="insight-row"><span>${id==='hot'?'🔥':id==='brain'?'🌫':id==='sleepQualitySignal'?'🌙':'✨'}</span><p>${state.lang==='de'?`${T(id)} taucht in ${Math.round(s.count/checks.length*100)} % deiner erfassten Tage auf. Die mittlere Stärke liegt bei ${(s.severity/s.count).toFixed(1)} von 3.`:`${T(id)} appears on ${Math.round(s.count/checks.length*100)}% of tracked days. Average intensity is ${(s.severity/s.count).toFixed(1)} of 3.`}</p></div>`).join('');
  }

  function patterns(){return `<div class="screen sub-screen">${header()}<section class="page-head"><span>${T('patterns')}</span><h1>${T('patternTitle')}</h1><p>${T('patternSub')}</p></section><section class="glass-card"><div class="section-title"><span>${T('wellbeing')}</span><b>30</b></div>${chartSvg(30)}</section><section class="glass-card"><div class="section-title"><span>${T('correlations')}</span><b>✦</b></div><div class="insight-list">${correlationCards()}</div></section></div>`}

  function toolkit(){
    return `<div class="screen sub-screen">${header()}<section class="page-head"><span>${T('toolkit')}</span><h1>${T('toolkitTitle')}</h1><p>${T('toolkitSub')}</p></section><section class="tool-grid"><button class="tool-card" data-breath="46"><span>🌬</span><strong>${T('calm46')}</strong><small>${T('calm46Sub')}</small></button><button class="tool-card" data-breath="444"><span>⚡️</span><strong>${T('focus444')}</strong><small>${T('focus444Sub')}</small></button><button class="tool-card wide" data-guide="night"><span>🌙</span><strong>${T('nightSOS')}</strong><small>${T('nightSOSSub')}</small></button><button class="tool-card wide" data-guide="cool"><span>🧊</span><strong>${T('coolPoints')}</strong><small>${T('coolPointsSub')}</small></button></section></div>`;
  }

  function doctor(){
    const checks=state.entries.filter(e=>e.type==='checkin').sort((a,b)=>new Date(b.ts)-new Date(a.ts)).slice(0,state.reportRange||30);
    const scores=checks.map(score).filter(v=>v!=null);
    const avg=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):'–';
    const stats={};for(const e of checks)for(const id of Object.keys(e.symptoms||{}))stats[id]=(stats[id]||0)+1;
    const common=Object.entries(stats).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id])=>T(id)).join(' · ')||'–';
    const acuteCount=state.entries.filter(e=>e.type==='acute').length;
    return `<div class="screen sub-screen doctor-screen">${header()}<section class="page-head"><span>${T('doctor')}</span><h1>${T('doctorTitle')}</h1><p>${T('doctorSub')}</p></section><section class="glass-card doctor-summary"><div><span>${T('avgBalance')}</span><strong>${avg}${avg==='–'?'':'%'}</strong></div><div><span>${T('commonSignals')}</span><strong>${common}</strong></div><div><span>${T('acuteEvents')}</span><strong>${acuteCount}</strong></div></section><section class="glass-card"><label class="note-label" for="doctorNote">${T('notes')}</label><textarea id="doctorNote" placeholder="${T('notesPlaceholder')}">${state.doctorNote||''}</textarea></section><button class="primary-btn" id="printReport">${T('print')}</button><p class="medical-footnote">${state.lang==='de'?'LUNA unterstützt bei Mustererkennung und Vorbereitung, ersetzt aber keine medizinische Diagnose. Neue oder starke Beschwerden bitte ärztlich abklären.':'LUNA supports pattern recognition and appointment preparation, but does not replace medical diagnosis. New or severe symptoms should be medically assessed.'}</p></div>`;
  }

  function checkin(){
    return `<div class="screen checkin-screen"><header class="checkin-head"><div><span>${T('checkin')}</span><h1>${T('dailyTitle')}</h1><p>${T('dailySub')}</p></div><button id="cancelCheck" class="close-btn" aria-label="${T('close')}">×</button></header><section class="glass-card check-card"><h2>${T('energyQ')}</h2><div class="energy-segments">${[1,2,3,4,5].map(n=>`<button data-energy="${n}" class="${draft.energy===n?'active':''}">${n}</button>`).join('')}</div></section><section class="glass-card check-card"><h2>${T('symptomsToday')}</h2><div class="symptom-grid">${CORE.map(symptomCard).join('')}</div></section><section class="glass-card check-card bleeding-card"><h2>${T('bleeding')}</h2><div class="bleed-row">${['none','spotting','light','medium','strong'].map(v=>`<button data-bleeding="${v}" class="${draft.bleeding===v?'active':''}">${T(v)}</button>`).join('')}</div><div class="hrt-row"><span>${T('hrt')}</span><button id="hrt" class="switch ${draft.hrtTaken?'on':''}" aria-pressed="${draft.hrtTaken}"><i></i></button></div></section><div class="check-save"><button id="saveCheck" class="primary-btn">${T('finish')}</button></div></div>`;
  }

  function symptomCard(id){
    const v=draft.symptoms[id],level=v==='L'?1:v==='M'?2:v==='S'?3:0;
    const dots=[1,2,3].map(n=>n<=level?'●':'○').join(' ');
    return `<button class="symptom-card level-${level}" data-sym="${id}"><span>${T(id)}</span><b>${dots}</b></button>`;
  }

  function render(){
    document.documentElement.lang=state.lang;
    root.innerHTML=state.activeTab==='today'?today():state.activeTab==='patterns'?patterns():state.activeTab==='toolkit'?toolkit():state.activeTab==='doctor'?doctor():checkin();
    nav();bind();renderOverlay();renderOnboarding();
  }

  function startCheck(){
    const e=latestToday();
    draft=e?{energy:e.energy,symptoms:{...e.symptoms},bleeding:e.bleeding,hrtTaken:e.hrtTaken}:{energy:0,symptoms:{},bleeding:'',hrtTaken:false};
    editingId=e?.id||null;state.activeTab='checkin';persist();render();window.scrollTo({top:0,behavior:'smooth'});
  }

  function saveCheck(){
    if(!draft.energy)draft.energy=3;
    const old=editingId?state.entries.find(e=>e.id===editingId):null;
    const entry=normalize({id:editingId||uid(),ts:old?.ts||new Date(),type:'checkin',...draft});
    if(editingId)state.entries=state.entries.map(e=>e.id===editingId?entry:e);else state.entries.push(entry);
    state.activeTab='today';persist();haptic([20,40,20]);editingId=null;draft={energy:0,symptoms:{},bleeding:'',hrtTaken:false};render();window.scrollTo({top:0,behavior:'smooth'});
  }

  function openQuick(){modal={type:'quick',symptom:'hot',intensity:'M'};renderOverlay()}
  function openBreath(mode='46'){breathMode=mode;modal={type:'breath'};renderOverlay();setTimeout(startBreathTimer,80)}
  function openGuide(kind){modal={type:'guide',kind};renderOverlay()}
  function closeModal(){clearInterval(breathTimer);breathTimer=null;modal=null;overlay.innerHTML=''}

  function renderOverlay(){
    if(!modal){overlay.innerHTML='';return}
    if(modal.type==='quick'){
      const names={hot:`🔥 ${T('hot')}`,palpitations:`💓 ${state.lang==='de'?'Herzrasen / Unruhe':'Palpitations / restlessness'}`,brain:`🌫 ${T('brain')}`,pain:`💥 ${T('pain')}`};
      overlay.innerHTML=`<div class="sheet-backdrop"><section class="bottom-sheet"><div class="grabber"></div><header><div><h2>${T('quickTitle')}</h2><p>${T('quickSub')}</p></div><button class="close-btn" id="closeModal">×</button></header><div class="acute-grid">${ACUTE.map(id=>`<button data-acute="${id}" class="${modal.symptom===id?'active':''}">${names[id]}</button>`).join('')}</div><div class="intensity-row">${[['L','mild'],['M','noticeable'],['S','heavy']].map(([v,k])=>`<button data-intensity="${v}" class="${modal.intensity===v?'active':''}">${T(k)}</button>`).join('')}</div><button id="saveQuick" class="primary-btn">${T('saveQuick')}</button></section></div>`;
    }else if(modal.type==='breath'){
      overlay.innerHTML=`<div class="breath-overlay"><button class="breath-close" id="closeModal">×</button><div class="breath-visual"><div class="breath-orb" id="breathOrb"></div><span id="breathModeLabel">${breathMode==='46'?T('calm46'):T('focus444')}</span><strong id="breathPhase">${T('breatheIn')}</strong><b id="breathCount">60</b></div></div>`;
    }else{
      const night=modal.kind==='night';
      const steps=night?[T('night1'),T('night2'),T('night3')]:[T('cool1'),T('cool2'),T('cool3')];
      overlay.innerHTML=`<div class="sheet-backdrop"><section class="bottom-sheet guide-sheet"><div class="grabber"></div><header><div><h2>${night?T('nightSOS'):T('coolPoints')}</h2><p>${night?T('nightSOSSub'):T('coolPointsSub')}</p></div><button class="close-btn" id="closeModal">×</button></header><ol>${steps.map(s=>`<li>${s}</li>`).join('')}</ol></section></div>`;
    }
    bindOverlay();
  }

  function bindOverlay(){
    overlay.querySelector('#closeModal')?.addEventListener('click',closeModal);
    overlay.querySelector('.sheet-backdrop')?.addEventListener('click',e=>{if(e.target.classList.contains('sheet-backdrop'))closeModal()});
    overlay.querySelectorAll('[data-acute]').forEach(b=>b.onclick=()=>{modal.symptom=b.dataset.acute;haptic(12);renderOverlay()});
    overlay.querySelectorAll('[data-intensity]').forEach(b=>b.onclick=()=>{modal.intensity=b.dataset.intensity;haptic(12);renderOverlay()});
    overlay.querySelector('#saveQuick')?.addEventListener('click',saveQuick);
  }

  function saveQuick(){
    const symptom=modal.symptom,intensity=modal.intensity;
    state.entries.push(normalize({id:uid(),ts:new Date(),type:'acute',acuteSymptom:symptom,intensity}));persist();
    const tip=T(symptom==='hot'?'tipHot':symptom==='palpitations'?'tipPalp':symptom==='brain'?'tipBrain':'tipPain');
    closeModal();showToast(tip);state.activeTab='today';persist();render();window.scrollTo({top:0,behavior:'smooth'});haptic([14,30,14]);
  }

  function showToast(message){
    toast=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast=null;if(state.activeTab==='today')render()},4000);
  }
  function toastHtml(){return toast?`<aside class="toast-card"><button id="closeToast">×</button><strong>SOS</strong><p>${toast}</p></aside>`:''}

  function startBreathTimer(){
    state.entries.push(normalize({id:uid(),ts:new Date(),type:'tool',tool:breathMode==='46'?'breath46':'breath444'}));persist();
    breathEnd=Date.now()+60000;lastBreathPhase='';
    const tick=()=>{
      const left=Math.max(0,Math.ceil((breathEnd-Date.now())/1000));
      let phase='',scale='';
      if(breathMode==='46'){
        const pos=(60-left)%10;phase=pos<4?'in':'out';scale=phase==='in'?'1.18':'.72';
      }else{
        const pos=(60-left)%12;phase=pos<4?'in':pos<8?'hold':'out';scale=phase==='in'?'1.15':phase==='hold'?'1.15':'.72';
      }
      const phaseText=left===0?T('done'):T(phase==='in'?'breatheIn':phase==='out'?'breatheOut':'hold');
      const el=overlay.querySelector('#breathPhase'),orb=overlay.querySelector('#breathOrb'),count=overlay.querySelector('#breathCount');
      if(el)el.textContent=phaseText;if(count)count.textContent=String(left);if(orb){orb.style.setProperty('--breath-scale',scale);orb.dataset.phase=phase}
      if(phase!==lastBreathPhase&&left>0){lastBreathPhase=phase;haptic(25)}
      if(left<=0){clearInterval(breathTimer);breathTimer=null;haptic([20,40,20])}
    };
    tick();breathTimer=setInterval(tick,250);
  }

  function bind(){
    document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;persist();render()});
    document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{state.activeTab=b.dataset.tab;persist();render();window.scrollTo({top:0,behavior:'smooth'})});
    document.getElementById('btn-main-checkin')?.addEventListener('click',startCheck);
    document.getElementById('heroRing')?.addEventListener('click',startCheck);
    document.getElementById('openBreath')?.addEventListener('click',()=>openBreath('46'));
    document.getElementById('openQuick')?.addEventListener('click',openQuick);
    document.getElementById('closeToast')?.addEventListener('click',()=>{toast=null;clearTimeout(toastTimer);render()});
    document.querySelectorAll('[data-breath]').forEach(b=>b.onclick=()=>openBreath(b.dataset.breath));
    document.querySelectorAll('[data-guide]').forEach(b=>b.onclick=()=>openGuide(b.dataset.guide));
    document.getElementById('cancelCheck')?.addEventListener('click',()=>{editingId=null;draft={energy:0,symptoms:{},bleeding:'',hrtTaken:false};state.activeTab='today';persist();render()});
    document.querySelectorAll('[data-energy]').forEach(b=>b.onclick=()=>{draft.energy=+b.dataset.energy;haptic(10);render()});
    document.querySelectorAll('[data-sym]').forEach(b=>b.onclick=()=>{const id=b.dataset.sym,v=draft.symptoms[id];draft.symptoms[id]=!v?'L':v==='L'?'M':v==='M'?'S':undefined;if(!draft.symptoms[id])delete draft.symptoms[id];haptic(10);render()});
    document.querySelectorAll('[data-bleeding]').forEach(b=>b.onclick=()=>{draft.bleeding=b.dataset.bleeding;haptic(10);render()});
    document.getElementById('hrt')?.addEventListener('click',()=>{draft.hrtTaken=!draft.hrtTaken;haptic(10);render()});
    document.getElementById('saveCheck')?.addEventListener('click',saveCheck);
    document.getElementById('doctorNote')?.addEventListener('input',e=>{state.doctorNote=e.target.value;persist()});
    document.getElementById('printReport')?.addEventListener('click',()=>window.print());
  }

  function renderOnboarding(){
    const el=document.getElementById('onboarding');
    if(localStorage.getItem(ONBOARD)==='1'){el.hidden=true;el.innerHTML='';return}
    el.hidden=false;
    el.innerHTML=`<div class="welcome-card"><span class="welcome-moon"></span><small>LUNA</small><h1>${state.lang==='de'?'Dein Midlife-System verstehen. Im Alltag handeln.':'Understand your midlife system. Act in daily life.'}</h1><p>${state.lang==='de'?'10 Sekunden Tracking, Sofort-Hilfe und Muster, die mit der Zeit wirklich nützlich werden.':'10-second tracking, immediate support and patterns that become useful over time.'}</p><button id="welcomeStart" class="primary-btn">${state.lang==='de'?'LUNA starten':'Start LUNA'}</button></div>`;
    el.querySelector('#welcomeStart').onclick=()=>{localStorage.setItem(ONBOARD,'1');el.hidden=true;el.innerHTML=''};
  }

  render();
})();
