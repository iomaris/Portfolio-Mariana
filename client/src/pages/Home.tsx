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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { value: "IFAM", label: "Formação técnica em Informática" },
  { value: "3 áreas", label: "Atuação em RH, financeiro e administrativo" },
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
    title: "Assistente Administrativa | Pioneira Equipamentos",
    period: "Atuação atual",
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
    period: "Experiência anterior",
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
    period: "Base da trajetória",
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
  { category: "Administrativo", items: ["Organização", "Planejamento", "Comunicação", "Atendimento"] },
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
  { icon: Zap, title: "Experiência Multifuncional", subtitle: "3+ anos em diferentes áreas" },
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
                Técnica em Informática pelo IFAM, com experiência em diferentes áreas. Sou alguém que gosta de aprender, se adaptar e fazer as coisas com dedicação. Aqui você vai conhecer um pouco de quem sou, o que já fiz e para onde quero ir.
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
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div>
              <p className="section-kicker">Sobre mim</p>
              <h2 className="section-title">Uma trajetória construída com consciência, disciplina e identidade.</h2>
            </div>

            <div className="panel space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-2xl bg-accent/10 p-3 text-accent">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Provérbios 27:7</p>
                  <p className="mt-2 text-muted-foreground">
                    "A alma farta pisa o favo de mel, mas à alma faminta todo amargo é doce."
                  </p>
                </div>
              </div>
              <p className="text-base leading-8 text-muted-foreground">
                Esse versículo traduz muito da forma como enxergo a vida: decisões precisam ser tomadas com lucidez, não apenas por carência, impulso ou urgência. Levo esse princípio comigo no dia a dia, porque acredito que maturidade se constrói quando aprendemos a reconhecer valor, limites e propósito.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="panel hover-lift">
                    <div className="mb-4 inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel hover-lift overflow-hidden p-0">
              <img src="/images/coffee.jpeg" alt="Registro de um momento de Mariana" className="h-72 w-full object-cover" />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Visão de mundo</p>
                <p className="mt-3 leading-8 text-muted-foreground">
                  Minha família sempre foi importante na minha formação. Cresci vendo esforço, trabalho e empreendedorismo. Isso me ajudou a desenvolver responsabilidade, entender negócios e ter vontade de crescer com consistência.
                </p>
              </div>
            </div>

            <div className="panel space-y-5 hover-lift">
              <div className="flex items-center gap-3 text-accent">
                <GraduationCap className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.24em]">Formação</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Técnica em Informática</h3>
                <p className="text-muted-foreground">Instituto Federal do Amazonas (IFAM)</p>
              </div>
              <p className="leading-8 text-muted-foreground">
                A formação em Informática me ajudou a pensar de forma lógica, a entender tecnologia e a desenvolver soluções com mais estrutura e clareza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="bg-secondary/35 py-24 md:py-32">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Experiência profissional</p>
            <h2 className="section-title">Experiência prática, postura multifuncional e visão de negócio.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Passei por diferentes funções e áreas, e cada uma me ensinou algo importante. Aprendi sobre operação, atendimento, organização interna e como as coisas funcionam de verdade. Cada experiência me moldou um pouco mais.
            </p>
          </div>

          <div className="grid gap-6">
            {experiences.map((item, index) => (
              <div key={item.title} className="panel grid gap-6 md:grid-cols-[220px_1fr] md:items-start hover-lift">
                <div>
                  <div className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    {item.period}
                  </div>
                  <div className="mt-4 hidden md:block">
                    <div className="text-3xl font-black text-accent/20">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-2xl bg-accent/10 p-3 text-accent">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-3 leading-8 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {item.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-border bg-background px-4 py-4 text-sm text-muted-foreground hover-lift">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="py-24 md:py-32">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Projetos</p>
            <h2 className="section-title">Projetos que conectam tecnologia, organização e utilidade real.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Gosto de pensar na experiência, na clareza das informações e na forma como a tecnologia pode facilitar processos. Projetos que fazem sentido, que resolvem algo real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="panel flex h-full flex-col justify-between hover-lift">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{project.category}</p>
                  <h3 className="mt-3 text-3xl font-black">{project.title}</h3>
                  <p className="mt-4 leading-8 text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-accent/15 bg-accent/10 px-4 py-2 text-xs font-bold text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="bg-secondary/35 py-24 md:py-32">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Habilidades & Competências</p>
            <h2 className="section-title">Conjunto de habilidades que me definem profissionalmente.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="panel space-y-5 hover-lift">
                <h3 className="text-xl font-bold text-accent">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.title} className="panel text-center hover-lift">
                  <div className="inline-flex rounded-2xl bg-accent/10 p-4 text-accent mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{achievement.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{achievement.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-24 md:py-32">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Galeria</p>
            <h2 className="section-title">Momentos que definem minha jornada.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-2 overflow-hidden rounded-[1.8rem] border border-border bg-card p-3 shadow-sm hover-lift">
              <img src="/images/group.jpeg" alt="Mariana em grupo" className="h-64 w-full rounded-[1.2rem] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.8rem] border border-border bg-card p-3 shadow-sm hover-lift">
              <img src="/images/chess.jpeg" alt="Xadrez" className="h-64 w-full rounded-[1.2rem] object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.8rem] border border-border bg-card p-3 shadow-sm hover-lift">
              <img src="/images/lifestyle.jpeg" alt="Registro pessoal de Mariana" className="h-64 w-full rounded-[1.2rem] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="essencia" className="bg-secondary/35 py-24 md:py-32">
        <div className="container space-y-12">
          <div className="max-w-3xl">
            <p className="section-kicker">Essência e interesses</p>
            <h2 className="section-title">Um portfólio pessoal também precisa mostrar o que me forma por dentro.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Além da minha formação e experiência, existem hábitos, referências e objetivos que moldam a minha maneira de pensar, agir e construir futuro.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {interests.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="panel hover-lift">
                    <div className="mb-4 inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="panel space-y-5 hover-lift">
              <div className="flex items-center gap-3 text-accent">
                <Target className="h-5 w-5" />
                <p className="text-sm font-bold uppercase tracking-[0.24em]">Metas atuais</p>
              </div>
              <div className="space-y-3">
                {goals.map((goal) => (
                  <div key={goal} className="flex items-start gap-3 rounded-2xl border border-border bg-background px-4 py-4">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-sm leading-7 text-muted-foreground">{goal}</p>
                  </div>
                ))}
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
