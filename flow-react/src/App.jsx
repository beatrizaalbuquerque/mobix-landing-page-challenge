import { useEffect, useState } from "react";

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/mobix.fiap@gmail.com";

const etapas = [
  { numero: "01", titulo: "Capture", descricao: "Registre lousas, slides, livros e anotações durante a aula.", icon: "◉" },
  { numero: "02", titulo: "Reconheça", descricao: "Use o reconhecimento de texto para transformar registros em conteúdo pesquisável.", icon: "⌗" },
  { numero: "03", titulo: "Organize", descricao: "Separe os materiais por disciplina e mantenha tudo fácil de encontrar.", icon: "▤" },
  { numero: "04", titulo: "Revise", descricao: "Volte ao conteúdo capturado e aproveite melhor seu tempo de estudo.", icon: "↗" },
];

const telas = [
  { imagem: "/img/img4.png", alt: "Tela do Flow com modo de captura de aula", tag: "01 / CAPTURA", titulo: "Modo aula", descricao: "Registros pensados para lousas, slides e cadernos." },
  { imagem: "/img/img2.png", alt: "Tela do Flow com conteúdo reconhecido", tag: "02 / RECONHECIMENTO", titulo: "Conteúdo identificado", descricao: "Informações da imagem apresentadas de forma mais acessível." },
  { imagem: "/img/img5.png", alt: "Tela do Flow organizando materiais em pastas", tag: "03 / ORGANIZAÇÃO", titulo: "Tudo no seu lugar", descricao: "Materiais separados para facilitar a consulta." },
  { imagem: "/img/img6.png", alt: "Tela do Flow com opções de estudo", tag: "04 / REVISÃO", titulo: "Continue aprendendo", descricao: "Possibilidades para retomar e trabalhar o conteúdo." },
];

const recursos = [
  { n: "01", titulo: "Captura inteligente", texto: "A câmera JOVI como ponto de partida para registrar o que importa em cada aula." },
  { n: "02", titulo: "Imagem + OCR", texto: "A proposta combina melhoria de imagem e reconhecimento de texto para facilitar a leitura dos registros." },
  { n: "03", titulo: "Organização acadêmica", texto: "Uma experiência para reunir conteúdos por disciplina e tornar a revisão mais prática." },
];

