import React from 'react';
import FlowModalTextSection from '../../../molecules/FlowModal/FlowModalTextSection';
import FlowModalOptionsSection from '../../../molecules/FlowModal/FlowModalOptionsSection';
import { FirstStepModalPageContainer } from '../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import CheckboxRow from '../../../molecules/FlowModal/CheckboxRow';

const dynamicText = [
  { text: 'Webeyez can show you your lost revenue and much more with your' },
  { text: 'real-time data', bold: true },
  { text: 'in a few small steps.', newLine: true },
  { text: 'You can also get a' },
  { text: 'Monthly Report', bold: true },
  { text: 'based on real industry data!' },
];
const FirstStepModalPage = () => {
  return (
    <FirstStepModalPageContainer>
      <FlowModalTextSection dynamicText={dynamicText} />
      <FlowModalOptionsSection />
      <CheckboxRow />
    </FirstStepModalPageContainer>
  );
};
export default FirstStepModalPage;
