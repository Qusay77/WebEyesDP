import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: '9999',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(20px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    overflow: 'visible',
    position: 'absolute',
    height: 'fit-content',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('section');

const CustomModal = ({ modalIsOpen, setIsOpen, Content, ContentProps }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Custom Modal"
    >
      <Content {...ContentProps} />
    </Modal>
  );
};

export default CustomModal;
