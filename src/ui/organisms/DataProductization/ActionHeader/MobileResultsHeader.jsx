import React from 'react';
import { useSelector } from 'react-redux';
import { mobileShare } from '../../../../utils/tools';
import {
  MobileResultsHeaderContainer,
  ShareIcon,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderAtoms';
import { TextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';
import { TotalNumberText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';

const MobileResultsHeader = () => {
  const { totalLostRevenue } = useSelector(
    ({ DPState }) => DPState.lostRevenueData || {},
  );
  return (
    <MobileResultsHeaderContainer>
      <TextAtom>Monthly lost revenue is:</TextAtom>
      <TotalNumberText>{totalLostRevenue}</TotalNumberText>
      <TextAtom>You can edit the data and test different values!</TextAtom>
      <ShareIcon absolute onClick={() => mobileShare()} />
    </MobileResultsHeaderContainer>
  );
};

export default MobileResultsHeader;
