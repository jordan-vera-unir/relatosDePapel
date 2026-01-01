import React, { createContext, useState, useContext } from "react";

const CarritoContext = createContext();

export const CaritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [esModalAbierto, setEsModalAbierto] = useState(false);
  const mostrarModal = () => setEsModalAbierto(!esModalAbierto);
  const agregarCarrito = (nuevoLibro) => {
    console.log("agrego al carrito");
    setCarrito((librosAgregados) => [...librosAgregados, nuevoLibro]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarCarrito, esModalAbierto, mostrarModal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
