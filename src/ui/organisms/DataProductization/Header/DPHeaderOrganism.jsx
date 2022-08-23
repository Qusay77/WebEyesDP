import React from 'react';
import { HeaderContainer } from '../../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import DPHeader from '../../../molecules/DataProductization/Header/DPHeaderMolecule';

const DPHeaderOrganism = () => {
  return (
    <HeaderContainer start="true">
      <DPHeader />
    </HeaderContainer>
  );
};

export default DPHeaderOrganism;
