import React from 'react';
import {
  InputsContainers,
  SecondStepModalPageContainer,
} from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';
import MultiTextInput from '../../../../molecules/FlowModal/MultiTextInput';

const dynamicText = [
  {
    text: 'WebeyeZ will send you a monthly report to your email!',
    newLine: true,
  },
  { text: 'Before going to the main page, you can add more', newLine: true },
  { text: 'recipients so they get the report as well.', newLine: true },
];

const FlowTwoSecondStepModalPage = () => {
  return (
    <SecondStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
      <InputsContainers>
        <MultiTextInput />
      </InputsContainers>
    </SecondStepModalPageContainer>
  );
};

export default FlowTwoSecondStepModalPage;
