import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessModal.css";

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleGoHome = () => {
    onClose();
    navigate("/home");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-content__icon-wrapper">
          <svg
            className="modal-content__icon"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        <h2 className="modal-content__title">¡Pedido Confirmado!</h2>
        <p className="modal-content__text">
          Tu aventura literaria está en camino. Hemos enviado los detalles de tu
          compra y el número de seguimiento a tu correo electrónico.
        </p>

        <div className="modal-content__details">
          <span className="modal-content__order-number">
            Pedido: #FB-2026-991
          </span>
        </div>

        <button className="modal-content__button" onClick={handleGoHome}>
          Volver a la Librería
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
