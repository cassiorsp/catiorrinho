// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroBootstrap = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Cadastro de Usuários</h2>
      </div>

      <div className="posts">
        <article className="cartao">
          <Form className="p-0">
            <div className="row">
              <div className="col-3">
                <Form.Group controlId="formId" className="mb-3">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="text" placeholder="Digite o ID" />
                </Form.Group>
              </div>
              <div className="col-5">
                <Form.Group controlId="formNome" className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Digite seu nome" />
                </Form.Group>
              </div>
              <div className="col-4">
                <Form.Group controlId="formDataNascimento" className="mb-3">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <Form.Group controlId="formCEP" className="mb-3">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control type="text" placeholder="Digite o CEP" />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formCidade" className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control type="text" placeholder="Digite a cidade" />
                </Form.Group>
              </div>
              <div className="col-3">
                <Form.Group controlId="formUF" className="mb-3">
                  <Form.Label>UF</Form.Label>
                  <Form.Control type="text" placeholder="Digite o estado" />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <Form.Group controlId="formRua" className="mb-3">
                  <Form.Label>Rua</Form.Label>
                  <Form.Control type="text" placeholder="Digite a rua" />
                </Form.Group>
              </div>
              <div className="col-4">
                <Form.Group controlId="formBairro" className="mb-3">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control type="text" placeholder="Digite o bairro" />
                </Form.Group>
              </div>
              <div className="col-3">
                <Form.Group controlId="formNumero" className="mb-3">
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="text" placeholder="Digite o n.º" />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit" className="mb-1">
              Cadastrar
            </Button>
          </Form>
        </article>
      </div>
    </main>
  );
};

export default CadastroBootstrap;
