import { BrowserRouter, Route, Routes } from "react-router";

import Hero from "./views/Hero/Hero.jsx";
import "./App.css";
import Home from "./views/Home/Home.jsx";
import Book from "./views/Book/Book.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
