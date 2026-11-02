import { useEffect, useState } from "react";

const etapas = [
  {
    numero: "01",
    titulo: "Capture",
    descricao: "Registre lousas, slides, livros e anotações durante a aula.",
    simbolo: "◉",
  },
  {
    numero: "02",
    titulo: "Reconheça",
    descricao:
      "A proposta prevê reconhecimento de texto para transformar registros em conteúdo pesquisável.",
    simbolo: "⌗",
  },
  {
    numero: "03",
    titulo: "Organize",
    descricao:
      "A experiência foi pensada para separar os materiais por disciplina.",
    simbolo: "▤",
  },
  {
    numero: "04",
    titulo: "Revise",
    descricao:
      "Consulte o conteúdo capturado e aproveite melhor seu tempo de estudo.",
    simbolo: "↗",
  },
];

const telas = [
  {
    imagem: "/img/img4.png",
    alt: "Protótipo do Flow com modo de captura de aula",
    categoria: "01 / CAPTURA",
    titulo: "Modo aula",
    descricao: "Conceito de captura para lousas, slides e cadernos.",
  },
  {
    imagem: "/img/img2.png",
    alt: "Protótipo do Flow com exemplo de conteúdo reconhecido",
    categoria: "02 / RECONHECIMENTO",
    titulo: "Conteúdo identificado",
    descricao: "Exemplo de como o texto poderia ser apresentado.",
  },
  {
    imagem: "/img/img5.png",
    alt: "Protótipo do Flow organizando materiais em pastas",
    categoria: "03 / ORGANIZAÇÃO",
    titulo: "Tudo no seu lugar",
    descricao: "Conceito de organização dos materiais por pastas.",
  },
  {
    imagem: "/img/img6.png",
    alt: "Protótipo do Flow com opções de estudo para o conteúdo",
    categoria: "04 / REVISÃO",
    titulo: "Continue aprendendo",
    descricao: "Ideias de ações para retomar o conteúdo capturado.",
  },
];

const recursos = [
  {
    numero: "01",
    titulo: "Captura de conteúdos",
    texto:
      "A câmera JOVI é o ponto de partida da proposta para registrar o que importa em cada aula.",
  },
  {
    numero: "02",
    titulo: "Imagem e reconhecimento de texto",
    texto:
      "O projeto apresenta o uso de melhoria de imagem e OCR como possibilidades para facilitar a leitura dos registros.",
  },
  {
    numero: "03",
    titulo: "Organização acadêmica",
    texto:
      "A experiência foi desenhada para reunir conteúdos por disciplina e tornar a revisão mais prática.",
  },
];

const equipe = [
  { nome: "Beatriz Albuquerque", rm: "RM572055" },
  { nome: "Nicole Couto", rm: "RM569191" },
  { nome: "Robert Josino", rm: "RM571622" },
  { nome: "Ryan Maick", rm: "RM573051" },
  { nome: "Vitor Borin", rm: "RM573194" },
];

const navegacao = [
  { href: "#solucao", desktop: "A solução", mobile: "Solução" },
  { href: "#experiencia", desktop: "Proposta", mobile: "Proposta" },
  { href: "#telas", desktop: "Telas do projeto", mobile: "Telas" },
  { href: "#equipe", desktop: "Equipe", mobile: "Equipe" },
  { href: "#contato", desktop: "Contato", mobile: "Contato" },
];

const campoClasse =
  "w-full rounded-xl border border-[#d9d0eb] bg-white px-4 py-3 text-sm leading-6 text-[#211936] placeholder:text-[#91899e] transition-colors hover:border-violet-300 focus:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-700/20";

function Arrow({ children = "↗" }) {
  return <span aria-hidden="true">{children}</span>;
}

