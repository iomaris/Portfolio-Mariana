import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, MousePointer2 } from "lucide-react";

const EMAIL = "maryazevedo2036@gmail.com";
const CV = "curriculo-mariana-cardoso.pdf";

// Medidas da imagem da personagem (px da imagem original) para posicionar os olhos.
const CHAR = { W: 1856, H: 2304, eyeX: 928, eyeY: 650 };
const EYES = [
  { id: "L", box: [700, 598, 156, 104], iris: [48, 3, 98], src: "images/char/iris-L.webp", lid: "images/char/lid-L.webp", mask: "images/char/mask-L.png" },
  { id: "R", box: [996, 598, 171, 103], iris: [15, 1, 98], src: "images/char/iris-R.webp", lid: "images/char/lid-R.webp", mask: "images/char/mask-R.png" },
] as const;
const MAX_X = 12; // quanto a íris anda, em px da imagem original
const MAX_Y = 3;

const nav = [
  ["projetos", "Projetos"],
  ["sobre", "Sobre"],
  ["experiencia", "Experiência"],
  ["habilidades", "Habilidades"],
  ["contato", "Contato"],
];

const nowBuilding = [
  { title: "Desenvolvimento Web", detail: "Eldorado · Angular" },
  { title: "Cibersegurança", detail: "Santander · Técnico" },
  { title: "Sites para empresas", detail: "Projetos · Aberta" },
];

const projects = [
  {
    title: "Financeiro Bromélia",
    description: "Sistema financeiro do Condomínio Bromélia: lançamento de despesas e receitas, saldo do mês, gráficos por grupo e relatório mensal.",
    tags: ["Sistema web", "JavaScript", "Gráficos"],
    url: "https://bromelia-site.vercel.app",
    repo: "https://github.com/iomaris/bromelia-site",
    preview: "https://bromelia-site.vercel.app",
  },
  {
    title: "Integral Refrigeração",
    description: "Site empresarial para divulgação dos serviços de refrigeração da Integral, com foco em apresentar os serviços e facilitar o contato.",
    tags: ["Site empresarial", "HTML", "CSS"],
    url: "https://integralerefrigeracao.com.br/",
    repo: "https://github.com/iomaris/integral-site",
    preview: "https://integral-site-seven.vercel.app",
  },
  {
    title: "MAG Peças e Serviços",
    description: "Site empresarial atualizado com foco nos serviços e nos canais de contato, para ampliar a divulgação e atrair clientes.",
    tags: ["Site empresarial", "HTML", "CSS"],
    url: "https://www.magpecaseservicos.com.br",
    repo: "https://github.com/iomaris/Site-MAG",
    preview: "https://www.magpecaseservicos.com.br/",
  },
  {
    title: "Pioneira Andaimes & Equipamentos",
    description: "Site empresarial da Pioneira Andaimes & Equipamentos, feito para apresentar a empresa com clareza e fortalecer a marca.",
    tags: ["Site empresarial", "HTML", "JavaScript"],
    url: "https://mdvdearaujo.com.br/",
    repo: "https://github.com/iomaris/PioneiraSite",
    preview: "https://mdvdearaujo.com.br/",
    // o domínio bloqueia ser exibido em outras páginas; a prévia monta o site direto do GitHub
    gh: "iomaris/PioneiraSite@master",
  },
  {
    title: "AlphaEdu",
    description: "Site de um software educacional para apoiar estudantes nas atividades do dia a dia.",
    tags: ["Educação", "HTML", "CSS"],
    url: "https://alphaedu-demo.vercel.app/",
    repo: "https://github.com/iomaris/AlphaEdu",
    preview: "https://alphaedu-demo.vercel.app/",
  },
];

