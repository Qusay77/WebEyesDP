import React, { useEffect } from 'react';
import { BlockAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import ActionHeaderText from '../../../molecules/DataProductization/ActionHeader/ActionHeaderText';
import ActionHeaderTotal from '../../../molecules/DataProductization/ActionHeader/ActionHeaderTotal';
import ContactFlowMainModal from '../ContactFlowModal/ContactFLowMainModal';
import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import theme from '../../../theme';
import { setIsModalOpen } from '../../../../redux/DPSlice';
import { ActionHeaderTextContainer } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderContainer';

const ActionHeaderTextSection = () => {
  const { isModalOpen, lostRevenueData } = useSelector(
    ({ DPState }) => DPState,
  );
  const { totalLostRevenue } = lostRevenueData || {};
  const dispatch = useDispatch();
  useEffect(() => {
    isModalOpen && (document.body.style.overflow = 'clip');
    !isModalOpen && (document.body.style.overflow = 'unset');
  }, [isModalOpen]);
  return (
    <ActionHeaderTextContainer>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <BlockAtom flex={1}>
          <ActionHeaderText />
        </BlockAtom>
      </MediaQuery>
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <ActionHeaderTotal Info={{ totalLostRevenue }} />
        <BlockAtom flex={2}>
          <ActionHeaderText />
        </BlockAtom>
        <BlockAtom flex={1} end="true">
          <ActionHeaderButton
            action={() => {
              dispatch(setIsModalOpen({ open: true }));
            }}
          />
        </BlockAtom>
      </MediaQuery>
      <ContactFlowMainModal
        setIsOpen={(open) => dispatch(setIsModalOpen({ open }))}
        modalIsOpen={isModalOpen}
      />
    </ActionHeaderTextContainer>
  );
};

export default ActionHeaderTextSection;
