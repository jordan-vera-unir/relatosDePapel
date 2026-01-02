import React, { useContext } from "react";
import "./ListaProductos.css";
import { useNavigate } from "react-router";
import { useCarrito } from "../../hooks/useCarrito";
import { useBooks } from "../../hooks/useBooks.js";
import { GlobalContext } from "../../context/GlobalContext";

const ListaProductos = () => {
  const { getAllBooks } = useBooks();
  const productos = getAllBooks();
  const navigate = useNavigate();
  const { agregarCarrito } = useCarrito();
  const { busqueda } = useContext(GlobalContext);

  const carritoKey = "carritoKey";

  const productosFiltrados = productos.filter((libro) =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="catalogo__container">
      <h1 className="catalogo__titulo">Relatos de Papel</h1>

      <div className="grid__libros">
        {productosFiltrados.map((libro) => (
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
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
