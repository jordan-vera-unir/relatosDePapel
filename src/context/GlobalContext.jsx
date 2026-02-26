import { createContext, useState, useCallback, useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

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

  // ESTO SE AGREGA antes de cualquier useEffect
  const obtenerLibros = useCallback(async (termino = "") => {
    try {
       const urlBase = "https://spring-cloud-gateway-production-7bac.up.railway.app/ms-books-catalogue/books";
      // Construcción dinámica: si hay texto busca por título, si no, trae todo.
      const url = termino ? `${urlBase}?title=${termino}` : urlBase;
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      // Seteamos datos.books (OpenSearch devuelve un objeto con esa lista)
      setBooks(datos.books || []);
    } catch (error) {
    console.error("Error cargando los libros:", error);
    }}, []);

    // 1. Carga inicial: Trae todos los libros al montar el componente
    useEffect(() => {
       obtenerLibros();
    }, [obtenerLibros]);

  // 2. Efecto de búsqueda con "Debounce": Evita peticiones excesivas al servidor
  useEffect(() => {
  const timer = setTimeout(() => {
    obtenerLibros(busqueda);
  }, 400); // Espera 400ms después de que el usuario deja de escribir

  return () => clearTimeout(timer); // Limpia el proceso si el usuario sigue escribiend
  }, [busqueda, obtenerLibros]);

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
