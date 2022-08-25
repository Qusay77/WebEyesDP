import styled from 'styled-components';

const InfoTextRowContainer = styled.div`
  width: 400px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const SubInfoRow = styled.div`
  width: 285px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ header }) => (header ? '0' : '16px;')};
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
`;

const ChartTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: center;
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
