import React from 'react';
import { DropDownBlockContainer } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownBlockAtoms';
import { TextWrap } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import DropDownMolecule from './DropDownMolecule';

const DropDownBlock = ({
  values,
  labelWidth,
  menuWidth,
  labelBottomMargin,
  placeholder,
  disabled,
}) => {
  const { options, label, key } = values;
  return (
    <DropDownBlockContainer>
      <TextWrap width={labelWidth}>
        <DropDownMenuLabelOrOptionAtom
          labelBottomMargin={labelBottomMargin}
          isLabel
        >
          {label}
        </DropDownMenuLabelOrOptionAtom>
      </TextWrap>

      <DropDownMolecule
        placeholder={placeholder}
        menuWidth={menuWidth}
        disabled={disabled}
        values={{ options, key }}
      />
    </DropDownBlockContainer>
  );
};

export default DropDownBlock;
