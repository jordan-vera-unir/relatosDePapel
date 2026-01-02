import React, { createContext, useState, useContext } from "react";

const CarritoContext = createContext();

export const CaritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [esModalAbierto, setEsModalAbierto] = useState(false);
  const mostrarModal = () => setEsModalAbierto(!esModalAbierto);
  const [busqueda, setBusqueda] = useState("");

  const agregarCarrito = (nuevoLibro) => {
    console.log("agrego al carrito");
    setCarrito((librosAgregados) => [...librosAgregados, nuevoLibro]);
  };

  const eliminarDelCarrito = (indiceABorrar) => {
    console.log("elimino del carrito");
    setCarrito((librosActuales) =>
      librosActuales.filter((_, indice) => indice !== indiceABorrar)
    );
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarCarrito,
        esModalAbierto,
        mostrarModal,
        eliminarDelCarrito,
        busqueda,
        setBusqueda
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
