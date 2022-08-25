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

const InfoChartBlock = ({
  problems,
  color,
  totalLostRevenue,
  currency,
  index,
}) => {
  return (
    <ChartBlock>
      <PercentagePieChart problems={problems} color={color} index={index} />
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
