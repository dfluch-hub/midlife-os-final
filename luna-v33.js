(()=>{"use strict";

const moonMarkup=`<div class="onboard-brand-mark" aria-hidden="true">
  <svg viewBox="0 0 126 126" role="presentation">
    <defs>
      <linearGradient id="lunaMoonGradient" x1="20%" y1="10%" x2="88%" y2="90%">
        <stop offset="0%" stop-color="#2B2A4A"/>
        <stop offset="58%" stop-color="#5B8E7D"/>
        <stop offset="100%" stop-color="#4A72B0"/>
      </linearGradient>
      <filter id="lunaGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="7"/>
      </filter>
    </defs>
    <circle class="moon-glow" cx="63" cy="63" r="48"/>
    <circle class="moon-shell" cx="63" cy="63" r="46"/>
    <path class="moon-crescent" d="M79 34c-17 4-29 19-29 36 0 12 6 23 16 30-20-1-36-17-36-37 0-22 18-40 40-40 8 0 15 2 21 6-4 1-8 3-12 5Z"/>
    <path class="moon-wave" d="M34 83c10-8 20-8 29 0s19 8 29 0"/>
  </svg>
</div>`;

function polishOnboarding(){
  const onboarding=document.getElementById('onboarding');
  if(!onboarding)return;
  const orb=onboarding.querySelector('.onboard-orb');
  if(!orb||orb.dataset.lunaPolished==='1')return;
  if((orb.textContent||'').trim()!=='◌')return;
  const host=document.createElement('div');
  host.innerHTML=moonMarkup;
  const mark=host.firstElementChild;
  if(mark){
    orb.replaceWith(mark);
    mark.dataset.lunaPolished='1';
  }
}

function install(){
  polishOnboarding();
  const onboarding=document.getElementById('onboarding');
  if(!onboarding)return;
  const observer=new MutationObserver(polishOnboarding);
  observer.observe(onboarding,{childList:true,subtree:true});
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});
else install();
})();
