import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import {
  PlusSignButton,
  PlusSignSymbol,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/PlusSignButtonAtoms';

const PlusButton = ({ onClick }) => {
  return (
    <PlusSignButton onClick={onClick}>
      <PlusSignSymbol>+</PlusSignSymbol>
      <MainText clickable>Add Recipients</MainText>
    </PlusSignButton>
  );
};

export default PlusButton;
