import styled from 'styled-components';

const InfoTextRowContainer = styled.div`
  width: 400px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ noTopMargin }) => (noTopMargin ? 'unset' : '16px')};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    width: 100%;
  }
`;

const SubInfoRow = styled.div`
  width: 285px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ header }) => (header ? '0' : '16px;')};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    width: 100%;
  }
`;

const CircledText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ChartBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  justify-content: flex-start;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    height: 100px;
  }
`;

const ChartTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    gap: 14px;
  }
`;

const TextBlock = styled.div`
  display: inline;
`;

export {
  InfoTextRowContainer,
  CircledText,
  SubInfoRow,
  ChartBlock,
  ChartTextBlock,
  TextBlock,
};
