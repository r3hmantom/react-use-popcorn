import { useEffect, useState, useCallback } from "react";

const KEY: string = import.meta.env.VITE_OMDBI_KEY;

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export function useMovies(query: string, callback: () => void) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const memoizedCallback = useCallback(callback, []);

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
          setIsLoading(false);
          setError("");
        } catch (error: any) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      memoizedCallback?.();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },

    [query, memoizedCallback]
  );

  return { isLoading, error, movies };
}
