import React from 'react';
import { WrapContainer } from '../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import ActionHeader from '../../organisms/DataProductization/ActionHeader/ActionHeader';
import DropDownMenu from '../../organisms/DataProductization/DropDownMenu/DropDownMenusRow';
import DPHeaderOrganism from '../../organisms/DataProductization/Header/DPHeaderOrganism';
import ProblemInfo from '../../organisms/DataProductization/ProblemInfo/ProblemInfo';

const DPPageTemplate = () => {
  return (
    <WrapContainer>
      <DPHeaderOrganism />
      <DropDownMenu />
      <ActionHeader />
      <ProblemInfo />
    </WrapContainer>
  );
};

export default DPPageTemplate;
