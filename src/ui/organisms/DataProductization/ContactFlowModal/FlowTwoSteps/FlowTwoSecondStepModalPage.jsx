import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { eventTracker } from '../../../../../../ProductAnalytics';
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
    text: 'WebeyeZ will send you a monthly report to your email!',
    newLine: true,
  },
  {
    text: '',
    newLine: true,
  },
  {
    text: 'Before going to the main page, you can add more recipients so they get the report as well.',
    newLine: true,
  },
];
const FlowTwoSecondStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  useEffect(() => {
    eventTracker('DP - thanks for your subscription modal viewed');
  }, []);

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
