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

const InfoTextRow = ({ problem, color }) => {
  const { title, percentage } = problem;
  return (
    <InfoTextRowContainer>
      <CircledText>
        <ColoredLittleCircle
          color={`rgba(${color},${(percentage / 2 + 50) / 100})`}
        />
        <InfoText>{title}</InfoText>
      </CircledText>
      <InfoNumber>{percentage ? `%${percentage}` : ''}</InfoNumber>
    </InfoTextRowContainer>
  );
};

export default InfoTextRow;
