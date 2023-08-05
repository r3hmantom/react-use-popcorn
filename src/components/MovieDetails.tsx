import React, { useEffect, useState } from "react";
import { Loader, StarRating } from "."; // Replace "." with the correct path to the components.

const KEY: string = import.meta.env.VITE_OMDBI_KEY;

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: any;
  watched: any;
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

const MovieDetails: React.FC<MovieDetailsProps> = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) => {
  const [movie, setMovie] = useState<Movie | any | null>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number | string>("");

  const isWatched: boolean = watched
    .map((movie: any) => movie.imdbID)
    .includes(selectedId);
  const watchedUserRating: number | undefined = watched.find(
    (movie: any) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: directors,
    Genre: genre,
  } = movie;

  useEffect(() => {
    setIsLoading(true);
    async function getMovieDetails() {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
      );
      const data: Movie = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  useEffect(
    function () {
      function callback(e: { code: string }) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  function handleAdd() {
    const newWatchedMovie: WatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime?.split(" ")[0]),
      userRating: Number(userRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  return (
    <div className="details">
      {!isLoading && (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>

              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={(rating: number) => setUserRating(rating)}
                  />
                  {Number(userRating) > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      +Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You Rated this movie {watchedUserRating}0 <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {directors}</p>
          </section>
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default MovieDetails;
