import React from 'react';
import { CheckBoxRowContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { Checkbox } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const CheckboxRow = ({ marginTop }) => {
  return (
    <CheckBoxRowContainer marginTop={marginTop}>
      <Checkbox type="checkbox" />
      <MainText>I want to get a</MainText>
      <MainText isBold> Monthly Report </MainText>
      <MainText>based on real industry data</MainText>
    </CheckBoxRowContainer>
  );
};

export default CheckboxRow;
