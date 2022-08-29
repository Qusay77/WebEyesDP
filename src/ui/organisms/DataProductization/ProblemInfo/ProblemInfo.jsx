import React from 'react';
import InfoContainer from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainer';
import { InfoContainerLayout } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoContainerLayout';
import InfoHeader from '../../../molecules/DataProductization/ProblemInfo/InfoHeader';
import MainTextInfoSection from './MainTextInfoSection';
import SubInfoSection from './SubInfoSection';

const ProblemInfo = ({ section, color, index }) => {
  const { name } = section;
  return (
    <InfoContainer>
      <InfoHeader text={name} />
      <InfoContainerLayout>
        <MainTextInfoSection color={color} section={section} index={index} />
        <SubInfoSection color={color} section={section} />
      </InfoContainerLayout>
    </InfoContainer>
  );
};

export default ProblemInfo;
