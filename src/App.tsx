import { useEffect, useState, type ReactNode, type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type ServiceItem = {
  title: string;
  bullets: string[];
  icon: (props: IconProps) => ReactNode;
  accent: string;
};

type FeatureItem = {
  title: string;
  description: string;
  icon: (props: IconProps) => ReactNode;
};

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contato", href: "#contato" },
] as const;

const credibilityItems = [
  "Atendimento Especializado",
  "Equipamentos Profissionais",
  "Diagnóstico Técnico",
  "Atendimento Residencial e Comercial",
  "Peças de Qualidade",
  "Serviço Garantido",
] as const;

const processSteps = [
  "Agendamento",
  "Avaliação Técnica",
  "Diagnóstico",
  "Execução",
  "Testes",
  "Entrega",
] as const;

const testimonials = [
  {
    quote:
      "A equipe foi extremamente profissional. Resolveram um problema que outro técnico não conseguiu identificar.",
    author: "Cliente residencial",
  },
  {
    quote: "Pontualidade, organização e excelente atendimento.",
    author: "Atendimento programado",
  },
  {
    quote: "Meu ar-condicionado voltou a funcionar perfeitamente. Recomendo.",
    author: "Serviço concluído com sucesso",
  },
  {
    quote: "Serviço limpo, transparente e muito profissional.",
    author: "Experiência premium",
  },
] as const;

const faqs = [
  {
    question: "Meu ar está gelando pouco.",
    answer:
      "Pode haver diversos fatores: sujeira, vazamento, falha elétrica, sensores ou componentes comprometidos. Um diagnóstico técnico identifica a causa antes de qualquer intervenção.",
  },
  {
    question: "Vale a pena consertar minha geladeira?",
    answer:
      "Depende do estado geral do equipamento, da idade de uso e do tipo de falha. Após a avaliação, explicamos com clareza as opções mais adequadas para decisão segura.",
  },
  {
    question: "Vocês atendem empresas?",
    answer:
      "Sim. Atendemos residências, comércios, escritórios e operações que precisam de previsibilidade, organização técnica e padrão profissional no atendimento.",
  },
  {
    question: "Fazem instalação?",
    answer:
      "Sim. Realizamos instalações com foco em acabamento, segurança, performance e configuração correta do equipamento desde o início.",
  },
  {
    question: "Trabalham com manutenção preventiva?",
    answer:
      "Sim. A manutenção preventiva reduz risco de paradas, preserva desempenho e ajuda a evitar custos maiores por falhas que poderiam ser identificadas antes.",
  },
] as const;

const businessSegments = [
  "Residências",
  "Comércios",
  "Escritórios",
  "Clínicas",
  "Restaurantes",
  "Pequenas operações técnicas",
] as const;

const galleryItems = [
  {
    title: "Instalações com acabamento premium",
    label: "Instalações",
    image: "/gallery/instalacao-split.svg",
  },
  {
    title: "Higienização com padrão técnico",
    label: "Manutenções",
    image: "/gallery/higienizacao-premium.svg",
  },
  {
    title: "Refrigeração comercial em foco",
    label: "Equipamentos",
    image: "/gallery/refrigeracao-comercial.svg",
  },
  {
    title: "Automação e Wallbox com segurança",
    label: "Projetos integrados",
    image: "/gallery/wallbox-automacao.svg",
  },
] as const;

function SnowflakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2v20" strokeLinecap="round" />
      <path d="M4.93 6 19.07 18" strokeLinecap="round" />
      <path d="M4.93 18 19.07 6" strokeLinecap="round" />
      <path d="m12 2 2.25 2.25M12 2 9.75 4.25M12 22l2.25-2.25M12 22l-2.25-2.25" strokeLinecap="round" />
      <path d="m4.93 6 3.07.37-.74 2.99M19.07 18l-3.07-.37.74-2.99M4.93 18l3.07-.37-.74-2.99M19.07 6l-3.07.37.74 2.99" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FridgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M6 10.5h12" />
      <path d="M9 6.2v1.8M9 13.8v2" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaintIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 15.5 15.5 4a2.8 2.8 0 0 1 4 4L8 19.5H4v-4Z" strokeLinejoin="round" />
      <path d="M13.5 6l4.5 4.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeSparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m3 11 9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10.5V20h14v-9.5" strokeLinejoin="round" />
      <path d="M12 9v6" strokeLinecap="round" />
      <path d="M9 12h6" strokeLinecap="round" />
    </svg>
  );
}

function TvIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2.5" />
      <path d="M8 20h8M12 17v3" strokeLinecap="round" />
    </svg>
  );
}

function WallboxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="7" y="2.5" width="10" height="15" rx="3" />
      <path d="M12 6.5v5" strokeLinecap="round" />
      <path d="M12 17.5v2.5" strokeLinecap="round" />
      <path d="M17 9h1.5A2.5 2.5 0 0 1 21 11.5V15" strokeLinecap="round" />
      <path d="M9.5 20h5" strokeLinecap="round" />
    </svg>
  );
}

function WrenchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14.5 5.5a4 4 0 0 0 4.8 4.8l-9.3 9.2a2.1 2.1 0 0 1-3-3l9.2-9.3a4 4 0 0 0-1.7-7.7Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5 6v6c0 5 3.3 7.8 7 9 3.7-1.2 7-4 7-9V6l-7-3Z" strokeLinejoin="round" />
      <path d="m9.5 12 1.8 1.8 3.7-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolCaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2.5" />
      <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

function MessageSquareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 18.5V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-4 3Z" strokeLinejoin="round" />
      <path d="M9 9.5h6M9 13h4" strokeLinecap="round" />
    </svg>
  );
}

function HeartHandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7.5 5A3.5 3.5 0 0 0 4 8.5c0 5.3 8 9.5 8 9.5s8-4.2 8-9.5A3.5 3.5 0 0 0 16.5 5c-1.7 0-3 1-4.5 2.8C10.5 6 9.2 5 7.5 5Z" strokeLinejoin="round" />
      <path d="M8.5 13.5h2l1-2 1.5 3 1-1.5h2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const services: ServiceItem[] = [
  {
    title: "Ar-Condicionado",
    bullets: ["Instalação", "Manutenção", "Higienização", "Recarga", "Correção de vazamentos"],
    icon: SnowflakeIcon,
    accent: "from-sky-300 to-blue-600",
  },
  {
    title: "Geladeiras e Freezers",
    bullets: ["Diagnóstico", "Reparo", "Troca de componentes", "Preventiva"],
    icon: FridgeIcon,
    accent: "from-blue-200 to-cyan-500",
  },
  {
    title: "Elétrica Residencial",
    bullets: ["Disjuntores", "Quadros", "Circuitos", "Tomadas"],
    icon: BoltIcon,
    accent: "from-cyan-300 to-sky-700",
  },
  {
    title: "Pintura Residencial",
    bullets: ["Acabamento", "Reformas"],
    icon: PaintIcon,
    accent: "from-slate-200 to-blue-500",
  },
  {
    title: "Automação Residencial",
    bullets: ["Casas Inteligentes", "Controle de iluminação", "Sensores"],
    icon: HomeSparkIcon,
    accent: "from-sky-200 to-indigo-600",
  },
  {
    title: "Instalação de TV",
    bullets: ["Suportes", "Passagem de cabos", "Acabamento"],
    icon: TvIcon,
    accent: "from-zinc-200 to-blue-600",
  },
  {
    title: "Wallbox",
    bullets: ["Instalação", "Dimensionamento", "Proteções"],
    icon: WallboxIcon,
    accent: "from-cyan-200 to-blue-700",
  },
  {
    title: "Pequenos Reparos",
    bullets: ["Serviços gerais", "Ajustes pontuais", "Suporte técnico"],
    icon: WrenchIcon,
    accent: "from-slate-200 to-slate-700",
  },
];

const features: FeatureItem[] = [
  {
    title: "Diagnóstico Técnico Preciso",
    description: "Evita trocas desnecessárias e direciona a solução correta desde a primeira avaliação.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Atendimento Especializado",
    description: "Cada equipamento possui particularidades. Tratamos cada cenário com leitura técnica adequada.",
    icon: SnowflakeIcon,
  },
  {
    title: "Equipamentos Profissionais",
    description: "Ferramentas específicas para medições, testes e execução com padrão técnico superior.",
    icon: ToolCaseIcon,
  },
  {
    title: "Transparência",
    description: "Explicamos cada etapa do serviço para que você tenha clareza antes de qualquer decisão.",
    icon: MessageSquareIcon,
  },
  {
    title: "Atendimento Humanizado",
    description: "Você entende exatamente o que será realizado, com linguagem acessível e postura profissional.",
    icon: HeartHandshakeIcon,
  },
  {
    title: "Compromisso com Qualidade",
    description: "Nosso objetivo é solucionar o problema com eficiência, responsabilidade e acabamento de confiança.",
    icon: ShieldCheckIcon,
  },
];

