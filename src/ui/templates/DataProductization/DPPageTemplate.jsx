import React from 'react';
import { WrapContainer } from '../../atoms/GenericAtoms/ContainerAtoms/ContainerAtoms';
import DropDownMenu from '../../organisms/DataProductization/DropDownMenu/DropDownMenusRow';
import DPHeaderOrganism from '../../organisms/DataProductization/Header/DPHeaderOrganism';

const DPPageTemplate = () => {
  return (
    <WrapContainer>
      <DPHeaderOrganism />
      <DropDownMenu />
    </WrapContainer>
  );
};

export default DPPageTemplate;
