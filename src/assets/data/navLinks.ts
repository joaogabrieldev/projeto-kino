export type SubTitles = {
  title: string;
  slug: string;
};

export type NavLinks = {
  title: string;
  href?: string;
  subtitles?: SubTitles[];
};

export const API_ROUTES = {
  MOVIE: "/movie",
  TV: "/tv",
  PERSON: "/person",
} as const;

export const navLinks: NavLinks[] = [
  {
    title: "Filmes",
    subtitles: [
      {
        title: "Populares",
        slug: "/movie",
      },
      {
        title: "Em cartaz",
        slug: "/movie/now-playing",
      },
      {
        title: "Vindo aí",
        slug: "/movie/upcoming",
      },
      {
        title: "Mais bem avaliados",
        slug: "/movie/top_rated",
      },
    ],
  },
  {
    title: "Séries",
    subtitles: [
      {
        title: "Populares",
        slug: "/tv",
      },
      {
        title: "Em exibição hoje",
        slug: "/tv/airing-today",
      },
      {
        title: "Na TV",
        slug: "/tv/on-the-air",
      },
      {
        title: "Mais bem avaliados",
        slug: "/tv/top_rated",
      },
    ],
  },
  {
    title: "Artistas",
    subtitles: [
      {
        title: "Artistas",
        slug: "/person",
      },
    ],
  },
];
