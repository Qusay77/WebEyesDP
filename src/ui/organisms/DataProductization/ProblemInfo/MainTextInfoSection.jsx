import React from 'react';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';
import InfoTextRow from '../../../molecules/DataProductization/ProblemInfo/InfoTextRow';
const MainTextInfoSection = ({ section, color }) => {
  const { problems, currency } = section;
  return (
    <VariableFlexLayout dir={'column'} padding={'0 24px 0 0'}>
      {problems.map(({ title, percentage }, i) => (
        <InfoTextRow
          currency={currency}
          color={color}
          problem={{ title, percentage }}
          key={`${title}-${i}`}
        />
      ))}
    </VariableFlexLayout>
  );
};

export default MainTextInfoSection;
