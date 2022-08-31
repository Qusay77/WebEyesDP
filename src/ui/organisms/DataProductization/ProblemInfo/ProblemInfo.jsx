import React, { useState } from 'react';
import styled from 'styled-components';
import InfoContainer from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainer';
import { InfoContainerLayout } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainerLayout';
import InfoHeader from '../../../molecules/DataProductization/ProblemInfo/InfoHeader';
import MainTextInfoSection from './MainTextInfoSection';
import SubInfoSection from './SubInfoSection';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';

const ControlledInfoContainer = styled(InfoContainer)`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    ${InfoContainerLayout} {
      ${VariableFlexLayout}:nth-child(1) {
        ${({ isExpanded }) =>
          !isExpanded
            ? `padding-bottom:unset;
      margin-bottom:unset
      `
            : ''};
      }
      ${VariableFlexLayout}:nth-child(2) {
        ${({ isExpanded }) => (!isExpanded ? `display:none; ` : '')};
      }
    }
  }
`;

const ProblemInfo = ({ section, color, index }) => {
  const { name } = section;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <ControlledInfoContainer isExpanded={isExpanded}>
      <InfoHeader
        isOpen={isExpanded}
        action={() => setIsExpanded((prev) => !prev)}
        text={name}
      />
      <InfoContainerLayout>
        <MainTextInfoSection color={color} section={section} index={index} />
        <SubInfoSection color={color} section={section} />
      </InfoContainerLayout>
    </ControlledInfoContainer>
  );
};

export default ProblemInfo;
