import React from 'react';
import {
  ScrollerContainer,
  ScrollerWrap,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ScrollerButtonAtoms';
import { Arrow } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';

const ScrollButton = () => {
  return (
    <ScrollerWrap>
      <ScrollerContainer onClick={() => window.scrollTo(0, 0)}>
        <Arrow isOpen />
      </ScrollerContainer>
    </ScrollerWrap>
  );
};

export default ScrollButton;
