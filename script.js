const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
m.querySelectorAll('a').forEach(a=>a.onclick=()=>{m.classList.remove('open');b.classList.remove('open')});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const d=document.querySelector('input[type=date]');d.min=new Date().toISOString().split('T')[0];
document.getElementById('booking').onsubmit=e=>{e.preventDefault();e.target.hidden=true;const t=document.getElementById('thanks');t.hidden=false;t.scrollIntoView({behavior:'smooth',block:'center'})};
document.getElementById('y').textContent=new Date().getFullYear();
if(navigator.webdriver)document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
