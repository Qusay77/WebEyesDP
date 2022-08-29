import React from 'react';
import CustomModal from '../../Global/CustomModal';
import FlowPageController from './FlowPageController';

const ContactFlowMainModal = ({ modalIsOpen, setIsOpen }) => {
  return (
    <CustomModal
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
      ContentProps={{ setIsOpen }}
      Content={FlowPageController}
    />
  );
};
export default ContactFlowMainModal;
