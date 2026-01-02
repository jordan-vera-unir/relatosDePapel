import { BrowserRouter, Route, Routes } from "react-router";

import Hero from "./views/Hero/Hero.jsx";
import Home from "./views/Home/Home.jsx";
import BookDetail from "./views/BookDetail/BookDetail.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import Checkout from "./views/Checkout/Checkout.jsx";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
