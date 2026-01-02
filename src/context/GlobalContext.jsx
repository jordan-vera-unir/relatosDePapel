import { createContext, useState } from "react";
import booksData from "../data/books.json";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [books] = useState(booksData);

  return (
    <GlobalContext.Provider value={{ books }}>
      {children}
    </GlobalContext.Provider>
  );
};
