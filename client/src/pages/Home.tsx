import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPinned,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
  Award,
  Linkedin,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { value: "IFAM", label: "Formação técnica em Informática" },
  { value: "Mag Peças", label: "Assistente Administrativo Fiscal" },
  { value: "2 projetos", label: "Soluções com foco em negócio e educação" },
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "Responsabilidade",
    description:
      "Quando pego algo para fazer, faço com cuidado. Atenção aos detalhes e compromisso com o que prometo.",
  },
  {
    icon: Sparkles,
    title: "Versatilidade",
    description:
      "Aprendo rápido e me adapto bem. Gosto de transitar entre áreas diferentes e contribuir onde for necessário.",
  },
  {
    icon: HeartHandshake,
    title: "Inteligência emocional",
    description:
      "Procuro agir com equilíbrio e consciência. Entendo que relacionamentos e decisões precisam de maturidade.",
  },
  {
    icon: Code2,
    title: "Base técnica",
    description:
      "Minha formação me ajuda a pensar de forma lógica e a entender como as coisas funcionam por trás das cenas.",
  },
];

const experiences = [
  {
    title: "Assistente Administrativo Fiscal e Documental | Mag Peças e Serviços",
    period: "Experiência",
    description:
      "Atuação no suporte administrativo com ênfase em rotinas fiscais e controle documental, contribuindo para a organização dos processos internos e a fluidez das operações da empresa.",
    points: [
      "Emissão de notas fiscais de entrada e saída, com atenção à conferência de dados e conformidade dos processos",
      "Arquivamento, organização e controle de documentos administrativos e fiscais",
      "Apoio às rotinas internas com foco em organização, padronização e eficiência operacional",
    ],
  },
  {
    title: "Assistente Administrativa | Pioneira Equipamentos",
    period: "Trajetória",
    description:
      "Experiência multifuncional com participação em rotinas administrativas, financeiras e de recursos humanos, além de apoio a marketing e sistemas internos.",
    points: [
      "Suporte a processos operacionais e organizacionais",
      "Acompanhamento de demandas administrativas e financeiras",
      "Contribuição com organização interna e visão de negócio",
    ],
  },
  {
    title: "Consultora de Vendas | Live Academia",
    period: "Trajetória",
    description:
      "Atuação direta com atendimento, relacionamento com clientes, comunicação comercial e foco em resultados.",
    points: [
      "Abordagem consultiva e comunicação clara",
      "Acompanhamento de metas e apoio ao comercial",
      "Fortalecimento de relacionamento com o público",
    ],
  },
  {
    title: "Jovem Aprendiz – Auxiliar de Escritório | Live Academia",
    period: "Trajetória",
    description:
      "Vivência formadora em organização de rotinas, suporte administrativo e construção de disciplina profissional.",
    points: [
      "Aprendizado prático sobre rotina corporativa",
      "Desenvolvimento de postura profissional",
      "Evolução em organização, comunicação e responsabilidade",
    ],
  },
];

const projects = [
  {
    title: "Site Pioneira",
    category: "Projeto profissional",
    description:
      "Desenvolvimento de um site profissional para apresentar a empresa Pioneira Equipamentos de forma mais clara e confiável. O foco foi valorizar a presença digital, organizar informações e fortalecer a imagem da marca.",
    tags: ["Site profissional", "Experiência do usuário", "Apresentação de marca"],
  },
  {
    title: "AlphaEdu",
    category: "Projeto educacional",
    description:
      "Criação de uma proposta de software educacional voltado para apoiar estudantes em suas atividades diárias. O projeto nasceu com a intenção de unir tecnologia, acessibilidade e utilidade prática no aprendizado.",
    tags: ["Educação", "Lógica de sistema", "Solução digital"],
  },
];

const skills = [
  { category: "Administrativo", items: ["Emissão de NF", "Gestão Documental", "Organização", "Planejamento"] },
  { category: "Técnico", items: ["Lógica de programação", "Análise de sistemas", "Resolução de problemas", "Tecnologia"] },
  { category: "Soft Skills", items: ["Responsabilidade", "Adaptabilidade", "Trabalho em equipe", "Aprendizado contínuo"] },
];

