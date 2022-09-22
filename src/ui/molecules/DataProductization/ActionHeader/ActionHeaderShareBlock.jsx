import React from 'react';
import { ShareBlockContainer } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import ShareIconBlock from './ShareIconBlock';

const ActionHeaderShareBlock = () => {
  return (
    <ShareBlockContainer>
      <DropDownMenuLabelOrOptionAtom isBold>
        Simulator Results
      </DropDownMenuLabelOrOptionAtom>
      <ShareIconBlock />
    </ShareBlockContainer>
  );
};

export default ActionHeaderShareBlock;
