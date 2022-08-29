import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const TextInputBlock = () => {
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Email Address</MainText>
      <TextInput placeholder={'ceo@mydomain.com'} />
    </TextInputBlockContainer>
  );
};

export default TextInputBlock;
