// @ts-nocheck
// Seções de social media trazidas do portfólio de social media (mesma marcação e o mesmo script de lá),
// com o estilo restrito a .sm para não interferir no resto da página.
import { useEffect, useRef } from "react";
import "./social.css";

const HTML = String.raw`
<!-- DESTAQUES -->
<section class="highlights" aria-label="Destaques">
  <div class="wrap">
    <div class="hl-head">
      <p class="eyebrow">Destaques</p>
      <p class="hand">toque num círculo e veja como story ↓</p>
    </div>
    <div class="hl-row" id="hlRow"></div>
  </div>
</section>

<!-- CASES -->
<section class="sec" id="cases">
  <div class="wrap">

    <!-- CASE MAG -->
    <article class="case" id="case-mag">
      <div class="case-top">
        <div class="rv">
          <h3>MAG Peças e Serviços</h3>
          <p class="sum">Loja de peças para motores Cummins. Assumi o Instagram inteiro: <strong>o que postar, como postar e quem responde.</strong></p>
        </div>

        <div class="phone-col rv" style="--d:120ms">
          <p class="note n-left">o perfil real,<br>hoje<svg width="90" height="40" viewBox="0 0 90 40"><path d="M4 6 C 30 4, 60 14, 84 34 M84 34 l-10 -2 M84 34 l-2 -10"/></svg></p>
          <div class="phone" id="phoneMag">
            <div class="screen" role="region" aria-label="Perfil real da MAG no Instagram" tabindex="0"><img src="img/mag/perfil-real.webp" alt="Print do perfil @magpecaseservicos no Instagram: 176 posts, 305 seguidores, destaques Sobre a MAG, Localização e Contato, e posts de Dia dos Pais, troca de filtros, nova marca, Boas Festas, Dia do Cliente e Independência"></div>
          </div>
        </div>
      </div>

      <div class="deliver">
        <div class="tile span-12 rv">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 20px;align-items:baseline">
            <div><h5>Uma peça por post, sempre no mesmo lugar.</h5></div>
          </div>
          <div class="strip" id="magStrip"></div>
        </div>

        <div class="chat-open span-12 rv">
          <div class="chat-text">
            <h5>Quem chama, recebe resposta.</h5>
          </div>
          <div class="dm" id="dm">
            <div class="dm-top"><span class="av">MAG</span><span><b>magpecaseservicos</b><small>online</small></span></div>
            <p class="msg in">Boa tarde! Vi o post do bico injetor K38. Tem pra pronta entrega?</p>
            <p class="msg out">Boa tarde! Tem sim 😊 Me passa o número do motor que eu confiro a referência certinha com o balcão.</p>
            <p class="msg in">KTA38, uso em gerador.</p>
            <p class="msg out">Perfeito, essa é a peça. Te mando o orçamento pelo WhatsApp em 5 min, pode ser?</p>
            <div class="typing" aria-hidden="true"><i></i><i></i><i></i></div>
            <button class="replay link-line" type="button" hidden>Ver de novo ↺</button>
          </div>
        </div>
        <div class="tile span-7 rv">
          <div class="ba" id="ba" style="--p:50%">
            <img class="after" src="img/mag/catalogo-v2.webp" alt="Catálogo novo da MAG, com motor em vermelho, ícones, mais marcas distribuídas e rodapé de contatos" loading="lazy">
            <img class="before" src="img/mag/catalogo-v1.webp" alt="Primeira versão do catálogo da MAG, com fundo branco e motor cinza" loading="lazy">
            <span class="handle"></span>
            <span class="lbl l">Antes</span><span class="lbl r">Depois</span>
            <input type="range" min="0" max="100" value="50" aria-label="Arraste para comparar o catálogo antes e depois">
          </div>
        </div>
        <div class="tile span-5 rv" style="align-self:start">
          <h5>O que mudou</h5>
          <ol class="changes">
            <li><span><b>Topo escuro</b> com o motor em destaque</span></li>
            <li><span><b>Ícones de confiança</b> logo abaixo do título</span></li>
            <li><span><b>Segmentos atendidos</b> em uma frase</span></li>
            <li><span><b>De 4 para 9 marcas</b>, em grade</span></li>
            <li><span><b>Rodapé</b> com todos os contatos</span></li>
          </ol>
          <a class="site-card" href="https://www.magpecaseservicos.com.br" target="_blank" rel="noopener noreferrer" data-cursor="Abrir" style="margin-top:8px">
            <div class="bar"><i></i><i></i><i></i><span>magpecaseservicos.com.br</span></div>
            <div class="body"><b>O mesmo cuidado, agora no site.</b><span class="go">Abrir site <span class="arrow">↗</span></span></div>
          </a>
        </div>
      </div>
    </article>

  </div>
</section>

<!-- CRIAÇÕES -->
<section class="sec alt" id="criacoes">
  <div class="wrap">
    <div class="sec-head rv">
      <div><h2>Mais coisas que eu desenhei.</h2></div>
    </div>
  </div>
  <div class="rail" aria-label="Criações"><div class="rail-track" id="works"></div></div>
</section>

<!-- PROCESSO -->
<section class="sec" id="processo">
  <div class="wrap">
    <div class="sec-head rv">
      <div><h2>Como eu cuido de um perfil.</h2></div>
    </div>
    <div class="steps">
      <div class="step rv"><span class="n">01</span><h4>Escuta</h4><p>Converso com quem atende o balcão. As perguntas que mais chegam viram a primeira pauta.</p><span class="hand">"qual a peça mais pedida?"</span></div>
      <div class="step rv" style="--d:80ms"><span class="n">02</span><h4>Calendário</h4><p>Monto a semana: produto, aviso, bastidor e data comemorativa, com dia e horário de cada post.</p><span class="hand">seg · qua · sex</span></div>
      <div class="step rv" style="--d:160ms"><span class="n">03</span><h4>Criação</h4><p>Arte no Canva ou Figma seguindo a linha visual da marca, mais a legenda com a chamada certa.</p><span class="hand">mesmo grid, sempre</span></div>
      <div class="step rv" style="--d:240ms"><span class="n">04</span><h4>Publicação</h4><p>Agendo no Meta Business Suite, reviso telefone, endereço e nome da peça antes de sair.</p><span class="hand">conferir 2x</span></div>
      <div class="step rv" style="--d:320ms"><span class="n">05</span><h4>Direct e leitura</h4><p>Respondo quem chama e anoto o que gerou conversa. Isso volta para o calendário da próxima semana.</p><span class="hand">o ciclo recomeça ↺</span></div>
    </div>
  </div>
</section>
<!-- viewer -->
<div class="viewer" id="viewer" hidden role="dialog" aria-modal="true" aria-label="Visualizador de posts">
  <div class="v-card">
    <div class="v-bars" id="vBars"></div>
    <div class="v-head">
      <span class="av"><img id="vAv" src="" alt=""></span>
      <span><b id="vTitle"></b><small id="vSub"></small></span>
      <button class="x" type="button" id="vClose" aria-label="Fechar">×</button>
    </div>
    <div class="v-media">
      <button class="v-tap prev" type="button" aria-label="Anterior"></button>
      <img id="vImg" src="" alt="">
      <button class="v-tap next" type="button" aria-label="Próximo"></button>
    </div>
    <p class="v-cap" id="vCap"></p>
    <div class="v-nav"><button type="button" id="vPrev">← Anterior</button><button type="button" id="vPause">Pausar</button><button type="button" id="vNext">Próximo →</button></div>
  </div>
</div>
`;

