import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CadastroBootstrap = () => {
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    cep: "",
    cidade: "",
    uf: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    email: "",
    senha1: "",
    senha2: "",
  });

  const [errorMessages, setErrorMessages] = useState([]);
  const [errors, setErrors] = useState({}); // Estado para armazenar campos com erro
  const [successMessage, setSuccessMessage] = useState("");

  // Função para buscar o endereço pelo CEP usando a API ViaCEP
  const fetchAddressByCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new Error(
          "Não foi possível buscar o endereço. Verifique o CEP digitado."
        );
      }
      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData((prevData) => ({
        ...prevData,
        cidade: localidade,
        uf: uf,
        rua: logradouro,
        bairro: bairro,
      }));
    } catch (error) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        error.message ||
          "Não foi possível buscar o endereço. Verifique o CEP digitado.",
      ]);
      limparCamposCEP();
    }
  };

  // Função para limpar os campos de endereço relacionados ao CEP
  const limparCamposCEP = () => {
    setFormData((prevData) => ({
      ...prevData,
      rua: "",
      bairro: "",
      cidade: "",
      uf: "",
    }));
  };

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Remove o erro do campo ao alterar o valor
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));

    // Busca o endereço automaticamente somente quando o CEP tiver 8 caracteres
    if (name === "cep") {
      const formattedValue = value.replace(/[-_]/g, "");

      // Verifica se o valor formatado tem 8 caracteres (sem hífen e sem underline) e não está vazio
      if (formattedValue.length === 8) {
        fetchAddressByCep(formattedValue);
        setErrorMessages([]); // Limpa as mensagens de erro
      } else if (formattedValue.length === 0) {
        // Limpa os campos ao apagar todos o CEP
        limparCamposCEP();
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    const validationErrors = [];

    // Validação do CEP
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(formData.cep)) {
      validationErrors.push("Insira um CEP válido.");
      errors.cep = true; // Marca o campo como erro
    } else {
      // Verifica se os campos da resposta do ViaCEP foram preenchidos
      const { cidade, rua, bairro, uf } = formData;

      if (!cidade || !rua || !bairro || !uf) {
        validationErrors.push(
          "Os dados do endereço não foram preenchidos corretamente. Verifique o CEP e tente novamente."
        );
        errors.cep = true; // Marca o campo como erro
      }
    }

    // Validação da data de nascimento
    const dataNascimento = new Date(formData.dataNascimento);
    const hoje = new Date();
    const anoMinimo = new Date("1900-01-01");

    if (
      isNaN(dataNascimento) ||
      dataNascimento > hoje ||
      dataNascimento < anoMinimo
    ) {
      validationErrors.push("Insira uma data válida.");
      errors.dataNascimento = true; // Marca o campo como erro
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      validationErrors.push("Insira um e-mail válido.");
      errors.email = true; // Marca o campo como erro
    }

    // Validação da senha
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const senhaErro = !passwordRegex.test(formData.senha1);

    if (senhaErro) {
      validationErrors.push(
        "A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 número e 1 símbolo."
      );
      errors.senha1 = true; // Marca o campo como erro
      errors.senha2 = true; // Marca o campo de confirmação de senha como erro
    }

    // Verificação de senhas
    if (formData.senha1 !== formData.senha2) {
      validationErrors.push("As senhas não coincidem!");
      errors.senha1 = true; // Marca o campo como erro
      errors.senha2 = true; // Marca o campo de confirmação de senha como erro
    }

    setErrors(errors); // Atualiza o estado de erros

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    } else {
      setErrorMessages({}); // Limpa erros se não houver
      setSuccessMessage("");
    }

    // Envio do formulário
    console.log("Dados enviados:", formData);
    setSuccessMessage([
      "Cadastro realizado com sucesso!",
      <br key="lineBreak" />,
      "Você será redirecionado para a página de login"
    ]);

    // Redirecionamento para a página de login
    setTimeout(() => {      
      window.location.href = "/login";
    }, 5000);
    handleReset();
  };

  // Função Para Limpar os Campos do Formulário
  const handleReset = () => {
    setFormData({
      nome: "",
      dataNascimento: "",
      cep: "",
      cidade: "",
      uf: "",
      rua: "",
      bairro: "",
      numero: "",
      complemento: "",
      email: "",
      senha1: "",
      senha2: "",
    });
    setErrorMessages([]); // Limpa mensagens de erro ao resetar
    setErrors({}); // Limpa erros ao resetar
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
              <div className="col-8">
                <Form.Group controlId="formNome" className="mb-4">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite seu Nome Completo"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    isInvalid={errors.nome}
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
                    isInvalid={errors.dataNascimento}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <Form.Group controlId="formCEP" className="mb-3">
                  <Form.Label>CEP</Form.Label>
                  <InputMask
                    mask="99999-999"
                    value={formData.cep}
                    onChange={handleChange}
                  >
                    {() => (
                      <Form.Control
                        type="text"
                        placeholder="Digite o CEP"
                        name="cep"
                        required
                        isInvalid={errors.cep}
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
                    isInvalid={errors.cidade}
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
                    isInvalid={errors.uf}
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
                    isInvalid={errors.rua}
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
                    isInvalid={errors.bairro}
                  />
                </Form.Group>
              </div>

              <div className="col-3">
                <Form.Group controlId="formNumero" className="mb-4">
                  <Form.Label>Número</Form.Label>
                  <InputMask
                    mask="9999"
                    value={formData.numero}
                    onChange={handleChange}
                    maskChar={null}
                  >
                    {() => (
                      <Form.Control
                        type="text"
                        placeholder="Digite o n.º"
                        name="numero"
                        required
                        isInvalid={errors.numero}
                      />
                    )}
                  </InputMask>
                </Form.Group>
              </div>

              <div className="col-12">
                <Form.Group controlId="formComplemento" className="mb-4">
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o Complemento (Opcional)"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                    isInvalid={errors.complemento}
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
                    isInvalid={errors.email}
                  />
                </Form.Group>
              </div>

              <div className="col-6">
                <Form.Group controlId="formSenha1" className="mb-4">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua Senha"
                    name="senha1"
                    value={formData.senha1}
                    onChange={handleChange}
                    required
                    isInvalid={errors.senha1}
                  />
                </Form.Group>
              </div>

              <div className="col-6">
                <Form.Group controlId="formSenha2" className="mb-4">
                  <Form.Label>Confirme sua Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme sua Senha"
                    name="senha2"
                    value={formData.senha2}
                    onChange={handleChange}
                    required
                    isInvalid={errors.senha2}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Button variant="primary" type="submit">
                  Cadastrar
                </Button>
                <Button
                  variant="secondary"
                  type="reset"
                  onClick={handleReset}
                  className="ms-2"
                >
                  Limpar
                </Button>
              </div>
            </div>

            {/* Exibe as mensagens de erro */}
            {errorMessages.length > 0 && (
              <div
                className="alert alert-danger text-start p-2 mt-3"
                style={{ fontSize: "0.8rem" }}
              >
                <ul>
                  {errorMessages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            {successMessage && (
              <div
                className="alert alert-success text-start p-2 mt-3"
                role="alert"
              >
                {successMessage}
              </div>
            )}
          </Form>
        </article>
      </div>
    </main>
  );
};

export default CadastroBootstrap;
