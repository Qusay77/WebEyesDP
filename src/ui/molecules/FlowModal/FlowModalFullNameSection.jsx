import React from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import OptionalLabel from './OptionalLabel';

const FlowModalFullNameSection = ({}) => {
  return (
    <TextInputBlockContainer>
      <OptionalLabel text={'Full Name'} />
      <MultiInputsContainer>
        <TextInput />
        <TextInput />
      </MultiInputsContainer>
    </TextInputBlockContainer>
  );
};

export default FlowModalFullNameSection;
