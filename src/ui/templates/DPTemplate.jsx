import React from 'react';
import styled from 'styled-components';
import { DPLayout } from '../atoms/LayoutAtoms';
import DPHeaderOrganism from '../organisms/DPHeaderOrganism';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const DPTemplate = () => {
  return (
    <Wrapper>
      <DPLayout>
        <DPHeaderOrganism />
      </DPLayout>
    </Wrapper>
  );
};

export default DPTemplate;
