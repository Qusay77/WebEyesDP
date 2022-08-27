import React from 'react';
import FirstStepModalPage from './FirstStepModalPage';
import FlowPageFooter from '../../../molecules/FlowModal/FlowPageFooter';
import FlowModalHeader from '../../../molecules/FlowModal/FlowModalHeader';
import { FlowPageContainer } from '../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';

const FlowPageController = () => {
  return (
    <FlowPageContainer>
      <FlowModalHeader />
      <FirstStepModalPage />
      <FlowPageFooter footerText={'test'} />
    </FlowPageContainer>
  );
};
export default FlowPageController;
