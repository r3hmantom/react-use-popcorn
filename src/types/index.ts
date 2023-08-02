import { ReactNode } from "react";

export interface BoxProps {
  children: ReactNode;
}

export interface ErrorMessageProps {
  message: string;
}

export interface MainProps {
  children: ReactNode;
}

export interface NavBarProps {
  children: ReactNode;
}
// Movie.tsx

export interface MovieData {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface MovieProps {
  movie: MovieData;
  onSelectMovie: (imdbID: string) => void;
}

////////////////////////

// MovieDetails.tsx

export interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: number;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}

export interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
}

// MovieList.tsx

export interface MovieListProps {
  movies: MovieData[];
  onSelectMovie: (imdbID: string) => void;
}

///////////////

// NumResults.tsx

export interface NumResultsProps {
  movies: MovieData[]; // Assuming MovieData is the type/interface for the movie object
}

export interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
}

// WatchedMovie.tsx

export interface WatchedMovie {
  imdbID: string;
  poster: string;
  title: string;
  imdbRating: number;
  userRating: number;
  runtime: number;
}

export interface WatchedMovieProps {
  movie: WatchedMovie;
  onDeleteWatched: (imdbID: string) => void;
}

// WatchedMoviesList.tsx

export interface WatchedMovieProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
}

export interface WatchedMoviesListProps {
  watched: WatchedMovieProps[];
  onDeleteWatched: (imdbID: string) => void;
}

// WatchedSummary.tsx

export interface Movie {
  imdbRating: number;
  userRating: number;
  runtime: number;
}

export interface WatchedSummaryProps {
  watched: Movie[] | any;
}

// StarRating.tsx

export interface StarProps {
  onRate: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
}

export interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  defaultRating?: number;
  onSetRating: (rating: number) => void;
}
