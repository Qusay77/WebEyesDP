import React from 'react';
import {
  Arrow,
  ArrowContainer,
} from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';

const DropDownArrow = ({ isOpen, onClick }) => {
  return (
    <ArrowContainer onClick={onClick}>
      <Arrow isOpen={isOpen} />
    </ArrowContainer>
  );
};

export default DropDownArrow;