const interests = [
  {
    icon: BookOpen,
    title: "Leitura",
    text: "Amo livros que exploram a psicologia humana e questões sociais. Crime e Castigo, 1984 e A Metamorfose são algumas das minhas favoritas.",
  },
  {
    icon: Target,
    title: "Corrida e academia",
    text: "Exercício físico faz parte da minha rotina e do meu equilíbrio. Tenho como meta pessoal correr 10 km e estou construindo isso aos poucos.",
  },
  {
    icon: Trophy,
    title: "Raciocínio lógico",
    text: "Xadrez, sudoku... atividades que desafiam a mente. Já participei de torneios e me identifico com esse tipo de estímulo.",
  },
  {
    icon: MapPinned,
    title: "Vivências e viagens",
    text: "Conhecer novos lugares amplia a visão de mundo. Já visitei São Paulo, Joinville, Balneário Camboriú e Curitiba. Alter do Chão está na minha lista.",
  },
];

const goals = [
  "Aprimorar o inglês para expandir oportunidades.",
  "Conquistar a CNH e ter mais autonomia.",
  "Evoluir em programação e desenvolvimento.",
  "Crescer com equilíbrio entre carreira, propósito e disciplina.",
];

const achievements = [
  { icon: Award, title: "Técnica em Informática", subtitle: "IFAM - Instituto Federal do Amazonas" },
  { icon: FileText, title: "Gestão Administrativa", subtitle: "Foco em processos fiscais e organização" },
  { icon: Trophy, title: "Projetos Implementados", subtitle: "2 soluções com impacto real" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-rose" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 text-left">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl gradient-rose text-white shadow-rose">
              M
            </span>
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-accent uppercase">Mariana Cardoso</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {[
              ["sobre", "Sobre"],
              ["experiencia", "Experiência"],
              ["projetos", "Projetos"],
              ["habilidades", "Habilidades"],
              ["essencia", "Essência"],
              ["contato", "Contato"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-muted-foreground transition hover:text-accent">
                {label}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contato")}
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Entrar em contato
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="container grid items-center gap-14 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
                Mariana Cardoso
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Técnica em Informática pelo IFAM e Assistente Administrativo. Sou alguém que gosta de aprender, se adaptar e fazer as coisas com dedicação. Aqui você vai conhecer um pouco de quem sou, o que já fiz e para onde quero ir.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" onClick={() => scrollToSection("projetos")} className="border-accent text-accent hover:bg-accent/5">
                Ver projetos
              </Button>
            </div>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm hover-lift">
                  <p className="text-2xl font-black text-accent">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="mx-auto max-w-[560px]">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-rose-lg hover-lift">
                <div className="overflow-hidden rounded-[1.45rem] bg-secondary/40">
                  <img src="/images/hero.jpeg" alt="Retrato de Mariana" className="w-full h-auto max-h-[600px] object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-10">
          <button onClick={() => scrollToSection("sobre")} className="group flex flex-col items-center gap-2 text-accent">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Explorar</span>
            <ChevronDown className="h-5 w-5 transition group-hover:translate-y-1" />
          </button>
        </div>
      </section>

      <section id="sobre" className="py-24 md:py-32">
        <div className="container space-y-24">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="panel space-y-8 hover-lift">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Quote className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">Provérbios 27:7</p>
                <p className="text-xl font-medium italic leading-relaxed text-foreground">
                  "A alma farta pisa o favo de mel, mas à alma faminta todo amargo é doce."
                </p>
              </div>
              <p className="leading-8 text-muted-foreground">
                Esse versículo traduz muito da forma como enxergo a vida: decisões precisam ser tomadas com lucidez, não apenas por carência, impulso ou urgência. Levo esse princípio comigo no campo pessoal e também no profissional, porque acredito que maturidade se constrói quando aprendemos a reconhecer valor, limites e propósito.
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-black md:text-5xl">Minha essência</h2>
                <p className="text-lg text-muted-foreground">O que me move e como eu trabalho.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="panel space-y-4 hover-lift">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="panel grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center hover-lift">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                <GraduationCap className="h-4 w-4" /> Formação
              </div>
              <h3 className="text-3xl font-black">Técnica em Informática</h3>
              <p className="text-sm font-bold text-muted-foreground">Instituto Federal do Amazonas (IFAM)</p>
              <p className="leading-8 text-muted-foreground">
                Minha formação fortaleceu meu raciocínio lógico, meu contato com tecnologia e minha capacidade de desenvolver soluções com mais estrutura, clareza e visão de processo.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary/40">
              <img src="/images/formacao.jpeg" alt="Mariana IFAM" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-card py-24 md:py-32">
        <div className="container space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-black md:text-5xl">Experiência</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Minha trajetória profissional e os aprendizados em cada etapa.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="panel group relative flex flex-col justify-between overflow-hidden hover-lift">
                <div className="absolute -right-4 -top-4 text-8xl font-black text-accent/5 transition-colors group-hover:text-accent/10">
                  0{index + 1}
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{exp.period}</span>
                    <h3 className="text-2xl font-black leading-tight">{exp.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 md:py-32">
        <div className="container space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black md:text-5xl">Projetos</h2>
            <p className="max-w-2xl text-muted-foreground">Gosto de pensar na experiência, na clareza das informações e na forma como a tecnologia pode facilitar processos.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="panel flex flex-col justify-between space-y-8 hover-lift">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{project.category}</span>
                    <h3 className="text-3xl font-black">{project.title}</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-4 py-1 text-xs font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-fit border-accent text-accent hover:bg-accent/5">
                  Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-card py-24 md:py-32">
        <div className="container space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-black md:text-5xl">Habilidades</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">Competências técnicas e comportamentais que utilizo no dia a dia.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.category} className="panel space-y-6 hover-lift">
                <h3 className="text-xl font-black">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-xl bg-accent/5 px-4 py-2 text-sm font-semibold text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="panel flex items-center gap-5 hover-lift">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-black">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="essencia" className="py-24 md:py-32">
        <div className="container space-y-24">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-black md:text-5xl">Essência</h2>
              <p className="max-w-2xl text-muted-foreground">Um pouco mais sobre meus interesses e o que busco para o futuro.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="grid gap-6">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="panel flex gap-6 hover-lift">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="panel space-y-8 hover-lift">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black">Metas e objetivos</h3>
                  <p className="text-muted-foreground">O que estou construindo agora.</p>
                </div>
                <div className="space-y-4">
                  {goals.map((goal) => (
                    <div key={goal} className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:border-accent/40">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <p className="text-sm font-medium">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="panel grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center hover-lift">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Personalidade profissional</p>
              <h3 className="text-3xl font-black">Versátil, dedicada e em constante evolução.</h3>
            </div>
            <p className="leading-8 text-muted-foreground">
              Eu me vejo como uma pessoa que aprende rápido, se adapta com facilidade e gosta de fazer as coisas com profundidade. Um desafio para mim é aprender a delegar e confiar mais no trabalho em equipe, mas venho trabalhando isso para melhorar minha colaboração. No geral, sou alguém que se importa com qualidade, com as pessoas e com o impacto do que faz.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 md:py-32">
        <div className="container">
          <div className="panel overflow-hidden p-0 hover-lift">
            <div className="grid md:grid-cols-[1fr_0.92fr]">
              <div className="bg-foreground px-8 py-10 text-white md:px-12 md:py-14">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Contato</p>
                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">Quer me conhecer melhor?</h2>
                <p className="mt-5 max-w-xl leading-8 text-white/72">
                  Estou sempre aberta para conversar, conhecer pessoas novas e explorar oportunidades. Se quiser saber mais sobre mim, é só chamar!
                </p>
              </div>

              <div className="grid gap-4 bg-card p-8 md:p-10">
                {[
                  { icon: Mail, title: "Email", value: "maryazevedo2036@gmail.com", href: "mailto:maryazevedo2036@gmail.com" },
                  { icon: Instagram, title: "Instagram", value: "@io.marys", href: "https://instagram.com/io.marys" },
                  { icon: Phone, title: "WhatsApp", value: "+55 92 99361-8244", href: "https://wa.me/5592993618244" },
                  { icon: Linkedin, title: "LinkedIn", value: "Mariana Cardoso", href: "https://linkedin.com/in/mariana-cardoso-b891a734b" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-5 transition hover:border-accent/40 hover:bg-accent/5 hover-lift"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold">{item.title}</span>
                        <span className="block text-sm text-muted-foreground">{item.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-accent">Mariana Cardoso</p>
            <p className="mt-2 text-sm text-muted-foreground">Portfólio pessoal com posicionamento profissional.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Dumbbell className="h-4 w-4" /> disciplina</span>
            <span className="inline-flex items-center gap-2"><Code2 className="h-4 w-4" /> tecnologia</span>
            <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4" /> leitura</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
