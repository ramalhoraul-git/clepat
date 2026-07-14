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

const testimonials = [
  {
    quote:
      "Serviço muito bem feito, desmontou tudo e fez um bom trabalho deixando meu ar novinho. Parabéns Clepat.",
    author: "Márcia - São Gonçalo/RJ",
  },
  {
    quote: "Excelente profissional. Preço justo e serviço de Qualidade. Recomendo!",
    author: "Renato - São Gonçalo/RJ",
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
      <span className="section-label-light">{eyebrow}</span>
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
      <WhatsAppFloat />

      <div className="pointer-events-none fixed inset-x-0 top-[-180px] z-0 mx-auto h-[420px] max-w-[1080px] rounded-full bg-[radial-gradient(circle,rgba(119,200,255,0.18),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none fixed right-[-120px] top-[30%] z-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(22,102,216,0.16),transparent_70%)] blur-3xl" />

      {/* ===== HEADER ===== */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex shrink-0 items-center" onClick={closeMenu}>
              <img 
                src="/images/logo.png" 
                alt="Clepat" 
                className="h-16 w-auto object-contain"
              />
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-slate-700/80 transition hover:text-[#1666D8]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="#contato" className={buttonPrimary}>
                Solicitar Diagnóstico
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="block h-0.5 w-5 rounded-full bg-slate-700" />
              </div>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4 lg:hidden">
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#1666D8]"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contato" onClick={closeMenu} className={`${buttonPrimary} mt-2`}>
                  Solicitar Diagnóstico
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="relative z-10">
        {/* ===== HERO - CARD ULTRA PREMIUM ===== */}
        <section id="inicio" className="relative isolate overflow-hidden pt-30 scroll-mt-28 sm:pt-36">
          <div className="absolute inset-0">
            <img
              src="/images/hero-room.jpg"
              alt="Ambiente moderno climatizado"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,12,24,0.94)_10%,rgba(8,34,71,0.88)_46%,rgba(8,34,71,0.50)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(119,200,255,0.20),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(22,102,216,0.25),transparent_26%)]" />
          </div>

          <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-8 px-4 pb-18 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-24">
            {/* COLUNA ESQUERDA - TEXTO */}
            <div className="relative max-w-3xl pt-8" data-reveal>
              <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[4.35rem]">
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

            {/* COLUNA DIREITA - CARD ULTRA PREMIUM */}
            <div className="relative" data-reveal>
              <div className="relative mx-auto max-w-[620px]">
                {/* Efeito de brilho atrás do card */}
                <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#1666D8]/30 via-[#77C8FF]/20 to-[#1666D8]/30 blur-xl" />
                
                {/* Card principal */}
                <div className="relative rounded-[2rem] border border-white/20 bg-white/95 p-5 shadow-[0_40px_90px_rgba(3,10,24,0.4)] backdrop-blur-sm">
                  
                  {/* Linha decorativa superior */}
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1666D8]/50 to-transparent" />
                  
                  <div className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
                    
                    {/* BADGE PREMIUM */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1666D8] animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                          Atendimento Premium
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#1666D8]/40" />
                        <span className="h-1 w-1 rounded-full bg-[#1666D8]/60" />
                        <span className="h-1 w-1 rounded-full bg-[#1666D8]" />
                      </div>
                    </div>

                    {/* LOGO GRANDE ACIMA DO FORMULÁRIO */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1666D8]/10 via-[#77C8FF]/10 to-[#1666D8]/10 blur" />
                        <img 
                          src="/images/logo.png" 
                          alt="Clepat" 
                          className="relative h-16 w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* DIVISÓRIA ELEGANTE */}
                    <div className="relative mb-4 flex items-center">
                      <div className="flex-1 border-t border-slate-200/60" />
                      <span className="mx-3 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
                        Diagnóstico Técnico
                      </span>
                      <div className="flex-1 border-t border-slate-200/60" />
                    </div>
                    
                    {/* FORMULÁRIO + PROFISSIONAL LADO A LADO */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                      {/* FORMULÁRIO */}
                      <div className="flex-1">
                        <form 
                          action="https://formsubmit.co/seu-email@dominio.com" 
                          method="POST"
                          className="flex flex-col gap-3"
                        >
                          <input type="hidden" name="_captcha" value="false" />
                          <input type="hidden" name="_next" value="https://seu-site.com/obrigado" />
                          
                          <div className="relative">
                            <input
                              type="text"
                              name="nome"
                              placeholder="Seu nome"
                              required
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#1666D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1666D8]/20"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="tel"
                              name="telefone"
                              placeholder="(21) 99999-9999"
                              required
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#1666D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1666D8]/20"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              placeholder="Seu e-mail"
                              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#1666D8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1666D8]/20"
                            />
                          </div>
                          <button
                            type="submit"
                            className="group relative w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,#1666D8_0%,#77C8FF_100%)] py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(22,102,216,0.3)] transition hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(22,102,216,0.4)]"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Solicitar Agora
                              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
                          </button>
                        </form>
                        <p className="mt-3 text-center text-[10px] text-slate-400">
                          ✓ Retorno em até 24h • Dados seguros
                        </p>
                      </div>

                      {/* PROFISSIONAL */}
                      <div className="relative flex-[1.1]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1666D8]/5 via-transparent to-[#77C8FF]/5" />
                        <img
                          src="/images/profissional.png"
                          alt="Profissional Clepat"
                          className="relative mx-auto max-h-[450px] w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
                        />
                      </div>
                    </div>

                    {/* CARDS DE DIFERENCIAIS PREMIUM */}
                    <div className="mt-4 grid gap-3 border-t border-slate-200/60 pt-4 sm:grid-cols-3">
                      {[
                        { icon: "🎯", title: "Diagnóstico", desc: "Foco em causa real" },
                        { icon: "🔍", title: "Transparência", desc: "Explicação clara" },
                        { icon: "⭐", title: "Qualidade", desc: "Entrega com testes" },
                      ].map((item) => (
                        <div key={item.title} className="group rounded-xl bg-slate-50/80 p-3 text-center transition hover:bg-slate-100/80">
                          <div className="text-lg">{item.icon}</div>
                          <div className="mt-1 text-xs font-bold text-slate-700">{item.title}</div>
                          <div className="text-[10px] text-slate-500">{item.desc}</div>
                        </div>
                      ))}
                    </div>

                    {/* SELO DE QUALIDADE */}
                    <div className="mt-3 flex items-center justify-center gap-4 border-t border-slate-200/40 pt-3">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-3 w-3 text-[#1666D8]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] font-medium text-slate-500">Garantia de Qualidade</span>
                      </div>
                      <div className="h-4 w-px bg-slate-200" />
                      <div className="flex items-center gap-1.5">
                        <svg className="h-3 w-3 text-[#1666D8]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] font-medium text-slate-500">Profissionais Certificados</span>
                      </div>
                    </div>
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

        {/* ===== ESCOLHA TÉCNICA ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="reveal relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,#0A2044_0%,#1666D8_100%)] p-8 text-white shadow-[0_28px_80px_rgba(8,34,71,0.18)]" data-reveal>
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                Escolha técnica
              </div>
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
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                  Serviços
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Soluções técnicas para conforto, refrigeração e infraestrutura
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                  Um portfólio pensado para atender urgências, manutenção programada e instalações com acabamento superior, sempre com linguagem clara e foco em performance.
                </p>
              </div>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                Residências e empresas
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Atendimento que se adapta à rotina do seu ambiente
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Seja para casa, comércio ou escritório, estruturamos o atendimento para causar menos interrupção e entregar mais previsibilidade ao serviço.
              </p>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                Por que escolher a Clepat
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Mais do que consertar equipamentos. Entregamos tranquilidade.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Nossa proposta não é apenas resolver uma falha pontual, mas oferecer segurança na decisão, execução criteriosa e uma experiência profissional do início ao fim.
              </p>

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

        {/* ===== DEPOIMENTOS ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                  Depoimentos
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Confiança se constrói com experiência percebida
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                  A melhor prova de autoridade é quando o atendimento transmite organização, clareza e solução real.
                </p>
              </div>
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

        {/* ===== FAQ ===== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="reveal" data-reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1666D8]/20 bg-[#1666D8]/5 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1666D8]">
                  FAQ
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Dúvidas frequentes antes da avaliação
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                  Respostas diretas para reduzir incerteza e facilitar o próximo passo com confiança.
                </p>
              </div>
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

        {/* ===== CONTATO - CHAMADA FINAL ===== */}
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
                  Agendar Avaliação Técnica
                </a>
                <a 
                  href="https://instagram.com/clepat.climatizacao" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={buttonSecondary}
                >
                  Ver perfil profissional
                </a>
              </div>
            </div>

            <div className="reveal rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl" data-reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/12 bg-[#082247]/38 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9E2FF]">Contato</div>
                  <a href="tel:+5521992340652" className="mt-3 block text-2xl font-extrabold text-white">
                    (21) 99234-0652
                  </a>
                  <p className="mt-2 text-sm leading-6 text-white/72">Atendimento residencial e comercial.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/12 bg-[#082247]/38 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9E2FF]">Instagram</div>
                  <a
                    href="https://instagram.com/clepat.climatizacao"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-xl font-extrabold text-white"
                  >
                    @clepat.climatização
                  </a>
                  <p className="mt-2 text-sm leading-6 text-white/72">Portfólio e bastidores da marca.</p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-white/12 bg-white/8 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#B9E2FF]">Próximo passo</div>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Solicite sua avaliação técnica. A partir dela, você entende a causa do problema, as possibilidades de solução e o caminho mais responsável para seguir.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-200 bg-white py-10 text-slate-600">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Clepat" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Landing page projetada para transmitir confiança, reduzir risco percebido e conduzir o visitante para uma decisão segura.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#1666D8]">Menu</div>
            <div className="mt-4 grid gap-3 text-sm font-semibold">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-600 transition hover:text-[#1666D8]" onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#1666D8]">Contato</div>
            <div className="mt-4 space-y-3 text-sm font-semibold">
              <a href="https://instagram.com/clepat.climatizacao" target="_blank" rel="noreferrer" className="block text-slate-600 transition hover:text-[#1666D8]">
                @clepat.climatização
              </a>
              <a href="tel:+5521992340652" className="block text-slate-600 transition hover:text-[#1666D8]">
                (21) 99234-0652
              </a>
              <a 
                href="https://wa.me/5521992340652" 
                target="_blank" 
                rel="noreferrer" 
                className="block text-slate-600 transition hover:text-[#1666D8]"
              >
                WhatsApp
              </a>
              <div className="text-slate-400">Atendimento residencial e comercial</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 px-4 pt-6 text-xs text-slate-400 sm:px-6 lg:px-8">
          © 2026 Clepat. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
