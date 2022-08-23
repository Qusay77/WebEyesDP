import React from 'react';
import ColoredLittleCircle from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ColoredLittleCircle';
import {
  CircledText,
  InfoTextRowContainer,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import {
  InfoNumber,
  InfoText,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';

const InfoTextRow = () => {
  return (
    <InfoTextRowContainer>
      <CircledText>
        <ColoredLittleCircle />
        <InfoText>Category Page Load</InfoText>
      </CircledText>
      <InfoNumber>%50</InfoNumber>
    </InfoTextRowContainer>
  );
};

export default InfoTextRow;
