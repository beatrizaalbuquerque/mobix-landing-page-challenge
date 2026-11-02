const etapas = [
  {
    numero: "01",
    titulo: "Capture",
    descricao: "Fotografe o conteúdo da lousa, do livro ou do caderno.",
    icon: "camera",
  },
  {
    numero: "02",
    titulo: "Transforme",
    descricao: "O reconhecimento de texto converte a imagem em conteúdo digital.",
    icon: "scan",
  },
  {
    numero: "03",
    titulo: "Organize",
    descricao: "Salve o material por disciplina e encontre tudo quando precisar.",
    icon: "folder",
  },
];

const funcionalidades = [
  {
    titulo: "Captura inteligente",
    descricao:
      "Utilize a câmera JOVI para registrar lousas, slides, livros e anotações durante as aulas, com uma experiência pensada para estudantes.",
    icon: "camera",
  },
  {
    titulo: "Melhoria de imagem e OCR",
    descricao:
      "Recursos de ajuste de nitidez, iluminação e redução de reflexos ajudam a melhorar os registros. O OCR permite reconhecer textos presentes nas imagens.",
    icon: "text",
  },
  {
    titulo: "Organização dos estudos",
    descricao:
      "Transforme os conteúdos capturados em materiais digitais organizados por disciplina, facilitando o acesso e a revisão.",
    icon: "folder",
  },
];

const telas = [
  {
    imagem: "/img/img4.png",
    alt: "Tela do Flow com captura de lousa, modo aula e recursos de melhoria de imagem",
    categoria: "01 / CAPTURA",
    titulo: "Modo aula",
    descricao: "Uma captura preparada para lousas, slides e cadernos.",
  },
  {
    imagem: "/img/img2.png",
    alt: "Tela do Flow com texto reconhecido e informações organizadas por disciplina",
    categoria: "02 / RECONHECIMENTO",
    titulo: "Conteúdo identificado",
    descricao: "O texto da imagem fica mais simples de consultar e revisar.",
  },
  {
    imagem: "/img/img5.png",
    alt: "Tela do Flow organizando o material capturado em pastas",
    categoria: "03 / ORGANIZAÇÃO",
    titulo: "Materiais organizados",
    descricao: "Escolha onde salvar e mantenha cada conteúdo no seu lugar.",
  },
  {
    imagem: "/img/img6.png",
    alt: "Tela do Flow com opções para resumir, revisar e criar questões",
    categoria: "04 / APRENDIZADO",
    titulo: "Próximos passos",
    descricao: "Continue estudando com ações pensadas para o conteúdo capturado.",
  },
];

const equipe = [
  { nome: "Beatriz Albuquerque", rm: "RM572055" },
  { nome: "Nicole Couto", rm: "RM569191" },
  { nome: "Robert Josino", rm: "RM571622" },
  { nome: "Ryan Maick", rm: "RM573051" },
  { nome: "Vitor Borin", rm: "RM573194" },
];

const iconPaths = {
  camera: (
    <>
      <path d="M14 4h-4l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-2-2Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M7 12h10M9 9h6M9 15h6" />
    </>
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  ),
  text: (
    <>
      <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M7 9h10M7 13h10M7 17h6" />
    </>
  ),
};

function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  );
}

