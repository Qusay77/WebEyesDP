import React from 'react';
import DropDownBlock from '../DataProductization/DropDownMenu/DropDownBlock';
import TextInputBlock from './TextInputBlock';
import { FlowModalOptionsContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { platformOptions } from '../../../utils/DPDropDownOptions';

const FlowModalOptionsSection = ({ disabled }) => {
  return (
    <FlowModalOptionsContainer>
      <DropDownBlock
        labelWidth={'352px'}
        persist
        menuWidth={'348px'}
        disabled={disabled}
        placeholder={'Platform Name'}
        labelBottomMargin={'16px'}
        values={{
          options: platformOptions,
          label: 'Your Website’s Platform',
          key: 'platform',
        }}
      />
      <TextInputBlock disabled={disabled} />
    </FlowModalOptionsContainer>
  );
};

export default FlowModalOptionsSection;
