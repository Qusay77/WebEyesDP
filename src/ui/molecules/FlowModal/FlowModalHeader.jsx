import React from 'react';
import { FlowHeaderContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { HeaderText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import CloseButton from './CloseButton';

const FlowModalHeader = ({
  action,
  text,
  headerSpacing,
  soloCheck,
  isCustomPositioned,
}) => {
  return (
    <FlowHeaderContainer>
      <HeaderText isCustomPositioned={isCustomPositioned} soloCheck={soloCheck}>
        {text}
      </HeaderText>
      <CloseButton
        headerSpacing={soloCheck ? '0px' : headerSpacing}
        action={action}
      />
    </FlowHeaderContainer>
  );
};
export default FlowModalHeader;
