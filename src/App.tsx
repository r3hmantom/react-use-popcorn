import { useEffect, useState } from "react";
import {
  Main,
  Box,
  ErrorMessage,
  Loader,
  Logo,
  MovieList,
  NavBar,
  NumResults,
  Search,
  WatchedMoviesList,
  WatchedSummary,
  MovieDetails,
} from "./components";

// for Vite applications
const KEY: string = import.meta.env.VITE_OMDBI_KEY;

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface WatchedMovie extends Movie {
  imdbRating: number;
  runtime: number;
  userRating: number;
}

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState<WatchedMovie[]>(() => {
    const watched = JSON.parse(String(localStorage.getItem("watched"))) || [];
    return watched;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelectMovie(id: string) {
    setSelectedId((prevId) => (id === prevId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedMovie) {
    setWatched((prevWatched) => [...prevWatched, movie]);
    // Adding watched movies to local storage
    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id: string) {
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== id)
    );
  }
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?s=${query.trim()}&apikey=${KEY}`,
            { signal: controller.signal }
          );
          const data = await res.json();
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies...");
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (error: any) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },

    [query]
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList onSelectMovie={handleSelectMovie} movies={movies} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
