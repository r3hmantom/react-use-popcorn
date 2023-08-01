import React from "react";

interface MovieData {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}
interface NumResultsProps {
  movies: MovieData[]; // Assuming MovieData is the type/interface for the movie object
}

const NumResults: React.FC<NumResultsProps> = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
