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
import {
  setIsIntersecting,
  setIsModalOpen,
  setStickyFooter,
} from '../../../../redux/DPSlice';
const MobileFooter = () => {
  const { totalLostRevenue } = useSelector(
    ({ DPState }) => DPState.lostRevenueData || {},
  );
  const { stickyFooter } = useSelector(({ DPState }) => DPState || {});
  const dispatch = useDispatch();

  const pageFooter = document.getElementsByTagName('footer')?.[0];
  const pageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      dispatch(setIsIntersecting({ value: true }));
    } else if (!entries[0].isIntersecting) {
      dispatch(setIsIntersecting({ value: false }));
    }
  });

  const target = document.getElementById('mobile-footer');
  const observer = new IntersectionObserver((entries, observerRef) => {
    if (entries[0].isIntersecting) {
      dispatch(setStickyFooter({ value: true }));
      if (stickyFooter) {
        observerRef.unobserve(target);
      }
    }
  });

  useEffect(() => {
    if (pageFooter) {
      pageObserver.observe(pageFooter);
    }
  }, [pageFooter]);

  useEffect(() => {
    if (target) {
      observer.observe(target);
    }
  }, [target]);

  return (
    <MobileFooterContainer isSticky={stickyFooter} id={'mobile-footer'}>
      <MobileFooterContent>
        <TextAtom>Lost monthly revenue:</TextAtom>
        <TotalNumberText>{totalLostRevenue}</TotalNumberText>
        <ActionHeaderButton
          action={() => dispatch(setIsModalOpen({ open: true }))}
        />
      </MobileFooterContent>
    </MobileFooterContainer>
  );
};

export default MobileFooter;
