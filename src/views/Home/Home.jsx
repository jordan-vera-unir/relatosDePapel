import React from "react";
import Topbar from "../../components/Topbar/Topbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ListaProductos from "../../components/ListarProductos/ListaProductos.jsx";
import CarritoModal from "../../components/Carrito/CarritoModal.jsx";

function Home() {
  return (
    <>
      <Topbar />
      <ListaProductos />
      <CarritoModal />
      <Footer />
    </>
  );
}

export default Home;
