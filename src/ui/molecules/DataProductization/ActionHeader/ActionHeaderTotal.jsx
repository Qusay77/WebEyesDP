import React from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import {
  TextAtom,
  TotalTextAtom,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const ActionHeaderTotal = () => {
  return (
    <BlockAtom flex={1}>
      <TextAtom>Your lost monthly revenue is</TextAtom>
      <TotalTextAtom>$67,804</TotalTextAtom>
    </BlockAtom>
  );
};

export default ActionHeaderTotal;
