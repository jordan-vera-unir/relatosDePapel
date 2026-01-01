import React from "react";
import Topbar from "../../components/Topbar/Topbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ListaProductos from "../../assets/components/ListaProductos.jsx";
import CarritoModal from "../../assets/components/CarritoModal.jsx";
import { CaritoProvider } from "../../context/CarritoContext.jsx";

function Home() {
  return (
    <CaritoProvider>
      <Topbar />
      <ListaProductos />
      <CarritoModal />
      <Footer />
    </CaritoProvider>
  );
}

export default Home;
