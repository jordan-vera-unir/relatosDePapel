import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";

// Custom hook que utiliza el contexto global y maneja los libros
export const useBooks = () => {
  const { books } = useContext(GlobalContext);
  const getBookById = (bookId) => books.find((book) => book.id === +bookId);

  const getAllBooks = () => books;

  return {
    getBookById,
    getAllBooks,
  };
};
