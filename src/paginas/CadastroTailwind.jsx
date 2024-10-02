// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    dataNascimento: "",
    cep: "",
    uf: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    // Falta adicionar a lógica para enviar os dados.
  };

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Cadastro de Usuários</h2>
      </div>

      <div className="posts">
        <article className="cartao">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-semibold text-gray-600"
              >
                ID
              </label>
              <br />
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-gray-600"
              >
                Nome
              </label>
              <br />
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="dataNascimento"
                className="block text-sm font-semibold text-gray-600"
              >
                Data de Nascimento
              </label>
              <br />
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="cep"
                className="block text-sm font-semibold text-gray-600"
              >
                CEP
              </label>
              <br />
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="uf"
                  className="block text-sm font-semibold text-gray-600"
                >
                  UF
                </label>
                <br />
                <input
                  type="text"
                  id="uf"
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="cidade"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Cidade
                </label>
                <br />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bairro"
                className="block text-sm font-semibold text-gray-600"
              >
                Bairro
              </label>
              <br />
              <input
                type="text"
                id="bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="rua"
                className="block text-sm font-semibold text-gray-600"
              >
                Rua
              </label>
              <br />
              <input
                type="text"
                id="rua"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="numero"
                className="block text-sm font-semibold text-gray-600"
              >
                Número
              </label>
              <br />
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
            </div>

            <button
              type="submit"
              className="w-1/3 py-3 px-6 bg-[var(--cor-primaria)] text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cadastrar
            </button>
          </form>
        </article>
      </div>
    </main>
  );
};

export default CadastroUsuario;
