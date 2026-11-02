# MOBIX / FLOW

Landing page do FLOW, projeto acadêmico do grupo MOBIX para a atividade de Web
Development da FIAP. Esta versão evolui para React a proposta e o conteúdo
apresentados na Sprint 03, mantendo a identidade visual roxa, as imagens e as
telas conceituais do projeto original.

## Sobre o FLOW

O FLOW é uma proposta para apoiar a organização dos estudos. A ideia parte do
registro de lousas, livros, slides e anotações com a câmera JOVI e explora
possibilidades como melhoria de imagem, reconhecimento de texto (OCR) e
organização de conteúdos acadêmicos.

O repositório contém a landing page e telas conceituais. **Não contém o
aplicativo FLOW nem implementações funcionais de OCR, geração de resumos ou
questões, armazenamento de materiais ou integração com a câmera JOVI.**

## Interface

A landing page adapta o conteúdo para desktop, tablet e celular, com navegação
entre seções, galeria de protótipos e formulário de contato. Algumas seções
aparecem suavemente ao entrar na área visível, e os cards da galeria têm um
realce discreto ao interagir. As transições respeitam a preferência do
dispositivo por movimento reduzido.

## Tecnologias

- React e JSX
- Vite
- Tailwind CSS 4
- JavaScript
- FormSubmit para encaminhar mensagens do formulário de contato

## Pré-requisitos

- Node.js LTS (versão 22 ou superior recomendada)
- npm
- Git, para clonar o repositório

## Executar localmente

No terminal, a partir da raiz do repositório:

```bash
cd flow-react
npm ci
npm run dev
```

Abra o endereço local informado pelo Vite (por padrão,
`http://localhost:5173/`).

## Validar e gerar a versão de produção

Execute os comandos dentro de `flow-react/`:

```bash
npm run lint
npm run build
```

O build gera os arquivos estáticos em `flow-react/dist/`. Para visualizar esse
build localmente:

```bash
npm run preview
```

## Estrutura

```text
.
├── INTEGRANTES.TXT             # Integrantes e RMs
├── MOBIX/                      # Landing page original da Sprint 03
│   ├── INTEGRANTES.TXT
│   ├── index.html
│   ├── style.css
│   └── img/
├── flow-react/                 # Evolução da landing page em React
│   ├── public/
│   │   └── img/                # Imagens e telas conceituais do FLOW
│   ├── src/
│   │   ├── App.jsx             # Seções, componentes e formulário
│   │   ├── index.css           # Base global e efeitos específicos
│   │   └── main.jsx            # Inicialização do React
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json
│   └── vite.config.js
└── README.md
```

## Contato e backend

O repositório não implementa um backend próprio, autenticação ou banco de dados.
O formulário de contato envia as mensagens pelo serviço externo FormSubmit para
`mobix.fiap@gmail.com`. No primeiro envio, o destinatário precisa confirmar a
ativação no e-mail enviado pelo FormSubmit. O envio real depende dessa
confirmação e da disponibilidade do serviço. A seção de contato também oferece
um link de e-mail direto para esse endereço.

## Publicação na Vercel

Existe uma publicação do projeto em
[https://mobix-landing-page-challenge.vercel.app/](https://mobix-landing-page-challenge.vercel.app/).
O endereço corresponde à publicação do projeto. A versão disponível acompanha
o último deploy concluído no painel da Vercel; confira o status do deploy para
confirmar quando as alterações mais recentes estiverem publicadas.

Para publicar esta aplicação, configure o projeto na Vercel com:

| Configuração | Valor |
| --- | --- |
| Root Directory | `flow-react` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

O arquivo `flow-react/vercel.json` registra os comandos de instalação e build e
a pasta de saída. O **Root Directory precisa ser definido nas configurações do
projeto Vercel**; um arquivo dentro da pasta não substitui essa configuração.
Um push para a branch conectada pode iniciar um deploy automático; a conclusão
deve ser confirmada no painel da Vercel.

## Repositório

[github.com/beatrizaalbuquerque/mobix-landing-page-challenge](https://github.com/beatrizaalbuquerque/mobix-landing-page-challenge)

## Entrega em ZIP

O arquivo `INTEGRANTES.TXT` na raiz contém os cinco integrantes e seus RMs.
Para preparar a entrega, inclua o código das pastas `MOBIX/` e `flow-react/`,
este `README.md` e `INTEGRANTES.TXT`. Não inclua `node_modules/`, `dist/`,
`.agents/`, `.git/` nem arquivos temporários. O arquivo compactado deve conter
apenas uma cópia do README principal.

## Atividade

FIAP · Engenharia de Software · Web Development
