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
const colorPercentage = [100, 80, 60, 40];
const InfoTextRow = ({ problem, color, colorReady, noTopMargin, index }) => {
  const { title, percentage } = problem;
  return (
    <InfoTextRowContainer noTopMargin={noTopMargin}>
      <CircledText>
        <ColoredLittleCircle
          color={colorReady ?? `rgba(${color},${colorPercentage[index] / 100})`}
        />
        <InfoText>{title}</InfoText>
      </CircledText>
      {percentage ? <InfoNumber>{percentage}%</InfoNumber> : ''}
    </InfoTextRowContainer>
  );
};

export default InfoTextRow;
