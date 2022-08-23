import React from 'react';
import {
  Arrow,
  ArrowContainer,
} from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';

const DropDownArrow = ({ onClick }) => {
  return (
    <ArrowContainer onClick={onClick}>
      <Arrow />
    </ArrowContainer>
  );
};

export default DropDownArrow;
