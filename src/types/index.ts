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

interface MovieData {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

interface MovieProps {
  movie: MovieData;
  onSelectMovie: (imdbID: string) => void;
}

////////////////////////

// MovieDetails.tsx

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}

interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
}

// MovieList.tsx

interface MovieListProps {
  movies: MovieData[];
  onSelectMovie: (imdbID: string) => void;
}

///////////////

// NumResults.tsx

interface NumResultsProps {
  movies: MovieData[]; // Assuming MovieData is the type/interface for the movie object
}

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
}

// WatchedMovie.tsx

interface WatchedMovie {
  imdbID: string;
  poster: string;
  title: string;
  imdbRating: number;
  userRating: number;
  runtime: number;
}

interface WatchedMovieProps {
  movie: WatchedMovie;
  onDeleteWatched: (imdbID: string) => void;
}

// WatchedMoviesList.tsx

interface WatchedMovieProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  runtime: number;
  userRating: number;
}

interface WatchedMoviesListProps {
  watched: WatchedMovieProps[];
  onDeleteWatched: (imdbID: string) => void;
}

// WatchedSummary.tsx

interface Movie {
  imdbRating: number;
  userRating: number;
  runtime: number;
}

interface WatchedSummaryProps {
  watched: Movie[];
}

// StarRating.tsx

interface StarProps {
  onRate: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
}

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  defaultRating?: number;
  onSetRating: (rating: number) => void;
}
