import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SuccessModal from "../../components/SuccessModal/SuccessModal.jsx";
import { useCarrito } from "../../hooks/useCarrito.js";
import "./Checkout.css";

function Checkout() {
  const { carrito: cartItems } = useContext(GlobalContext);
  const { deleteShoppingCart } = useCarrito();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carritoKey = "carritoKey";
  const subtotal = cartItems.reduce((acc, book) => acc + book.price, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    cardNumber: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    deleteShoppingCart(carritoKey);
  };

  return (
    <div className="checkout">
      <div className="checkout__container">
        <section className="checkout__form-section">
          <h2 className="checkout__title">Detalles de Envío</h2>
          <form className="checkout__form" onSubmit={handleSubmit}>
            <div className="checkout__group">
              <label className="checkout__label">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                className="checkout__input"
                placeholder="tu@email.com"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Nombre Completo</label>
              <input
                type="text"
                name="name"
                className="checkout__input"
                placeholder="Nombre y Apellido"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="checkout__group">
              <label className="checkout__label">Dirección de Entrega</label>
              <input
                type="text"
                name="address"
                className="checkout__input"
                placeholder="Calle, Número, Apto"
                onChange={handleInputChange}
                required
              />
            </div>

            <h2 className="checkout__title checkout__title--payment">
              Información de Pago
            </h2>
            <div className="checkout__group">
              <label className="checkout__label">Número de Tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                className="checkout__input"
                placeholder="0000 0000 0000 0000"
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="checkout__submit-btn">
              Confirmar Pedido de ${total.toFixed(2)}
            </button>
          </form>
        </section>

        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <aside className="checkout__summary-section">
          <h2 className="checkout__summary-title">Resumen del Pedido</h2>

          <div className="checkout__items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout__item">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="checkout__item-img"
                />
                <div className="checkout__item-info">
                  <h4 className="checkout__item-title">{item.title}</h4>
                  <p className="checkout__item-author">{item.author}</p>
                  <span className="checkout__item-price">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout__totals">
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout__total-row">
              <span>Envío</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="checkout__total-row checkout__total-row--final">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="checkout__guarantee">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p>Pago seguro encriptado SSL</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
