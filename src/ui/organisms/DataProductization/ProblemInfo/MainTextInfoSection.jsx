import React from 'react';
import { VariableFlexLayout } from '../../../atoms/GlobalAtoms/LayoutAtoms/LayoutAtoms';
import InfoChartBlock from '../../../molecules/DataProductization/ProblemInfo/InfoChartBlock';
import InfoTextRow from '../../../molecules/DataProductization/ProblemInfo/InfoTextRow';
import theme from '../../../theme';
import { useMediaQuery } from 'react-responsive';

const MainTextInfoSection = ({ section, color, index, text }) => {
  const { problems, totalLostRevenue } = section;
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });

  return (
    <VariableFlexLayout
      height={isMobile ? 'fit-content' : '284px'}
      dir={'column'}
      padding={isMobile ? '0' : '0 24px 0 0'}
    >
      <InfoChartBlock
        problems={problems}
        totalLostRevenue={totalLostRevenue}
        color={color}
        index={index}
        text={text}
      />
      {problems.map(({ title, percentage }, i) => (
        <InfoTextRow
          color={color}
          index={i}
          problem={{ title, percentage }}
          key={`${title}-${i}`}
        />
      ))}
    </VariableFlexLayout>
  );
};

export default MainTextInfoSection;
