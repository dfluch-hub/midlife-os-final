(()=>{
  'use strict';
  const root=document.getElementById('view-root');
  if(!root)return;
  const STORAGE_KEY='luna_v32';
  let scheduled=false;

  function todayKey(value=new Date()){
    const d=new Date(value);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function state(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')||null}catch{return null}
  }

  function latestTodayCheckin(){
    const entries=state()?.entries;
    if(!Array.isArray(entries))return null;
    return entries.filter(e=>e?.type==='checkin'&&todayKey(e.ts)===todayKey()).sort((a,b)=>new Date(b.ts)-new Date(a.ts))[0]||null;
  }

  function localBleeding(v,lang){
    const de={none:'Keine',spotting:'Spotting',light:'Leicht',medium:'Mittel',strong:'Stark'};
    const en={none:'None',spotting:'Spotting',light:'Light',medium:'Medium',strong:'Strong'};
    return (lang==='en'?en:de)[v]||'–';
  }

  function ensureRingGradient(){
    const svg=root.querySelector('.hero-ring svg');
    if(!svg)return;
    let defs=svg.querySelector('defs');
    if(!defs){defs=document.createElementNS('http://www.w3.org/2000/svg','defs');svg.prepend(defs)}
    let gradient=svg.querySelector('#lunaRingGradient');
    if(!gradient){
      gradient=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
      gradient.id='lunaRingGradient';
      defs.appendChild(gradient);
    }
    gradient.setAttribute('x1','0%');
    gradient.setAttribute('y1','0%');
    gradient.setAttribute('x2','100%');
    gradient.setAttribute('y2','100%');
    const wanted='<stop offset="0%" stop-color="#5B8E7D"/><stop offset="70%" stop-color="#2B2A4A"/><stop offset="100%" stop-color="#F2C57C"/>';
    if(gradient.innerHTML!==wanted)gradient.innerHTML=wanted;
    const progress=svg.querySelector('.ring-progress');
    if(progress&&progress.getAttribute('stroke')!=='url(#lunaRingGradient)')progress.setAttribute('stroke','url(#lunaRingGradient)');
  }

  function fixStreak(){
    const badge=root.querySelector('.streak-badge');
    if(!badge)return;
    const match=badge.textContent.match(/\d+/);
    if(!match)return;
    const count=Number(match[0]);
    const lang=state()?.lang||document.documentElement.lang||'de';
    const next=lang==='en'
      ?`🔥 ${count} ${count===1?'day':'days'} in rhythm`
      :`🔥 ${count} ${count===1?'Tag':'Tage'} im Rhythmus`;
    if(badge.textContent!==next)badge.textContent=next;
  }

  function rebuildPills(){
    const ring=root.querySelector('.hero-ring');
    if(!ring)return;
    let pills=root.querySelector('.day-quick-pills');
    const entry=latestTodayCheckin();

    if(!entry){
      if(pills){
        if(!pills.hidden)pills.hidden=true;
        pills.classList.add('is-empty');
        if(pills.childElementCount)pills.replaceChildren();
      }
      return;
    }

    if(!pills){
      pills=document.createElement('div');
      pills.className='day-quick-pills';
      const streak=root.querySelector('.streak-badge');
      (streak?.parentElement||ring.parentElement)?.appendChild(pills);
    }

    const lang=state()?.lang||document.documentElement.lang||'de';
    const energy=Math.max(1,Math.min(5,Number(entry.energy)||1));
    const energyPct=Math.round((energy/5)*100);
    const signals=Object.keys(entry.symptoms||{}).filter(k=>entry.symptoms?.[k]).length;
    const bleeding=localBleeding(entry.bleeding,lang);
    const labels=lang==='en'
      ?[['Energy',`${energyPct}%`],['Signals',String(signals)],['Bleeding',bleeding]]
      :[['Energie',`${energyPct}%`],['Signale',String(signals)],['Blutung',bleeding]];
    const html=labels.map(([label,value],i)=>`<div class="day-quick-pill ${i===2?'bleeding':''}"><span class="pill-dot"></span><span>${label}</span><b>${value}</b></div>`).join('');

    if(pills.hidden)pills.hidden=false;
    pills.classList.remove('is-empty');
    if(pills.innerHTML!==html)pills.innerHTML=html;
  }

  function repair(){
    scheduled=false;
    ensureRingGradient();
    fixStreak();
    rebuildPills();
  }

  function schedule(){
    if(scheduled)return;
    scheduled=true;
    requestAnimationFrame(repair);
  }

  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  schedule();
})();
