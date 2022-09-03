import React from 'react';
import { useSelector } from 'react-redux';
import {
  MobileFooterContainer,
  MobileFooterContent,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/MobileFooterAtoms';
import { TextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';
import { TotalNumberText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';

const MobileFooter = () => {
  const { totalLostRevenue } = useSelector(
    ({ DPState }) => DPState.lostRevenueData || {},
  );

  return (
    <MobileFooterContainer>
      <MobileFooterContent>
        <TextAtom>Your lost monthly revenue is</TextAtom>
        <TotalNumberText>{totalLostRevenue}</TotalNumberText>
        <ActionHeaderButton mobile />
      </MobileFooterContent>
    </MobileFooterContainer>
  );
};

export default MobileFooter;
