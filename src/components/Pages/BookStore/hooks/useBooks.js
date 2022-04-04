import { useRecoilValueLoadable } from "recoil";
import { booksSate } from "../../recoil/atoms";

export function useBooks() {
  const books = useRecoilValueLoadable(booksSate);

  return {
    books: books.contents,
    isLoading: books.state === "loading",
    hasError: books.state === "hasError",
  };
}
