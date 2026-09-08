(()=>{"use strict";

const SOURCE='./app.js?v=31';
const CURRENT_KEY='luna_v29';

function patchSource(source){
  let next=source;
  next=next.replace(
    'const energy=e?.energy>3?clamp(e.energy,1,5):e?.energy===3?5:e?.energy===2?3:e?.energy===1?1:0;',
    'const energy=clamp(e?.energy,0,5);'
  );
  next=next.replaceAll('kurzer oder unruhigerem Schlaf','kurzem oder unruhigem Schlaf');
  next=next.replaceAll('kurzer oder unruhigem Schlaf','kurzem oder unruhigem Schlaf');
  next=next.replace(
    '${[30,60,90].map(n=>`<button data-report-range="${n}" class="${S().reportRange===n?"active":""}">${T(`days${n}`)}</button>`).join("")}',
    '${[[30,"days30"],[60,"days60"],[90,"days90"]].map(([n,k])=>`<button data-report-range="${n}" class="${S().reportRange===n?"active":""}">${T(k)}</button>`).join("")}'
  );
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
  const desired=text('Blutungen nach 12 Monaten ohne Periode sollten ärztlich abgeklärt werden.','Bleeding after 12 months without a period should be medically evaluated.');
  const existing=root.querySelector('.medical-safety-note');
  if(existing){const copy=existing.querySelector('p');if(copy&&copy.textContent!==desired)copy.textContent=desired;return;}
  const candidates=[...root.querySelectorAll('p,div,section')].filter(el=>{const value=(el.textContent||'').trim();return value.startsWith('LUNA fasst dokumentierte Beobachtungen zusammen.')||value.startsWith('LUNA summarizes documented observations.');}).sort((a,b)=>(a.textContent||'').length-(b.textContent||'').length);
  const anchor=candidates[0];if(!anchor)return;
  const note=document.createElement('div');note.className='medical-safety-note';note.setAttribute('role','note');note.innerHTML=`<span aria-hidden="true">!</span><p>${desired}</p>`;anchor.insertAdjacentElement('afterend',note);
}

function ensureMediumLegend(){
  document.querySelectorAll('.strip-legend').forEach(legend=>{
    const desired=text('Mittel','Medium');
    const existing=legend.querySelector('.bleed-dot.medium')?.closest('span');
    if(existing){const nodes=[...existing.childNodes].filter(node=>node.nodeType===Node.TEXT_NODE);const current=nodes.map(node=>node.textContent||'').join('').trim();if(current!==desired){nodes.forEach(node=>node.remove());existing.append(document.createTextNode(desired));}return;}
    const item=document.createElement('span');item.innerHTML=`<i class="bleed-dot medium" aria-hidden="true"></i>${desired}`;const strong=legend.querySelector('.bleed-dot.strong')?.closest('span');if(strong)legend.insertBefore(item,strong);else legend.append(item);
  });
}

function ensureReportLabels(){
  document.querySelectorAll('[data-report-range]').forEach(button=>{
    const range=button.getAttribute('data-report-range');
    const label=range==='30'?text('30 Tage','30 days'):range==='60'?text('60 Tage','60 days'):range==='90'?text('90 Tage','90 days'):null;
    if(label&&button.textContent!==label)button.textContent=label;
  });
}

function ensureAcuteHierarchy(){
  const sheet=document.querySelector('.modal-sheet');
  if(!sheet)return;
  const acuteGrid=sheet.querySelector('.acute-grid');
  if(!acuteGrid)return;
  const header=sheet.querySelector('header');
  if(!header)return;
  const title=header.querySelector('h2');
  const sub=header.querySelector('p');
  if(title)title.textContent=text('Signal erfassen','Log a signal');
  if(sub)sub.textContent=text('In wenigen Sekunden dokumentiert','Documented in seconds');
}

function ensureSingleDayWave(){
  const chart=document.querySelector('.wave-chart');
  if(!chart)return;
  const dots=chart.querySelectorAll('.sym-dot');
  if(dots.length!==1)return;
  const dot=dots[0];
  const cx=Number(dot.getAttribute('cx')||180),cy=Number(dot.getAttribute('cy')||86);
  if(chart.querySelector('.single-day-rest-wave'))return;
  const ns='http://www.w3.org/2000/svg';
  let defs=chart.querySelector('defs');
  if(!defs){defs=document.createElementNS(ns,'defs');chart.prepend(defs);}
  if(!chart.querySelector('#singleDayGradient')){const gradient=document.createElementNS(ns,'linearGradient');gradient.id='singleDayGradient';gradient.setAttribute('x1','0');gradient.setAttribute('y1','0');gradient.setAttribute('x2','0');gradient.setAttribute('y2','1');gradient.innerHTML='<stop offset="0%" stop-color="#2B2A4A" stop-opacity=".10"/><stop offset="100%" stop-color="#2B2A4A" stop-opacity="0"/>';defs.append(gradient);}
  const path=`M24 ${cy+6} C80 ${cy-8}, 126 ${cy+5}, ${cx} ${cy} C234 ${cy-5}, 286 ${cy+8}, 342 ${cy-4}`;
  const area=document.createElementNS(ns,'path');area.classList.add('single-day-rest-wave');area.setAttribute('d',`${path} L342 152 L24 152 Z`);area.setAttribute('fill','url(#singleDayGradient)');
  const line=document.createElementNS(ns,'path');line.classList.add('single-day-rest-wave');line.setAttribute('d',path);line.setAttribute('fill','none');line.setAttribute('stroke','#2B2A4A');line.setAttribute('stroke-width','3');line.setAttribute('stroke-linecap','round');line.setAttribute('stroke-linejoin','round');
  const firstGrid=chart.querySelector('.wave-grid');
  if(firstGrid){firstGrid.insertAdjacentElement('afterend',area);area.insertAdjacentElement('afterend',line);}else{chart.insertBefore(area,dot);chart.insertBefore(line,dot);}
}

function refineRing(){
  const scoreNode=document.querySelector('.ring-copy strong');const ring=document.querySelector('.ring-value');if(!scoreNode||!ring)return;const match=(scoreNode.textContent||'').match(/\d+/);if(!match)return;const value=Number(match[0]);const stroke=value>=75?'var(--sage)':value>=55?'var(--amber)':'var(--warm)';if(ring.style.stroke!==stroke)ring.style.stroke=stroke;const dot=document.querySelector('.ring-copy .pulse-dot');if(dot){const desired=value>=75?'sage':value>=55?'amber':'';dot.classList.remove('sage','amber');if(desired)dot.classList.add(desired);}
}

function clearAllLunaStorage(){try{const keys=[];for(let i=0;i<localStorage.length;i++)keys.push(localStorage.key(i));keys.filter(Boolean).forEach(key=>{if(/^luna/i.test(key)||/^midlifeos/i.test(key))localStorage.removeItem(key);});localStorage.removeItem(CURRENT_KEY);}catch{}}

let deleteAllArmed=false;
function installDeleteGuard(){document.addEventListener('click',event=>{const button=event.target instanceof Element?event.target.closest('button'):null;if(!button)return;const label=(button.textContent||'').trim();if(label.includes('Alle lokalen Daten löschen')||label.includes('Delete all local data')){deleteAllArmed=true;return;}if(deleteAllArmed&&(label==='Abbrechen'||label==='Cancel')){deleteAllArmed=false;return;}if(deleteAllArmed&&(label==='Löschen'||label==='Delete')){deleteAllArmed=false;setTimeout(()=>{clearAllLunaStorage();location.reload();},80);}},true);}

function enhance(){
  const apply=()=>{document.documentElement.dataset.lunaRelease='31';ensureMedicalWarning();ensureMediumLegend();ensureReportLabels();ensureAcuteHierarchy();ensureSingleDayWave();refineRing();};
  installDeleteGuard();apply();const observer=new MutationObserver(apply);observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['class']});
}

async function boot(){
  try{const response=await fetch(SOURCE,{cache:'no-store'});if(!response.ok)throw new Error(`LUNA source ${response.status}`);const source=patchSource(await response.text());const blob=new Blob([source+'\n//# sourceURL=luna-app-v31.js'],{type:'text/javascript'});const script=document.createElement('script');const url=URL.createObjectURL(blob);script.src=url;script.onload=()=>{URL.revokeObjectURL(url);enhance()};script.onerror=()=>{URL.revokeObjectURL(url)};document.head.append(script);}catch(error){console.error('LUNA v31 bootstrap failed',error);const fallback=document.createElement('script');fallback.src=SOURCE;fallback.onload=enhance;document.head.append(fallback);}
}

boot();
})();
