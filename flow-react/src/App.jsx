
function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-5 md:px-16">
        <h1 className="text-3xl font-bold text-violet-700">
          Flow
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#inicio">Início</a>
          <a href="#solucao">Solução</a>
          <a href="#beneficios">Benefícios</a>
        </nav>

        <a
          href="#solucao"
          className="rounded-full bg-violet-700 px-6 py-3 text-white transition hover:bg-violet-800"
        >
          Conheça o Flow
        </a>
      </header>

      <section
        id="inicio"
        className="grid min-h-[75vh] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16"
      >
        <div>
          <p className="mb-4 font-semibold uppercase tracking-widest text-violet-600">
            Tecnologia para sua rotina de estudos
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Da foto ao futuro.
            <span className="text-violet-700">
              {" "}Seu estudo em outro nível.
            </span>
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            O Flow transforma fotos de lousas, cadernos e livros
            em conteúdos organizados, facilitando sua rotina
            de estudos e revisão.
          </p>

          <a
            href="#solucao"
            className="inline-block rounded-full bg-violet-700 px-8 py-4 font-semibold text-white hover:bg-violet-800"
          >
            Descubra o Flow
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="/img/estudantes_02.png"
            alt="Estudantes utilizando tecnologia para estudar"
            className="w-full max-w-lg rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section
        id="solucao"
        className="bg-violet-50 px-6 py-20 text-center md:px-16"
      >
        <p className="mb-3 font-semibold uppercase tracking-widest text-violet-600">
          Conheça nossa solução
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Estudar pode ser mais simples.
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
          Com inteligência na câmera, o Flow ajuda a extrair,
          organizar e guardar informações importantes para
          você aproveitar melhor cada momento de aprendizado.
        </p>
      </section>

      <section
        id="beneficios"
        className="px-6 py-20 md:px-16"
      >
        <h2 className="mb-12 text-center text-3xl font-bold">
          Mais organização para aprender
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Captura inteligente",
              description: "Registre conteúdos de lousas, livros e cadernos."
            },
            {
              title: "Conteúdo organizado",
              description: "Transforme informações fotografadas em textos organizados."
            },
            {
              title: "Estudo facilitado",
              description: "Tenha seus materiais reunidos para consultar e revisar."
            }
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-violet-100 p-8 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-bold text-violet-700">
                {item.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-8 text-center text-white">
        <p className="text-xl font-bold">Flow</p>
        <p className="mt-2 text-sm text-gray-400">
          Da foto ao futuro.
        </p>
      </footer>
    </main>
  );
}

export default App;
