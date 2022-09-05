import React from 'react';
import {
  MainText,
  OptionalLabelContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

const OptionalLabel = ({ text, marginTop }) => {
  return (
    <OptionalLabelContainer marginTop={marginTop}>
      <MainText isLabel>{text}</MainText>
      <MainText optional isLabel>
        (optional)
      </MainText>
    </OptionalLabelContainer>
  );
};

export default OptionalLabel;
