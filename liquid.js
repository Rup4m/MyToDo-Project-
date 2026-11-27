/* Presentation only: no project data or navigation mutations. */
(() => {
  const nav=document.querySelector('.bottom');
  const pill=document.createElement('span');
  pill.className='liquid-tab-indicator';pill.setAttribute('aria-hidden','true');nav.prepend(pill);
  let frame=0,last=null;
  function sync(){
    const active=nav.querySelector('[aria-current="page"]');
    if(!active)return;
    const a=active.getBoundingClientRect(),n=nav.getBoundingClientRect();
    pill.style.width=a.width+'px';pill.style.height=a.height+'px';
    pill.style.transform='translate3d('+(a.left-n.left-nav.clientLeft)+'px,'+(a.top-n.top-nav.clientTop)+'px,0)';
    if(last&&last!==active&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&pill.animate){
      pill.animate([{scale:'1 1'},{scale:'1.12 .85'},{scale:'1 1'}],{duration:420,easing:'cubic-bezier(.34,1.56,.64,1)'});
    }
    last=active;pill.classList.add('ready');
    document.querySelector('meta[name="theme-color"]').content=document.body.classList.contains('dark')?'#101c30':'#294c65';
  }
  function schedule(){cancelAnimationFrame(frame);frame=requestAnimationFrame(sync);}
  new MutationObserver(schedule).observe(nav,{subtree:true,attributes:true,attributeFilter:['aria-current']});
  new MutationObserver(schedule).observe(document.body,{attributes:true,attributeFilter:['class']});
  if(window.ResizeObserver)new ResizeObserver(schedule).observe(nav);
  window.addEventListener('resize',schedule,{passive:true});schedule();
  const selector='header,.intro,.dashboard,.project,.settings,footer,.bottom,dialog,.primary,.secondary,.icon,.nav-add,.calendar-row,.filters';
  let pending=0,point=null,previous=null;
  document.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const target=e.target.closest(selector);if(!target)return;
    point={target,x:e.clientX,y:e.clientY};
    if(pending)return;
    pending=requestAnimationFrame(()=>{
      pending=0;const {target,x,y}=point;
      if(previous&&previous!==target){previous.style.removeProperty('--shine-x');previous.style.removeProperty('--shine-y');}
      const r=target.getBoundingClientRect();
      target.style.setProperty('--shine-x',(100*(x-r.left)/Math.max(1,r.width))+'%');
      target.style.setProperty('--shine-y',(100*(y-r.top)/Math.max(1,r.height))+'%');previous=target;
    });
  },{passive:true});
  // SVG backdrop filtering is enabled only on Chromium with CSS support.
  if(/Chrom(?:e|ium)\/|Edg\//.test(navigator.userAgent)&&! /Firefox\//.test(navigator.userAgent)&&CSS.supports('backdrop-filter','url(#liquid-glass)'))document.documentElement.classList.add('liquid-refraction');
})();
