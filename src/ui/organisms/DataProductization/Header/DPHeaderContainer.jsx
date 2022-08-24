import React from 'react';
import { HeaderContainer } from '../../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import DPHeader from '../../../molecules/DataProductization/Header/DPHeaderMolecule';

const DPHeaderContainer = () => {
  return (
    <HeaderContainer start="true">
      <DPHeader />
    </HeaderContainer>
  );
};

export default DPHeaderContainer;
