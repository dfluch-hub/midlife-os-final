(()=>{"use strict";

const SOURCE='./app.js?v=29';
const CURRENT_KEY='luna_v29';

function patchSource(source){
  let next=source;
  next=next.replace(
    'const energy=e?.energy>3?clamp(e.energy,1,5):e?.energy===3?5:e?.energy===2?3:e?.energy===1?1:0;',
    'const energy=clamp(e?.energy,0,5);'
  );
  next=next.replaceAll('kurzer oder unruhigerem Schlaf','kurzem oder unruhigem Schlaf');
  next=next.replaceAll('kurzer oder unruhigem Schlaf','kurzem oder unruhigem Schlaf');
  return next;
}

function lang(){
  const active=document.querySelector('.lang button.active');
  if(active?.getAttribute('data-lang')==='en')return'en';
  if(active?.getAttribute('data-lang')==='de')return'de';
  return document.documentElement.lang?.toLowerCase().startsWith('en')?'en':'de';
}

function text(de,en){return lang()==='en'?en:de}

function ensureMedicalWarning(){
  const root=document.getElementById('view-root');
  if(!root)return;
  const existing=root.querySelector('.medical-safety-note');
  if(existing){
    const copy=existing.querySelector('p');
    if(copy)copy.textContent=text('Blutungen nach 12 Monaten ohne Periode sollten ärztlich abgeklärt werden.','Bleeding after 12 months without a period should be medically evaluated.');
    return;
  }
  const candidates=[...root.querySelectorAll('p,div,section')]
    .filter(el=>{
      const value=(el.textContent||'').trim();
      return value.startsWith('LUNA fasst dokumentierte Beobachtungen zusammen.')||value.startsWith('LUNA summarizes documented observations.');
    })
    .sort((a,b)=>(a.textContent||'').length-(b.textContent||'').length);
  const anchor=candidates[0];
  if(!anchor)return;
  const note=document.createElement('div');
  note.className='medical-safety-note';
  note.setAttribute('role','note');
  note.innerHTML=`<span aria-hidden="true">!</span><p>${text('Blutungen nach 12 Monaten ohne Periode sollten ärztlich abgeklärt werden.','Bleeding after 12 months without a period should be medically evaluated.')}</p>`;
  anchor.insertAdjacentElement('afterend',note);
}

function ensureMediumLegend(){
  document.querySelectorAll('.strip-legend').forEach(legend=>{
    const existing=legend.querySelector('.bleed-dot.medium')?.closest('span');
    if(existing){
      const dot=existing.querySelector('.bleed-dot.medium');
      existing.textContent='';
      if(dot)existing.append(dot);
      existing.append(document.createTextNode(text('Mittel','Medium')));
      return;
    }
    const item=document.createElement('span');
    item.innerHTML=`<i class="bleed-dot medium" aria-hidden="true"></i>${text('Mittel','Medium')}`;
    const strong=legend.querySelector('.bleed-dot.strong')?.closest('span');
    if(strong)legend.insertBefore(item,strong);else legend.append(item);
  });
}

function refineRing(){
  const scoreNode=document.querySelector('.ring-copy strong');
  const ring=document.querySelector('.ring-value');
  if(!scoreNode||!ring)return;
  const match=(scoreNode.textContent||'').match(/\d+/);
  if(!match)return;
  const value=Number(match[0]);
  const stroke=value>=75?'var(--sage)':value>=55?'var(--amber)':'var(--warm)';
  ring.style.stroke=stroke;
  const dot=document.querySelector('.ring-copy .pulse-dot');
  if(dot){
    dot.classList.remove('sage','amber');
    if(value>=75)dot.classList.add('sage');
    else if(value>=55)dot.classList.add('amber');
  }
}

function clearAllLunaStorage(){
  try{
    const keys=[];
    for(let i=0;i<localStorage.length;i++)keys.push(localStorage.key(i));
    keys.filter(Boolean).forEach(key=>{
      if(/^luna/i.test(key)||/^midlifeos/i.test(key))localStorage.removeItem(key);
    });
    localStorage.removeItem(CURRENT_KEY);
  }catch{}
}

let deleteAllArmed=false;
function installDeleteGuard(){
  document.addEventListener('click',event=>{
    const button=event.target instanceof Element?event.target.closest('button'):null;
    if(!button)return;
    const label=(button.textContent||'').trim();
    if(label.includes('Alle lokalen Daten löschen')||label.includes('Delete all local data')){
      deleteAllArmed=true;
      return;
    }
    if(deleteAllArmed&&(label==='Abbrechen'||label==='Cancel')){
      deleteAllArmed=false;
      return;
    }
    if(deleteAllArmed&&(label==='Löschen'||label==='Delete')){
      deleteAllArmed=false;
      setTimeout(()=>{
        clearAllLunaStorage();
        location.reload();
      },80);
    }
  },true);
}

function enhance(){
  const apply=()=>{
    document.documentElement.dataset.lunaRelease='30';
    ensureMedicalWarning();
    ensureMediumLegend();
    refineRing();
  };
  installDeleteGuard();
  apply();
  const observer=new MutationObserver(apply);
  observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class']});
}

async function boot(){
  try{
    const response=await fetch(SOURCE,{cache:'no-store'});
    if(!response.ok)throw new Error(`LUNA source ${response.status}`);
    const source=patchSource(await response.text());
    const blob=new Blob([source+'\n//# sourceURL=luna-app-v30.js'],{type:'text/javascript'});
    const script=document.createElement('script');
    const url=URL.createObjectURL(blob);
    script.src=url;
    script.onload=()=>{URL.revokeObjectURL(url);enhance()};
    script.onerror=()=>{URL.revokeObjectURL(url)};
    document.head.append(script);
  }catch(error){
    console.error('LUNA v30 bootstrap failed',error);
    const fallback=document.createElement('script');
    fallback.src=SOURCE;
    fallback.onload=enhance;
    document.head.append(fallback);
  }
}

boot();
})();
