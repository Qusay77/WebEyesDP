import React from 'react';
import {
  ChartBlock,
  ChartTextBlock,
  TextBlock,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import {
  TotalInfoText,
  TotalNumberText,
} from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import PercentagePieChart from '../../../organisms/DataProductization/ProblemInfo/PieChart';

const InfoChartBlock = ({ problems, color, totalLostRevenue, currency }) => {
  return (
    <ChartBlock>
      <PercentagePieChart problems={problems} color={color} />
      <ChartTextBlock>
        <TotalNumberText>{`${currency}${totalLostRevenue}`}</TotalNumberText>
        <TextBlock>
          <TotalInfoText isBold>Lost </TotalInfoText>
          <TotalInfoText>over Business Problems</TotalInfoText>
        </TextBlock>
      </ChartTextBlock>
    </ChartBlock>
  );
};

export default InfoChartBlock;
