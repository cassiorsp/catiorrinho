// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroBootstrap = () => {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    dataNascimento: "",
    cep: "",
    cidade: "",
    uf: "",
    rua: "",
    bairro: "",
    numero: "",
    email: "",
    senha1: "",
    senha2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha1 !== formData.senha2) {
      alert("As senhas não coincidem!");
      
      // Limpar os campos de senha
      setFormData((prevData) => ({
        ...prevData,
        senha1: "",
        senha2: "",
      }));
  
      return;
    }

    //  envio do formulário
    console.log("Dados enviados:", formData);
  };

  const handleReset = () => {
    setFormData({
      id: "",
      nome: "",
      dataNascimento: "",
      cep: "",
      cidade: "",
      uf: "",
      rua: "",
      bairro: "",
      numero: "",
      email: "",
      senha1: "",
      senha2: "",
    });
  };

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Cadastro de Usuário</h2>
      </div>

      <div className="posts">
        <article className="cartao">
          <Form className="p-0" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-3">
                <Form.Group controlId="formId" className="mb-4">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o ID"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-5">
                <Form.Group controlId="formNome" className="mb-4">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-4">
                <Form.Group controlId="formDataNascimento" className="mb-4">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              <Form.Group controlId="formCEP" className="mb-3">
                  <Form.Label>CEP</Form.Label>
                  <InputMask
                    mask="99999-999" // Máscara para o CEP
                    value={formData.cep}
                    onChange={handleChange}
                    
                  >
                    {() => (
                      <Form.Control
                        type="text"
                        placeholder="Digite o CEP"
                        name="cep"
                        required
                      />
                    )}
                  </InputMask>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formCidade" className="mb-4">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    disabled
                  />
                </Form.Group>
              </div>
              <div className="col-3">
                <Form.Group controlId="formUF" className="mb-4">
                  <Form.Label>UF</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="uf"
                    value={formData.uf}
                    onChange={handleChange}
                    disabled
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <Form.Group controlId="formRua" className="mb-4">
                  <Form.Label>Rua</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="rua"
                    value={formData.rua}
                    onChange={handleChange}
                    disabled
                  />
                </Form.Group>
              </div>
              <div className="col-4">
                <Form.Group controlId="formBairro" className="mb-4">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                    disabled
                  />
                </Form.Group>
              </div>
              <div className="col-3">
                <Form.Group controlId="formNumero" className="mb-4">
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o n.º"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group controlId="formEmail" className="mb-4">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formsenha1" className="mb-4">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    name="senha1"
                    value={formData.senha1}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group controlId="formsenha2" className="mb-4">
                  <Form.Label>Confirmação de Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha novamente"
                    name="senha2"
                    value={formData.senha2}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit" className="mb-1 me-4">
              Cadastrar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleReset}
              className="mb-1"
            >
              Limpar
            </Button>
          </Form>
        </article>
      </div>
    </main>
  );
};

export default CadastroBootstrap;