export default function SocialSections() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = root.current;
    if (!host || host.dataset.ready) return;
    host.dataset.ready = "1";
    // o React não gerencia este bloco: o conteúdo é inserido aqui para não ser sobrescrito em novas renderizações
    host.innerHTML = HTML;
const R = (n, f) => Array.from({length:n}, (_, i) => f(i + 1));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches && !reduce;

/* ---------- conteúdo ---------- */
const SETS = {
  magProdutos: { title:'MAG · Série de produtos', sub:'7 posts · Instagram', av:'img/mag/story-logo.webp',
    items: [['Alternador Cummins'],['Alternador ZM'],['Bico injetor Cummins'],['Bico injetor K38'],['Bico injetor NTA855'],['Bico injetor QSK60'],['Turbina KTA']].map(([c],i)=>({src:`img/mag/produto-${i+1}.webp`, cap:c, alt:`Post da MAG: ${c}`})) },
  aparecida: { title:'MAG · Aviso de feriado', sub:'12 de outubro', av:'img/mag/story-logo.webp', cover:{bg:'#0f2f6b',fg:'#ffffff',ac:'#f2c14e',name:'Nossa Senhora Aparecida'}, tag:'post',
    desc:'Post de 12 de outubro: homenageia a data e já responde quando a loja fecha e volta, com as datas e o horário em destaque.',
    items:[{src:'img/mag/aparecida.webp', cap:'Dia de Nossa Senhora Aparecida: aviso de fechamento e retorno às 7h50.', alt:'Post do Dia de Nossa Senhora Aparecida da MAG'}] },
  catalogo: { title:'MAG · Catálogo Cummins', sub:'Primeira versão e redesign', av:'img/mag/story-logo.webp',
    items:[{src:'img/mag/catalogo-v1.webp', cap:'Versão 1: base clara, informações essenciais.', alt:'Catálogo MAG versão 1'},{src:'img/mag/catalogo-v2.webp', cap:'Versão 2: topo escuro, ícones de confiança, 9 marcas e rodapé de contatos.', alt:'Catálogo MAG versão 2'}] },
  guerra: { title:'Jornal CMC · Guerra e infância', sub:'Carrossel · 6 slides', av:'img/outros/guerra-1.webp', cover:{bg:'#151413',fg:'#f1e8dc',ac:'#ff3b30',name:'Guerra e infância'}, tag:'carrossel',
    desc:'Carrossel de notícia para o jornal da escola: contexto do conflito e os impactos nas crianças, com fecho em pergunta para gerar comentário.',
    items: ['Capa: o conflito e seus impactos nas crianças','Contexto histórico em um slide','Efeitos da guerra','Transtornos e sono','Escola, infância e cognição','Pergunta final para engajar'].map((c,i)=>({src:`img/outros/guerra-${i+1}.webp`, cap:c, alt:`Slide ${i+1}: ${c}`})) },
  ia: { title:'Jornal CMC · O fim do ChatGPT?', sub:'Carrossel · 8 slides', av:'img/outros/ia-1.webp', cover:{bg:'#2d1bb8',fg:'#ffffff',ac:'#5ee6e0',name:'O fim do ChatGPT?'}, tag:'carrossel',
    desc:'A crise na OpenAI contada em capítulos: início, contratação, conselho, especulação, os dois lados e o futuro. Fecha com chamada para compartilhar, salvar e comentar.',
    items: ['Capa com pergunta','O início','Contratação','O conselho','Especulação','Dois lados da moeda','O futuro de todos nós','Chamada: compartilhe, salve, comente'].map((c,i)=>({src:`img/outros/ia-${i+1}.webp`, cap:c, alt:`Slide ${i+1}: ${c}`})) },
  ppgcasa: { title:'PPGCASA · Disciplinas', sub:'Série · 8 posts', av:'img/outros/ppgcasa-1.webp', cover:{bg:'#a8622a',fg:'#fff4e8',ac:'#f6d7b0',name:'Disciplinas do semestre'}, tag:'serie',
    desc:'Série para divulgar as disciplinas do semestre: um post por disciplina, com professor, datas, horário, carga horária e local sempre na mesma ordem.',
    items: ['Tópicos Especiais 2: Bioética','Seminários II','Métodos Qualitativos em Ciências Ambientais','Fundamentos de Ciências Ambientais','Agricultura e Ambiente','Etnoconservação e Percepção Ambiental na Amazônia','Sociologia Ambiental','Métodos Quantitativos em Ciências Ambientais'].map((c,i)=>({src:`img/outros/ppgcasa-${i+1}.webp`, cap:c, alt:`Post da disciplina ${c}`})) },
  intergreve: { title:'Intergreve 2024', sub:'Adesivo e crachá', av:'img/outros/intergreve-1.webp', cover:{bg:'#d10f12',fg:'#ffffff',ac:'#ffd23f',name:'Intergreve 2024'}, tag:'evento',
    desc:'Identidade para um encontro estudantil: punho erguido, raios e multidão em vermelho. Virou adesivo redondo e crachá com espaço para nome e campus.',
    items:[{src:'img/outros/intergreve-1.webp', cap:'Adesivo redondo do evento', alt:'Adesivo Intergreve 2024'},{src:'img/outros/intergreve-2.webp', cap:'Crachá: "Do interior à capital, eu defendo a federal"', alt:'Crachá Intergreve 2024'}] },
  rifa: { title:'Rifa de Formatura', sub:'@informaticus · post', av:'img/outros/rifa.webp', cover:{bg:'#3a1f10',fg:'#f3c66b',ac:'#f3c66b',name:'Rifa de Formatura'}, tag:'evento',
    desc:'Post de rifa para a formatura da turma de Informática: preço em destaque, data do sorteio enorme e os 6 prêmios em pódio.',
    items:[{src:'img/outros/rifa.webp', cap:'R$ 5,00 · sorteio 08/08 às 15h · seis prêmios', alt:'Post da Rifa de Formatura'}] },
  acessorios: { title:"Men's Fashion · 6 acessórios", sub:'Impresso / post A2', av:'img/outros/acessorios.webp', cover:{bg:'#0b0b0c',fg:'#ffffff',ac:'#bdbdc2',name:'6 acessórios básicos'}, tag:'impresso',
    desc:'Guia editorial em preto e branco: seis acessórios básicos em fotos circulares numeradas, com texto curto para cada um.',
    items:[{src:'img/outros/acessorios.webp', cap:'Colar, anel, relógio, carteira, boné e pulseira', alt:"Guia Men's Fashion de acessórios básicos"}] },
  alpha: { title:'AlphaEdu · Logo', sub:'Marca · logo', av:'img/outros/logo-alpha-1.webp', cover:{bg:'#1c2260',fg:'#ffffff',ac:'#2f6bff',name:'AlphaEdu'}, tag:'marca',
    desc:'Logo para um software educacional: um livro aberto com a letra A e raios de ideia.',
    items:[{src:'img/outros/logo-alpha-1.webp', cap:'Livro aberto, a letra A e raios de ideia', alt:'Logo AlphaEdu'}] },
};
const ORDER_WORKS = ['ia','aparecida','guerra','ppgcasa','intergreve','rifa','acessorios','alpha'];
const HIGHLIGHTS = [
  ['magProdutos','MAG','<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>'],
  ['catalogo','Catálogo','<path d="M2 5c3-1 6-1 10 1 4-2 7-2 10-1v14c-3-1-6-1-10 1-4-2-7-2-10-1z"/><path d="M12 6v14"/>'],
  ['aparecida','Avisos','<path d="M3 10v4h3l7 5V5l-7 5z"/><path d="M17 9a4 4 0 0 1 0 6"/>'],
  ['ia','Carrosséis','<rect x="3" y="7" width="13" height="13" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v11"/>'],
  ['ppgcasa','Séries','<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'],
  ['intergreve','Eventos','<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],
  ['acessorios','Impressos','<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h8"/>'],
  ['alpha','Marca','<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>']];

/* ---------- monta destaques, feed, faixa e galeria ---------- */
const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
const hlRow = document.getElementById('hlRow');
HIGHLIGHTS.forEach(([k,l,svg]) => hlRow.append(el(`<button class="hl" type="button" data-set="${k}" data-cursor="Ver"><span class="ring"><span><svg viewBox="0 0 24 24" aria-hidden="true">${svg}</svg></span></span>${l}</button>`)));


const strip = document.getElementById('magStrip');
SETS.magProdutos.items.forEach((it,i) => strip.append(el(`<button type="button" data-set="magProdutos" data-i="${i}" data-cursor="Abrir"><img src="${it.src}" alt="${it.alt}" loading="lazy"></button>`)));

const works = document.getElementById('works');
const card = (k, dup) => { const s = SETS[k], c = s.cover, n = s.items.length;
  const imgs = s.items.slice(0,3).reverse().map(it => `<img src="${it.src}" alt="" loading="lazy">`).join('');
  return `<button class="work" type="button" data-set="${k}" data-cursor="Ver" ${dup?'aria-hidden="true" tabindex="-1"':''} style="--cbg:${c.bg};--cfg:${c.fg};--cac:${c.ac}">
    <span class="cover"><span class="c-name">${c.name}</span><span class="c-stack">${imgs}</span><span class="c-n">${n>1?`${n} ${s.tag==='serie'?'posts':'slides'}`:'1 arte'}</span></span>
    <h4>${s.title}</h4></button>`; };
// a fila vai duas vezes para o carrossel girar sem emenda
works.innerHTML = ORDER_WORKS.map(k => card(k)).join('') + ORDER_WORKS.map(k => card(k, true)).join('');

/* ---------- viewer de story ---------- */
const V = { el:document.getElementById('viewer'), img:document.getElementById('vImg'), bars:document.getElementById('vBars'), cap:document.getElementById('vCap'),
  t:document.getElementById('vTitle'), sub:document.getElementById('vSub'), av:document.getElementById('vAv'), pauseBtn:document.getElementById('vPause') };
let cur = null, idx = 0, raf = 0, start = 0, paused = false, elapsed = 0, lastFocus = null;
const DUR = 5000;
function show(i){
  idx = i; const it = cur.items[i];
  V.img.src = it.src; V.img.alt = it.alt; V.cap.textContent = it.cap;
  [...V.bars.children].forEach((b,j) => { b.className = j<i ? 'done' : ''; b.firstChild.style.width = j<i ? '100%' : '0'; });
  elapsed = 0; start = performance.now();
}
function tick(now){
  if (!paused && cur){
    const p = Math.min((elapsed + now - start) / DUR, 1);
    const bar = V.bars.children[idx]; if (bar) bar.firstChild.style.width = (p*100)+'%';
    if (p >= 1){ if (idx < cur.items.length-1) show(idx+1); else { close(); return; } }
  }
  raf = requestAnimationFrame(tick);
}
function open(key, i=0){
  cur = SETS[key]; if (!cur) return;
  lastFocus = document.activeElement;
  V.t.textContent = cur.title; V.sub.textContent = cur.sub; V.av.src = cur.av;
  V.bars.innerHTML = cur.items.map(() => '<i><b></b></i>').join('');
  V.el.hidden = false; requestAnimationFrame(() => V.el.classList.add('open'));
  document.body.style.overflow = 'hidden';
  paused = reduce; V.pauseBtn.textContent = paused ? 'Continuar' : 'Pausar';
  show(+i); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
  document.getElementById('vClose').focus();
}
function close(){
  cancelAnimationFrame(raf); cur = null; V.el.classList.remove('open');
  setTimeout(() => { V.el.hidden = true; }, 300);
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
const step = (d) => { if (!cur) return; const n = idx + d; if (n < 0) show(0); else if (n >= cur.items.length) close(); else show(n); };
const setPause = (p) => { if (!cur) return; if (p && !paused) elapsed += performance.now() - start; if (!p && paused) start = performance.now(); paused = p; V.pauseBtn.textContent = p ? 'Continuar' : 'Pausar'; };
document.addEventListener('click', e => { const b = e.target.closest('[data-set]'); if (b && !V.el.contains(b)) open(b.dataset.set, b.dataset.i || 0); });
document.getElementById('vClose').onclick = close;
document.getElementById('vPrev').onclick = () => step(-1);
document.getElementById('vNext').onclick = () => step(1);
V.el.querySelector('.v-tap.prev').onclick = () => step(-1);
V.el.querySelector('.v-tap.next').onclick = () => step(1);
V.pauseBtn.onclick = () => setPause(!paused);
V.el.addEventListener('click', e => { if (e.target === V.el) close(); });
document.addEventListener('keydown', e => { if (!cur) return;
  if (e.key==='Escape') close(); else if (e.key==='ArrowRight') step(1); else if (e.key==='ArrowLeft') step(-1); else if (e.key===' ') { e.preventDefault(); setPause(!paused); }
  else if (e.key==='Tab'){ const f=[...V.el.querySelectorAll('button')]; const a=f.indexOf(document.activeElement); if(e.shiftKey&&a<=0){e.preventDefault();f[f.length-1].focus()} else if(!e.shiftKey&&a===f.length-1){e.preventDefault();f[0].focus()} } });
const media = V.el.querySelector('.v-media');
media.addEventListener('pointerdown', () => setPause(true));
['pointerup','pointerleave'].forEach(t => media.addEventListener(t, () => { if (!reduce) setPause(false); }));
let sx = 0; media.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
media.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); }, {passive:true});