const buttonPrimary =
  "inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#1666D8_0%,#77C8FF_100%)] px-6 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-[0_20px_50px_rgba(22,102,216,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,102,216,0.34)]";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-6 py-3.5 text-sm font-extrabold tracking-wide text-[#082247] shadow-[0_20px_50px_rgba(4,14,34,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-slate-50";

function IconBubble({ children, tone }: { children: ReactNode; tone: string }) {
  return (
    <div
      className={`relative flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${tone} text-white shadow-[0_16px_40px_rgba(8,34,71,0.28)]`}
    >
      <div className="absolute inset-1 rounded-[1.15rem] border border-white/30 bg-white/10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function WhatsAppFloat() {
  const phoneNumber = "5521992340652";
  const message = "Olá! Gostaria de agendar um diagnóstico técnico.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_50px_rgba(37,211,102,0.5)] animate-bounce"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative overflow-x-hidden bg-[#050c18] text-white">
      {/* WHATSAPP FLUTUANTE */}
      <WhatsAppFloat />

      <div className="pointer-events-none fixed inset-x-0 top-[-180px] z-0 mx-auto h-[420px] max-w-[1080px] rounded-full bg-[radial-gradient(circle,rgba(119,200,255,0.18),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none fixed right-[-120px] top-[30%] z-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(22,102,216,0.16),transparent_70%)] blur-3xl" />

      {/* ===== HEADER COM LOGO ===== */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-full border border-white/12 bg-[#08172e]/78 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              {/* LOGO NO CABEÇALHO - tamanho h-12 */}
              <img 
                src="/images/logo.png" 
                alt="Clepat" 
                className="h-12 w-auto object-contain"
              />
              <div className="min-w-0">
                <div className="font-display text-lg font-extrabold tracking-[0.18em] text-white">CLEPAT</div>
                <p className="truncate text-[11px] text-white/70 sm:text-xs">
                  Atendimento especializado para residências e empresas.
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-white/78 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="#contato" className={buttonPrimary}>
                Solicitar Diagnóstico Técnico
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </div>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/8 p-4 lg:hidden">
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contato" onClick={closeMenu} className={`${buttonPrimary} mt-2`}>
                  Solicitar Diagnóstico Técnico
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="relative z-10">
        {/* ===== HERO ===== */}
        <section id="inicio" className="relative isolate overflow-hidden pt-30 scroll-mt-28 sm:pt-36">
          <div className="absolute inset-0">
            <img
              src="/images/hero-room.jpg"
              alt="Ambiente moderno climatizado"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,12,24,0.96)_10%,rgba(8,34,71,0.86)_46%,rgba(8,34,71,0.46)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(119,200,255,0.22),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(22,102,216,0.28),transparent_26%)]" />
          </div>

          <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 pb-18 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
            <div className="relative max-w-3xl pt-8" data-reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#77C8FF]" />
                Diagnóstico técnico com padrão premium
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[4.35rem]">
                Especialistas em Refrigeração e Climatização de Alta Performance
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Seu equipamento merece um diagnóstico técnico preciso, executado por profissionais
                capacitados para preservar desempenho, segurança e durabilidade.
              </p>

              <p className="mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.18em] text-[#BFE7FF] sm:text-base">
                Instalação • Manutenção • Higienização • Refrigeração Comercial • Elétrica Residencial •
                Automação • Wallbox
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contato" className={buttonPrimary}>
                  Agendar Avaliação Técnica
                </a>
                <a href="#contato" className={buttonSecondary}>
                  Solicitar Diagnóstico Especializado
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Residencial e comercial", "Atuação organizada para diferentes rotinas e ambientes."],
                  ["Metodologia técnica", "Avaliação antes da execução para reduzir riscos e retrabalho."],
                  ["Acabamento e confiança", "Serviço limpo, transparente e alinhado ao seu espaço."],
                ].map(([title, description]) => (
                  <div key={title} className="glass-panel rounded-3xl p-4 text-left">
                    <div className="text-sm font-bold text-white">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/72">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal>
              <div className="absolute inset-x-8 top-10 h-48 rounded-full bg-[radial-gradient(circle,rgba(119,200,255,0.38),transparent_60%)] blur-3xl" />
              <div className="relative mx-auto max-w-[590px] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-5 shadow-[0_40px_90px_rgba(3,10,24,0.5)] backdrop-blur-xl">
                <div className="rounded-[1.7rem] border border-white/12 bg-[linear-gradient(160deg,rgba(8,34,71,0.88),rgba(10,20,42,0.65))] px-4 pb-4 pt-7 sm:px-6">
                  <div className="absolute left-3 top-3 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:left-6 sm:top-6">
                    Atendimento especializado
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[0.82fr_0.18fr]">
                    <img
                      src="/images/tech-hero.png"
                      alt="Técnico da Clepat uniformizado"
                      className="mx-auto max-h-[660px] w-full object-contain drop-shadow-[0_38px_60px_rgba(0,0,0,0.34)]"
                    />
                    <div className="hidden flex-col justify-center gap-4 sm:flex">
                      {[
                        "Leitura técnica",
                        "Ferramentas adequadas",
                        "Execução precisa",
                      ].map((label, index) => (
                        <div
                          key={label}
                          className="glass-panel flex h-24 w-24 items-center justify-center rounded-[1.6rem] text-center text-xs font-bold leading-5 text-white"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-3">
                    {[
                      ["Diagnóstico", "Foco em causa real"],
                      ["Transparência", "Explicação clara"],
                      ["Qualidade", "Entrega com testes"],
                    ].map(([title, description]) => (
                      <div key={title} className="rounded-2xl bg-white/6 p-4">
                        <div className="text-sm font-bold text-white">{title}</div>
                        <div className="mt-1 text-xs leading-5 text-white/70">{description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CREDIBILIDADE ===== */}
        <section className="relative z-10 border-y border-white/10 bg-[#08162C]/94 py-6">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-6">
            {credibilityItems.map((item, index) => (
              <div
                key={item}
                className="reveal glass-panel flex items-center gap-3 rounded-2xl px-4 py-4"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1666D8_0%,#77C8FF_100%)] text-base font-black text-white">
                  ✓
                </div>
                <span className="text-sm font-semibold text-white/84">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ESCOLHA TÉCNICA - ÍCONE DE ALERTA CORRIGIDO ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="reveal relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,#0A2044_0%,#1666D8_100%)] p-8 text-white shadow-[0_28px_80px_rgba(8,34,71,0.18)]" data-reveal>
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              {/* ÍCONE DE ALERTA CENTRALIZADO E COM COR CORRETA */}
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20 text-4xl">
                  ⚠️
                </div>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">O barato pode sair muito caro.</h2>
              <p className="mt-4 text-center text-lg leading-8 text-white/84">
                Um diagnóstico incorreto pode comprometer placas eletrônicas, reduzir a vida útil do equipamento e aumentar significativamente os custos de reparo.
              </p>
            </div>

            <div className="reveal rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]" data-reveal>
              <div className="section-label section-label-light">Escolha técnica</div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950">A escolha do profissional faz diferença.</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Na Clepat, cada atendimento é realizado com metodologia técnica, equipamentos apropriados e foco na solução correta desde a primeira avaliação.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Menos risco de retrabalho",
                  "Mais clareza antes da execução",
                  "Melhor preservação do equipamento",
                  "Postura profissional do início ao fim",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVIÇOS ===== */}
        <section id="servicos" className="scroll-mt-28 bg-[#EFF5FB] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Serviços"
                title="Soluções técnicas para conforto, refrigeração e infraestrutura"
                description="Um portfólio pensado para atender urgências, manutenção programada e instalações com acabamento superior, sempre com linguagem clara e foco em performance."
                align="center"
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="reveal service-card group rounded-[2rem] p-6"
                    data-reveal
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <IconBubble tone={service.accent}>
                      <Icon className="h-7 w-7" />
                    </IconBubble>
                    <h3 className="mt-5 text-xl font-extrabold text-slate-950">{service.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D8ECFF] text-[10px] font-black text-[#1666D8]">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="reveal mt-10 flex justify-center" data-reveal>
              <a href="#contato" className={buttonPrimary}>
                Quero uma Avaliação Técnica
              </a>
            </div>
          </div>
        </section>

        {/* ===== EMPRESAS ===== */}
        <section id="empresas" className="scroll-mt-28 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Residências e empresas"
                title="Atendimento que se adapta à rotina do seu ambiente"
                description="Seja para casa, comércio ou escritório, estruturamos o atendimento para causar menos interrupção e entregar mais previsibilidade ao serviço."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {businessSegments.map((segment) => (
                  <span
                    key={segment}
                    className="rounded-full border border-[#DCE7F4] bg-[#F3F8FE] px-4 py-2 text-sm font-semibold text-[#0B2B59]"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal grid gap-4 rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#082247_0%,#0E2F61_52%,#1666D8_100%)] p-8 text-white shadow-[0_30px_80px_rgba(8,34,71,0.18)] sm:grid-cols-2" data-reveal>
              {[
                {
                  title: "Agendamento organizado",
                  text: "Ideal para ambientes com horários definidos e necessidade de previsibilidade.",
                },
                {
                  title: "Leitura técnica antes da execução",
                  text: "Mais segurança para decidir quando reparar, instalar ou planejar manutenção.",
                },
                {
                  title: "Padrão de acabamento",
                  text: "Serviço limpo, atenção ao ambiente e postura compatível com espaços premium.",
                },
                {
                  title: "Soluções integradas",
                  text: "Refrigeração, elétrica, automação e infraestrutura reunidas em um único parceiro.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.6rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                  <h3 className="text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/78">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIFERENCIAIS ===== */}
        <section id="diferenciais" className="scroll-mt-28 bg-[#F5F8FC] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="reveal relative" data-reveal>
              <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-[radial-gradient(circle,rgba(119,200,255,0.28),transparent_70%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#082247_0%,#103A78_100%)] p-6 text-white shadow-[0_32px_80px_rgba(8,34,71,0.22)]">
                <div className="rounded-[1.7rem] border border-white/10 bg-white/6 p-4">
                  <img
                    src="/images/tech-hero.png"
                    alt="Profissional técnico da Clepat"
                    className="mx-auto max-h-[620px] w-full object-contain"
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Precisão", "Diagnóstico orientado por leitura técnica."],
                    ["Confiança", "Explicação transparente antes da execução."],
                    ["Durabilidade", "Foco em preservar desempenho e vida útil."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/12 bg-white/8 p-4">
                      <div className="text-sm font-bold text-white">{title}</div>
                      <div className="mt-1 text-xs leading-5 text-white/72">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Por que escolher a Clepat"
                title="Mais do que consertar equipamentos. Entregamos tranquilidade."
                description="Nossa proposta não é apenas resolver uma falha pontual, mas oferecer segurança na decisão, execução criteriosa e uma experiência profissional do início ao fim."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <article
                      key={feature.title}
                      className="service-card rounded-[1.8rem] p-5"
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <IconBubble tone="from-[#1666D8] to-[#77C8FF]">
                          <Icon className="h-6 w-6" />
                        </IconBubble>
                        <div>
                          <h3 className="text-lg font-extrabold text-slate-950">{feature.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section id="como-funciona" className="scroll-mt-28 bg-[#08162C] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-label">Como funciona</span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Um processo pensado para reduzir dúvida e aumentar confiança
                </h2>
                <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">
                  Da solicitação à entrega, cada etapa organiza a experiência para que você saiba o que está acontecendo e por quê.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-6">
              {processSteps.map((step, index) => (
                <div key={step} className="reveal relative" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="glass-panel h-full rounded-[1.8rem] p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1666D8_0%,#77C8FF_100%)] text-lg font-black text-white shadow-[0_10px_24px_rgba(22,102,216,0.28)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold text-white">{step}</h3>
                    {index < processSteps.length - 1 ? (
                      <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-white/18 lg:block" />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DEPOIMENTOS ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Depoimentos"
                title="Confiança se constrói com experiência percebida"
                description="A melhor prova de autoridade é quando o atendimento transmite organização, clareza e solução real."
                align="center"
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonials.map((item, index) => (
                <article
                  key={item.quote}
                  className="reveal rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="text-lg tracking-[0.16em] text-[#FDBA12]">⭐⭐⭐⭐⭐</div>
                  <p className="mt-4 text-base leading-7 text-slate-700">“{item.quote}”</p>
                  <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-500">{item.author}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALERIA ===== */}
        <section className="bg-[#EFF5FB] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="Galeria"
                title="Antes e Depois com visual limpo e padrão técnico"
                description="Uma composição visual para comunicar instalações, manutenções, equipamentos e projetos integrados com identidade premium."
                align="center"
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryItems.map((item, index) => (
                <article
                  key={item.title}
                  className="reveal overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#082247]/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {item.label}
                    </div>
                    {/* TÍTULO COM FUNDO ESCURO E TEXTO BRANCO - CORRIGIDO */}
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,34,71,0.92))] p-5">
                      <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Dúvidas frequentes antes da avaliação"
                description="Respostas diretas para reduzir incerteza e facilitar o próximo passo com confiança."
                align="center"
              />
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className="reveal group rounded-[1.7rem] border border-slate-200 bg-[#F8FBFF] p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-extrabold text-slate-950">
                    {item.question}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCEEFF] text-[#1666D8] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTATO COM FORMULÁRIO ===== */}
        <section id="contato" className="scroll-mt-28 bg-[linear-gradient(135deg,#071731_0%,#082247_45%,#1666D8_100%)] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
            <div className="reveal" data-reveal>
              <span className="section-label">Chamada final</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Seu conforto começa com um diagnóstico técnico de confiança.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Evite gastos desnecessários e conte com uma equipe preparada para identificar a solução adequada para o seu equipamento.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:+5521992340652" className={buttonPrimary}>
                  Ligar Agora
                </a>
                <a 
                  href="https://wa.me/5521992340652?text=Olá! Gostaria de agendar um diagnóstico técnico." 
                  target="_blank" 
                  rel="noreferrer" 
                  className={buttonSecondary}
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-6 text-sm text-white/60">
                <span className="font-semibold text-white">(21) 99234-0652</span> • Atendimento residencial e comercial
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="reveal rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl" data-reveal>
              <h3 className="mb-4 text-2xl font-extrabold text-white">Solicitar Diagnóstico</h3>
              <p className="mb-6 text-sm text-white/70">Preencha o formulário que entraremos em contato em até 24h.</p>
              
              <form 
                action="https://formsubmit.co/seu-email@dominio.com" 
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_next" value="https://seu-site.com/obrigado" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-white/80">Nome completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-[#77C8FF] focus:outline-none focus:ring-2 focus:ring-[#77C8FF]/50"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white/80">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-[#77C8FF] focus:outline-none focus:ring-2 focus:ring-[#77C8FF]/50"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-white/80">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-[#77C8FF] focus:outline-none focus:ring-2 focus:ring-[#77C8FF]/50"
                    placeholder="(21) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-semibold text-white/80">Tipo de serviço</label>
                  <select
                    id="servico"
                    name="servico"
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm focus:border-[#77C8FF] focus:outline-none focus:ring-2 focus:ring-[#77C8FF]/50"
                  >
                    <option value="ar-condicionado" className="text-slate-900">Ar-Condicionado</option>
                    <option value="geladeira" className="text-slate-900">Geladeira / Freezer</option>
                    <option value="eletrica" className="text-slate-900">Elétrica Residencial</option>
                    <option value="pintura" className="text-slate-900">Pintura</option>
                    <option value="automacao" className="text-slate-900">Automação</option>
                    <option value="tv" className="text-slate-900">Instalação de TV</option>
                    <option value="wallbox" className="text-slate-900">Wallbox</option>
                    <option value="outro" className="text-slate-900">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-white/80">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-[#77C8FF] focus:outline-none focus:ring-2 focus:ring-[#77C8FF]/50"
                    placeholder="Descreva brevemente o que precisa..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[linear-gradient(135deg,#1666D8_0%,#77C8FF_100%)] px-6 py-4 font-extrabold text-white shadow-[0_20px_50px_rgba(22,102,216,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,102,216,0.34)]"
                >
                  Enviar Solicitação
                </button>
              </form>

              <div className="mt-4 text-center text-xs text-white/50">
                * Seu contato será usado apenas para retorno sobre o diagnóstico.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER COM LOGO ===== */}
      <footer className="border-t border-white/8 bg-[#041121] py-10 text-white/74">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              {/* LOGO NO RODAPÉ */}
              <img 
                src="/images/logo.png" 
                alt="Clepat" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-display text-lg font-extrabold tracking-[0.18em] text-white">CLEPAT</div>
                <div className="text-sm text-white/58">Refrigeração • Climatização • Serviços</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
              Landing page projetada para transmitir confiança, reduzir risco percebido e conduzir o visitante para uma decisão segura.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9E2FF]">Menu</div>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white" onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9E2FF]">Contato</div>
            <div className="mt-4 space-y-3 text-sm font-semibold">
              <a href="https://instagram.com/clepat" target="_blank" rel="noreferrer" className="block transition hover:text-white">
                @clepat
              </a>
              <a href="tel:+5521992340652" className="block transition hover:text-white">
                (21) 99234-0652
              </a>
              <a 
                href="https://wa.me/5521992340652" 
                target="_blank" 
                rel="noreferrer" 
                className="block transition hover:text-white"
              >
                WhatsApp
              </a>
              <div className="text-white/52">Atendimento residencial e comercial</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/8 px-4 pt-6 text-xs text-white/45 sm:px-6 lg:px-8">
          © 2026 Clepat. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
