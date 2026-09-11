(()=>{
  "use strict";
  const root=document.getElementById("view-root");
  if(!root)return;
  let patchedDashboard=null;
  let lastHapticScore=null;

  function patchDashboard(){
    const dash=root.querySelector(".dashboard");
    if(!dash||dash===patchedDashboard)return;
    patchedDashboard=dash;

    const today=dash.querySelector(".today-date");
    if(today)today.hidden=true;

    const ring=dash.querySelector(".hero-ring");
    const center=dash.querySelector(".ring-center");
    const streak=dash.querySelector(".streak-badge");
    const knowledge=dash.querySelector(".knowledge-card");
    const breath=dash.querySelector(".breath-card");
    const acute=dash.querySelector(".quick-card");

    if(ring){
      ring.classList.add("v40-ring");
      const svg=ring.querySelector("svg");
      const gradient=svg?.querySelector("#ringGradient");
      if(gradient){
        gradient.innerHTML='<stop offset="0" stop-color="#5B8E7D"/><stop offset=".52" stop-color="#4A72B0"/><stop offset="1" stop-color="#2B2A4A"/>';
      }
      if(ring.classList.contains("open")&&center){
        center.innerHTML='<strong class="open-label">Check-in starten</strong><span class="open-plus">+</span>';
      }
      if(ring.classList.contains("done")){
        const score=parseInt(center?.querySelector("strong")?.textContent||"0",10);
        if(Number.isFinite(score)&&score>0){
          ring.style.setProperty("--score-angle",`${-90+score*3.6}deg`);
          if(!ring.querySelector(".ring-glint"))ring.insertAdjacentHTML("beforeend",'<i class="ring-glint" aria-hidden="true"></i>');
          if(lastHapticScore!==score){
            lastHapticScore=score;
            setTimeout(()=>{try{navigator.vibrate?.([20,40,20])}catch{}},950);
          }
        }
      }
    }

    if(streak){
      const n=(streak.textContent.match(/\d+/)||[])[0];
      streak.textContent=n?`🔥 ${n} Tage im Rhythmus`:"🔥 Heute in den Rhythmus kommen";
    }

    if(breath&&acute&&knowledge){
      let dock=dash.querySelector(".action-dock");
      if(!dock){
        dock=document.createElement("section");
        dock.className="action-dock";
        knowledge.before(dock);
      }
      dock.append(breath,acute);
      breath.classList.add("action-tile","breath-tile");
      acute.classList.add("action-tile","acute-tile");
      const breathStrong=breath.querySelector("strong");
      const breathSub=breath.querySelector("p");
      const breathButton=breath.querySelector("#startBreath");
      if(breathStrong)breathStrong.textContent="🌬 Atem-Pause (60s)";
      if(breathSub)breathSub.textContent="4–6 Rhythmus";
      if(breathButton){breathButton.textContent="Start";breathButton.setAttribute("aria-label","Atem-Pause starten");}
      const acuteLabel=acute.querySelector("span");
      if(acuteLabel)acuteLabel.textContent="⚡️ Akut-Signal";
    }

    if(knowledge){
      knowledge.classList.add("knowledge-impulse");
      if(!knowledge.querySelector(".knowledge-close")){
        const close=document.createElement("button");
        close.className="knowledge-close";
        close.type="button";
        close.setAttribute("aria-label","Wissens-Impuls schließen");
        close.textContent="×";
        close.addEventListener("click",()=>knowledge.remove());
        knowledge.appendChild(close);
      }
    }
  }

  function patchModal(){
    const sheet=document.querySelector(".quick-sheet");
    if(!sheet||sheet.dataset.v40==="1")return;
    sheet.dataset.v40="1";

    const grid=sheet.querySelector(".acute-grid");
    if(grid){
      const emoji={hot:"🔥",palpitations:"💓",brain:"🌫",anxious:"⚡️"};
      grid.querySelectorAll("[data-acute]").forEach(btn=>{
        const id=btn.dataset.acute;
        const label=btn.querySelector("span")?.textContent||"";
        btn.innerHTML=`<span class="acute-emoji">${emoji[id]||"•"}</span><span>${id==="anxious"?"Innere Unruhe":label}</span>`;
      });
    }

    const begin=sheet.querySelector("#beginBreath");
    if(begin&&sheet.classList.contains("breath-sheet")){
      requestAnimationFrame(()=>begin.click());
    }
  }

  function patchTip(){
    const tip=root.querySelector(".dashboard-tip");
    if(tip)tip.classList.add("v40-toast");
  }

  const observer=new MutationObserver(()=>{
    patchDashboard();
    patchModal();
    patchTip();
  });
  observer.observe(document.body,{childList:true,subtree:true});
  patchDashboard();
})();
