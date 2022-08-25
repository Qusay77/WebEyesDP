import React from 'react';
import {
  MainCOntainer,
  WrapContainer,
} from '../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import ActionHeader from '../../organisms/DataProductization/ActionHeader/ActionHeader';
import DropDownMenu from '../../organisms/DataProductization/DropDownMenu/DropDownMenusRow';
import DPHeaderContainer from '../../organisms/DataProductization/Header/DPHeaderContainer';
import ProblemInfo from '../../organisms/DataProductization/ProblemInfo/ProblemInfo';

import DPData from './../../../dummy.json';
const Colors = ['255,102,99', '113,74,255'];

const DPPageTemplate = () => {
  const { sections, currency, totalLostRevenue } = DPData;
  const Sections = Object.entries(sections).map(([k, v]) => ({
    name: k,
    ...v,
  }));
  return (
    <MainCOntainer>
      <WrapContainer>
        <DPHeaderContainer />
        <DropDownMenu />
        <ActionHeader Info={{ currency, totalLostRevenue }} />
        {Sections.map((sect, i) => (
          <ProblemInfo
            currency={currency}
            section={sect}
            color={Colors[i]}
            key={`problem-info-${i}`}
            index={i}
          />
        ))}
      </WrapContainer>
    </MainCOntainer>
  );
};

export default DPPageTemplate;
