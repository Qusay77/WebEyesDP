import React from 'react';
import { InfoHeaderAtom } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoHeaderAtom';
import { HeaderText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';

const InfoHeader = ({ text }) => {
  return (
    <InfoHeaderAtom>
      <HeaderText>{text} Problems</HeaderText>
    </InfoHeaderAtom>
  );
};

export default InfoHeader;
