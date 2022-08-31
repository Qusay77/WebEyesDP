import React, { useEffect, useState } from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import ActionHeaderContainer from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderContainer';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import ActionHeaderText from '../../../molecules/DataProductization/ActionHeader/ActionHeaderText';
import ActionHeaderTotal from '../../../molecules/DataProductization/ActionHeader/ActionHeaderTotal';
import ContactFlowMainModal from '../ContactFlowModal/ContactFLowMainModal';
import { useDispatch } from 'react-redux';
import { resetParams } from '../../../../redux/DPSlice';
import MediaQuery from 'react-responsive';
import theme from '../../../theme';

const ActionHeader = ({ Info }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!modalIsOpen) {
      dispatch(resetParams());
    }
  }, [modalIsOpen]);
  return (
    <ActionHeaderContainer>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <BlockAtom flex={1}>
          <ActionHeaderText />
        </BlockAtom>
      </MediaQuery>
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <ActionHeaderTotal Info={Info} />
        <BlockAtom flex={2}>
          <ActionHeaderText />
        </BlockAtom>
        <BlockAtom flex={1} end="true">
          <ActionHeaderButton action={() => setIsOpen(true)} />
        </BlockAtom>
      </MediaQuery>
      <ContactFlowMainModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
    </ActionHeaderContainer>
  );
};

export default ActionHeader;
