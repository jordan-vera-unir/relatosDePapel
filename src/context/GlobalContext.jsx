import { createContext, useState, useEffect } from "react"; // 1. Agregamos useEffect
//import booksData from "../data/books.json";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  //const [books] = useState(booksData);
  const [books, setBooks] = useState([]);

  const [esModalAbierto, setEsModalAbierto] = useState(false);
  const mostrarModal = () => setEsModalAbierto(!esModalAbierto);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState(() => {
    try {
      const item = localStorage.getItem("carritoKey");
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  // 3. Implementamos la llamada al servicio
  useEffect(() => {
    const obtenerLibros = async () => {
      try {
        const respuesta = await fetch("https://spring-cloud-gateway-production-7bac.up.railway.app/ms-books-catalogue/book");
        const datos = await respuesta.json();
        setBooks(datos.books);
      } catch (error) {
        console.error("Error cargando los libros:", error);
      }
    };

    obtenerLibros();
  }, []); // El array vacío asegura que solo se ejecute una vez al cargar

  return (
    <GlobalContext.Provider
      value={{
        books,
        mostrarModal,
        esModalAbierto,
        carrito,
        setCarrito,
        busqueda,
        setBusqueda,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
