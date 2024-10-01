// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base/header.css";
import imagem from "../assets/img/catiorrinho.svg";

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburguinho">
        <span className="menu-hamburguinho__icone"></span>
      </div>
      <div className="cabecalho-container">
        <Link href="/" className="flex--centro">
          <img
            className="cabecalho__logo"
            src={imagem}
            alt="Logo Catiorrinho"
          />
          <h1 className="cabecalho__titulo">PetShop</h1>
        </Link>
      </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <Link to="/Cadastro" className="menu-item menu-item-entrar">
              Entrar
            </Link>
          </li>
          <li>
            <Link to="*" className="menu-item">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/" className="menu-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};
export default Cabecalho;
