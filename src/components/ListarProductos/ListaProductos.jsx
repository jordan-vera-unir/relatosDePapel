import React, { useContext } from "react";
import "./ListaProductos.css";
import { useNavigate } from "react-router";
import { useCarrito } from "../../hooks/useCarrito";
// Ya no necesitamos useBooks porque los datos vienen del GlobalContext
import { GlobalContext } from "../../context/GlobalContext";

const ListaProductos = () => {
  const { books, busqueda } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { agregarCarrito } = useCarrito();
  const carritoKey = "carritoKey";

  return (
    <div className="catalogo__container">
      <h1 className="catalogo__titulo">Relatos de Papel</h1>
      <div className="grid__libros">
        {books.length > 0 ? (
          books.map((libro) => (
            <div key={libro.id} className="tarjeta__libro">
              <img
                src={libro.coverImage}
                alt={libro.title}
                className="libro__imagen"
              />
              <h3>{libro.title}</h3>
              <p>
                <strong>Autor:</strong> {libro.author}
              </p>
              <p className="libro__precio">${libro.price}</p>
              
              <div className="botones__container">
                <button
                  className="boton__comprar"
                  onClick={() => navigate(`/book/${libro.id}`)}
                >
                  Ver detalle
                </button>
                <button
                  className="boton__comprar"
                  onClick={() => agregarCarrito(carritoKey, libro)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron libros para: <strong>"{busqueda}"</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaProductos;