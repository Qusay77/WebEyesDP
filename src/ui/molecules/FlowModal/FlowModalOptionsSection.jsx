import React from 'react';
import DropDownBlock from '../DataProductization/DropDownMenu/DropDownBlock';
import TextInputBlock from './TextInputBlock';
import { FlowModalOptionsContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';

const options = [
  {
    label: 'Shopify Plus',
    value: 0,
  },
  {
    label: 'Magento',
    value: 1,
  },
  {
    label: 'Other',
    value: 2,
  },
];

const FlowModalOptionsSection = ({}) => {
  return (
    <FlowModalOptionsContainer>
      <DropDownBlock
        labelWidth={'352px'}
        menuWidth={'348px'}
        placeholder={'Platform Name'}
        labelBottomMargin={'16px'}
        values={{ options, label: 'Your Website’s Platform' }}
      />
      <TextInputBlock />
    </FlowModalOptionsContainer>
  );
};

export default FlowModalOptionsSection;
