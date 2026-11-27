/* Liquid Glass presentation; application state stays in app.js. */
(()=> {
 const selector='header,.intro,.dashboard,.project,.settings,footer,.bottom,dialog,.primary,.secondary,.danger,.icon,.nav-add,.calendar-row,.filters button,.empty,.board-lane,.sheet-option';
 const spring='cubic-bezier(0.34,1.56,0.64,1)';
 const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}},{threshold:.08}):null;
 function layer(el){
  if(el.classList.contains('liquid-glass')&&el.querySelector(':scope > .glass-content'))return;
  el.classList.add('liquid-glass');
  if(el.matches('header,.bottom,button'))el.classList.add('pill');
  const content=document.createElement(el.matches('button')?'span':'div');content.className='glass-content';
  while(el.firstChild)content.append(el.firstChild);
  for(const name of ['filter','overlay','specular']){
   const part=document.createElement(el.matches('button')?'span':'div');part.className='glass-'+name;part.setAttribute('aria-hidden','true');el.append(part);
  }
  el.append(content);
  if(el.matches('.project')){if(observer&&!matchMedia('(prefers-reduced-motion: reduce)').matches){el.classList.add('reveal');observer.observe(el)}else el.classList.add('revealed')}
 }
 function scan(root){if(root.nodeType!==1)return;if(root.matches(selector))layer(root);root.querySelectorAll(selector).forEach(layer)}
 scan(document.body);
 const nav=document.querySelector('.bottom'),nc=nav.querySelector('.glass-content');
 const indicator=document.createElement('div');indicator.className='liquid-tab-indicator pill';indicator.setAttribute('aria-hidden','true');layer(indicator);nc.prepend(indicator);
 let previous=null,frame=0;
 function sync(){const active=nav.querySelector('[aria-current="page"]');if(!active)return;const a=active.getBoundingClientRect(),n=nc.getBoundingClientRect();indicator.style.width=a.width+'px';indicator.style.height=a.height+'px';indicator.style.transform='translate3d('+(a.left-n.left)+'px,'+(a.top-n.top)+'px,0)';if(!indicator.classList.contains('ready'))indicator.classList.add('ready');if(previous&&previous!==active&&indicator.animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)indicator.animate([{scale:'1 1'},{scale:'1.3 .86'},{scale:'1 1'}],{duration:440,easing:spring});previous=active;document.querySelector('meta[name="theme-color"]').content=document.body.classList.contains('dark')?'#101c30':'#294c65'}
 function schedule(){cancelAnimationFrame(frame);frame=requestAnimationFrame(sync)}
 new MutationObserver(records=>{for(const r of records){if(r.type==='childList'){if(r.target.nodeType===1&&r.target.matches(selector)&&!r.target.querySelector(':scope > .glass-content'))layer(r.target);for(const n of r.addedNodes)if(n.isConnected)scan(n);} }schedule()}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['aria-current','class']});
 if(window.ResizeObserver)new ResizeObserver(schedule).observe(nav);window.addEventListener('resize',schedule,{passive:true});schedule();
 let pending=0,point=null;
 document.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const target=e.target.closest('.liquid-glass');if(!target)return;point={target,x:e.clientX,y:e.clientY};if(pending)return;pending=requestAnimationFrame(()=>{pending=0;const {target,x,y}=point,r=target.getBoundingClientRect();target.style.setProperty('--mx',100*(x-r.left)/Math.max(1,r.width)+'%');target.style.setProperty('--my',100*(y-r.top)/Math.max(1,r.height)+'%')})},{passive:true});
 let pressed=null;document.addEventListener('pointerdown',e=>{if(e.button!==0)return;pressed=e.target.closest('button.liquid-glass,.project,.navitem');if(pressed)pressed.classList.add('liquid-pressed')},{passive:true});
 function release(){if(pressed)pressed.classList.remove('liquid-pressed');pressed=null}window.addEventListener('pointerup',release,{passive:true});window.addEventListener('pointercancel',release,{passive:true});window.addEventListener('blur',release);
 if(/Chrom(?:e|ium)\/|Edg\//.test(navigator.userAgent)&&!/CriOS|FxiOS/.test(navigator.userAgent)&&CSS.supports('backdrop-filter','url(#liquid-glass)'))document.documentElement.classList.add('svg-liquid');
})();