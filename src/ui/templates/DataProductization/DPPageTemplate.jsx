import React from 'react';
import { WrapContainer } from '../../atoms/GenericAtoms/ContainerAtoms/ContainerAtoms';
import ActionHeader from '../../organisms/DataProductization/ActionHeader/ActionHeader';
import DropDownMenu from '../../organisms/DataProductization/DropDownMenu/DropDownMenusRow';
import DPHeaderOrganism from '../../organisms/DataProductization/Header/DPHeaderOrganism';

const DPPageTemplate = () => {
  return (
    <WrapContainer>
      <DPHeaderOrganism />
      <DropDownMenu />
      <ActionHeader />
    </WrapContainer>
  );
};

export default DPPageTemplate;
