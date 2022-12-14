import React from 'react';
import { ParagraphHeaderAtom } from '../../../atoms/DataProductizationAtoms/CoreAtoms/Header/HeaderAtoms';

const DPHeader = ({ onClick }) => {
  return (
    <ParagraphHeaderAtom onClick={onClick}>
      Lost Revenue Simulator
    </ParagraphHeaderAtom>
  );
};

export default DPHeader;
