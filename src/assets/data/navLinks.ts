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
        slug: "/movie/category/popular",
      },
      {
        title: "Em cartaz",
        slug: "/movie/category/now_playing",
      },
      {
        title: "Vindo aí",
        slug: "/movie/category/upcoming",
      },
      {
        title: "Mais bem avaliados",
        slug: "/movie/category/top_rated",
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
        slug: "/tv/category/airing-today",
      },
      {
        title: "Na TV",
        slug: "/tv/category/on-the-air",
      },
      {
        title: "Mais bem avaliados",
        slug: "/tv/category/top_rated",
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
