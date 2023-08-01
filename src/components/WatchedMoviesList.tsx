import React from "react";
import { WatchedMovie } from ".";

// Define the TypeScript types or interfaces

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

const WatchedMoviesList: React.FC<WatchedMoviesListProps> = ({
  watched,
  onDeleteWatched,
}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          onDeleteWatched={onDeleteWatched}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
