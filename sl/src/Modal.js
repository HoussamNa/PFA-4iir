import React, { useState } from 'react';
import Modal from 'react-modal';

const Link3DModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Lien 3D Modal</h1>
      <a href="#" onClick={openModal}>
        Ouvrir la modale
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple de modale en 3D"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Titre de la modale</h2>
        <p>Contenu de la modale</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </div>
  );
};

export default Link3DModal;
