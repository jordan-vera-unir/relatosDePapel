import React, { useContext } from "react";
import "./CarritoModal.css";
import { useCarrito } from "../../hooks/useCarrito";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router";

const CarritotModal = () => {
  const navigate = useNavigate();
  const { eliminarLibro } = useCarrito();
  const carritoKey = "carritoKey";

  const { carrito, esModalAbierto, mostrarModal } = useContext(GlobalContext);

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
                <button
                  onClick={() => eliminarLibro(carritoKey, item.idCompra)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="modal-footer">
          <p>
            Total: $
            {carrito.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarritotModal;
