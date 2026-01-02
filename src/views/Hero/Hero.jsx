import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const bgImage =
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="hero">
      <img src={bgImage} alt="Ancient Library" className="hero__background" />
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <span className="hero__badge">Colecciones para Invierno</span>

        <h1 className="hero__title">
          Los <span className="hero__title-highlight">Top 3</span> <br />
          Más Leídos
        </h1>

        <p className="hero__description">
          Descubre las obras que han definido esta temporada. Literatura que
          perdura en el tiempo.
        </p>

        <button
          className="hero__button hero__button--primary"
          onClick={() => navigate("/home")}
        >
          Ver Colección
        </button>
      </div>
    </main>
  );
}

export default Hero;
