import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, MousePointer2 } from "lucide-react";

const EMAIL = "maryazevedo2036@gmail.com";
const CV = "curriculo-mariana-cardoso.pdf";

// Medidas da imagem da personagem (px da imagem original) para posicionar os olhos.
const CHAR = { W: 1856, H: 2304, eyeX: 928, eyeY: 650 };
const EYES = [
  { id: "L", box: [700, 595, 165, 110], iris: [48, 6, 98], src: "images/char/iris-L.webp", lid: "images/char/lid-L.webp", mask: "images/char/mask-L.png" },
  { id: "R", box: [995, 595, 165, 110], iris: [16, 4, 98], src: "images/char/iris-R.webp", lid: "images/char/lid-R.webp", mask: "images/char/mask-R.png" },
] as const;
const MAX_X = 12; // quanto a íris anda, em px da imagem original
const MAX_Y = 4;

const nav = [
  ["sobre", "Sobre"],
  ["projetos", "Projetos"],
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
    title: "Pioneira Andaimes & Equipamentos",
    description: "Site empresarial da Pioneira Andaimes & Equipamentos, feito para apresentar a empresa com clareza e fortalecer a marca.",
    tags: "Site empresarial · HTML · CSS · JavaScript",
    url: "https://mdvdearaujo.com.br/",
  },
  {
    title: "MAG Peças e Serviços",
    description: "Atualização do site com foco nos serviços e nos canais de contato, para ampliar a divulgação e atrair clientes.",
    tags: "Site empresarial · Conteúdo",
    url: "https://www.magpecaseservicos.com.br",
  },
  {
    title: "Integral Refrigeração",
    description: "Site empresarial para divulgação dos serviços de refrigeração da Integral, com foco em apresentar os serviços e facilitar o contato.",
    tags: "Site empresarial · Divulgação",
    url: "https://integralerefrigeracao.com.br/",
  },
  {
    title: "AlphaEdu",
    description: "Proposta de software educacional para apoiar estudantes nas atividades do dia a dia.",
    tags: "Educação · Lógica de sistema",
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

function Label({ children }: { children: string }) {
  return <p className="eyebrow">— {children} —</p>;
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

  // Marca no menu a seção que está na tela.
  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      let current = "";
      for (const [id] of nav) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(atBottom ? "contato" : current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* NAV */}
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 anim-fade-up" style={delay(600)}>
        <nav className="flex items-center gap-4 rounded-full border border-white bg-white/85 px-5 py-3 shadow-[0_18px_40px_rgba(107,74,60,0.10)] backdrop-blur-xl sm:gap-7 sm:px-7">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`flex items-center text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors hover:text-foreground sm:text-[11px] sm:tracking-[0.12em] ${
                active === id ? "text-foreground" : "text-foreground/60"
              } ${id === "habilidades" ? "hidden sm:flex" : ""}`}
            >
              <span
                className={`h-1.5 rounded-full bg-rose transition-all duration-300 ${active === id ? "mr-2 w-1.5 opacity-100" : "mr-0 w-0 opacity-0"}`}
              />
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden lg:min-h-[100dvh]">

        <div className="container relative z-20 pt-28 lg:grid lg:min-h-[100dvh] lg:grid-cols-[1fr_auto] lg:items-center lg:pt-0">
          <div className="max-w-md">
            <h1 className="font-script text-[56px] leading-[1.05] text-foreground anim-fade-up md:text-[80px]" style={delay(900)}>
              Oi, eu sou a <span className="text-rose">Mariana</span>.
            </h1>
            <p className="mt-3 font-serif text-[24px] leading-[1.2] text-foreground/80 anim-fade-up md:text-[32px]" style={delay(1000)}>
              <em>Eu organizo processos,</em>
              <br />e <strong className="font-serif font-bold text-foreground">construo sites</strong> que funcionam.
            </p>
            <p className="mt-4 font-serif text-lg text-muted-foreground anim-fade-up md:text-xl" style={delay(1100)}>
              Do fiscal ao front-end, com cuidado em cada detalhe.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 anim-fade-up" style={delay(1200)}>
              <a href="#contato" className="btn-dark">
                Fale comigo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a href="#projetos" className="btn-ghost">
                Ver projetos <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <aside className="hidden w-60 space-y-5 text-right lg:block">
            <div className="anim-fade-up" style={delay(1300)}>
              <Label>Estudando agora</Label>
            </div>
            {nowBuilding.map((item, i) => (
              <div key={item.title} className="flex items-center justify-end gap-4 anim-fade-up" style={delay(1380 + i * 80)}>
                <div>
                  <p className="text-[15px] font-medium">{item.title}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{item.detail}</p>
                </div>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
              </div>
            ))}
            <p className="flex items-center justify-end gap-2 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-rose anim-fade-up" style={delay(1700)}>
              <MousePointer2 className="h-3 w-3 -scale-x-100" /> Mexa o cursor para dizer oi
            </p>
          </aside>
        </div>

        <div className="pointer-events-none relative z-10 mx-auto mt-4 h-[62vh] w-max max-w-full lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[88vh] lg:-translate-x-1/2">
          <div className="anim-rise-in h-full">
            <Character />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div className="reveal">
            <Label>01 · Sobre</Label>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] md:text-6xl">
              Coloco ordem no que é complexo e construo <em className="font-script not-italic text-rose">o que ainda não existe.</em>
            </h2>
          </div>
          <div className="reveal space-y-5 text-[15px] leading-relaxed text-muted-foreground md:pt-12">
            <p>Cresci vendo minha família empreender, e isso me ensinou cedo a entender como um negócio funciona por dentro: atendimento, papelada, caixa e cliente.</p>
            <p>
              Hoje junto as duas coisas que mais gosto: a rotina administrativa e fiscal, onde sou organizada e cuidadosa com detalhes, e a tecnologia, onde construo sites e sigo estudando desenvolvimento web e cibersegurança.
            </p>
            <p className="text-foreground">Fora do trabalho: livros, xadrez, corrida e uma meta de 10 km.</p>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="border-t border-border py-24 md:py-32">
        <div className="container">
          <div className="reveal">
            <Label>02 · Prova de trabalho</Label>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl">
              O que já <em className="font-script not-italic text-rose">entreguei.</em>
            </h2>
          </div>

          <ol className="mt-14 border-t border-foreground/10">
            {projects.map((p, i) => {
              const Row = p.url ? "a" : "div";
              return (
                <li key={p.title} className="reveal border-b border-foreground/10">
                  <Row
                    {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group grid gap-3 rounded-2xl py-8 transition-colors md:grid-cols-[70px_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:px-5 md:hover:bg-card"
                  >
                    <span className="font-mono text-xs text-rose">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-3xl md:text-4xl">{p.title}</h3>
                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mauve">{p.tags}</p>
                    </div>
                    {p.url ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em]">
                        Ver site <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Conceito</span>
                    )}
                  </Row>
                </li>
              );
            })}
            <li className="reveal">
              <a href="#contato" className="group grid gap-3 py-8 md:grid-cols-[70px_1fr_auto] md:items-center md:gap-8 md:px-5">
                <span className="font-mono text-xs text-rose">{String(projects.length + 1).padStart(2, "0")}</span>
                <p className="font-serif text-3xl italic text-muted-foreground transition group-hover:text-foreground md:text-4xl">O próximo pode ser o seu.</p>
                <span className="btn-dark w-max">
                  Vamos conversar
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container">
          <div className="reveal">
            <Label>03 · Experiência</Label>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl">
              Onde já <em className="font-script not-italic text-rose">trabalhei.</em>
            </h2>
          </div>
          <div className="mt-14 border-t border-foreground/10">
            {experiences.map((e) => (
              <article key={e.company} className="reveal grid gap-4 border-b border-foreground/10 py-10 md:grid-cols-[200px_1fr_1.3fr] md:gap-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:pt-2">{e.period}</p>
                <div>
                  <h3 className="font-serif text-3xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-mauve">{e.company}</p>
                  {e.note && (
                    <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{e.note}</span>
                  )}
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container">
          <div className="reveal">
            <Label>04 · Formação</Label>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl">
              Onde <em className="font-script not-italic text-rose">estudei.</em>
            </h2>
          </div>
          <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {education.map((ed) => (
              <li key={ed.title} className="reveal border-t border-foreground/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{ed.period}</p>
                <p className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{ed.title}</p>
                <p className="mt-1 text-sm text-mauve">{ed.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="border-t border-border bg-card py-24 md:py-32">
        <div className="container">
          <div className="reveal">
            <Label>05 · Habilidades</Label>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl">
              O que eu <em className="font-script not-italic text-rose">sei fazer.</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {skills.map((s, i) => (
              <div key={s.group} className="reveal flex flex-col rounded-3xl border border-border bg-background p-8 shadow-[0_18px_40px_rgba(107,74,60,0.06)] transition hover:-translate-y-1 hover:border-rose/50">
                <span className="font-mono text-xs text-rose">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-3xl">{s.group}</h3>
                <span className="mt-5 h-px w-10 bg-rose/60" />
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,154,144,0.35),transparent_45%)]" />
        <div className="container relative">
          <div className="reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">— 06 · Contato —</p>
            <h2 className="mt-6 font-script text-6xl leading-[1.05] md:text-[8rem]">
              Vamos <span className="text-rose">conversar?</span>
            </h2>
            <a href={`mailto:${EMAIL}`} className="mt-10 inline-block break-all border-b border-primary-foreground/30 pb-1 font-serif text-2xl italic transition hover:border-rose hover:text-rose md:text-4xl">
              {EMAIL}
            </a>
          </div>
          <div className="reveal mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-rose">
                {s.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
            <a href={CV} download={CV_NAME} onClick={downloadCV} className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary transition hover:bg-rose hover:text-white">
              Baixar currículo <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary pb-8 text-primary-foreground/50">
        <div className="container flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] sm:flex-row">
          <p>© 2026 Mariana Cardoso</p>
        </div>
      </footer>
    </div>
  );
}
