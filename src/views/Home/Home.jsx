import React from "react";
import Topbar from "../../components/Topbar/Topbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ListaProductos from "../../assets/components/ListaProductos.jsx";

function Home() {
  return (
    <>
      <Topbar />
      <ListaProductos />
      <Footer />
    </>
  );
}

export default Home;
