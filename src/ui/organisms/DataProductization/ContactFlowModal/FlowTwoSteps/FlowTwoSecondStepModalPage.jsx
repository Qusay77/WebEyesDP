import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  FlowTwoSecondStepModalPageContainer,
  InputsContainers,
} from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';
import MultiTextInput from '../../../../molecules/FlowModal/MultiTextInput';
import theme from '../../../../theme';

const dynamicText = [
  {
    text: 'WebeyeZ will send you a monthly report to your email!',
    newLine: true,
  },
  { text: 'Before going to the main page, you can add more', newLine: true },
  { text: 'recipients so they get the report as well.' },
];
const dynamicTextMobile = [
  {
    text: 'WebeyeZ will send you a monthly report',
    newLine: true,
  },
  {
    text: 'to your email!',
    newLine: true,
  },
  { text: 'Before going to the main page, you can', newLine: true },
  { text: 'add more recipients so they get the report', newLine: true },
  { text: ' as well.' },
];
const FlowTwoSecondStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  return (
    <FlowTwoSecondStepModalPageContainer>
      <FlowModalTextSection
        dynamicText={isMobile ? dynamicTextMobile : dynamicText}
      />
      <InputsContainers>
        <MultiTextInput />
      </InputsContainers>
    </FlowTwoSecondStepModalPageContainer>
  );
};

export default FlowTwoSecondStepModalPage;
