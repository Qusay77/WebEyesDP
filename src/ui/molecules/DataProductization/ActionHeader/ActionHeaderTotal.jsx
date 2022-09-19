import React from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import {
  TextAtom,
  TotalTextAtom,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const ActionHeaderTotal = ({ Info }) => {
  const { totalLostRevenue } = Info;
  return (
    <BlockAtom flex={1}>
      <TextAtom>Monthly lost revenue:</TextAtom>
      <TotalTextAtom>{totalLostRevenue}</TotalTextAtom>
    </BlockAtom>
  );
};

export default ActionHeaderTotal;