function App() {
  return (
    <>
      <a
        className="skip-link"
        href="#conteudo"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120d20]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a
            aria-label="Flow — início"
            className="shrink-0 text-2xl font-bold tracking-[-0.06em]"
            href="#inicio"
          >
            flow<span className="text-violet-400">.</span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm text-violet-100/75 lg:flex"
          >
            <a className="nav-link" href="#solucao">A solução</a>
            <a className="nav-link" href="#funcionalidades">Funcionalidades</a>
            <a className="nav-link" href="#telas">Telas do produto</a>
            <a className="nav-link" href="#sobre">Para estudantes</a>
            <a className="nav-link" href="#equipe">Equipe</a>
          </nav>

          <a
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-violet-950 transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-violet-100 sm:px-5 sm:text-sm"
            href="#telas"
          >
            <span className="sm:hidden">Ver o Flow</span>
            <span className="hidden sm:inline">Explore o produto</span>
          </a>
        </div>
        <nav
          aria-label="Navegação mobile"
          className="mobile-nav flex gap-6 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs text-violet-100/75 sm:px-8 lg:hidden"
        >
          <a className="nav-link shrink-0" href="#solucao">A solução</a>
          <a className="nav-link shrink-0" href="#funcionalidades">Funcionalidades</a>
          <a className="nav-link shrink-0" href="#telas">Telas do produto</a>
          <a className="nav-link shrink-0" href="#sobre">Para estudantes</a>
          <a className="nav-link shrink-0" href="#equipe">Equipe</a>
        </nav>
      </header>

      <main id="conteudo">
        <section
          className="hero-surface relative overflow-hidden text-white"
          id="inicio"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-64 left-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[100px]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-violet-200 sm:text-xs">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                Tecnologia para sua rotina de estudos
              </p>

              <h1 className="max-w-[13ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-pretty">
                Da foto ao futuro.
                <span className="mt-2 block text-violet-300">
                  Seu estudo em outro nível.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-violet-100/70 sm:text-lg sm:leading-8">
                O Flow transforma fotos de lousas, cadernos e livros em
                conteúdos digitais organizados, para você aproveitar melhor
                cada momento de aprendizado.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a className="button-primary" href="#solucao">
                  Conheça a solução
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="button-secondary" href="#telas">
                  Veja o produto em ação
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-violet-100/65">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-violet-300">✳</span>
                  Captura inteligente
                </span>
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-violet-300">✳</span>
                  Organização intuitiva
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[38rem] pb-8 sm:pb-10">
              <div className="absolute -inset-4 rounded-[2rem] bg-violet-500/20 blur-2xl sm:-inset-8" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#211833] p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:rounded-[2rem] sm:p-3">
                <img
                  alt="Estudantes estudando juntos em uma mesa"
                  className="aspect-[4/3] w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]"
                  fetchPriority="high"
                  height="864"
                  src="/img/estudantes_02.png"
                  width="1152"
                />
                <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-3 rounded-b-[1.1rem] bg-gradient-to-t from-[#120d20]/95 via-[#120d20]/75 to-transparent px-4 pb-4 pt-12 sm:inset-x-3 sm:bottom-3 sm:rounded-b-[1.5rem] sm:px-6 sm:pb-6">
                  <div>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-violet-200/75 sm:text-xs">
                      Aprender com mais clareza
                    </p>
                    <p className="mt-1 text-lg font-semibold tracking-tight sm:text-2xl">
                      Seu conhecimento em fluxo.
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur sm:h-12 sm:w-12"
                  >
                    ↗
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-1 -left-1 flex items-center gap-3 rounded-2xl border border-violet-100/70 bg-white p-3.5 text-slate-900 shadow-xl sm:-left-7 sm:gap-4 sm:p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-700">
                  <Icon className="h-5 w-5" name="scan" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Reconhecimento de texto
                  </span>
                  <span className="mt-0.5 block text-sm font-bold">
                    Da imagem ao conteúdo
                  </span>
                </span>
              </div>
              <span className="absolute -right-2 top-7 rounded-full border border-white/15 bg-[#211833]/85 px-4 py-2 text-xs font-semibold text-violet-100 shadow-lg backdrop-blur sm:-right-5 sm:top-10 sm:px-5 sm:py-2.5 sm:text-sm">
                Aprendizado em movimento
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10" id="problema">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow">O desafio dos estudantes</p>
              <h2 className="section-title mt-5 max-w-xl">
                Quantas fotos de aula você tirou e nunca mais abriu?
              </h2>
            </div>
            <div className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                Durante as aulas, registramos muita informação pelo celular.
                Depois, as imagens se perdem na galeria e fica difícil
                encontrar, organizar e revisar o que realmente importa.
              </p>
              <p className="mt-5">
                O Flow foi pensado para transformar esses registros em
                materiais digitais mais fáceis de acessar e aproveitar.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#f6f2ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          id="solucao"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Do registro à revisão</p>
              <h2 className="section-title mt-5">
                Um jeito mais leve de acompanhar suas ideias.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Capture o que importa, transforme a imagem em texto e deixe
                seus materiais prontos para o próximo momento de estudo.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {etapas.map((etapa, index) => (
                <article
                  className="group relative rounded-3xl border border-violet-200/70 bg-white p-6 shadow-[0_8px_30px_rgba(46,16,101,0.04)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(46,16,101,0.10)] sm:p-8"
                  key={etapa.numero}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-700 group-hover:text-white">
                      <Icon className="h-6 w-6" name={etapa.icon} />
                    </span>
                    <span className="text-sm font-bold tracking-[0.12em] text-violet-300">
                      {etapa.numero}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-3 max-w-sm leading-7 text-slate-600">
                    {etapa.descricao}
                  </p>
                  {index < etapas.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-4 top-1/2 z-10 hidden h-px w-8 bg-violet-300 lg:block"
                    />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#120d20] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
          id="telas"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-violet-300">Conheça o produto</p>
                <h2 className="section-title mt-5 text-white">
                  Uma ideia que ganha forma na tela.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-violet-100/65">
                Uma prévia da experiência Flow: da captura do conteúdo às
                possibilidades que ajudam a continuar estudando.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {telas.map((tela) => (
                <figure
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1a1428]"
                  key={tela.imagem}
                >
                  <div className="grid h-[22rem] place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#30234a_0%,_#17111f_72%)] p-4 sm:h-[25rem]">
                    <img
                      alt={tela.alt}
                      className="h-full w-full object-contain"
                      height="800"
                      loading="lazy"
                      src={tela.imagem}
                      width="450"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 p-5">
                    <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-violet-300">
                      {tela.categoria}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      {tela.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-violet-100/60">
                      {tela.descricao}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          id="funcionalidades"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Feito para aprender</p>
              <h2 className="section-title mt-5">
                Mais organização. Mais tempo para aprender.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {funcionalidades.map((item, index) => (
                <article
                  className={`rounded-3xl border p-6 sm:p-8 ${
                    index === 1
                      ? "border-violet-300 bg-[#f6f2ff]"
                      : "border-slate-200 bg-white"
                  }`}
                  key={item.titulo}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-700 text-white">
                    <Icon className="h-6 w-6" name={item.icon} />
                  </span>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-950">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10" id="sobre">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
            <div>
              <p className="eyebrow">Para quem é o Flow?</p>
              <h2 className="section-title mt-5">
                Feito para quem quer aproveitar melhor cada aula.
              </h2>
            </div>
            <div>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                O Flow foi pensado para estudantes que usam o celular durante
                a rotina acadêmica e querem uma forma mais prática de registrar,
                acessar e organizar seus materiais de estudo.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Lousas e slides", "Livros e cadernos", "Revisão acadêmica"].map((item) => (
                  <span
                    className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-900"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f2ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-10" id="equipe">
          <div className="mx-auto grid min-w-0 grid-cols-1 max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div className="min-w-0">
              <p className="eyebrow">Projeto acadêmico FIAP • Grupo MOBIX</p>

                  <h2 className="section-title mt-5">
  Tecnologia com foco em quem aprende.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  O Flow é a solução desenvolvida pelo grupo MOBIX para transformar
                  a câmera JOVI em uma ferramenta de apoio à rotina acadêmica.
                  A proposta reúne recursos de captura inteligente, melhoria de
                  imagem, reconhecimento de texto e organização dos materiais
                  utilizados durante os estudos.
                </p>
              <h2 className="section-title mt-5">
                Tecnologia com foco em quem aprende.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                O Flow é um projeto acadêmico desenvolvido para explorar
                novas formas de registrar, organizar e revisitar conteúdos
                de estudo.
              </p>
              <a className="button-dark mt-8" href="#inicio">
                Voltar ao início
                <span aria-hidden="true">↑</span>
              </a>
            </div>

            <div className="min-w-0 rounded-[2rem] border border-violet-200/70 bg-white p-6 shadow-[0_20px_70px_rgba(46,16,101,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                    Quem faz acontecer
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Nossa equipe
                  </h3>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-bold text-violet-800">
                  FIAP
                </span>
              </div>
              <ul className="mt-2 divide-y divide-slate-100">
                {equipe.map((integrante, index) => (
                  <li
                    className="flex items-center justify-between gap-4 py-4"
                    key={integrante.rm}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate font-medium text-slate-800">
                        {integrante.nome}
                      </span>
                    </span>
                    <span className="shrink-0 text-xs font-medium text-slate-500 sm:text-sm">
                      {integrante.rm}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#120d20] px-5 py-20 text-center text-white sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-violet-300">Flow, da foto ao futuro</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Suas ideias merecem acompanhar você.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-violet-100/65 sm:text-lg sm:leading-8">
              Conheça uma nova possibilidade para transformar registros em
              uma rotina de estudos mais organizada.
            </p>
            <a className="button-primary mt-8" href="#telas">
              Explore as telas do Flow
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0d0915] px-5 py-8 text-violet-100/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a
            aria-label="Flow — voltar ao início"
            className="text-xl font-bold tracking-[-0.06em] text-white"
            href="#inicio"
          >
            flow<span className="text-violet-400">.</span>
          </a>
          <p className="text-sm">
            Projeto acadêmico desenvolvido para a FIAP.
          </p>
          <a className="text-sm font-medium text-violet-200 transition-colors hover:text-white" href="#inicio">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
