import React from "react";
import { WatchedSummaryProps } from "../types";

const average = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

const WatchedSummary: React.FC<WatchedSummaryProps> = ({ watched }) => {
  const avgImdbRating: number = average(
    watched.map((movie: any) => +movie.imdbRating)
  );
  const avgUserRating: number = average(
    watched.map((movie: any) => movie.userRating)
  );
  const avgRuntime: number = average(
    watched.map((movie: any) => movie.runtime)
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
