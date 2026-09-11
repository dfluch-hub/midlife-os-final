(()=>{
  'use strict';
  const root=document.getElementById('view-root');
  const overlay=document.getElementById('overlay-root');
  if(!root||!overlay)return;

  function bodyWeather(){
    const scoreText=root.querySelector('.ring-copy .score')?.textContent||'';
    const score=parseInt(scoreText,10);
    if(Number.isNaN(score))return document.documentElement.lang==='en'?'Ready for today':'Bereit für den Tag';
    if(score>=82)return document.documentElement.lang==='en'?'Steady & focused':'Stabil & fokussiert';
    if(score>=65)return document.documentElement.lang==='en'?'Sensitive but steady':'Sensibel, aber tragfähig';
    return document.documentElement.lang==='en'?'Recovery needed':'Reizbar & Erholungsbedarf';
  }

  function tidyToday(){
    const today=root.querySelector('.today-screen');
    if(!today)return;
    const dock=today.querySelector('.action-dock');
    if(dock){
      const breath=dock.querySelector('#openBreath');
      if(breath)breath.remove();
      const quick=dock.querySelector('#openQuick');
      if(quick){
        quick.classList.add('acute-wide');
        quick.querySelector('strong')?.replaceChildren(document.createTextNode(document.documentElement.lang==='en'?'Log acute signal (3 sec.)':'Akut-Signal erfassen (3 Sek.)'));
      }
      dock.classList.add('single-action');
    }
    const ring=today.querySelector('.balance-ring');
    const ringCopy=today.querySelector('.ring-copy');
    if(ring&&ringCopy&&!ring.classList.contains('open')){
      let weather=ringCopy.querySelector('.body-weather');
      if(!weather){weather=document.createElement('em');weather.className='body-weather';ringCopy.appendChild(weather)}
      weather.textContent=bodyWeather();
      const label=ringCopy.querySelector('span');
      if(label)label.textContent=document.documentElement.lang==='en'?'Body weather':'Körper-Wetterlage';
    }
    if(ring?.classList.contains('open')){
      const badge=today.querySelector('.level-badge');
      if(badge)badge.style.display='none';
    }
    today.querySelectorAll('.toast-card').forEach(x=>x.remove());
  }

  function inlineSos(){
    const sheet=overlay.querySelector('.bottom-sheet');
    if(!sheet||!overlay.querySelector('[data-acute]'))return;
    sheet.classList.add('quick-sheet','safe-modal');
    let tip=sheet.querySelector('.inline-sos-tip');
    if(!tip){
      tip=document.createElement('div');
      tip.className='inline-sos-tip';
      const levels=sheet.querySelector('.intensity-row');
      levels?.before(tip);
    }
    const active=sheet.querySelector('[data-acute].active')?.dataset.acute||'hot';
    const de=document.documentElement.lang!=='en';
    const tips={
      hot:de?'Handgelenke oder Nacken angenehm kühlen und ruhig ausatmen.':'Cool wrists or neck comfortably and exhale slowly.',
      palpitations:de?'Schultern lösen, hinsetzen und länger aus- als einatmen.':'Drop your shoulders, sit down and lengthen the exhale.',
      brain:de?'Ein Glas Wasser, kurze Reizpause, dann nur eine nächste Aufgabe.':'Drink water, reduce input briefly, then choose one next task.',
      pain:de?'Position wechseln, entlasten und für einen Moment ruhig ausatmen.':'Change position, unload the area and breathe slowly for a moment.'
    };
    tip.innerHTML=`<b>SOS</b><span>${tips[active]}</span>`;
    const save=sheet.querySelector('#saveQuick');
    if(save)save.textContent=de?'Speichern & Schließen':'Save & close';
  }

  function harmonizeCheckin(){
    const c=root.querySelector('.checkin-screen');
    if(!c)return;
    c.classList.add('safe-modal');
    const head=c.querySelector('.checkin-head');
    if(head)head.classList.add('focus-header');
    const close=c.querySelector('#cancelCheck');
    if(close)close.id='btn-close-checkin';
  }

  function run(){tidyToday();harmonizeCheckin();inlineSos()}
  new MutationObserver(()=>queueMicrotask(run)).observe(document.body,{childList:true,subtree:true});
  run();
})();