import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { TextBlock } from '../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import { MarketingStatementContainer } from '../../atoms/MarketingStatement/MarketingStatementAtoms';
import { TextAtom } from '../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const dynamicText = [
  {
    text: 'Webeyez is the secret weapon that online businesses use to immediately fix leaky funnels and grow revenue. The platform illuminates every step of the onsite consumer journey and uses machine learning to surface and prioritize points of hidden friction – giving revenue leaders a heat-seeking missile to instantly identify issues causing conversion drops and revenue loss.',
  },
];
const MarketingStatement = () => {
  return (
    <MarketingStatementContainer>
      <MainText isBold isLabel>
        About Webeyez
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
