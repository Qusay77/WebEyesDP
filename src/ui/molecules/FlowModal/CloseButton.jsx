import React from 'react';
import { CloseSymbol } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const CloseButton = ({ action, headerSpacing }) => {
  return (
    <CloseSymbol headerSpacing={headerSpacing} onClick={action}>
      ✖
    </CloseSymbol>
  );
};

export default CloseButton;