const equipe = [
  ["Beatriz Albuquerque", "RM572055"],
  ["Nicole Couto", "RM569191"],
  ["Robert Josino", "RM571622"],
  ["Ryan Maick", "RM573051"],
  ["Vitor Borin", "RM573194"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [contactStatus, setContactStatus] = useState({
    type: "idle",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
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
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  async function handleContactSubmit(event) {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload._subject = "Novo contato pelo site MOBIX / FLOW";

    setIsSending(true);
    setContactStatus({
      type: "loading",
      message: "Enviando sua mensagem…",
    });

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      const submissionSucceeded =
        result.success === true || result.success === "true";

      if (!response.ok || !submissionSucceeded) {
        throw new Error(
          result.message || "O serviço não conseguiu enviar sua mensagem."
        );
      }

      form.reset();
      setContactStatus({
        type: "success",
        message:
          "Mensagem enviada! A equipe MOBIX receberá seu contato em breve.",
      });
    } catch (error) {
      setContactStatus({
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

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="MOBIX FLOW início">
            <span className="brand-symbol">MB</span>
            <span className="brand-name">
              MOBIX<span className="brand-dot">.</span>
              <small>FLOW EXPERIENCE</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucao">A solução</a>
            <a href="#experiencia">Experiência</a>
            <a href="#telas">Produto</a>
            <a href="#equipe">Equipe</a>
          </nav>

          <a className="header-cta" href="#contato">
            Fale com a MOBIX <Arrow />
          </a>
        </div>

        <nav className="mobile-nav" aria-label="Navegação mobile">
          <a href="#solucao">Solução</a>
          <a href="#experiencia">Experiência</a>
          <a href="#telas">Produto</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow light">
                <span className="status-dot" /> UM PROJETO MOBIX
              </div>

              <p className="hero-kicker">
                Conheça o <strong>FLOW</strong>
              </p>

              <h1>
                Da sala de aula
                <br />
                para o seu <em>próximo nível.</em>
              </h1>

              <p className="hero-description">
                Uma nova forma de transformar registros de aula em materiais
                digitais mais organizados, acessíveis e prontos para acompanhar
                sua rotina de estudos.
              </p>

              <div className="hero-actions">
                <a className="button button-light" href="#solucao">
                  Descubra o Flow <Arrow />
                </a>

                <a className="text-link light-link" href="#telas">
                  Ver telas do produto <span>↓</span>
                </a>
              </div>

              <div className="hero-meta">
                <span>CAPTURAR</span>
                <i />
                <span>RECONHECER</span>
                <i />
                <span>ORGANIZAR</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-photo-wrap">
                <img
                  src="/img/estudantes_02.png"
                  alt="Estudantes reunidos estudando e consultando materiais em sala de aula"
                />

                <div className="photo-caption">
                  <span>FLOW / 001</span>
                  <strong>
                    O conhecimento
                    <br />
                    em movimento.
                  </strong>
                </div>
              </div>

              <div className="floating-note">
                <span className="note-icon">⌗</span>
                <span>
                  <small>DA IMAGEM AO TEXTO</small>
                  <strong>Registre. Reconheça. Revise.</strong>
                </span>
              </div>

              <span className="hero-index">01 — 04</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>TECNOLOGIA PARA A ROTINA ACADÊMICA</span>
            <a href="#desafio">ROLE PARA EXPLORAR ↓</a>
          </div>
        </section>

        <section className="intro-section section-pad" id="desafio">
          <div className="section-label" data-reveal>
            <span>01</span> O PONTO DE PARTIDA
          </div>

          <div className="intro-grid">
            <h2 data-reveal>
              Quantas ideias importantes ficam perdidas na{" "}
              <em>galeria do celular?</em>
            </h2>

            <div className="intro-copy" data-reveal>
              <p>
                Fotos de lousas, slides, livros e anotações fazem parte da
                rotina de quem estuda. Mas, com o tempo, encontrar aquele
                registro e transformar a imagem em material útil pode se
                tornar um desafio.
              </p>

              <p>
                O FLOW nasce para aproximar a captura do aprendizado, uma
                proposta que conecta a câmera JOVI a uma experiência de
                organização dos conteúdos acadêmicos.
              </p>
            </div>
          </div>

          <div className="intro-stamp" aria-hidden="true">
            MOBIX
            <br />
            <b>FLOW</b>
          </div>
        </section>

        <section className="solution-section section-pad" id="solucao">
          <div className="section-top" data-reveal>
            <div>
              <div className="section-label">
                <span>02</span> COMO FUNCIONA
              </div>

              <h2>
                Do instante da captura
                <br />
                ao momento de <em>revisar.</em>
              </h2>
            </div>

            <p>
              Quatro etapas que dão forma à proposta do FLOW e acompanham o
              caminho do conteúdo dentro da rotina de estudos.
            </p>
          </div>

          <div className="steps-grid">
            {etapas.map((item, i) => (
              <article
                className="step-card"
                data-reveal
                key={item.numero}
                style={{ "--delay": `${i * 90}ms` }}
              >
                <div className="step-top">
                  <span>{item.numero}</span>
                  <b>{item.icon}</b>
                </div>

                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>

                <div className="step-line">
                  <span />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-pad" id="experiencia">
          <div className="experience-heading" data-reveal>
            <div className="section-label light">
              <span>03</span> PENSADO PARA ESTUDAR
            </div>

            <h2>
              Menos tempo procurando.
              <br />
              <em>Mais tempo aprendendo.</em>
            </h2>

            <p>
              A proposta reúne recursos que ajudam a transformar registros
              cotidianos em materiais mais fáceis de consultar.
            </p>
          </div>

          <div className="feature-list">
            {recursos.map((r, i) => (
              <article
                className="feature-row"
                data-reveal
                key={r.n}
                style={{ "--delay": `${i * 100}ms` }}
              >
                <span className="feature-number">{r.n}</span>
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
                <span className="feature-arrow">↗</span>
              </article>
            ))}
          </div>

          <div className="experience-foot">
            <span>MOBIX × FLOW</span>
            <span>UMA IDEIA PARA A ROTINA REAL</span>
          </div>
        </section>

        <section className="gallery-section section-pad" id="telas">
          <div className="section-top" data-reveal>
            <div>
              <div className="section-label">
                <span>04</span> POR DENTRO DO FLOW
              </div>

              <h2>
                Uma prévia da
                <br />
                <em>experiência.</em>
              </h2>
            </div>

            <p>
              Conheça algumas telas e conceitos da solução.
            </p>
          </div>

          <div className="gallery-grid">
            {telas.map((t, i) => (
              <figure
                className={`gallery-card gallery-card-${i + 1}`}
                data-reveal
                key={t.imagem}
                style={{ "--delay": `${i * 80}ms` }}
              >
                <div className="gallery-image">
                  <span className="gallery-index">{t.tag}</span>
                  <img src={t.imagem} alt={t.alt} loading="lazy" />
                </div>

                <figcaption>
                  <div>
                    <h3>{t.titulo}</h3>
                    <p>{t.descricao}</p>
                  </div>

                  <span className="gallery-arrow">↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-section section-pad">
          <div className="about-image" data-reveal>
            <img
              src="/img/mobixcapa.png"
              alt="Imagem do aparelho JOVI utilizado como referência para a proposta MOBIX"
              loading="lazy"
            />
            <span>TECNOLOGIA COMO PONTO DE PARTIDA</span>
          </div>

          <div className="about-copy" data-reveal>
            <div className="section-label">
              <span>05</span> A IDEIA MOBIX
            </div>

            <h2>
              Uma câmera.
              <br />
              <em>Novas possibilidades.</em>
            </h2>

            <p>
              O FLOW é a solução do grupo MOBIX que utiliza a câmera JOVI como
              ponto de partida para apoiar estudantes no registro e na
              organização de conteúdos acadêmicos.
            </p>

            <p>
              A proposta explora melhoria de imagem, reconhecimento de texto
              (OCR) e organização dos materiais, conectando tecnologia a uma
              necessidade presente dentro e fora da sala de aula.
            </p>

            <a className="text-link dark-link" href="#equipe">
              Conheça quem desenvolve <Arrow />
            </a>
          </div>
        </section>

        <section className="team-section section-pad" id="equipe">
          <div className="team-heading" data-reveal>
            <div className="section-label light">
              <span>06</span> QUEM FAZ ACONTECER
            </div>

            <h2>
              Uma ideia construída
              <br />
              em <em>equipe.</em>
            </h2>

            <p>Projeto acadêmico desenvolvido pelo grupo MOBIX para a FIAP.</p>
          </div>

          <div className="team-list">
            {equipe.map(([nome, rm], i) => (
              <article
                className="team-member"
                data-reveal
                key={rm}
                style={{ "--delay": `${i * 65}ms` }}
              >
                <span className="member-number">0{i + 1}</span>
                <h3>{nome}</h3>
                <span className="member-rm">{rm}</span>
                <span className="member-mark">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-pad" id="contato">
          <div className="contact-orb" aria-hidden="true" />

          <div className="section-label light" data-reveal>
            <span>07</span> CONEXÃO MOBIX
          </div>

          <div className="contact-grid">
            <div data-reveal>
              <h2>
                Vamos colocar
                <br />
                boas ideias em <em>movimento?</em>
              </h2>

              <p>
                Quer conhecer melhor a proposta do FLOW? Explore o projeto e
                acompanhe as etapas desenvolvidas pelo grupo MOBIX.
              </p>
            </div>

            <form
              className="contact-card contact-form"
              data-reveal
              onSubmit={handleContactSubmit}
            >
              <span className="contact-card-label">MOBIX / FLOW</span>

              <strong>Conte para a gente como podemos ajudar.</strong>

              <label className="contact-field">
                <span>Seu nome</span>
                <input
                  autoComplete="name"
                  maxLength="100"
                  name="name"
                  placeholder="Como podemos chamar você?"
                  required
                />
              </label>

              <label className="contact-field">
                <span>Seu e-mail</span>
                <input
                  autoComplete="email"
                  maxLength="254"
                  name="email"
                  placeholder="voce@exemplo.com"
                  required
                  type="email"
                />
              </label>

              <label className="contact-field">
                <span>Mensagem</span>
                <textarea
                  maxLength="3000"
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  required
                  rows="4"
                />
              </label>

              <div className="contact-honeypot" aria-hidden="true">
                <label>
                  Não preencha este campo
                  <input
                    autoComplete="off"
                    name="_honey"
                    tabIndex="-1"
                    type="text"
                  />
                </label>
              </div>

              <button
                className="button button-light contact-submit"
                disabled={isSending}
                type="submit"
              >
                {isSending ? "Enviando…" : "Enviar mensagem"}
                {!isSending && <Arrow />}
              </button>

              <p
                aria-live="polite"
                className={`contact-status contact-status-${contactStatus.type}`}
                role={contactStatus.type === "error" ? "alert" : "status"}
              >
                {contactStatus.message}
              </p>

              <span className="contact-card-foot">
                Seus dados serão encaminhados pelo FormSubmit para a equipe
                MOBIX. No primeiro envio, a equipe deve confirmar a ativação
                pelo e-mail recebido.
              </span>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          MOBIX<span>.</span>
        </a>

        <p>FLOW, Da foto ao próximo nível.</p>

        <span>FIAP · 2026</span>
      </footer>
    </>
  );
}

export default App;