import React from 'react';
import styled from 'styled-components';
import { InfoNumber } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import InfoTextRow from '../../../molecules/DataProductization/ProblemInfo/InfoTextRow';

const ToolTipContainer = styled.div`
  width: 285px;
  height: 95px;
  border-radius: 5px;
  background-color: #fff;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const ToolTipContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 16px;
`;

const ValueText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  > p:nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.borderBlue};
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const CustomPieChartToolTip = ({ active, payload }) => {
  const pieData = payload[0]?.payload?.payload;
  const { color, lostRevenue, value, title } = pieData || {};
  if (active && pieData) {
    return (
      <ToolTipContainer>
        <ToolTipContentContainer>
          <InfoTextRow noTopMargin colorReady={color} problem={{ title }} />
          <ValueText>
            <InfoNumber header>%{value}</InfoNumber>
            <InfoNumber header>${lostRevenue}</InfoNumber>
          </ValueText>
        </ToolTipContentContainer>
      </ToolTipContainer>
    );
  }

  return null;
};

export default CustomPieChartToolTip;
