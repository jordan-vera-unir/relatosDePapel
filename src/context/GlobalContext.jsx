import { createContext, useState } from "react";
import booksData from "../data/books.json";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [books] = useState(booksData);
  const [esModalAbierto, setEsModalAbierto] = useState(false);
  const mostrarModal = () => setEsModalAbierto(!esModalAbierto);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState(() => {
    try {
      const item = localStorage.getItem("carritoKey");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error)
      return [];
    }
  });
  
  return (
    <GlobalContext.Provider value={{ books, mostrarModal, esModalAbierto, carrito, setCarrito, busqueda, setBusqueda }}>
      {children}
    </GlobalContext.Provider>
  );
};
