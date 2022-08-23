import React from 'react';
import { DropDownBlockContainer } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownBlockAtoms';
import { TextWrap } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import DropDownMolecule from './DropDownMolecule';

const DropDownBlock = ({ values }) => {
  const { options, label } = values;
  return (
    <DropDownBlockContainer>
      <TextWrap width={'258px'}>
        <DropDownMenuLabelOrOptionAtom isLabel>
          {label}
        </DropDownMenuLabelOrOptionAtom>
      </TextWrap>

      <DropDownMolecule values={{ options }} />
    </DropDownBlockContainer>
  );
};

export default DropDownBlock;
