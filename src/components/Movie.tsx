// Movie.tsx
import React from "react";

// Define the TypeScript types or interfaces
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

const Movie: React.FC<MovieProps> = ({ movie, onSelectMovie }) => {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
