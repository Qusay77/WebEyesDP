import React from 'react';
import {
  ButtonAtom,
  ButtonTextAtom,
} from '../../../atoms/GlobalAtoms/Buttons/GreenButtonAtoms';

const ActionHeaderButton = ({ action }) => {
  return (
    <ButtonAtom height={'52px'} width={'220px'} onClick={action}>
      <ButtonTextAtom>Test my Real Data!</ButtonTextAtom>
    </ButtonAtom>
  );
};

export default ActionHeaderButton;
