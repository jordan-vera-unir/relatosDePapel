import React from "react";
import { useParams } from "react-router";

function Book() {
  const { id } = useParams();
  return <div>Este es el detalle del libro {id}</div>;
}

export default Book;
