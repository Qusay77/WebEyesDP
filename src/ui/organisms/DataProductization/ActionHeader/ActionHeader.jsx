import React from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import ActionHeaderContainer from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderContainer';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import ActionHeaderText from '../../../molecules/DataProductization/ActionHeader/ActionHeaderText';
import ActionHeaderTotal from '../../../molecules/DataProductization/ActionHeader/ActionHeaderTotal';

const ActionHeader = () => {
  return (
    <ActionHeaderContainer>
      <ActionHeaderTotal />
      <BlockAtom flex={2}>
        <ActionHeaderText />
      </BlockAtom>
      <BlockAtom flex={1} end>
        <ActionHeaderButton />
      </BlockAtom>
    </ActionHeaderContainer>
  );
};

export default ActionHeader;
