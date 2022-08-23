import React from 'react';
import { ButtonAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { ButtonTextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const ActionHeaderButton = () => {
  return (
    <ButtonAtom>
      <ButtonTextAtom>Test my Real Data!</ButtonTextAtom>
    </ButtonAtom>
  );
};

export default ActionHeaderButton;
