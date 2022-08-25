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

const InfoTextRow = ({ problem, color, colorReady, noTopMargin }) => {
  const { title, percentage } = problem;
  return (
    <InfoTextRowContainer noTopMargin={noTopMargin}>
      <CircledText>
        <ColoredLittleCircle
          color={colorReady ?? `rgba(${color},${(percentage / 2 + 50) / 100})`}
        />
        <InfoText>{title}</InfoText>
      </CircledText>
      {percentage ? <InfoNumber>%{percentage}</InfoNumber> : ''}
    </InfoTextRowContainer>
  );
};

export default InfoTextRow;
