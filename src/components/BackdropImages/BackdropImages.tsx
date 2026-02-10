import { ENDPOINTS } from "@/constants/endpoints";
import { api } from "@/service/api";

import BackdropSlider from "../BackdropSlider/BackdropSlider";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string | null;
  media_type?: "movie" | "tv";
}

interface TMDBResponse {
  results: Movie[];
}

export default async function BackdropImages() {
  const fetchMovies = async (): Promise<Movie[]> => {
    try {
      const { data } = await api.get<TMDBResponse>(ENDPOINTS.MOVIES.TOP_RATED, {
        params: { language: "pt-BR" },
      });

      const highRatedMovies = data.results.map((movie) => ({
        ...movie,
        media_type: "movie" as const,
      }));

      //? Slice aplicado para o componente não ficar tão pesado
      return highRatedMovies.slice(0, 15);
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
