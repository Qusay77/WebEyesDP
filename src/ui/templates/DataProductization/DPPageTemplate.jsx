import React, { useEffect } from 'react';
import { getCall } from '../../../redux/apiCalls/getCall';
import {
  MainContainer,
  WrapContainer,
} from '../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import ActionHeader from '../../organisms/DataProductization/ActionHeader/ActionHeader';
import DropDownMenu from '../../organisms/DataProductization/DropDownMenu/DropDownMenusRow';
import DPHeaderContainer from '../../organisms/DataProductization/Header/DPHeaderContainer';
import ProblemInfo from '../../organisms/DataProductization/ProblemInfo/ProblemInfo';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import theme from '../../theme';
import ActionHeaderButton from '../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
import MobileInfoHeader from '../../molecules/DataProductization/Header/MobileInfoHeader';
import MobileFooter from '../../organisms/DataProductization/ActionHeader/MobileFooter';
import ScrollButton from '../../organisms/DataProductization/ActionHeader/ScrollButton';
import MarketingStatement from '../../organisms/MarketingStatement/MarketingStatement';
import { Loader } from '../../atoms/LoaderAtoms/LoaderAtoms';
import { eventTracker } from '../../../../ProductAnalytics';

const Colors = ['255,102,99', '113,74,255'];

const DPPageTemplate = () => {
  const { lostRevenueData, stickyFooter } = useSelector(
    ({ DPState }) => DPState,
  );
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  useEffect(() => {
    const notificationElement = document.getElementById('beamerSelector');
    const messagingElement = document.getElementById(
      'hubspot-messages-iframe-container',
    );
    if (notificationElement) {
      if (stickyFooter) {
        notificationElement.style.bottom = '185px !important';
      } else {
        notificationElement.style.bottom = '25px !important';
      }
    }
    if (messagingElement) {
      if (stickyFooter) {
        messagingElement.style.bottom = '240px !important';
      } else {
        messagingElement.style.left = '-3px !important';
        messagingElement.style.bottom = '85px !important';
      }
    }
  }, [isMobile, stickyFooter]);

  useEffect(() => {
    dispatch(getCall()).then(() => window.scrollTo(0, 0));
    eventTracker('DP - Lost revenue Viewed');
  }, []);
  const { sections } = lostRevenueData || {};
  const Sections = sections
    ? Object.entries(sections).map(([k, v]) => ({
        name: k,
        ...v,
      }))
    : [];

  return (
    <MainContainer id="header-container">
      {!lostRevenueData ? <Loader>Loading...</Loader> : ''}
      <WrapContainer visible={lostRevenueData}>
        <DPHeaderContainer />
        <MediaQuery minWidth={theme.breakpoints.magicMachine}>
          <DropDownMenu />
          <ActionHeader />
        </MediaQuery>
        <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
          <ActionHeader />
          <DropDownMenu />
          <ActionHeaderButton
            anchor
            mobile
            action={() => dispatch(getCall(true))}
          />
          <MobileInfoHeader />
        </MediaQuery>
        {Sections.map((sect, i) => (
          <ProblemInfo
            section={sect}
            color={Colors[i]}
            key={`problem-info-${i}`}
            index={i}
          />
        ))}
        <MarketingStatement />
        {lostRevenueData ? (
          <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
            <ScrollButton />
          </MediaQuery>
        ) : (
          ''
        )}
      </WrapContainer>
      {lostRevenueData ? (
        <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
          <MobileFooter />
        </MediaQuery>
      ) : (
        ''
      )}
    </MainContainer>
  );
};

export default DPPageTemplate;
