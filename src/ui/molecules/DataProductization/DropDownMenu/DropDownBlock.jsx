import React from 'react';
import { DropDownBlockContainer } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownBlockAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import DropDownMolecule from './DropDownMolecule';

const DropDownBlock = ({ values }) => {
  const { options, label } = values;
  return (
    <DropDownBlockContainer>
      <DropDownMenuLabelOrOptionAtom isLabel>
        {label}
      </DropDownMenuLabelOrOptionAtom>
      <DropDownMolecule values={{ options }} />
    </DropDownBlockContainer>
  );
};

export default DropDownBlock;
