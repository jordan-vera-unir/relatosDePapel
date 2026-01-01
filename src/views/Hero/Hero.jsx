import React from 'react';
import "./Hero.css";

function Hero() {
    const bgImage = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop";

    return (
        <main className="hero">
            {/* Background & Overlay */}
            <img src={bgImage} alt="Ancient Library" className="hero__background"/>
            <div className="hero__overlay"></div>

            {/* Main Content */}
            <div className="hero__content">
                <span className="hero__badge">Curaduría de Invierno</span>

                <h1 className="hero__title">
                    Los <span className="hero__title-highlight">Top 3</span> <br/>
                    Más Leídos
                </h1>

                <p className="hero__description">
                    Descubre las obras que han definido esta temporada.
                    Literatura que perdura en el tiempo.
                </p>

                <button className="hero__button hero__button--primary">
                    Adquirir Colección
                    <svg
                        width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                        <path d="M6 2v18"/>
                    </svg>
                </button>
            </div>
        </main>
    );
}

export default Hero;