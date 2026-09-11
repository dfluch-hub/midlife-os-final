(()=>{
  const root=document.getElementById('view-root');
  if(!root)return;
  const seen=new WeakSet();
  function sync(){
    const ring=root.querySelector('.hero-ring');
    const pills=root.querySelector('.day-quick-pills');
    if(ring&&pills)pills.hidden=ring.classList.contains('open');

    const toast=root.querySelector('.dashboard-tip');
    if(toast&&!seen.has(toast)){
      seen.add(toast);
      setTimeout(()=>{
        if(!toast.isConnected)return;
        toast.classList.add('is-leaving');
        setTimeout(()=>toast.querySelector('#closeTip')?.click(),320);
      },6000);
    }

    const phase=document.getElementById('breathPhase');
    if(phase&&phase.dataset.v42!=='1'){
      phase.dataset.v42='1';
      let previous=phase.textContent;
      new MutationObserver(()=>{
        const current=phase.textContent;
        if(current!==previous){
          previous=current;
          if(/Einatmen|Ausatmen|Breathe in|Breathe out/i.test(current)){
            try{navigator.vibrate?.(25)}catch{}
          }
        }
      }).observe(phase,{childList:true,subtree:true,characterData:true});
    }
  }
  new MutationObserver(sync).observe(document.body,{childList:true,subtree:true});
  sync();
})();
