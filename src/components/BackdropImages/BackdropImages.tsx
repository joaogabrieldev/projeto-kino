import { api } from "@/service/api";

import BackdropSlider from "../BackdropSlider/BackdropSlider";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string | null;
  media_type: "movie" | "tv";
}

interface TMDBResponse {
  results: Movie[];
}

export default async function BackdropImages() {
  const fetchMovies = async (): Promise<Movie[]> => {
    try {
      const { data } = await api.get<TMDBResponse>("/trending/all/day", {
        params: { language: "pt-BR" },
      });

      return data?.results.slice(0, 15) || [];
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
      return [];
    }
  };

  const showMovies = await fetchMovies();

  if (showMovies.length === 0) {
    return <div className="h-[85vh] w-full bg-black" />;
  }

  return <BackdropSlider movies={showMovies} />;
}
