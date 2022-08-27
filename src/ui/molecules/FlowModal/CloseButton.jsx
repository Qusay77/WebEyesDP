import React from 'react';
import { CloseSymbol } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const CloseButton = ({ action }) => {
  return <CloseSymbol onClick={action}>✖</CloseSymbol>;
};

export default CloseButton;