const experiences = [
  {
    period: "abr. – out. 2026",
    role: "Assistente Fiscal",
    company: "MAG Peças e Serviços",
    points: ["Emissão e conferência de notas fiscais de entrada e saída", "Controle de contas a pagar e a receber", "Atualização do site da empresa"],
  },
  {
    period: "fev. – abr. 2026",
    role: "Assistente Administrativa",
    company: "Pioneira Andaimes & Equipamentos",
    note: "Contrato temporário",
    points: ["Atendimento ao cliente e controle de locação de equipamentos", "Contratos e acompanhamento de licitações", "Desenvolvimento do site com HTML, CSS e JavaScript"],
  },
  {
    period: "jul. 2025 – fev. 2026",
    role: "Auxiliar de Escritório",
    company: "Live Academia",
    points: ["Padronização do arquivamento: buscas ~30 min mais rápidas por dia", "Organização de informações em sistemas internos", "Suporte interno sobre uso de sistemas"],
  },
];

const education = [
  { title: "Técnico em Cibersegurança", place: "Santander", period: "2026 – atual" },
  { title: "Desenvolvimento Web (Angular)", place: "Eldorado", period: "2026 – atual" },
  { title: "Técnico em Informática", place: "IFAM", period: "2023 – 2025" },
];

const skills = [
  { group: "Administrativo e fiscal", items: ["Notas fiscais", "Contas a pagar e receber", "Excel e Word avançados", "RM Totvs / CRM", "Gestão documental"] },
  { group: "Tecnologia", items: ["HTML, CSS e JavaScript", "Angular", "Banco de dados SQL", "Windows e Linux", "Figma e Canva"] },
  { group: "Jeito de trabalhar", items: ["Organização", "Proatividade", "Aprendizado rápido", "Trabalho em equipe", "Visão de negócio"] },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/mariana-cardoso-b891a734b" },
  { label: "GitHub", href: "https://github.com/iomaris" },
  { label: "Instagram", href: "https://www.instagram.com/ioomaris" },
  { label: "WhatsApp", href: "https://wa.me/5592993618244" },
];

const CV_NAME = "Curriculo-Mariana-Cardoso.pdf";

// Dentro do Claude o navegador bloqueia downloads diretos; lá usamos o recurso de download do Claude.
// No site publicado (Vercel) window.claude não existe e o link funciona normalmente.
async function downloadCV(e: React.MouseEvent) {
  const claude = (window as unknown as { claude?: { use: (n: string) => Promise<any> } }).claude;
  if (!claude) return;
  e.preventDefault();
  const downloads = await claude.use("downloads");
  const blob = await fetch(CV).then((r) => r.blob());
  if (downloads) {
    await downloads.save({ filename: CV_NAME, data: blob }).catch(() => {});
    return;
  }
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = CV_NAME;
  a.click();
}

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const vars = (o: Record<string, string>) => o as React.CSSProperties;
const inClaude = () => "claude" in window;
const finePointer = () => window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function SectionHead({ n, title, children }: { n: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="reveal lg:sticky lg:top-28 lg:self-start">
      <p className="eyebrow">{n}</p>
      <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] md:text-5xl">{title}</h2>
      {children && <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}

// Monta o site do GitHub (via jsDelivr) dentro da prévia, para sites que bloqueiam ser exibidos em outra página.
async function githubSrcDoc(gh: string) {
  const base = `https://cdn.jsdelivr.net/gh/${gh}/`;
  const html = await fetch(base + "index.html").then((r) => {
    if (!r.ok) throw new Error(String(r.status));
    return r.text();
  });
  return html
    .replace(/(src|href)="\/(?!\/)/g, '$1="')
    .replace(/<head([^>]*)>/i, `<head$1><base href="${base}">`);
}

// Prévia ao vivo: o site real numa janela de 1280px, reduzida para caber no quadro.
function LivePreview({ src, gh, title }: { src: string; gh?: string; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [doc, setDoc] = useState<string>();
  const blocked = inClaude();

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 1280));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (gh && !blocked) githubSrcDoc(gh).then(setDoc).catch(() => setDoc(undefined));
  }, [gh, blocked]);

  return (
    <div ref={boxRef} className="relative aspect-[16/10] overflow-hidden bg-card">
      {blocked ? (
        // A prévia do Claude bloqueia sites externos dentro da página; lá mostramos um cartão no lugar.
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_40%,#ffffff,#eeeeef_75%)] text-center">
          <p className="text-2xl font-extrabold tracking-tight md:text-3xl">{title}</p>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em]">
            Abrir site <ArrowUpRight className="h-4 w-4" />
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">Prévia ao vivo no site publicado</span>
        </div>
      ) : (
        <iframe
          {...(gh ? { srcDoc: doc ?? "", sandbox: "allow-scripts" } : { src })}
          title={`Prévia ao vivo do site ${title}`}
          loading="lazy"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          // tamanho de uma tela comum de computador; sites com seção "tela cheia" aparecem como no navegador
          style={{ width: 1300, height: 800, transform: `scale(${scale})` }}
        />
      )}
    </div>
  );
}

