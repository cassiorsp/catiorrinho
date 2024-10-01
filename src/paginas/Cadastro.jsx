/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/components/cartao.css";
import Modal from "../assets/css/components/Modal";

function Cadastro() {
  const [openModal,setOpenModal] = useState(false)

  const handleOpenModal = (event) => {
    event.preventDefault();
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <main className="h-full w-full  grid justify-items-center items-center">
      <Modal isOpen={openModal} onClose={handleCloseModal}/>
      <div className="container">
        <h2 className="titulo-pagina">Cadastre-se</h2>
      </div>
      <form className="grid gap-4 w-2/4 bg-white h-auto p-10 justify-items-center items-center rounded-xl shadow-xl">
        <div className="w-full ml-24 grid grid-cols-2  items-center gap-5">
          <div className="w-full grid text-left ">
            <label htmlFor="id" className="pl-2 text-[18px]">
              Id
            </label>
            <input
              type="text"
              name="id"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500  text-gray-900 mr-3 py-1 px-2
              focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left ">
            <label htmlFor="name" className="pl-2 text-[18px]">
              Nome
            </label>
            <input
              type="text"
              name="name"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
            focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="nascimento" className="pl-2 text-[18px]">
              Data de Nascimento
            </label>
            <input
              type="date"
              name="nascimento"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
            focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="cep" className="pl-2 text-[18px]">
              Cep
            </label>
            <input
              type="text"
              name="cep"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
            focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="uf" className="pl-2 text-[18px]">
              UF
            </label>
            <input
              type="text"
              name="uf"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
            focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="cidade" className="pl-2 text-[18px]">
              Cidade
            </label>
            <input
              type="text"
              name="cidade"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
              focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="bairro" className="pl-2 text-[18px]">
              Bairro
            </label>
            <input
              type="text"
              name="bairro"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
              focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="rua" className="pl-2 text-[18px]">
              Rua
            </label>
            <input
              type="text"
              name="rua"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
              focus:outline-none"
            />
          </div>
          <div className="w-full grid text-left">
            <label htmlFor="numero" className="pl-2 text-[18px]">
              Numero
            </label>
            <input
              type="number"
              name="numero"
              className="w-2/3 appearance-none bg-transparent border-b-2 border-gray-500 text-gray-900 mr-3 py-1 px-2 
              focus:outline-none"
            />
          </div>
          <div className="grid w-2/3 font-pacifico justify-items-center ">
            <button
              onClick={handleOpenModal}
              className="w-2/3 bg-fundo  border-[2px] border-gray-700 rounded-[12px] outline-1 px-2 py-0 text-[20px]
              hover:scale-110 transition-all duration-700 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Cadastro;
