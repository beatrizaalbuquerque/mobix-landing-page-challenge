
const funcionalidades = [
  {
    numero: "01",
    titulo: "Captura inteligente",
    descricao:
      "Fotografe lousas, cadernos, livros e outros materiais de estudo para transformar informações em conteúdo digital."
  },
  {
    numero: "02",
    titulo: "Extração de informações",
    descricao:
      "A tecnologia OCR identifica e extrai os textos presentes nas imagens, facilitando o acesso ao conteúdo."
  },
  {
    numero: "03",
    titulo: "Organização dos estudos",
    descricao:
      "Organize seus materiais em um só lugar e encontre com mais facilidade aquilo que precisa revisar."
  }
];

const etapas = [
  {
    numero: "01",
    titulo: "Capture",
    descricao: "Fotografe o conteúdo da lousa, livro ou caderno."
  },
  {
    numero: "02",
    titulo: "Transforme",
    descricao: "A tecnologia identifica e extrai as informações da imagem."
  },
  {
    numero: "03",
    titulo: "Organize",
    descricao: "Tenha seu conteúdo digital organizado para consultar depois."
  }
];

function App() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#inicio" className="text-3xl font-extrabold tracking-tight text-violet-700">
            Flow<span className="text-violet-400">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#problema" className="transition hover:text-violet-700">
              O problema
            </a>
            <a href="#solucao" className="transition hover:text-violet-700">
              A solução
            </a>
            <a href="#funcionalidades" className="transition hover:text-violet-700">
              Funcionalidades
            </a>
            <a href="#sobre" className="transition hover:text-violet-700">
              Sobre o Flow
            </a>
          </nav>

          <a
            href="#solucao"
            className="rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
          >
            Conheça o Flow
          </a>
        </div>
      </header>

      {/* APRESENTAÇÃO PRINCIPAL */}
      <section
        id="inicio"
        className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-10"
      >
        <div>
          <span className="mb-6 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700">
            TECNOLOGIA PARA SUA ROTINA DE ESTUDOS
          </span>

          <h1 className="mb-7 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Da foto ao futuro.
            <span className="block text-violet-700">
              Seu estudo em outro nível.
            </span>
          </h1>

          <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-600">
            O Flow transforma fotos de lousas, cadernos e livros
            em conteúdos digitais organizados, ajudando estudantes
            a aproveitar melhor cada momento de aprendizado.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#solucao"
              className="rounded-full bg-violet-700 px-8 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
            >
              Descubra o Flow
            </a>

            <a
              href="#funcionalidades"
              className="rounded-full border border-violet-200 px-8 py-4 font-bold text-violet-700 transition hover:bg-violet-50"
            >
              Saiba como funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-violet-100 blur-2xl opacity-70"></div>

          <img
            src="/img/estudantes_02.png"
            alt="Estudantes utilizando tecnologia durante os estudos"
            className="relative z-10 w-full rounded-[2rem] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-6 -left-3 z-20 rounded-2xl bg-white p-5 shadow-xl md:-left-8">
            <p className="text-sm font-semibold text-slate-500">
              Uma nova forma de estudar
            </p>
            <p className="mt-1 text-xl font-extrabold text-violet-700">
              Mais organização.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:px-10">

          <div>
            <span className="font-bold uppercase tracking-widest text-violet-400">
              O desafio dos estudantes
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Quantas fotos de lousa você já tirou e nunca mais abriu?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-slate-300">
              Durante as aulas, estudantes registram diversas informações
              por meio de fotografias. Porém, muitas dessas imagens acabam
              esquecidas na galeria do celular, dificultando a organização
              e a revisão dos conteúdos.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              O problema não está apenas em registrar o conteúdo, mas em
              conseguir encontrá-lo, organizá-lo e utilizá-lo depois.
            </p>
          </div>

        </div>
      </section>

      {/* SOLUÇÃO */}
      <section id="solucao" className="bg-violet-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <span className="font-bold uppercase tracking-widest text-violet-700">
            Conheça nossa solução
          </span>

          <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
            Estudar pode ser mais simples.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-600">
            O Flow utiliza recursos de reconhecimento de texto para
            transformar imagens de materiais de estudo em informações
            digitais. Assim, o estudante consegue organizar melhor
            seus conteúdos e facilitar suas revisões.
          </p>

          <div className="mt-12 rounded-3xl border border-violet-100 bg-white p-8 shadow-sm md:p-12">
            <p className="text-2xl font-extrabold text-violet-700 md:text-3xl">
              Da captura à organização.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              Uma experiência pensada para tornar o processo de estudar
              mais prático, visual e organizado.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl lg:px-10">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-bold uppercase tracking-widest text-violet-700">
              Simples e intuitivo
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Como funciona o Flow?
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Três etapas para transformar registros de aula
              em materiais digitais mais organizados.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="rounded-3xl border border-violet-100 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-5xl font-extrabold text-violet-200">
                  {etapa.numero}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {etapa.titulo}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {etapa.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        id="funcionalidades"
        className="bg-slate-50 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl lg:px-10">

          <div className="mb-14 max-w-2xl">
            <span className="font-bold uppercase tracking-widest text-violet-700">
              O que o Flow oferece
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Mais organização para aprender.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Recursos pensados para facilitar o acesso e a organização
              dos materiais utilizados durante os estudos.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {funcionalidades.map((item) => (
              <article
                key={item.numero}
                className="rounded-3xl border border-violet-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-4xl font-extrabold text-violet-200">
                  {item.numero}
                </span>

                <h3 className="mt-7 text-2xl font-bold text-violet-700">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PÚBLICO-ALVO */}
      <section id="sobre" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:px-10">

          <div>
            <span className="font-bold uppercase tracking-widest text-violet-700">
              Para quem é o Flow?
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Feito para quem quer aproveitar melhor o aprendizado.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-slate-600">
              O Flow foi pensado para estudantes que utilizam o celular
              durante sua rotina acadêmica e desejam uma maneira mais
              prática de registrar, acessar e organizar seus materiais.
            </p>
          </div>

          <div className="rounded-[2rem] bg-violet-700 p-9 text-white md:p-12">
            <p className="text-3xl font-extrabold">
              Seu conhecimento merece estar organizado.
            </p>

            <p className="mt-6 leading-relaxed text-violet-100">
              Menos tempo procurando anotações.
              Mais facilidade para acessar os conteúdos
              que fazem parte da sua jornada de aprendizado.
            </p>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="bg-violet-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Da foto ao futuro.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Flow: tecnologia para transformar a maneira
            como você organiza seus estudos.
          </p>

          <a
            href="#inicio"
            className="mt-9 inline-block rounded-full bg-violet-700 px-9 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
          >
            Voltar ao início
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row lg:px-10">

          <div>
            <p className="text-3xl font-extrabold text-violet-400">
              Flow.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Da foto ao futuro.
            </p>
          </div>

          <p className="text-center text-sm text-slate-400">
            Projeto acadêmico desenvolvido para a FIAP.
          </p>

          <a
            href="#inicio"
            className="text-sm font-semibold text-violet-300 hover:text-white"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </footer>

    </main>
  );
}

export default App;
