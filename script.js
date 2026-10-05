const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const filters=document.querySelectorAll('.filter'), places=document.querySelectorAll('.place');
filters.forEach(f=>f.onclick=()=>{
 filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');
 places.forEach(p=>p.style.display=(f.dataset.cat==='all'||p.dataset.cat===f.dataset.cat)?'grid':'none');
});

const modal=document.querySelector('#modal'), title=document.querySelector('#modal-title'), text=document.querySelector('#modal-text');
document.querySelectorAll('.discover').forEach(b=>b.onclick=()=>{
 title.textContent=b.dataset.title;text.textContent=b.dataset.text;modal.classList.add('open');
});
document.querySelector('#close').onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

document.querySelectorAll('.eco-answer').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.eco-answer').forEach(x=>x.classList.remove('ok','bad'));
 const r=document.querySelector('#eco-result');
 if(b.dataset.ok==='1'){b.classList.add('ok');r.textContent='✓ Bonne réponse ! Supprimer les fichiers inutiles est un geste simple et concret.'}
 else{b.classList.add('bad');r.textContent='✗ Essayez encore : choisissez une action qui limite réellement les données inutiles.'}
});
document.querySelectorAll('.answer').forEach(b=>b.onclick=()=>{
 const r=document.querySelector('#city-result');
 document.querySelectorAll('.answer').forEach(x=>x.classList.remove('ok','bad'));
 if(b.classList.contains('right')){b.classList.add('ok');r.textContent='✓ Bonne réponse : Vauban.'}
 else{b.classList.add('bad');r.textContent='✗ Mauvaise réponse. La bonne réponse est Vauban.'}
});
