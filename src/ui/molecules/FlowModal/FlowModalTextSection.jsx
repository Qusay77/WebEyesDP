import React from 'react';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';

import styled from 'styled-components';

const FlowTextContainer = styled.div`
  padding-inline-end: 53px;
`;

const dynamicText = [
  { text: 'Webeyez can show you your lost revenue and much more with your' },
  { text: 'real-time data', bold: true },
  { text: 'in a few small steps.', newLine: true },
  { text: 'You can also get a' },
  { text: 'Monthly Report', bold: true },
  { text: 'based on real industry data!' },
];

const TextInput = styled.input`
  color: ${({ theme }) => theme.colors.lightBlack};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.borderBlue};
  }
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
  display: inline-block;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  display: flex;
  justify-content: center;
  &:after {
    content: '';
    display: inline-block;
    position: relative;
    width: 9px;
    height: 18px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg);
  }

  &:checked {
    background: ${({ theme }) => theme.colors.borderBlue};
    outline: none;
  }
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.borderBlue};
  }
`;

const FlowModalTextSection = ({ action, text }) => {
  return (
    <FlowTextContainer>
      {dynamicText.map(({ text, bold, newLine }, i) => (
        <MainText key={`text-${i}`} isBold={bold}>
          {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
        </MainText>
      ))}
      <TextInput />
      <Checkbox type="checkbox" />
    </FlowTextContainer>
  );
};

export default FlowModalTextSection;
