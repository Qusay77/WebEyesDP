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
      <HeaderText
        headerSpacing={soloCheck ? '0px' : headerSpacing}
        isCustomPositioned={isCustomPositioned}
        soloCheck={soloCheck}
      >
        {text}
      </HeaderText>
      <CloseButton action={action} />
    </FlowHeaderContainer>
  );
};
export default FlowModalHeader;
