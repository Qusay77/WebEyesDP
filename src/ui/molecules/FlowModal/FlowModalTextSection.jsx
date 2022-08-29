import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { FlowTextContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';

const FlowModalTextSection = ({ dynamicText }) => {
  return (
    <FlowTextContainer>
      {dynamicText.map(({ text, bold, newLine }, i) => (
        <MainText key={`text-${i}`} isBold={bold}>
          {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
        </MainText>
      ))}
    </FlowTextContainer>
  );
};

export default FlowModalTextSection;
