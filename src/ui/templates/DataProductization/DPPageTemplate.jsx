import React, { useEffect, useRef } from 'react';
import { getCall } from '../../../redux/apiCalls/getCall';
import {
  MainContainer,
  PDFContainer,
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
import { dropDownEvents } from '../../../utils/DPDropDownOptions';
import CustomLoader from '../../organisms/Global/CustomLoader';
import { exportToPDF } from '../../../../ExportTools/toPDF';
import { setPDF } from '../../../redux/counterSlice';
import { multipleQuery, queryParams } from '../../../utils/urlParams';
import InfoStatement from '../../molecules/DataProductization/ActionHeader/InfoStatement';
import MobileResultsHeader from '../../organisms/DataProductization/ActionHeader/MobileResultsHeader';

const Colors = ['255,102,99', '113,74,255'];

const DPPageTemplate = () => {
  const { lostRevenueData } = useSelector(({ DPState }) => DPState);
  const {
    isPDF,
    count,
    getCall: getCallState,
  } = useSelector(({ loaderState }) => loaderState);
  // const { stickyFooter } = useSelector(({ DPState }) => DPState || {});
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  const isSmallMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMobile})`,
  });

  // this is experimental for action icons on live site which are disabled for the moment

  // const notificationElement = document.getElementById('beamerSelector');
  // const messagingElement = document.getElementById(
  //   'hubspot-messages-iframe-container',
  // );
  // useEffect(() => {
  //   if (notificationElement) {
  //     if (stickyFooter) {
  //       notificationElement.style.bottom = '185px !important';
  //     } else {
  //       notificationElement.style.bottom = '25px !important';
  //     }
  //   }
  //   if (messagingElement) {
  //     if (stickyFooter) {
  //       messagingElement.style.bottom = '240px !important';
  //     } else {
  //       messagingElement.style.left = '-3px !important';
  //       messagingElement.style.bottom = '85px !important';
  //     }
  //   }
  // }, [isMobile, stickyFooter]);
  useEffect(() => {
    queryParams();
  }, []);

  useEffect(() => {
    const rootElement = document.getElementsByTagName('section')[0];
    if (!isSmallMobile) {
      rootElement.style.overflowX = 'clip';
    } else {
      rootElement.style.overflowX = 'unset';
    }
  }, [isSmallMobile]);
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
  const MobileLoaderCondition = isMobile && (count || getCallState);
  const DPRef = useRef(null);
  const exportClickAction = () => {
    if (isPDF < 10) {
      dispatch(setPDF({ value: isPDF + 1 }));
    }
  };

  useEffect(() => {
    if (isPDF === 10) {
      if (DPRef && lostRevenueData) {
        exportToPDF(DPRef.current);
      }
    }
  }, [isPDF]);
  return (
    <MainContainer id="header-container">
      {!lostRevenueData || MobileLoaderCondition ? (
        <Loader>
          <CustomLoader />
        </Loader>
      ) : (
        ''
      )}
      <WrapContainer visible={lostRevenueData}>
        <DPHeaderContainer onClick={() => exportClickAction()} />
        <MediaQuery minWidth={theme.breakpoints.magicMachine}>
          <InfoStatement />
        </MediaQuery>
        <PDFContainer ref={DPRef}>
          <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
            <ActionHeader />
            <DropDownMenu />
            <ActionHeaderButton
              anchor
              mobile
              action={() =>
                dispatch(getCall(true)).then(() => {
                  Object.values(dropDownEvents).map((e) => eventTracker(e));
                  multipleQuery();
                })
              }
            />
            <MobileInfoHeader />
            <MobileResultsHeader />
          </MediaQuery>
          <MediaQuery minWidth={theme.breakpoints.magicMachine}>
            <DropDownMenu />
            <ActionHeader />
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
        </PDFContainer>
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
