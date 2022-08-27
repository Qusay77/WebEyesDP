import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '9999',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(20px)',
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('section');

const CustomModal = ({ modalIsOpen, setIsOpen, Content }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Custom Modal"
    >
      <Content />
    </Modal>
  );
};

export default CustomModal;
