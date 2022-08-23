import React from 'react';
import DropDownMenusContainer from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownMenusContainerAtom';
import DropDownBlock from '../../../molecules/DataProductization/DropDownMenu/DropDownBlock';

const options = [...Array(100)].map((_, i) => ({ label: i, value: i }));

const DropDownMenu = () => {
  return (
    <DropDownMenusContainer>
      <DropDownBlock values={{ options, label: 'Test1' }}></DropDownBlock>
      <DropDownBlock values={{ options, label: 'Test2' }}></DropDownBlock>
      <DropDownBlock values={{ options, label: 'Test3' }}></DropDownBlock>
      <DropDownBlock values={{ options, label: 'Test4' }}></DropDownBlock>
    </DropDownMenusContainer>
  );
};

export default DropDownMenu;
