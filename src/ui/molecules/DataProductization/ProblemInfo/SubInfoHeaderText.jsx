import React from 'react';
import ColoredLittleCircle from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ColoredLittleCircle';
import {
  CircledText,
  SubInfoRow,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import {
  InfoNumber,
  InfoText,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';

const SubInfoHeaderText = ({ problem, color }) => {
  const { title, lostRevenue, percentage } = problem;
  return (
    <SubInfoRow header>
      <CircledText>
        <ColoredLittleCircle
          color={`rgba(${color},${(percentage / 2 + 50) / 100})`}
        />
        <InfoText header>{title}</InfoText>
      </CircledText>
      <InfoNumber header>{lostRevenue ? lostRevenue : ''}</InfoNumber>
    </SubInfoRow>
  );
};

export default SubInfoHeaderText;