// Prévia que inclina em 3D na direção do mouse, com um brilho.
function TiltCard({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !finePointer()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-cursor="Abrir"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block overflow-hidden rounded-[18px] border border-border bg-background shadow-[0_30px_60px_-20px_rgba(23,23,25,0.25)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform hover:shadow-[0_45px_80px_-25px_rgba(23,23,25,0.35)]"
    >
      {children}
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,0.35),transparent_40%)]" />
    </a>
  );
}

// Anel que segue o cursor e cresce sobre links (só em mouse/trackpad).
function CursorRing() {
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!finePointer()) return;
    setOn(true);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, frame = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement).closest<HTMLElement>("a, button, [data-cursor]");
      setLabel(t?.dataset.cursor ?? (t ? " " : ""));
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    loop();
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  if (!on) return null;
  const big = label.trim().length > 0;
  return (
    <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference">
      <div
        className={`flex items-center justify-center rounded-full border border-white font-mono text-[10px] uppercase tracking-[0.14em] text-black transition-all duration-300 ease-out ${
          big ? "h-20 w-20 bg-white" : label ? "h-12 w-12 bg-white/0" : "h-7 w-7"
        }`}
      >
        {big && label}
      </div>
    </div>
  );
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="inline-block transition-transform duration-300 ease-out"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || !finePointer()) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      }}
      onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
    >
      {children}
    </div>
  );
}

function Marquee({ items, reverse, outline }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className={`px-8 text-5xl font-extrabold tracking-[-0.03em] md:text-7xl ${outline ? "text-outline" : ""}`}>{t}</span>
          <span className="text-2xl text-soft">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="overflow-hidden py-3" aria-hidden>
      <div className={`flex w-max ${reverse ? "marquee-reverse" : "marquee"}`}>
        {row}
        {row}
      </div>
    </div>
  );
}

