import React from 'react';
import {
  InfoOptionsContainer,
  MainFlowSecondStepModalPageContainer,
} from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowModalOptionsSection from '../../../../molecules/FlowModal/FlowModalOptionsSection';
import FlowModalPasswordSection from '../../../../molecules/FlowModal/FlowModalPasswordSection';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';

const dynamicText = [
  {
    text: 'We  can see you’re using',
  },
  { text: 'Shopify Plus!', bold: true },
  {
    text: 'That means we can connect your website',
  },
  {
    text: 'to our system right away. All you need to do is create your account!',
    newLine: true,
  },
];

const MainFlowSecondStepModalPage = () => {
  return (
    <MainFlowSecondStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
      <InfoOptionsContainer>
        <FlowModalOptionsSection />
        <FlowModalPasswordSection />
      </InfoOptionsContainer>
    </MainFlowSecondStepModalPageContainer>
  );
};

export default MainFlowSecondStepModalPage;
