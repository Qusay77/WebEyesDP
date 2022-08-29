import React from 'react';
import { MainFlowThanksPageContainer } from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';

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

const MainFlowFourthStepModalPage = () => {
  return (
    <MainFlowThanksPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
    </MainFlowThanksPageContainer>
  );
};

export default MainFlowFourthStepModalPage;
