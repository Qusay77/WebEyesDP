import React, { useEffect } from 'react';
import FlowModalTextSection from '../../../molecules/FlowModal/FlowModalTextSection';
import FlowModalOptionsSection from '../../../molecules/FlowModal/FlowModalOptionsSection';
import { FirstStepModalPageContainer } from '../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import CheckboxRow from '../../../molecules/FlowModal/CheckboxRow';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';
import { eventTracker } from '../../../../../ProductAnalytics';
const dynamicText = [
  { text: 'Webeyez can show you your lost revenue and much more with your' },
  { text: 'real-time data', bold: true },
  { text: 'in a few small steps.', newLine: true },
  { text: 'You can also get a' },
  { text: 'Monthly Report', bold: true },
  { text: 'based on industry data!' },
];
const dynamicTextMobile = [
  { text: 'WebeyeZ can show you your lost revenue', newLine: true },
  { text: 'and much more with your' },
  { text: 'real-time data', bold: true, newLine: true },
  { text: 'in a few small steps!' },
];
const FirstStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });

  useEffect(() => {
    eventTracker('DP - Let webeyez analyze viewed');
  }, []);
  return (
    <FirstStepModalPageContainer>
      <FlowModalTextSection
        dynamicText={isMobile ? dynamicTextMobile : dynamicText}
      />
      <FlowModalOptionsSection />
      <CheckboxRow />
    </FirstStepModalPageContainer>
  );
};
export default FirstStepModalPage;
