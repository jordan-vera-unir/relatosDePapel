import React from "react";
import "./CarritoModal.css";
import { useCarrito } from "../../context/CarritoContext";

const CarritotModal = () => {
  const { carrito, esModalAbierto, mostrarModal, eliminarDelCarrito } = useCarrito();

  if (!esModalAbierto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Tu Carrito ({carrito.length})</h2>
        <button className="close-button" onClick={mostrarModal}>
          X
        </button>

        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
                <button className="boton-eliminar" onClick={() => eliminarDelCarrito(index)}>🗑️ Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <div className="modal-footer">
          <p>
            Total: $
            {carrito.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default CarritotModal;