/* ---------- direct: conversa digitando ---------- */
const dm = document.getElementById('dm'), msgs = [...dm.querySelectorAll('.msg')], typing = dm.querySelector('.typing'), replay = dm.querySelector('.replay');
let dmRunning = false;
async function playDm(){
  if (dmRunning) return; dmRunning = true; replay.hidden = true;
  msgs.forEach(m => m.classList.remove('show'));
  const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
  for (const m of msgs){
    if (m.classList.contains('out')){ dm.insertBefore(typing, m); typing.classList.add('show'); await wait(1200); typing.classList.remove('show'); }
    else await wait(700);
    m.classList.add('show');
  }
  dm.insertBefore(typing, replay); replay.hidden = false; dmRunning = false;
}
replay.onclick = playDm;
new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting){ playDm(); o.disconnect(); } }), {threshold:.4}).observe(dm);

/* ---------- antes e depois ---------- */
const ba = document.getElementById('ba');
ba.querySelector('input').addEventListener('input', e => ba.style.setProperty('--p', e.target.value + '%'));
/* ---------- entrada ao rolar (só o que começa fora da tela) ---------- */
if (!reduce && 'IntersectionObserver' in window){
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.remove('pre'); io.unobserve(e.target); } }), {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(n => { if (n.getBoundingClientRect().top > innerHeight){ n.classList.add('pre'); io.observe(n); } });
}
/* ---------- celular inclina com o mouse ---------- */
const ph = document.getElementById('phoneMag');
if (fine) { ph.addEventListener('mousemove', e => { const r = ph.getBoundingClientRect(); const px = (e.clientX-r.left)/r.width-.5, py = (e.clientY-r.top)/r.height-.5; ph.style.transform = `perspective(1200px) rotateY(${px*8}deg) rotateX(${-py*6}deg)`; });
  ph.addEventListener('mouseleave', () => ph.style.transform = ''); }
  }, []);
  return <div ref={root} className="sm" />;
}
