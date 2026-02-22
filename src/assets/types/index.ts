import { IMovie } from "./movie";
import { IPerson } from "./person";
import { ITVShow } from "./tv";

export interface IGenre {
  id: number;
  name: string;
}

export type MovieItem = IMovie & { media_type: "movie" };

export type TVItem = ITVShow & { media_type: "tv" };

export type PersonItem = IPerson & { media_type: "person" };

export type MediaItem = MovieItem | TVItem | PersonItem;

export interface DiscoveryResponse {
  page: number;
  results: MediaItem[];
  total_pages: number;
  total_results: number;
}

export interface GenresResponse {
  genres: IGenre[];
}
