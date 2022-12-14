import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  white-space: nowrap;
  display: inline;
  color: ${({ theme }) => theme.colors.lightBlack};
  &::first-letter {
    text-transform: capitalize;
  }
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
  color: ${({ theme, copied }) =>
    copied ? theme.colors.ButtonGreen : theme.colors.lightBlack};
`;

const TotalNumberText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 52.61px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    line-height: 39px;
  }
`;

const TotalInfoText = styled.p`
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  font-size: 18px;
  line-height: 29.59px;
  color: ${({ theme }) => theme.colors.lightBlack};
  display: inline;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export {
  HeaderText,
  InfoText,
  InfoNumber,
  SmallInfoText,
  TotalNumberText,
  TotalInfoText,
};
