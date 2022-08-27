import React from 'react';
import { FlowHeaderContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { HeaderText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import CloseButton from './CloseButton';

const FlowModalHeader = ({ action }) => {
  return (
    <FlowHeaderContainer>
      <HeaderText>Let Webeyez analyze your real Data</HeaderText>
      <CloseButton action={action} />
    </FlowHeaderContainer>
  );
};
export default FlowModalHeader;
