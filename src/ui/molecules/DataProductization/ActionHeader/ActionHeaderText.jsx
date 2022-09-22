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
        <TextAtom>Companies that see </TextAtom>
        <TextAtom isBold>1000000</TextAtom>
        <TextAtom> monthly visitors and have an AOV of </TextAtom>
        <TextAtom isBold>$150</TextAtom>
        <TextAtom> lose – on average –</TextAtom>
        <TextAtom isBold>$500000</TextAtom>
        <TextAtom>
          in revenue every month.
          <br /> Do you want a
        </TextAtom>
        <TextAtom isBold> Free Trial</TextAtom> <TextAtom>with your</TextAtom>
        <TextAtom isBold> Real-Time Data?</TextAtom>
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <InfoStatement />
      </MediaQuery>
    </TextAtomsContainer>
  );
};

export default ActionHeaderText;
