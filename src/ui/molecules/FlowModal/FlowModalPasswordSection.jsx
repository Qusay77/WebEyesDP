import React from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const FlowModalPasswordSection = ({}) => {
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Password</MainText>
      <MultiInputsContainer>
        <TextInput type="password" />
        <TextInput type="password" />
      </MultiInputsContainer>
    </TextInputBlockContainer>
  );
};

export default FlowModalPasswordSection;
