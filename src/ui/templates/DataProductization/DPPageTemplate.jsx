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
import MediaQuery from 'react-responsive';
import theme from '../../theme';
import ActionHeaderButton from '../../molecules/DataProductization/ActionHeader/ActionHeaderButton';
const Colors = ['255,102,99', '113,74,255'];

const DPPageTemplate = () => {
  const { lostRevenueData } = useSelector(({ DPState }) => DPState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCall());
  }, []);
  const { sections, totalLostRevenue } = lostRevenueData || {};
  const Sections = sections
    ? Object.entries(sections).map(([k, v]) => ({
        name: k,
        ...v,
      }))
    : [];
  return (
    <MainContainer>
      <WrapContainer visible={lostRevenueData}>
        <DPHeaderContainer />
        <MediaQuery minWidth={theme.breakpoints.magicMachine}>
          <DropDownMenu />
          <ActionHeader Info={{ totalLostRevenue }} />
        </MediaQuery>
        <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
          <ActionHeader Info={{ totalLostRevenue }} />
          <DropDownMenu />
          <ActionHeaderButton mobile action={() => dispatch(getCall(true))} />
        </MediaQuery>
        {Sections.map((sect, i) => (
          <ProblemInfo
            section={sect}
            color={Colors[i]}
            key={`problem-info-${i}`}
            index={i}
          />
        ))}
      </WrapContainer>
    </MainContainer>
  );
};

export default DPPageTemplate;
