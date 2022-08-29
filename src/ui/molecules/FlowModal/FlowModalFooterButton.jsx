import React from 'react';
import {
  ButtonAtom,
  ButtonTextAtom,
} from '../../atoms/GlobalAtoms/Buttons/GreenButtonAtoms';

const FlowModalFooterButton = ({ action, text, disabled }) => {
  return (
    <ButtonAtom
      disabled={disabled}
      height={'62px'}
      width={'434px'}
      onClick={action}
    >
      <ButtonTextAtom>{text}</ButtonTextAtom>
    </ButtonAtom>
  );
};

export default FlowModalFooterButton;
