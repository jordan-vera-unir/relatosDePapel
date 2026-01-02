import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useCarrito = () => {
  const { setCarrito } = useContext(GlobalContext);

  const agregarCarrito = (key, libro) => {
    try {
      libro.idCompra = new Date().getTime();
      const datosPrevios = localStorage.getItem(key);
      const carritoActual = datosPrevios ? JSON.parse(datosPrevios) : [];
      const nuevoCarrito = [...carritoActual, libro];
      setCarrito(nuevoCarrito);
      localStorage.setItem(key, JSON.stringify(nuevoCarrito));
    } catch (error) {
      console.error(`Error al agregar al localStorage en "${key}":`, error);
    }
  };

  const eliminarLibro = (key, libroIdCompra) => {
    try {
      const datosPrevios = localStorage.getItem(key);
      if (!datosPrevios) return;
      const carritoActual = JSON.parse(datosPrevios);
      const nuevoCarrito = carritoActual.filter(
        (item) => item.idCompra !== libroIdCompra
      );
      setCarrito(nuevoCarrito);
      localStorage.setItem(key, JSON.stringify(nuevoCarrito));
    } catch (error) {
      console.error(`Error al eliminar libro de "${key}":`, error);
    }
  };

  const obtenerCarrito = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(`Error obteniendo el carrito "${key}":`, error);
      return [];
    }
  };

  const obtenerTamano = (key) => {
    try {
      const item = localStorage.getItem(key);
      const carrito = item ? JSON.parse(item) : [];
      return Array.isArray(carrito) ? carrito.length : 0;
    } catch (error) {
      console.error(`Error leyendo el tamaño de "${key}":`, error);
      return 0;
    }
  };

  return { agregarCarrito, eliminarLibro, obtenerTamano, obtenerCarrito };
};
