import { BrowserRouter, Route, Routes } from "react-router";

import Hero from "./views/Hero/Hero.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/home" element={this} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
