import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { eventTracker } from '../../../../../../ProductAnalytics';
import { FlowOneSecondStepModalPageContainer } from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';
import theme from '../../../../theme';

const dynamicText = [
  { text: 'Our team will contact you soon to create your', newLine: true },
  { text: 'account so you can start analyzing your' },
  { text: 'real data', bold: true, newLine: true },
  { text: 'and take control over your monthly lost revenue' },
];
const dynamicTextMobile = [
  {
    text: 'Our team will contact you soon to create your account so you can start analyzing your',
  },
  { text: 'real data,', bold: true },
  { text: 'and take control over your monthly lost revenue' },
];

const FlowOneSecondStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });

  useEffect(() => {
    eventTracker('DP - Take Control modal viewed');
  }, []);
  return (
    <FlowOneSecondStepModalPageContainer>
      <FlowModalTextSection
        dynamicText={isMobile ? dynamicTextMobile : dynamicText}
      />
    </FlowOneSecondStepModalPageContainer>
  );
};

export default FlowOneSecondStepModalPage;
