export interface Movie {
  id: number;
  title: string;
  overview?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average?: number;
  vote_count?: number;
  release_date?: string;
  genre_ids?: number[];
  popularity?: number;
  original_language?: string;
  original_title?: string;
  video?: boolean;
  adult?: boolean;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface MovieDetails extends Omit<Movie, "genre_ids"> {
  genres?: Genre[];
  budget?: number;
  revenue?: number;
  runtime?: number | null;
  status?: string;
  tagline?: string;
  homepage?: string;
  imdb_id?: string;
  production_companies?: ProductionCompany[];
}

export interface CastMember {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;
  order: number;
  gender?: number;
  popularity?: number;
}

export interface CrewMember {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  department: string;
  job: string;
}

export interface MovieCreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
