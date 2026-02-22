import { IGenre } from ".";

export interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ICastMember {
  id: number;
  name: string;
  original_name: string;
  character: string;
  profile_path: string | null;
  order: number;
  gender?: number;
  popularity?: number;
}

export interface ICrewMember {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  department: string;
  job: string;
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface IMovie {
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

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieCreditsResponse {
  id: number;
  cast: ICastMember[];
  crew: ICrewMember[];
}

export interface IVideoResponse {
  result: IVideo[];
}

export interface IMovieDetails extends Omit<IMovie, "genre_ids"> {
  genres?: IGenre[];
  budget?: number;
  revenue?: number;
  runtime?: number | null;
  status?: string;
  tagline?: string;
  homepage?: string;
  imdb_id?: string;
  production_companies?: IProductionCompany[];
  credits?: IMovieCreditsResponse;
  recommendations?: IMovieResponse;
  similar?: IMovieResponse;
  videos?: IVideoResponse;
}
