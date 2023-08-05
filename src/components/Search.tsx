import React, { useEffect, useRef } from "react";

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    function callback(e: { code: string }) {
      if (e.code === "Enter") inputEl.current?.focus();
    }
    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, []);
  return (
    <input
      ref={inputEl}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
