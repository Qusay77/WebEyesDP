import React from 'react';
import { FlowFooterContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import FlowModalFooterButton from './FlowModalFooterButton';

const FlowPageFooter = ({ footerText }) => {
  return (
    <FlowFooterContainer>
      <FlowModalFooterButton text={footerText} />
      <MainText clickable>I only want to get a monthly report</MainText>
    </FlowFooterContainer>
  );
};
export default FlowPageFooter;
