import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { TextBlock } from '../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import { MarketingStatementContainer } from '../../atoms/MarketingStatement/MarketingStatementAtoms';
import { TextAtom } from '../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const dynamicText = [
  {
    text: 'Webeyez’s Lost Revenue Simulator provides benchmarks from e-commerce brands similar to yours to highlight the most common conversion and revenue killers in the online funnel.',
    newLine: true,
  },
  {
    text: 'We reveal the root causes of business and technical issues that cause friction to the online funnel, conversion loss and site abandonment',
  },
];

const MarketingStatement = () => {
  return (
    <MarketingStatementContainer>
      <MainText isBold isLabel>
        How much revenue is your website losing – and why?
      </MainText>

      <TextBlock>
        {dynamicText.map(({ text, bold, newLine }, i) => (
          <TextAtom key={`text-ms-${i}`} isBold={bold}>
            {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
          </TextAtom>
        ))}
      </TextBlock>
    </MarketingStatementContainer>
  );
};

export default MarketingStatement;
