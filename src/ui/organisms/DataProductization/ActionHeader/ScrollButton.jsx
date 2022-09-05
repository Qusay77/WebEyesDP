import React from 'react';
import { useSelector } from 'react-redux';
import {
  ScrollerContainer,
  ScrollerWrap,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ScrollerButtonAtoms';
import { Arrow } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';

const ScrollButton = () => {
  const { stickyFooter } = useSelector(({ DPState }) => DPState || {});

  return (
    <ScrollerWrap isSticky={stickyFooter}>
      <ScrollerContainer onClick={() => window.scrollTo(0, 0)}>
        <Arrow isOpen />
      </ScrollerContainer>
    </ScrollerWrap>
  );
};

export default ScrollButton;
