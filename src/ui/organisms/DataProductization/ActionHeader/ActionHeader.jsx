import React, { useState } from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import ActionHeaderContainer from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderContainer';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import ActionHeaderText from '../../../molecules/DataProductization/ActionHeader/ActionHeaderText';
import ActionHeaderTotal from '../../../molecules/DataProductization/ActionHeader/ActionHeaderTotal';
import ContactFlowMainModal from '../ContactFlowModal/ContactFLowMainModal';

const ActionHeader = ({ Info }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <ActionHeaderContainer>
      <ActionHeaderTotal Info={Info} />
      <BlockAtom flex={2}>
        <ActionHeaderText />
      </BlockAtom>
      <BlockAtom flex={1} end="true">
        <ActionHeaderButton action={() => setIsOpen(true)} />
      </BlockAtom>
      <ContactFlowMainModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </ActionHeaderContainer>
  );
};

export default ActionHeader;
