import React, { useContext } from "react";
import "./Topbar.css";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";

function Topbar() {
  const { carrito, mostrarModal, busqueda, setBusqueda } =
    useContext(GlobalContext);

  return (
    <header className="topbar">
      <Link to={"/home"} className="topbar__logo">
        <svg
          className="topbar__logo-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
          <path d="M19 16h-12a2 2 0 0 0 -2 2" />
          <path d="M9 8h6" />
        </svg>
        <span className="topbar__logo-text">Relatos de Papel</span>
      </Link>

      <div className="topbar__search-container">
        <svg
          className="topbar__search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <input
          type="text"
          className="topbar__search-input"
          placeholder="Buscar por título"
          value={busqueda} // Valor controlado
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="topbar__actions">
        <button
          className="topbar__cart-button"
          aria-label="Ver carrito de compras"
          onClick={mostrarModal}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          {/* Badge de contador de items (ejemplo estático) */}
          <span className="topbar__cart-badge">{carrito.length}</span>
        </button>
      </div>
    </header>
  );
}

export default Topbar;
