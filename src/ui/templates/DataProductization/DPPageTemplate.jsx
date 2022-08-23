import React from 'react';
import { WrapContainer } from '../../atoms/GenericAtoms/ContainerAtoms/ContainerAtoms';
import DPHeaderOrganism from '../../organisms/DataProductization/Header/DPHeaderOrganism';

const DPPageTemplate = () => {
  return (
    <WrapContainer>
      <DPHeaderOrganism />
    </WrapContainer>
  );
};

export default DPPageTemplate;
