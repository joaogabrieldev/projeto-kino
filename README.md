<div align="center">

# 🎬 Projeto Kino

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Gabriel-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)

**Uma aplicação web moderna de catálogo de filmes e séries, desenvolvida com Next.js, React e TypeScript, consumindo a API do TMDB**

</div>

---

## 📋 Índice

- [🌐 Deploy](#-deploy)
- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📦 Bibliotecas e Dependências](#-bibliotecas-e-dependências)
- [🏗️ Arquitetura e Padrões de Projeto](#️-arquitetura-e-padrões-de-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Como Executar](#️-como-executar)
- [👨‍💻 Autor](#-autor)

## 🌐 Deploy

<div align="center">

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://projeto-kino.vercel.app/)

</div>

A aplicação está hospedada na **Vercel** e pode ser acessada através do link:

### 🔗 [https://projeto-kino.vercel.app/](https://projeto-kino.vercel.app/)

---

## 📖 Sobre o Projeto

O **Kino** é um catálogo completo de entretenimento que consome a [API do TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api) para exibir informações em tempo real sobre filmes, séries de TV e artistas. A aplicação oferece uma experiência moderna e responsiva para explorar o vasto mundo do cinema e televisão.

### ✨ Funcionalidades Principais

- 🎞️ **Catálogo de Filmes**: Visualização de filmes populares, em cartaz, em breve e mais bem avaliados
- 📺 **Catálogo de Séries**: Séries populares, em exibição hoje, no ar e mais bem avaliadas
- 👤 **Perfis de Artistas**: Busca e visualização de perfis detalhados de atores, diretores e equipe técnica
- 🔍 **Sistema de Busca**: Pesquisa completa por filmes, séries e pessoas com resultados em tempo real
- 📝 **Detalhes Completos**: Páginas dedicadas com informações detalhadas, elenco, trailers e recomendações
- 🎠 **Carrosséis Interativos**: Navegação fluida por destaques e categorias com Embla Carousel
- 🎨 **Modo Claro/Escuro**: Suporte completo a temas com alternância entre modo claro, escuro e automático (sistema)
- 📱 **Design Responsivo**: Interface totalmente adaptável para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Server-Side Rendering, cache inteligente com React Query e otimizações do Next.js

### 🔜 Próximas Funcionalidades

- ⭐ **Favoritos e Listas**: Sistema de favoritos e listas personalizadas
- 🌐 **Internacionalização**: Suporte a múltiplos idiomas (i18n)
- 📊 **Página de Tendências**: Seção dedicada aos conteúdos em alta do momento
- 🎯 **Filtros Avançados**: Filtragem por gênero, ano, classificação e mais

---

## 🚀 Tecnologias Utilizadas

<div align="center">

### 🔧 Stack Principal

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" alt="React" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript" />
<img width="20" />
<img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="50" height="50" alt="Tailwind CSS" />
<img width="20" />
<img src="https://cdn.simpleicons.org/vercel/000000" width="50" height="50" alt="Vercel" />

</div>

- **Next.js** - Framework React para produção com App Router e Server-Side Rendering
- **React** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first para estilização rápida e responsiva
- **Vercel** - Plataforma de hospedagem e deploy otimizada para Next.js

---

## 📦 Bibliotecas e Dependências

<div align="center">

### 🔧 Dependências Principais

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" alt="React" />
<img width="20" />
<img src="https://cdn.simpleicons.org/axios/5A29E4" width="50" height="50" alt="Axios" />
<img width="20" />
<img src="https://cdn.simpleicons.org/reactquery/FF4154" width="50" height="50" alt="TanStack Query" />
<img width="20" />

</div>

- **Next.js** (`16.1.6`) - Framework React para produção
- **React** (`19.2.3`) - Biblioteca para interfaces de usuário
- **Axios** (`1.13.5`) - Cliente HTTP para requisições à API do TMDB
- **@tanstack/react-query** (`5.90.20`) - Gerenciamento de cache e estado assíncrono
- **Zustand** (`5.0.11`) - Gerenciamento de estado global leve e performático
- **Motion** (`12.33.0`) - Biblioteca de animações e transições fluidas
- **@floating-ui/react** (`0.27.17`) - Posicionamento de overlays, tooltips e dropdowns
- **Embla Carousel React** (`8.6.0`) - Biblioteca moderna para carrosséis e sliders
- **next-themes** (`0.4.6`) - Gerenciamento de temas claro/escuro
- **Lucide React** (`0.563.0`) - Ícones SVG modernos e limpos
- **React Icons** (`5.5.0`) - Biblioteca completa de ícones

<div align="center">

### 🛠️ Dependências de Desenvolvimento

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript" />
<img width="20" />
<img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="50" height="50" alt="Tailwind CSS" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="50" height="50" alt="ESLint" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="ESLint Config Next" />
<img width="20" />
<img src="https://cdn.simpleicons.org/prettier/F7B93E" width="50" height="50" alt="Prettier" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50" alt="Git" />

</div>

- **TypeScript** (`^5`) - Superset do JavaScript com tipagem estática
- **Tailwind CSS** (`^4`) - Framework CSS utility-first
- **ESLint** (`^9`) - Ferramenta de linting para JavaScript/TypeScript
- **eslint-plugin-simple-import-sort** (`12.1.1`) - Plugin para ordenação de imports
- **Prettier** (`3.8.1`) - Formatador de código
- **prettier-plugin-tailwindcss** (`0.7.2`) - Plugin Prettier para ordenação de classes Tailwind
- **shadcn** (`3.8.4`) - CLI para componentes shadcn/ui

---

## 🏗️ Arquitetura e Padrões de Projeto

### 🎯 Padrões Implementados

#### 1. **Component-Based Architecture**

- Arquitetura baseada em componentes reutilizáveis e modulares
- Separação clara entre **componentes de UI**, **widgets** (composições complexas) e **pieces** (elementos básicos)
- Componentes pequenos e focados em uma única responsabilidade

#### 2. **Custom Hooks Pattern**

- Lógica de negócio e efeitos encapsulados em hooks customizados
- Hooks especializados: `useMovies`, `useTVShows`, `useContent`, `useDebounce`
- Facilita reutilização, testes e manutenção do código

#### 3. **Separation of Concerns**

- **`/services`**: Cliente API e comunicação com backend (Axios + TMDB)
- **`/stores`**: Estado global da aplicação (Zustand)
- **`/providers`**: Context Providers (React Query, Theme)
- **`/utils`**: Funções utilitárias puras e transformadores de dados
- **`/constants`**: Constantes, endpoints e tipos globais
- **`/hooks`**: Lógica de dados e efeitos reutilizáveis

#### 4. **Design System**

- Componentes base reutilizáveis seguindo padrões de design
- Uso de Radix UI para componentes acessíveis por padrão
- Floating UI para posicionamento inteligente de elementos flutuantes
- Suporte a navegação por teclado e leitores de tela

#### 5. **API Layer Abstraction**

- Camada de abstração para chamadas à API do TMDB
- Centralização de endpoints e configurações
- Tratamento de erros e loading states com Tanstack Query
- Cache inteligente e revalidação automática

---

## 📁 Estrutura do Projeto

```
projeto-kino/
├── public/                     # Arquivos estáticos
│   └── *.svg                   # Ícones e imagens SVG
│
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.tsx          # Layout raiz da aplicação
│   │   ├── page.tsx            # Página inicial
│   │   ├── globals.css         # Estilos globais
│   │   ├── theme.css           # Variáveis de tema
│   │   ├── movie/              # Rotas de filmes
│   │   │   ├── [id]/           # Detalhes do filme
│   │   │   └── category/       # Categorias de filmes
│   │   ├── tv/                 # Rotas de séries
│   │   │   ├── [id]/           # Detalhes da série
│   │   │   └── category/       # Categorias de séries
│   │   ├── person/             # Rotas de pessoas/artistas
│   │   │   ├── page.tsx        # Listagem de pessoas
│   │   │   └── [id]/           # Detalhes da pessoa
│   │   ├── search/             # Rotas de busca
│   │   │   ├── page.tsx        # Busca geral
│   │   │   └── person/         # Busca de pessoas
│   │   └── discover/           # Descobrir conteúdo
│   │       └── [type]/         # Por tipo (movie/tv)
│   │
│   ├── assets/                 # Recursos e dados estáticos
│   │   ├── animations/         # Arquivos de animação
│   │   ├── data/               # Dados estáticos (navLinks.ts)
│   │   ├── fonts/              # Fontes customizadas
│   │   ├── images/             # Imagens do projeto
│   │   ├── projects/           # Projetos do After Effects
│   │   └── types/              # Tipos TypeScript do domínio
│   │       ├── index.ts
│   │       ├── movie.ts
│   │       ├── person.ts
│   │       └── tv.ts
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes shadcn/ui
│   │   ├── base/               # Componentes base
│   │   │   ├── buttons/
│   │   │   └── button-group/
│   │   ├── application/        # Componentes da aplicação
│   │   │   └── pagination/
│   │   ├── Animation/          # Componente de animação
│   │   ├── BackdropSlider/     # Slider de backdrop
│   │   ├── BackdropImages/     # Galeria de imagens
│   │   ├── Nav/                # Navegação
│   │   ├── CastCard/           # Card de elenco
│   │   ├── ContentRow/         # Linha de conteúdo
│   │   ├── FilterCard/         # Card de filtro
│   │   ├── FilterSearchBar/    # Barra de busca com filtros
│   │   ├── HeaderSearchBar/    # Barra de busca do header
│   │   ├── MovieDetailsHero/   # Hero de detalhes do filme
│   │   ├── MovieDetailsBody/   # Corpo de detalhes do filme
│   │   ├── ShowDetailsHero/    # Hero de detalhes da série
│   │   ├── ShowDetailsBody/    # Corpo de detalhes da série
│   │   ├── PersonCard/         # Card de pessoa
│   │   ├── PersonDetailsHero/  # Hero de detalhes da pessoa
│   │   ├── RecommendationCard/ # Card de recomendação
│   │   └── ...
│   │
│   ├── constants/              # Constantes da aplicação
│   │   ├── endpoints.ts        # URLs da API
│   │   ├── genres.ts           # Lista de gêneros
│   │   └── types/              # Tipos constantes
│   │
│   ├── hooks/                  # Custom Hooks
│   │   ├── use-breakpoint.ts   # Hook de breakpoints
│   │   ├── useContent.ts       # Hook genérico de conteúdo
│   │   ├── useDebounce.ts      # Hook de debounce
│   │   ├── useMovies.ts        # Hook de filmes
│   │   └── useTVShows.ts       # Hook de séries
│   │
│   ├── layout/                 # Componentes de layout
│   │   ├── Header/             # Cabeçalho
│   │   ├── Footer/             # Rodapé
│   │   └── Main/               # Container principal
│   │
│   ├── lib/                    # Bibliotecas e utilitários
│   │   ├── utils.ts            # Funções utilitárias gerais
│   │   └── utils/              # Utilitários específicos
│   │
│   ├── pieces/                 # Componentes pequenos reutilizáveis
│   │   ├── ContentCard/        # Card de conteúdo
│   │   ├── Loading/            # Componente de loading
│   │   ├── LoadingPoster/      # Loading de poster
│   │   ├── ModeButton/         # Botão de modo (tema)
│   │   ├── NavItem/            # Item de navegação
│   │   ├── SelectBadge/        # Badge selecionável
│   │   └── StarFilled/         # Estrela preenchida
│   │
│   ├── providers/              # Context Providers
│   │   ├── ReactQueryProvider.tsx  # Provider do React Query
│   │   └── ThemeProvider.tsx       # Provider de tema
│   │
│   ├── services/               # Serviços e APIs
│   │   └── api.ts              # Cliente Axios + configuração TMDB
│   │
│   ├── stores/                 # Gerenciamento de estado global
│   │   ├── useDropdownMenuStore.ts  # Estado do dropdown
│   │   └── useHeaderScrollStore.ts  # Estado do scroll do header
│   │
│   ├── utils/                  # Funções utilitárias
│   │   ├── defaults.ts         # Valores padrão
│   │   ├── fonts.ts            # Configuração de fontes
│   │   ├── links.ts            # Geração de links
│   │   ├── transformers.ts     # Transformadores de dados
│   │   └── utilitaries.tsx     # Utilitários React
│   │
│   └── widgets/                # Widgets complexos (composições)
│       ├── CastCarousel/       # Carrossel de elenco
│       ├── ContentCarousels/   # Carrosséis de conteúdo
│       ├── ContentDetailsPage/ # Página de detalhes
│       ├── DiscoverHomePage/   # Página de descoberta
│       ├── GridContents/       # Grid de conteúdos
│       ├── PersonGrid/         # Grid de pessoas
│       ├── PersonHomePage/     # Home de pessoa
│       ├── PersonPage/         # Página de pessoa
│       ├── SearchHomePage/     # Home de busca
│       └── SearchPeopleHomePage/ # Home de busca de pessoas
│
├── components.json             # Configuração shadcn/ui
├── eslint.config.mjs           # Configuração ESLint
├── next.config.ts              # Configuração do Next.js
├── next-env.d.ts               # Tipos do Next.js
├── package.json                # Dependências do projeto
├── postcss.config.mjs          # Configuração PostCSS
├── pnpm-lock.yaml              # Lock file do pnpm
├── pnpm-workspace.yaml         # Workspace do pnpm
├── README.md                   # Este arquivo
└── tsconfig.json               # Configuração TypeScript
```

---

## ⚙️ Como Executar

### 📋 Pré-requisitos

- Node.js 18+ instalado
- pnpm, npm, yarn ou bun
- Chave de API do TMDB (gratuita)

### 🔑 Configuração da API

1. **Obtenha uma chave de API gratuita do TMDB**
   - Acesse [TMDB API](https://www.themoviedb.org/settings/api)
   - Crie uma conta e solicite uma chave de API (é gratuito!)

2. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_api_aqui
```

### 🚀 Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/joaogabrieldev/projeto-kino.git
cd projeto-kino
```

2. **Instale as dependências**

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**

```
http://localhost:3000
```

### 🛠️ Scripts Disponíveis

| Script       | Descrição                                |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Inicia o servidor de desenvolvimento     |
| `pnpm build` | Cria build de produção otimizado         |
| `pnpm start` | Inicia o servidor de produção            |
| `pnpm lint`  | Executa o ESLint para verificar o código |

---

## 👨‍💻 Autor

<div align="center">

### João Gabriel R. Rocha

**Fullstack Developer**

[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Gabriel-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)

---

<div align="center">

**Desenvolvido com ❤️ usando Next.js, React e TypeScript**

![Made with](https://img.shields.io/badge/Made%20with-Next.js-black?style=flat-square&logo=next.js)
![Made with](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)
![Made with](https://img.shields.io/badge/Made%20with-TypeScript-3178C6?style=flat-square&logo=typescript)

</div>

</div>
