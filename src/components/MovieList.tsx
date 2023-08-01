import React from "react";
import { Movie } from "."; // Replace "." with the correct path to the "MovieData" type if it exists.

interface MovieData {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

interface MovieListProps {
  movies: MovieData[];
  onSelectMovie: (imdbID: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
