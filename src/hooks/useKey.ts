import { useEffect } from "react";

export function useKey(key: string, action: () => void) {
  useEffect(
    function () {
      function callback(e: { code: string }) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
