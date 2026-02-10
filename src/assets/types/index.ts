import { Movie } from "./movie";
import { TVShow } from "./tv";

export type MovieItem = Movie & { media_type: "movie" };

export type TVItem = TVShow & { media_type: "tv" };

export type MediaItem = MovieItem | TVItem;
