import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  const bgImage =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop";

  return (
    <main className="not-found">
      <div
        className="not-found__background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="not-found__overlay"></div>

      <div className="not-found__content">
        <div className="not-found__icon">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10 13l4 4" />
            <path d="M14 13l-4 4" />
          </svg>
        </div>

        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">
          Página extraviada entre los árboles
        </h2>

        <p className="not-found__text">
          Parece que el sendero que seguías ha desaparecido. El libro o la
          página que buscas no se encuentra en esta parte del bosque.
        </p>

        <button onClick={() => navigate("/")} className="not-found__button">
          Volver al refugio (Inicio)
        </button>
      </div>
    </main>
  );
}

export default NotFound;
