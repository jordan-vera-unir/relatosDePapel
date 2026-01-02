import "./ListaProductos.css";
import { useNavigate } from "react-router";
import { useCarrito } from "../../hooks/useCarrito";
import { useBooks } from "../../hooks/useBooks.js";

const ListaProductos = () => {
  const { getAllBooks } = useBooks();
  const productos = getAllBooks();
  const navigate = useNavigate();
  const { agregarCarrito } = useCarrito();

  const carritoKey = "carritoKey";

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
              onClick={() => agregarCarrito(carritoKey, libro)}
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
