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

const InfoChartBlock = ({ problems, color, totalLostRevenue, index, text }) => {
  const capital = text.charAt(0).toUpperCase() + text.substring(1);
  return (
    <ChartBlock>
      <PercentagePieChart problems={problems} color={color} index={index} />
      <ChartTextBlock>
        <TotalNumberText>{`${totalLostRevenue}`}</TotalNumberText>
        <TextBlock>
          <TotalInfoText isBold>Lost </TotalInfoText>
          <TotalInfoText>
            {text === 'business' ? `due to ${capital} ` : `over ${capital} `}
            Issues
          </TotalInfoText>
        </TextBlock>
      </ChartTextBlock>
    </ChartBlock>
  );
};

export default InfoChartBlock;
