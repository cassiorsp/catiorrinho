/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./paginas/Header";
import Footer from "./paginas/Footer";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Produtos from "./paginas/Produtos";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import CadastroBootstrap from './paginas/CadastroBootstrap';
import CadastroTailwind from './paginas/CadastroTailwind';
import "./assets/css/base/base.css";
import "./App.css";

function App() {
  // const Router = () => {
  //   const location = window.location.pathname;
  //   if (location === "/sobre") {
  //     return <Sobre />;
  //   } else {
  //     return <Home />;
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Pagina404 />} />
          <Route path="/cadastroBootstrap" element={<CadastroBootstrap />} />
          <Route path="/cadastroTailwind" element={<CadastroTailwind />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
