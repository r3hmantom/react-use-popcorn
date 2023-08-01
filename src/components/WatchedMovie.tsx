// WatchedMovie.tsx
import React from "react";

// Define the TypeScript types or interfaces
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

const WatchedMovie: React.FC<WatchedMovieProps> = ({
  movie,
  onDeleteWatched,
}) => {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedMovie;
