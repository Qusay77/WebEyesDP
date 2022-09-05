import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { eventTracker } from '../../../../../../ProductAnalytics';
import {
  InfoOptionsContainer,
  MainFlowSecondStepModalPageContainer,
} from '../../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import CheckboxRow from '../../../../molecules/FlowModal/CheckboxRow';
import FlowModalCompanyInfoSection from '../../../../molecules/FlowModal/FlowModalCompanyInfoSection';
import FlowModalFullNameSection from '../../../../molecules/FlowModal/FlowModalFullNameSection';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';
import theme from '../../../../theme';

const dynamicText = [
  {
    text: 'We need the following details to set up your account.',
    newLine: true,
  },
  { text: 'You can also set up these details later on inside the system.' },
];
const MainFlowThirdStepModalPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });

  useEffect(() => {
    eventTracker('DP - Just one more step modal viewed');
  }, []);
  return (
    <MainFlowSecondStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
      <InfoOptionsContainer
        marginTop={isMobile ? '40px' : '64px'}
        isMobile={isMobile}
      >
        <FlowModalCompanyInfoSection />
        <FlowModalFullNameSection />
        <CheckboxRow marginTop={0} />
      </InfoOptionsContainer>
    </MainFlowSecondStepModalPageContainer>
  );
};
export default MainFlowThirdStepModalPage;
