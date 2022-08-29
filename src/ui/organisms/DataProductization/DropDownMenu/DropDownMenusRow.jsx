import React from 'react';
import DropDownMenusContainer from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownMenusContainerAtom';
import DropDownBlock from '../../../molecules/DataProductization/DropDownMenu/DropDownBlock';

const options = [...Array(100)].map((_, i) => ({ label: i, value: i }));

const DropDownMenu = () => {
  return (
    <DropDownMenusContainer>
      <DropDownBlock
        labelWidth={'258px'}
        menuWidth={'254px'}
        labelBottomMargin={'8px'}
        values={{ options, label: 'Test1' }}
      />
      <DropDownBlock
        labelWidth={'258px'}
        menuWidth={'254px'}
        labelBottomMargin={'8px'}
        values={{
          options: [
            {
              label: '3333ssssssssssssssssssssssssssssssssssssssssssss333',
              value: 10983,
            },
            ...options,
          ],
          label:
            'Test222222rqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq222',
        }}
      />
      <DropDownBlock
        labelWidth={'258px'}
        menuWidth={'254px'}
        labelBottomMargin={'8px'}
        values={{ options, label: 'Test3' }}
      />
    </DropDownMenusContainer>
  );
};

export default DropDownMenu;
