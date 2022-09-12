import React from 'react';
import { HeaderContainer } from '../../../atoms/GlobalAtoms/ContainerAtoms/ContainerAtoms';
import DPHeader from '../../../molecules/DataProductization/Header/DPHeaderMolecule';

const DPHeaderContainer = ({ onClick }) => {
  return (
    <HeaderContainer start="true">
      <DPHeader onClick={onClick} />
    </HeaderContainer>
  );
};

export default DPHeaderContainer;
