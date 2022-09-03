import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MainFlowThanksPageContainer } from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';
import theme from '../../../../theme';

const dynamicText = [
  {
    text: 'We’ve sent a confirmation link to your email in order',
    newLine: true,
  },
  { text: 'to validate your account.', newLine: true },
  {
    text: 'After validating your email you will be able to access',
    newLine: true,
  },
  {
    text: 'your account and start analyzing right away!',
  },
];
const dynamicTextMobile = [
  {
    text: 'We’ve sent a confirmation link to your',
    newLine: true,
  },
  { text: 'email in order to validate your account.', newLine: true },
  { text: ' ', newLine: true },
  {
    text: 'After validating your email you will be able',
    newLine: true,
  },
  {
    text: 'to access your account and start analyzing',
    newLine: true,
  },
  {
    text: 'right away!',
  },
];
const MainFlowFourthStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  return (
    <MainFlowThanksPageContainer>
      <FlowModalTextSection
        dynamicText={isMobile ? dynamicTextMobile : dynamicText}
      />
    </MainFlowThanksPageContainer>
  );
};

export default MainFlowFourthStepModalPage;
