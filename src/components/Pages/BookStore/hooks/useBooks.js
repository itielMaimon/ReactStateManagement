import { useRecoilState } from "recoil";
import { booksState } from "../atoms";

export function useBooks() {
  const [books, setBooks] = useRecoilState(booksState);

  return {
    books: books,
    setBooks: setBooks,
  };
}
