// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginIMG from "../assets/img/LoginIMG.png";

const Login = () => {
  return (
    <main>
      <div className="posts">
        <div className="container">
          <h2 className="titulo-pagina">Área do Usuário</h2>
        </div>
        <article className="cartao d-flex justify-content-center">
          <section>
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 d-flex justify-content-center">
                  <img
                    src={LoginIMG}
                    className="login-img"
                    alt="Imagem Border Collie"                    
                  />
                </div>

                <div className="col-md-7">
                  <form>
                  <h2 className="titulo">Login de Acesso</h2>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Digite seu endereço de E-mail"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Endereço de E-mail
                      </label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Digite sua senha"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Senha
                      </label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      {/* Checkbox */}
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Lembrar-me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Esqueceu a senha?
                      </a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2 d-flex flex-column">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Não tem uma conta?
                        <br />
                        <Link to="/cadastroBootstrap" className="link-danger">
                          Cadastrar Bootstrap
                        </Link>
                        <br />
                        <Link to="/cadastroTailwind" className="link-danger">
                          Cadastrar Tailwind
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Login;
