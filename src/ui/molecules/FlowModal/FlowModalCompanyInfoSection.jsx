import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import OptionalLabel from './OptionalLabel';

const FlowModalCompanyInfoSection = ({ text }) => {
  return (
    <TextInputBlockContainer>
      <OptionalLabel text={'Company Name'} />
      <TextInput optional fullWidth placeholder={'Company Name'} />
    </TextInputBlockContainer>
  );
};

export default FlowModalCompanyInfoSection;
