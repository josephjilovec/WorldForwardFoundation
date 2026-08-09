(()=>{
  const headerStyle=document.createElement('style');
  headerStyle.textContent=`
    @media (min-width:901px){
      .global-header{
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        column-gap:clamp(36px,5vw,82px);
      }
      .global-header nav{
        grid-column:1;
        grid-row:1;
        justify-self:start;
      }
      .global-header .logo-link{
        grid-column:2;
        grid-row:1;
        justify-self:end;
        width:255px;
      }
      .global-header .logo-link img{
        object-position:right center;
      }
    }
  `;
  document.head.appendChild(headerStyle);

  const b=document.querySelector('.menu'),n=document.querySelector('.global-header nav');
  if(b&&n){
    b.addEventListener('click',()=>{
      const open=n.classList.toggle('open');
      b.setAttribute('aria-expanded',String(open));
      b.textContent=open?'×':'☰';
    });
    n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      n.classList.remove('open');
      b.setAttribute('aria-expanded','false');
      b.textContent='☰';
    }));
  }
  document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();
    const s=f.querySelector('.form-status');
    if(s)s.textContent='Thanks — the interface is ready, but production submission remains disabled until an official inbox, privacy policy, and secure endpoint are configured.';
  }));
})();
