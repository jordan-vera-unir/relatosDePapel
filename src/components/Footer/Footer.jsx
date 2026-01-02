import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <div className="footer__logo">
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
            <span className="footer__logo-text">Relatos de Papel</span>
          </div>
          <p className="footer__description">
            Llevando la sabiduría de los clásicos y la innovación técnica a tu
            biblioteca personal desde 2004.
          </p>
          <div className="footer__social">
            <Link
              to="/home"
              className="footer__social-link"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              to="/home"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Navegación</h3>
          <ul className="footer__list">
            <li>
              <Link to="/home" className="footer__link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Catálogo Completo
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Autores Destacados
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Soporte</h3>
          <ul className="footer__list">
            <li>
              <Link to="/home" className="footer__link">
                Seguimiento de Envío
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Política de Devolución
              </Link>
            </li>
            <li>
              <Link to="/home" className="footer__link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">Suscríbete (Próximamente)</h3>
          <p className="footer__description">
            Recibe recomendaciones literarias y ofertas exclusivas cada semana.
          </p>
          <form
            className="footer__newsletter"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Tu e-mail"
              className="footer__input"
              disabled
            />
            <button type="submit" className="footer__button" disabled>
              Unirse
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Relatos de Papel. Todos los derechos
          reservados.
        </p>
        <div className="footer__legal">
          <Link to="/home" className="footer__link footer__link--small">
            Privacidad
          </Link>
          <Link to="/home" className="footer__link footer__link--small">
            Términos
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
