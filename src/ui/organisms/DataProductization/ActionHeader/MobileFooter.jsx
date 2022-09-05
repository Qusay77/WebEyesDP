import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  MobileFooterContainer,
  MobileFooterContent,
} from '../../../atoms/DataProductizationAtoms/ActionHeader/MobileFooterAtoms';
import { TextAtom } from '../../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';
import { TotalNumberText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import ActionHeaderButton from '../../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import { useDispatch } from 'react-redux';
import { setIsModalOpen, setStickyFooter } from '../../../../redux/DPSlice';
const MobileFooter = () => {
  const { totalLostRevenue } = useSelector(
    ({ DPState }) => DPState.lostRevenueData || {},
  );
  const { stickyFooter } = useSelector(({ DPState }) => DPState || {});
  const dispatch = useDispatch();
  const target = document.getElementById('mobile-footer');
  const observer = new IntersectionObserver((entries, observerRef) => {
    if (entries[0].isIntersecting) {
      dispatch(setStickyFooter({ value: true }));
      observerRef.unobserve(target);
    }
  });

  useEffect(() => {
    if (target) {
      observer.observe(target);
    }
  }, [target]);

  return (
    <MobileFooterContainer isSticky={stickyFooter} id={'mobile-footer'}>
      <MobileFooterContent>
        <TextAtom>Your lost monthly revenue is</TextAtom>
        <TotalNumberText>{totalLostRevenue}</TotalNumberText>
        <ActionHeaderButton
          action={() => dispatch(setIsModalOpen({ open: true }))}
        />
      </MobileFooterContent>
    </MobileFooterContainer>
  );
};

export default MobileFooter;
