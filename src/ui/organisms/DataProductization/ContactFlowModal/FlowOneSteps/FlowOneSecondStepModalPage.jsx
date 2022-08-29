import React from 'react';

import styled from 'styled-components';
import FlowModalTextSection from '../../../../molecules/FlowModal/FlowModalTextSection';

const SecondStepModalPageContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 137px;
`;

const dynamicText = [
  { text: 'Our team will contact you soon to create your', newLine: true },
  { text: 'account so you can start analyzing your' },
  { text: 'real data', bold: true, newLine: true },
  { text: 'and take control over your monthly lost revenue' },
];

const FlowOneSecondStepModalPage = () => {
  return (
    <SecondStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
    </SecondStepModalPageContainer>
  );
};

export default FlowOneSecondStepModalPage;