function Character() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const irisRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let lastMove = 0;

    const look = (nx: number, ny: number) => {
      irisRefs.current.forEach((el) => {
        if (el) el.style.transform = `translate(${((nx * MAX_X) / 98) * 100}%, ${((ny * MAX_Y) / 98) * 100}%)`;
      });
      if (!reduce && wrapRef.current) wrapRef.current.style.transform = `rotate(${nx * 1.2}deg) translateX(${nx * 6}px)`;
    };

    const onMove = (e: PointerEvent) => {
      lastMove = Date.now();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = wrapRef.current?.getBoundingClientRect();
        if (!r) return;
        const dx = e.clientX - (r.left + (CHAR.eyeX / CHAR.W) * r.width);
        const dy = e.clientY - (r.top + (CHAR.eyeY / CHAR.H) * r.height);
        const dist = Math.hypot(dx, dy) || 1;
        const pull = Math.min(dist / 260, 1); // cursor perto do rosto = olhar mais centralizado
        look((dx / dist) * pull, (dy / dist) * pull);
      });
    };

    // Sem mouse (celular) ela olha em volta de vez em quando.
    const idle = window.setInterval(() => {
      if (reduce || Date.now() - lastMove < 4000) return;
      const options = [[0, 0], [-0.9, 0.2], [0.9, 0.2], [-0.5, -0.6], [0.6, 0.5]];
      const [x, y] = options[Math.floor(Math.random() * options.length)];
      look(x, y);
    }, 2600);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      clearInterval(idle);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-full origin-bottom transition-transform duration-500 ease-out" style={{ aspectRatio: `${CHAR.W} / ${CHAR.H}` }}>
      <img src="images/char/mariana-3d.webp" alt="Personagem 3D da Mariana segurando um notebook" className="h-full w-full select-none" draggable={false} />
      {EYES.map((eye, i) => {
        const [x, y, w, h] = eye.box;
        const [ix, iy, s] = eye.iris;
        const mask = `url(${eye.mask})`;
        return (
          <div
            key={eye.id}
            aria-hidden
            className="absolute"
            style={{
              left: pct(x, CHAR.W),
              top: pct(y, CHAR.H),
              width: pct(w, CHAR.W),
              height: pct(h, CHAR.H),
              maskImage: mask,
              WebkitMaskImage: mask,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          >
            <img
              ref={(el) => {
                irisRefs.current[i] = el;
              }}
              src={eye.src}
              alt=""
              className="absolute max-w-none transition-transform duration-150 ease-out"
              style={{ left: pct(ix, w), top: pct(iy, h), width: pct(s, w) }}
            />
            <img src={eye.lid} alt="" className="absolute inset-0 h-full w-full" />
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, show: false });
  const progressRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const expLineRef = useRef<HTMLDivElement>(null);

  // Rolagem: seção ativa no menu, barra de progresso e linha da experiência.
  useEffect(() => {
    const onScroll = () => {
      const atBottom = innerHeight + scrollY >= document.body.scrollHeight - 4;
      let current = "";
      for (const [id] of nav) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= innerHeight * 0.35) current = id;
      }
      setActive(atBottom ? "contato" : current);
      const max = document.body.scrollHeight - innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      const ex = expRef.current?.getBoundingClientRect();
      if (ex && expLineRef.current) {
        const p = Math.min(Math.max((innerHeight * 0.6 - ex.top) / ex.height, 0), 1);
        expLineRef.current.style.transform = `scaleY(${p})`;
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  // Pílula do menu desliza até o item ativo.
  useEffect(() => {
    const a = navRef.current?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (a && a.offsetParent) setPill({ left: a.offsetLeft, width: a.offsetWidth, show: true });
    else setPill((p) => ({ ...p, show: false }));
  }, [active]);

  // Elementos aparecem ao entrar na tela.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal, .reveal-row").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Luz suave que acompanha o cursor no topo.
  const onHeroMove = (e: React.MouseEvent) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    heroRef.current!.style.setProperty("--hx", `${e.clientX - r.left}px`);
    heroRef.current!.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };

  return (
    <div className="min-h-screen overflow-x-clip">
      <CursorRing />
      <div ref={progressRef} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-foreground" />

      {/* NAV */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 anim-fade-up" style={delay(500)}>
        <nav
          ref={navRef}
          className="relative flex items-center gap-1 rounded-full border border-border bg-white/80 p-1.5 shadow-[0_12px_40px_-12px_rgba(23,23,25,0.25)] backdrop-blur-xl"
        >
          <span
            aria-hidden
            className="absolute top-1.5 bottom-1.5 rounded-full bg-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: pill.left, width: pill.width, opacity: pill.show ? 1 : 0 }}
          />
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative z-10 rounded-full px-3 py-2 text-[12px] font-semibold transition-colors duration-300 sm:px-4 sm:text-[13px] ${
                active === id ? "text-background" : "text-foreground/60 hover:text-foreground"
              } ${id === "habilidades" ? "hidden sm:block" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="relative overflow-hidden lg:min-h-[100dvh]"
        style={vars({ "--hx": "50%", "--hy": "40%" })}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_circle_at_var(--hx)_var(--hy),rgba(23,23,25,0.06),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f1_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f1_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        <div className="container relative z-20 pt-28 lg:grid lg:min-h-[100dvh] lg:grid-cols-[1fr_auto] lg:items-center lg:pt-0">
          <div className="max-w-md">
            <p className="eyebrow anim-fade-up" style={delay(700)}>
              Administração e Tecnologia
            </p>
            <h1 className="mt-5 text-[52px] font-extrabold leading-[0.95] tracking-[-0.045em] md:text-[84px]">
              <span className="line-mask">
                <span className="font-light text-muted-foreground" style={delay(800)}>
                  Oi, eu sou a
                </span>
              </span>
              <span className="line-mask">
                <span style={delay(920)}>Mariana.</span>
              </span>
            </h1>
            <p className="mt-6 text-xl leading-snug text-muted-foreground anim-fade-up md:text-2xl" style={delay(1100)}>
              Eu organizo processos
              <br />e <strong className="font-extrabold text-foreground">construo sites</strong> que funcionam.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6 anim-fade-up" style={delay(1250)}>
              <Magnetic>
                <a href="#contato" className="btn-dark">
                  <span>Fale comigo</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Magnetic>
              <a href="#projetos" className="link-line pb-1 text-sm font-semibold">
                Ver projetos
              </a>
            </div>
          </div>

          <aside className="hidden w-60 space-y-5 text-right lg:block">
            <p className="eyebrow anim-fade-up" style={delay(1300)}>
              Estudando agora
            </p>
            {nowBuilding.map((item, i) => (
              <div key={item.title} className="flex items-center justify-end gap-4 anim-fade-up" style={delay(1380 + i * 90)}>
                <div>
                  <p className="text-[15px] font-bold">{item.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{item.detail}</p>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
                </span>
              </div>
            ))}
            <p className="flex items-center justify-end gap-2 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground anim-fade-up" style={delay(1700)}>
              <MousePointer2 className="h-3 w-3 -scale-x-100" /> Mexa o cursor para dizer oi
            </p>
          </aside>
        </div>

        <div className="pointer-events-none relative z-10 mx-auto mt-4 h-[62vh] w-max max-w-full lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[88vh] lg:-translate-x-1/2">
          {/* anéis girando atrás da personagem */}
          <div className="absolute left-1/2 top-[30%] -z-10 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2" aria-hidden>
            <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-foreground/10" />
            <div className="spin-slower absolute inset-[12%] rounded-full border border-foreground/[0.07]" />
            <div className="absolute inset-[26%] rounded-full bg-[radial-gradient(circle,#f3f3f4,transparent_70%)]" />
          </div>
          <div className="anim-rise-in h-full">
            <Character />
          </div>
        </div>

        <a
          href="#projetos"
          className="absolute bottom-8 left-5 z-20 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground sm:left-10 lg:flex anim-fade-up"
          style={delay(1800)}
        >
          <span className="relative h-10 w-px overflow-hidden bg-border">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.8s_ease-in-out_infinite] bg-foreground" />
          </span>
          Role para ver
        </a>
      </section>

      {/* FAIXA */}
      <section className="border-y border-border py-6" aria-label="Áreas de atuação">
        <Marquee items={["Sites empresariais", "Sistemas web", "Administrativo", "Fiscal", "Front-end"]} />
        <Marquee items={["HTML", "CSS", "JavaScript", "Angular", "SQL", "Organização"]} reverse outline />
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionHead n="01 / Projetos" title="Projetos">
            Sites e sistemas que já estão no ar. Cada prévia é o site de verdade, carregando ao vivo.
          </SectionHead>
          <ol>
            {projects.map((p, i) => (
              <li key={p.title} className="reveal-row grid gap-8 border-b border-border py-12 first:pt-0 md:grid-cols-[0.9fr_1.3fr] md:items-center md:gap-12">
                <div className="reveal">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{String(i + 1).padStart(2, "0")} / Projeto</p>
                  <h3 className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.description}</p>
                  <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/70">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-line group inline-flex items-center gap-1 pb-1">
                      Ver site <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 pb-1 text-muted-foreground transition hover:text-foreground">
                      Ver código <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="reveal-wipe">
                  <TiltCard href={p.url} label={`Abrir o site ${p.title}`}>
                    <div className="flex items-center gap-1.5 border-b border-border bg-background px-4 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d5d5d7]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d5d5d7]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#d5d5d7]" />
                      <span className="ml-3 truncate font-mono text-[10px] text-muted-foreground">{p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
                    </div>
                    <LivePreview src={p.preview} gh={p.gh} title={p.title} />
                  </TiltCard>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionHead n="02 / Sobre" title="Sobre mim" />
          <div>
            <p className="reveal text-3xl font-light leading-[1.2] tracking-[-0.02em] md:text-5xl">
              Coloco ordem no que é complexo e <strong className="font-extrabold">construo o que ainda não existe.</strong>
            </p>
            <div className="mt-10 grid gap-6 text-[15px] leading-relaxed text-muted-foreground md:grid-cols-2">
              <p className="reveal" style={vars({ "--d": "100ms" })}>
                Cresci vendo minha família empreender, e isso me ensinou cedo a entender como um negócio funciona por dentro: atendimento, papelada, caixa e cliente.
              </p>
              <p className="reveal" style={vars({ "--d": "200ms" })}>
                Hoje junto a rotina administrativa e fiscal, onde sou organizada e cuidadosa com detalhes, com a tecnologia, onde construo sites e sigo estudando desenvolvimento web e cibersegurança.
              </p>
            </div>
            <p className="reveal mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground" style={vars({ "--d": "300ms" })}>
              Fora do trabalho: livros · xadrez · corrida · meta de 10 km
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="border-t border-border py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionHead n="03 / Experiência" title="Experiência" />
          <div ref={expRef} className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
            <div ref={expLineRef} className="absolute left-0 top-2 bottom-2 w-px origin-top scale-y-0 bg-foreground" />
            {experiences.map((e, i) => (
              <article key={e.company} className="reveal relative pb-14 last:pb-0" style={vars({ "--d": `${i * 80}ms` })}>
                <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-background bg-foreground ring-1 ring-foreground" />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{e.period}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">{e.role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-3 text-[15px] text-foreground/70">
                  {e.company}
                  {e.note && (
                    <span className="rounded-full border border-border px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{e.note}</span>
                  )}
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-[0.6em] h-px w-3 shrink-0 bg-foreground/40" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionHead n="04 / Habilidades" title="Habilidades" />
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((s, i) => (
              <div
                key={s.group}
                className="reveal spotlight group rounded-3xl border border-border bg-background p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-2 hover:border-foreground/30 hover:shadow-[0_30px_60px_-25px_rgba(23,23,25,0.3)]"
                style={vars({ "--d": `${i * 120}ms` })}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:text-foreground" />
                </div>
                <h3 className="mt-8 text-2xl font-extrabold leading-tight tracking-[-0.02em]">{s.group}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-border px-3 py-1.5 text-[13px] text-foreground/75 transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <SectionHead n="05 / Formação" title="Formação" />
          <ul>
            {education.map((ed, i) => (
              <li
                key={ed.title}
                className="reveal group grid gap-2 border-b border-border py-7 first:pt-0 transition-[padding] duration-500 md:grid-cols-[1fr_auto] md:items-baseline md:hover:pl-4"
                style={vars({ "--d": `${i * 80}ms` })}
              >
                <div>
                  <p className="text-xl font-extrabold tracking-[-0.02em] md:text-2xl">{ed.title}</p>
                  <p className="mt-1 text-[15px] text-muted-foreground">{ed.place}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{ed.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden bg-foreground py-28 text-background md:py-40">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
        <div className="container relative">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">06 / Contato</p>
          <h2 className="reveal wave mt-6 text-[15vw] font-extrabold leading-[0.9] tracking-[-0.05em] md:text-[9rem]">
            {"Vamos conversar?".split("").map((c, i) => (
              <span key={i} className="wave-letter" style={{ transitionDelay: `${i * 25}ms` }}>
                {c === " " ? " " : c}
              </span>
            ))}
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="reveal link-line mt-10 inline-block break-all pb-1 text-2xl font-light md:text-4xl"
            style={vars({ "--d": "120ms" })}
          >
            {EMAIL}
          </a>
          <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold" style={vars({ "--d": "200ms" })}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-background/80 transition hover:text-background">
                {s.label} <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
            <Magnetic>
              <a
                href={CV}
                download={CV_NAME}
                onClick={downloadCV}
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground transition hover:bg-white/85"
              >
                Baixar currículo <Download className="h-4 w-4" />
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <footer className="bg-foreground pb-8 text-background/50">
        <div className="container flex flex-col justify-between gap-3 border-t border-background/15 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] sm:flex-row">
          <p>© 2026 Mariana Cardoso</p>
          <a href="#inicio" className="transition hover:text-background">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
