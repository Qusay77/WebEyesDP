import React from 'react';
import { SubInfoRow } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import {
  InfoNumber,
  SmallInfoText,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';

const SubInfoText = ({ category }) => {
  const { title, lostRevenue } = category;
  return (
    <SubInfoRow>
      <SmallInfoText>{title}</SmallInfoText>
      <InfoNumber>{lostRevenue ? lostRevenue : ''}</InfoNumber>
    </SubInfoRow>
  );
};

export default SubInfoText;
