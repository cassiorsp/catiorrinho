/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // Se o modal não estiver aberto, não renderiza nada.
  }

  return (
    <div
      id="overlay"
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
    >
      <div
        id="content"
        className="relative bg-white p-10 rounded-lg shadow-lg z-20"
      >
        <button
          id="close-button"
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-30 font-bold"
          onClick={onClose}
        >
          X
        </button>
        <div className="text-xl font-pacifico">
          <h1>Cadastrado com sucesso</h1>
        </div>
      </div>
    </div>
  );
}

export default Modal;
