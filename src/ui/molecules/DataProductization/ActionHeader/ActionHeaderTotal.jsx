import React from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import {
  TextAtom,
  TotalTextAtom,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const ActionHeaderTotal = ({ Info }) => {
  const { currency, totalLostRevenue } = Info;
  return (
    <BlockAtom flex={1}>
      <TextAtom>Your lost monthly revenue is</TextAtom>
      <TotalTextAtom>
        {currency}
        {totalLostRevenue}
      </TotalTextAtom>
    </BlockAtom>
  );
};

export default ActionHeaderTotal;
