import { useEffect, useState } from "react";

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

export function useLocalStorageState(
  initialState: WatchedMovie[] | [] , key:string
): [WatchedMovie[], React.Dispatch<React.SetStateAction<WatchedMovie[]>>] {
  const [watched, setWatched] = useState<WatchedMovie[]>(() => {
    const watched =
      JSON.parse(String(localStorage.getItem(key))) || initialState;
    return watched;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(watched));
  }, [watched]);

  return [watched, setWatched];
}
