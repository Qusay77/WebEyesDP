import React from 'react';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';
import InfoChartBlock from '../../../molecules/DataProductization/ProblemInfo/InfoChartBlock';
import InfoTextRow from '../../../molecules/DataProductization/ProblemInfo/InfoTextRow';
const MainTextInfoSection = ({ section, color, currency, index }) => {
  const { problems, totalLostRevenue } = section;
  return (
    <VariableFlexLayout height={'282px'} dir={'column'} padding={'0 24px 0 0'}>
      <InfoChartBlock
        problems={problems}
        totalLostRevenue={totalLostRevenue}
        currency={currency}
        color={color}
        index={index}
      />
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
