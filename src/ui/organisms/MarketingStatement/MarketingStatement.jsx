import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { TextBlock } from '../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoAtoms';
import { MarketingStatementContainer } from '../../atoms/MarketingStatement/MarketingStatementAtoms';
import theme from '../../theme';
import MediaQuery from 'react-responsive';
import { TextAtom } from '../../atoms/DataProductizationAtoms/ActionHeader/ParagraphAtoms';

const dynamicText = [
  {
    text: 'Webeyez’s Lost Revenue Simulator provides benchmarks from e-commerce brands similar to yours to highlight the most common conversion and revenue killers in the online funnel.',
    newLine: true,
  },
  {
    text: 'We reveal the root causes of business and technical issues that cause friction to the online funnel, conversion loss and site abandonment',
  },
  { text: 'Business Issues', bold: true },
  { text: '(non-technical issues causing user friction) and' },
  { text: 'technical problems', bold: true },
  { text: '(issues with the underlying code or page performance).' },
];
const dynamicTextMobile = [
  { text: 'Webeyez’s Lost Revenue Simulator', newLine: true },
  { text: 'provides benchmarks from', newLine: true },
  { text: 'e-commerce brands similar to yours', newLine: true },
  { text: 'to highlight the most common', newLine: true },
  { text: 'conversion and revenue killers in the', newLine: true },
  { text: 'online funnel.', newLine: true },
  { text: 'We divide root causes into.' },
  { text: 'business', bold: true, newLine: true },
  { text: 'problems', bold: true },
  { text: '(non-technical issues', newLine: true },
  { text: 'causing user friction) and' },
  { text: 'technical', bold: true, newLine: true },
  { text: 'problems', bold: true },
  { text: '(issues with the underlying', newLine: true },
  { text: 'code or page performance).' },
];

const MarketingStatement = () => {
  return (
    <MarketingStatementContainer>
      <MainText isBold isLabel>
        How much revenue is your website losing – and why?
      </MainText>

      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <TextBlock>
          {dynamicText.map(({ text, bold, newLine }, i) => (
            <TextAtom key={`text-ms-${i}`} isBold={bold}>
              {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
            </TextAtom>
          ))}
        </TextBlock>
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <TextBlock>
          {dynamicTextMobile.map(({ text, bold, newLine }, i) => (
            <TextAtom key={`text-ms-${i}`} isBold={bold}>
              {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
            </TextAtom>
          ))}
        </TextBlock>
      </MediaQuery>
    </MarketingStatementContainer>
  );
};

export default MarketingStatement;
