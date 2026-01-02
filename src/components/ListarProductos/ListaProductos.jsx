import React, { useState } from "react";
import booksData from "../../data/books.json";
import { useCarrito } from "../../context/CarritoContext";
import "./ListaProductos.css";
import { useNavigate } from "react-router";

const ListaProductos = () => {
  const [productos] = useState(booksData);
  const navigate = useNavigate();
  const { agregarCarrito } = useCarrito();
  //const [busqueda, setBusqueda] = useState("");
  
  /*const productosFiltrados = productos.filter((libro) =>
    libro.title.toLowerCase().includes(busqueda.toLowerCase())
  );*/

  return (
    <div className="catalogo-container">
      <h1 className="catalogo-titulo">Relatos de Papel</h1>

      <div className="grid-libros">
        {productos.map((libro) => (
          <div key={libro.id} className="tarjeta-libro">
            <img
              src={libro.coverImage}
              alt={libro.title}
              className="libro-imagen"
            />
            <h3>{libro.title}</h3>
            <p>
              <strong>Autor:</strong> {libro.author}
            </p>
            <p className="libro-precio">${libro.price}</p>
            <button
              className="boton-comprar"
              onClick={() => navigate(`/book/${libro.id}`)}
            >
              Ver detalle
            </button>
            <button
              className="boton-comprar"
              onClick={() => agregarCarrito(libro)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
