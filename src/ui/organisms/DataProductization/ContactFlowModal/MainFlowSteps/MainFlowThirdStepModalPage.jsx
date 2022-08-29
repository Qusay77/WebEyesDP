import React from 'react';
import {
  InfoOptionsContainer,
  MainFlowSecondStepModalPageContainer,
} from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import CheckboxRow from '../../../../molecules/FlowModal/CheckboxRow';
import FlowModalCompanyInfoSection from '../../../../molecules/FlowModal/FlowModalCompanyInfoSection';
import FlowModalFullNameSection from '../../../../molecules/FlowModal/FlowModalFullNameSection';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';

const dynamicText = [
  {
    text: 'We need the following details to set up your account.',
    newLine: true,
  },
  { text: 'You can also set up these details later on inside the system.' },
];
const MainFlowThirdStepModalPage = () => {
  return (
    <MainFlowSecondStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
      <InfoOptionsContainer marginTop={'64px'}>
        <FlowModalCompanyInfoSection />
        <FlowModalFullNameSection />
        <CheckboxRow marginTop={0} />
      </InfoOptionsContainer>
    </MainFlowSecondStepModalPageContainer>
  );
};
export default MainFlowThirdStepModalPage;
