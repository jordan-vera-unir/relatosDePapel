import React from "react";
import { useParams } from "react-router";
import "./BookDetail.css";
import { useBooks } from "../../hooks/useBooks.js";
import { Link } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  const { getBookById } = useBooks();
  const book = getBookById(id);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`book-detail__star ${i < Math.floor(rating) ? "book-detail__star--active" : ""}`}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div className="book-detail">
      <div className="book-detail__container">
        <div className="book-detail__media">
          <div className="book-detail__image-wrapper">
            <img
              src={book.coverImage}
              alt={book.title}
              className="book-detail__image"
            />
          </div>
        </div>

        <div className="book-detail__info">
          <nav className="book-detail__breadcrumb">
            <Link to="/home">Catálogo</Link> / <span>{book.genres[0]}</span>
          </nav>

          <h1 className="book-detail__title">{book.title}</h1>
          <p className="book-detail__author">
            por <span className="book-detail__author-name">{book.author}</span>
          </p>

          <div className="book-detail__rating">
            <div className="book-detail__stars">{renderStars(book.rating)}</div>
            <span className="book-detail__rating-value">({book.rating})</span>
          </div>

          <div className="book-detail__price-tag">
            <span className="book-detail__currency">$</span>
            <span className="book-detail__price">{book.price}</span>
          </div>

          <div className="book-detail__genres">
            {book.genres.map((genre, index) => (
              <span key={index} className="book-detail__genre-tag">
                {genre}
              </span>
            ))}
          </div>

          <div className="book-detail__actions">
            <button className="book-detail__button book-detail__button--primary">
              Añadir al Carrito
            </button>
            <button className="book-detail__button book-detail__button--outline">
              Lista de Deseos
            </button>
          </div>

          <div className="book-detail__specs">
            <h3 className="book-detail__specs-title">Detalles del Libro</h3>
            <div className="book-detail__specs-grid">
              <div className="book-detail__spec-item">
                <span className="book-detail__spec-label">Editorial:</span>
                <span className="book-detail__spec-value">
                  {book.editorial}
                </span>
              </div>
              <div className="book-detail__spec-item">
                <span className="book-detail__spec-label">Páginas:</span>
                <span className="book-detail__spec-value">{book.pages}</span>
              </div>
              <div className="book-detail__spec-item">
                <span className="book-detail__spec-label">Medidas:</span>
                <span className="book-detail__spec-value">
                  {book.dimensions.height} x {book.dimensions.width}
                </span>
              </div>
              <div className="book-detail__spec-item">
                <span className="book-detail__spec-label">Publicación:</span>
                <span className="book-detail__spec-value">
                  {new Date(book.publishedDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