function SectionLabel({ numero, children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] ${
        light ? "text-violet-100/70" : "text-slate-500"
      }`}
    >
      <span className="text-violet-500">{numero}</span>
      {children}
    </p>
  );
}

function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload._subject = "Novo contato pelo site MOBIX / FLOW";

    setIsSending(true);
    setStatus({ type: "loading", message: "Enviando sua mensagem…" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mobix.fiap@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error(
          result.message || "O serviço não conseguiu enviar sua mensagem."
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Mensagem enviada! A equipe MOBIX receberá seu contato em breve.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? `${error.message} Tente novamente ou envie um e-mail para mobix.fiap@gmail.com.`
            : "Não foi possível enviar sua mensagem. Tente novamente ou envie um e-mail para mobix.fiap@gmail.com.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const statusColors = {
    idle: "",
    loading: "text-slate-600",
    success: "text-green-800",
    error: "text-red-800",
  };

  return (
    <form
      className="flex min-w-0 flex-col gap-5 rounded-2xl border border-white/60 bg-[#f8f6ff] p-5 text-[#2b2142] shadow-[0_24px_70px_rgba(17,17,17,0.16)] sm:gap-6 sm:p-8 lg:p-9"
      onSubmit={handleSubmit}
    >
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-violet-700">
        MOBIX / FLOW
      </span>
      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.05em]">
        Conte para a gente como podemos ajudar.
      </h3>

      <label className="grid gap-2 text-xs font-bold">
        Seu nome
        <input
          autoComplete="name"
          className={campoClasse}
          maxLength={100}
          name="name"
          placeholder="Como podemos chamar você?"
          required
        />
      </label>

      <label className="grid gap-2 text-xs font-bold">
        Seu e-mail
        <input
          autoComplete="email"
          className={campoClasse}
          maxLength={254}
          name="email"
          placeholder="voce@exemplo.com"
          required
          type="email"
        />
      </label>

      <label className="grid gap-2 text-xs font-bold">
        Mensagem
        <textarea
          className={`${campoClasse} min-h-32 resize-y`}
          maxLength={3000}
          name="message"
          placeholder="Escreva sua mensagem…"
          required
          rows={4}
        />
      </label>

      <label
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        Não preencha este campo
        <input
          autoComplete="off"
          name="_honey"
          tabIndex={-1}
          type="text"
        />
      </label>

      <button
        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-violet-400 px-5 py-3 text-sm font-extrabold text-[#211936] transition-colors hover:bg-violet-300 disabled:cursor-wait disabled:opacity-70"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Enviando…" : "Enviar mensagem"}
        {!isSending && <Arrow />}
      </button>

      <p
        aria-live="polite"
        className={`min-h-5 text-xs leading-5 ${statusColors[status.type]}`}
        role={status.type === "error" ? "alert" : "status"}
      >
        {status.message}
      </p>

      <p className="max-w-[44ch] text-[0.65rem] leading-5 text-slate-500">
        Os dados são encaminhados pelo FormSubmit para a equipe MOBIX. No
        primeiro envio, é necessário confirmar a ativação pelo e-mail recebido.
      </p>
    </form>
  );
}

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        className="fixed left-3 top-3 z-[100] -translate-y-[160%] rounded-xl bg-white px-4 py-3 font-bold text-violet-950 shadow-lg transition-transform focus:translate-y-0"
        href="#conteudo"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-violet-100 bg-[#f8f6ff]/95 backdrop-blur-lg">
        <div className="mx-auto flex h-[4.4rem] max-w-[90rem] items-center justify-between gap-5 px-5 sm:px-8 lg:h-[5.1rem] lg:px-[6.2%]">
          <a
            aria-label="MOBIX Flow — início"
            className="flex shrink-0 items-center gap-2.5"
            href="#inicio"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-400 text-lg font-black tracking-[-0.12em] text-[#171226]">
              M
            </span>
            <span className="text-sm font-black tracking-[0.13em]">
              MOBIX<span className="text-violet-500">.</span>
              <span className="mt-0.5 block text-[0.48rem] tracking-[0.22em] text-slate-500">
                FLOW EXPERIENCE
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-5 text-xs font-semibold text-slate-600 lg:flex xl:gap-8"
          >
            {navegacao.map((item) => (
              <a
                className="transition-colors hover:text-violet-700"
                href={item.href}
                key={item.href}
              >
                {item.desktop}
              </a>
            ))}
          </nav>

          <a
            className="hidden items-center gap-3 rounded-full border border-violet-200 px-4 py-3 text-xs font-bold transition-colors hover:border-violet-400 hover:bg-violet-100 md:inline-flex"
            href="#contato"
          >
            Fale com a gente <Arrow />
          </a>
          <a
            aria-label="Entre em contato"
            className="grid h-10 w-10 place-items-center rounded-full border border-violet-200 text-sm font-bold md:hidden"
            href="#contato"
          >
            <Arrow />
          </a>
        </div>

        <nav
          aria-label="Navegação mobile"
          className="flex gap-6 overflow-x-auto border-t border-violet-100 px-5 py-3 text-xs font-bold text-slate-600 sm:px-8 lg:hidden"
        >
          {navegacao.map((item) => (
            <a
              className="shrink-0 transition-colors hover:text-violet-700"
              href={item.href}
              key={item.href}
            >
              {item.mobile}
            </a>
          ))}
        </nav>
      </header>

      <main id="conteudo">
        <section
          className="relative overflow-hidden bg-[#171226] px-5 pt-14 text-[#f8f6ff] sm:px-8 sm:pt-16 lg:px-[6.2%] lg:pt-[4.6rem]"
          id="inicio"
        >
          <div
            aria-hidden="true"
            className="hero-grid pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 top-0 h-[34rem] w-[34rem] rounded-full bg-violet-500/15 blur-[7rem]"
          />

          <div className="relative mx-auto grid max-w-[90rem] items-center gap-5 pb-12 lg:grid-cols-2 lg:gap-10 lg:pb-20">
            <div className="relative z-10 py-4 sm:py-8">
              <p className="flex items-center gap-3 text-[0.65rem] font-extrabold tracking-[0.2em] text-violet-100/75">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                UM PROJETO MOBIX
              </p>
              <p className="mt-10 text-sm tracking-[0.12em] text-violet-300 sm:mt-14">
                Conheça o <strong className="text-white">FLOW</strong>
              </p>
              <h1 className="mt-4 max-w-[14ch] text-[clamp(2.9rem,7vw,5.5rem)] font-semibold leading-[0.99] tracking-[-0.075em] text-balance">
                Da sala de aula para o seu{" "}
                <span className="text-violet-300">próximo nível.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-violet-100/75 sm:mt-7 sm:text-base sm:leading-8">
                O Flow é uma proposta para transformar registros de aula em
                materiais digitais mais organizados e acessíveis para a rotina
                de estudos.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 sm:gap-7">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-violet-400 px-5 py-3 text-xs font-extrabold text-[#211936] transition-colors hover:bg-violet-300 sm:text-sm"
                  href="#solucao"
                >
                  Descubra o Flow <Arrow />
                </a>
                <a
                  className="inline-flex items-center gap-3 text-xs font-bold text-violet-100 transition-colors hover:text-white sm:text-sm"
                  href="#telas"
                >
                  Ver telas do projeto <Arrow>↓</Arrow>
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3 text-[0.58rem] tracking-[0.16em] text-violet-100/60 sm:mt-14 sm:gap-4">
                <span>CAPTURAR</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-violet-400" />
                <span>RECONHECER</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-violet-400" />
                <span>ORGANIZAR</span>
              </div>
            </div>

            <div className="relative mx-auto grid min-h-[22rem] w-full max-w-[36rem] place-items-center sm:min-h-[30rem]">
              <div
                aria-hidden="true"
                className="hero-orbit absolute h-[22rem] w-[22rem] rounded-full border border-violet-300/25 sm:h-[29rem] sm:w-[29rem]"
              />
              <div className="relative h-[21rem] w-[82%] max-w-[30rem] overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-white/20 shadow-2xl sm:h-[27rem] sm:rounded-t-[13rem]">
                <img
                  alt="Estudantes reunidos estudando e consultando materiais em sala de aula"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  height="864"
                  src="/img/estudantes_02.png"
                  width="1152"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#11121a]/80 to-transparent"
                />
                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                  <span className="text-[0.6rem] tracking-[0.2em] text-violet-300">
                    FLOW / 001
                  </span>
                  <p className="mt-2 text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                    O conhecimento
                    <br />
                    em movimento.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-5 left-0 flex max-w-[90%] items-center gap-3 rounded-xl bg-[#f8f6ff] p-3 text-[#211936] shadow-xl sm:bottom-12 sm:-left-2 sm:gap-4 sm:p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-200 text-xl text-violet-900">
                  ⌗
                </span>
                <span>
                  <span className="block text-[0.55rem] tracking-[0.12em] text-slate-500">
                    DA IMAGEM AO TEXTO
                  </span>
                  <strong className="mt-1 block text-[0.68rem] sm:text-xs">
                    Uma possibilidade do projeto
                  </strong>
                </span>
              </div>
              <span className="absolute bottom-3 right-0 text-[0.6rem] tracking-[0.2em] text-violet-100/60 sm:bottom-8">
                01 — 04
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-3 border-t border-white/15 py-4 text-[0.55rem] tracking-[0.16em] text-violet-100/60 sm:text-[0.62rem]">
            <span>TECNOLOGIA PARA A ROTINA ACADÊMICA</span>
            <a className="hover:text-white" href="#desafio">
              ROLE PARA EXPLORAR ↓
            </a>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[#f8f6ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="desafio"
        >
          <div className="mx-auto max-w-[80rem]">
            <SectionLabel numero="01">O PONTO DE PARTIDA</SectionLabel>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.65fr] lg:items-end lg:gap-[12%]">
              <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-balance">
                Quantas ideias importantes ficam perdidas na{" "}
                <span className="text-violet-600">galeria do celular?</span>
              </h2>
              <div className="max-w-xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                <p>
                  Fotos de lousas, slides, livros e anotações fazem parte da
                  rotina de quem estuda. Mas encontrar aquele registro e
                  transformá-lo em material útil pode se tornar um desafio.
                </p>
                <p>
                  O FLOW busca aproximar a captura do aprendizado, conectando a
                  câmera JOVI a uma proposta de organização dos conteúdos
                  acadêmicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-[#f0ecf8] px-5 py-20 sm:px-8 sm:py-24 lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="solucao"
        >
          <div className="mx-auto max-w-[80rem]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div>
                <SectionLabel numero="02">COMO FUNCIONA</SectionLabel>
                <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-balance">
                  Do instante da captura ao momento de{" "}
                  <span className="text-violet-600">revisar.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                Quatro etapas apresentam a proposta do Flow e o caminho que o
                conteúdo poderia percorrer na rotina de estudos.
              </p>
            </div>

            <div className="mt-10 grid border-y border-violet-200 sm:grid-cols-2 lg:mt-[4.5rem] lg:grid-cols-4">
              {etapas.map((item) => (
                <article
                  className="group border-b border-violet-200 px-4 py-6 transition-colors hover:bg-white/50 sm:px-6 lg:border-b-0 lg:py-7 lg:first:pl-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-violet-200"
                  key={item.numero}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.numero}</span>
                    <span className="text-2xl text-violet-600">{item.simbolo}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight sm:mt-10 sm:text-2xl">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 min-h-16 max-w-[28ch] text-xs leading-6 text-slate-600 sm:text-sm">
                    {item.descricao}
                  </p>
                  <div className="mt-5 h-0.5 bg-violet-200">
                    <div className="h-full w-1/4 bg-violet-400 transition-[width] group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="grid gap-10 bg-[#211936] px-5 py-20 text-[#f8f6ff] sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-[9%] lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="experiencia"
        >
          <div>
            <SectionLabel light numero="03">PENSADO PARA ESTUDAR</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-balance">
              Menos tempo procurando.
              <br />
              <span className="text-violet-300">Mais tempo aprendendo.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-violet-100/70">
              O projeto reúne ideias para tornar registros cotidianos mais
              fáceis de consultar.
            </p>
          </div>

          <div className="border-t border-white/20">
            {recursos.map((recurso) => (
              <article
                className="grid grid-cols-[2rem_1fr_auto] items-center gap-x-3 gap-y-2 border-b border-white/20 py-5 sm:grid-cols-[2.8rem_1fr_1.1fr_1.25rem] sm:gap-4 sm:py-6"
                key={recurso.numero}
              >
                <span className="row-span-2 text-[0.65rem] text-violet-300 sm:row-span-1">
                  {recurso.numero}
                </span>
                <h3 className="text-[0.95rem] font-semibold tracking-tight sm:text-base">
                  {recurso.titulo}
                </h3>
                <p className="col-start-2 text-xs leading-6 text-violet-100/70 sm:col-start-auto">
                  {recurso.texto}
                </p>
                <span className="col-start-3 row-start-1 text-violet-300 sm:col-start-auto sm:row-start-auto">
                  <Arrow />
                </span>
              </article>
            ))}
          </div>
          <div className="col-span-full flex justify-between border-t border-white/15 pt-4 text-[0.55rem] tracking-[0.16em] text-violet-100/60 sm:text-[0.62rem]">
            <span>MOBIX × FLOW</span>
            <span>UMA PROPOSTA PARA A ROTINA REAL</span>
          </div>
        </section>

        <section
          className="bg-[#f8f6ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="telas"
        >
          <div className="mx-auto max-w-[80rem]">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel numero="04">POR DENTRO DO FLOW</SectionLabel>
                <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
                  Uma prévia da <span className="text-violet-600">experiência.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-slate-600">
                Estas imagens são telas conceituais da solução, não
                funcionalidades executadas nesta landing page.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {telas.map((tela) => (
                <figure
                  className="group overflow-hidden rounded-2xl border border-violet-100 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
                  key={tela.imagem}
                >
                  <div className="flex h-[18rem] flex-col bg-[radial-gradient(ellipse_at_center,#e9e2f7,#ddd4f0)] p-5 sm:h-[22rem]">
                    <span className="text-[0.58rem] font-extrabold tracking-[0.1em] text-violet-700">
                      {tela.categoria}
                    </span>
                    <div className="flex min-h-0 flex-1 items-center justify-center pt-2">
                      <img
                        alt={tela.alt}
                        className="max-h-full max-w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.025]"
                        loading="lazy"
                        src={tela.imagem}
                      />
                    </div>
                  </div>
                  <figcaption className="flex items-start justify-between gap-3 p-4 sm:p-5">
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                        {tela.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {tela.descricao}
                      </p>
                    </div>
                    <span className="text-violet-600">
                      <Arrow />
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          className="grid gap-10 bg-[#f0ecf8] px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-2 md:items-center md:gap-12 lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
        >
          <div className="mx-auto flex h-[22rem] w-full max-w-sm flex-col items-center overflow-hidden rounded-t-[10rem] rounded-b-2xl bg-[#ddd4f0] px-6 py-5 sm:h-[27rem]">
            <img
              alt="Aparelho JOVI utilizado como referência para a proposta MOBIX"
              className="min-h-0 w-full flex-1 object-contain mix-blend-multiply"
              height="1536"
              loading="lazy"
              src="/img/mobixcapa.png"
              width="1024"
            />
            <span className="shrink-0 pt-3 text-center text-[0.55rem] tracking-[0.18em] text-violet-700">
              TECNOLOGIA COMO PONTO DE PARTIDA
            </span>
          </div>

          <div>
            <SectionLabel numero="05">A IDEIA MOBIX</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
              Uma câmera.
              <br />
              <span className="text-violet-600">Novas possibilidades.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                O FLOW é a proposta do grupo MOBIX que utiliza a câmera JOVI
                como ponto de partida para apoiar estudantes no registro e na
                organização de conteúdos acadêmicos.
              </p>
              <p>
                O projeto explora melhoria de imagem, reconhecimento de texto
                (OCR) e organização dos materiais. Esses recursos fazem parte
                da proposta apresentada, não de um aplicativo implementado
                nesta página.
              </p>
            </div>
            <a
              className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#3a3150] hover:text-violet-700"
              href="#equipe"
            >
              Conheça quem desenvolve <Arrow />
            </a>
          </div>
        </section>

        <section
          className="grid gap-10 bg-[#211936] px-5 py-20 text-[#f8f6ff] sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[10%] lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="equipe"
        >
          <div>
            <SectionLabel light numero="06">QUEM FAZ ACONTECER</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
              Uma ideia construída em <span className="text-violet-300">equipe.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-violet-100/70">
              Projeto acadêmico desenvolvido pelo grupo MOBIX para a FIAP.
            </p>
          </div>

          <ul className="border-t border-white/20">
            {equipe.map((integrante, index) => (
              <li
                className="grid grid-cols-[2rem_minmax(0,1fr)_auto_1rem] items-center gap-2 border-b border-white/20 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto_1.25rem] sm:gap-4 sm:py-5"
                key={integrante.rm}
              >
                <span className="text-xs text-violet-100/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="truncate text-sm font-medium tracking-tight sm:text-base">
                  {integrante.nome}
                </h3>
                <span className="text-[0.65rem] text-violet-100/70 sm:text-xs">
                  {integrante.rm}
                </span>
                <span className="text-violet-300">
                  <Arrow />
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="relative overflow-hidden bg-[#342653] px-5 py-20 text-[#f8f6ff] sm:px-8 sm:py-24 lg:px-[8%] lg:py-[7.5rem]"
          data-reveal
          id="contato"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-44 h-[32rem] w-[32rem] rounded-full bg-violet-400/20 blur-[8rem]"
          />
          <div className="relative mx-auto max-w-[80rem]">
            <SectionLabel light numero="07">CONEXÃO MOBIX</SectionLabel>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:gap-[8%]">
              <div>
                <h2 className="max-w-3xl text-[clamp(2.6rem,5.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-balance">
                  Vamos colocar boas ideias em{" "}
                  <span className="text-violet-300">movimento?</span>
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-violet-100/75 sm:text-base">
                  Quer conhecer melhor a proposta do FLOW? Envie uma mensagem
                  para a equipe MOBIX.
                </p>
                <a
                  className="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-violet-100 transition-colors hover:text-white focus-visible:rounded-sm"
                  href="mailto:mobix.fiap@gmail.com"
                >
                  <span className="text-violet-300">E-mail da equipe</span>
                  <span aria-hidden="true">·</span>
                  <span>mobix.fiap@gmail.com</span>
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-4 bg-[#171226] px-5 py-6 text-violet-100/70 sm:px-8 lg:px-[8%]">
        <a
          aria-label="MOBIX — voltar ao início"
          className="text-base font-black tracking-[0.12em] text-white"
          href="#inicio"
        >
          MOBIX<span className="text-violet-400">.</span>
        </a>
        <p className="text-xs">FLOW, Da foto ao próximo nível.</p>
        <span className="text-[0.62rem] tracking-[0.12em]">
          FIAP · Engenharia de Software
        </span>
      </footer>
    </>
  );
}

export default App;
