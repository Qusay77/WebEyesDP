import React from 'react';
import { TextAtomsContainer } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { TextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';
import MediaQuery from 'react-responsive';
import theme from '../../../theme';
import InfoStatement from './InfoStatement';

const ActionHeaderText = () => {
  return (
    <TextAtomsContainer>
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <TextAtom>
          Our simulator will reveal details for revenue loss per industry, based
          on industry data.
          <br /> Do you want a
        </TextAtom>
        <TextAtom isBold> Free Trial</TextAtom> <TextAtom>with your</TextAtom>
        <TextAtom isBold> Real-Time Data?</TextAtom>
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <InfoStatement />
        <br />
        <br />
        <TextAtom isBold>
          You can edit the data and test different values!
        </TextAtom>
      </MediaQuery>
    </TextAtomsContainer>
  );
};

export default ActionHeaderText;
