import React from 'react';
import { TextAtomsContainer } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { TextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const ActionHeaderText = () => {
  return (
    <TextAtomsContainer>
      <TextAtom>
        Our simulator will show you where your revenue is lost and why, based on
        real industry data.
        <br /> Do you want a
      </TextAtom>
      <TextAtom isBold> Free Trial</TextAtom> <TextAtom>with your</TextAtom>
      <TextAtom isBold> Real-Time Data?</TextAtom>
    </TextAtomsContainer>
  );
};

export default ActionHeaderText;
