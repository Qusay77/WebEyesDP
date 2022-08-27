import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.black};
`;

const InfoText = styled.p`
  font-weight: ${({ header }) => (header ? '600' : '500')};
  font-size: 16px;
  line-height: 19.5px;
  margin-inline-start: 8px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const InfoNumber = styled.p`
  font-weight: ${({ header }) => (header ? '600' : '400')};
  font-size: 16px;
  line-height: 19.5px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const SmallInfoText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19.5px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const TotalNumberText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 52.61px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const TotalInfoText = styled.p`
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  font-size: 18px;
  line-height: 29.59px;
  color: ${({ theme }) => theme.colors.lightBlack};
  display: inline;
`;

const MainText = styled.p`
  font-weight: ${({ isLabel, isBold }) =>
    (isBold && '700') || (isLabel ? '500' : '400')};
  ${({ isLabel }) => (isLabel ? 'margin-bottom: 16px' : '')};
  font-size: 18px;
  line-height: 29.59px;
  color: ${({ theme }) => theme.colors.lightBlack};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
  overflow: hidden;
  user-select: none;
  display: inline;
`;

const CloseSymbol = styled.p`
  color: ${({ theme }) => theme.colors.closeButtonGrey};
  font-size: 18px;
  cursor: pointer;
  margin-inline-start: 124px;
`;

export { MainText, HeaderText, CloseSymbol };
