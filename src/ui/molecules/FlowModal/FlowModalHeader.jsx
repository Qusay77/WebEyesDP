import React from 'react';
import { FlowHeaderContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { HeaderText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import CloseButton from './CloseButton';

const FlowModalHeader = ({ action, text, headerSpacing }) => {
  return (
    <FlowHeaderContainer>
      <HeaderText>{text}</HeaderText>
      <CloseButton headerSpacing={headerSpacing} action={action} />
    </FlowHeaderContainer>
  );
};
export default FlowModalHeader;
