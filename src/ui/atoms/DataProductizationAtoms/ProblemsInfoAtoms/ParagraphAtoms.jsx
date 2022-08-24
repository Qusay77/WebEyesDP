import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  display: inline;
  color: ${({ theme }) => theme.colors.black};
  &::first-letter {
    text-transform: capitalize;
  }
`;

const InfoText = styled.p`
  font-weight: ${({ header }) => (header ? '600' : '500')};
  font-size: 16px;
  line-height: 19.5px;
  margin-inline-start: 8px;
  color: ${({ theme }) => theme.colors.black};
`;

const InfoNumber = styled.p`
  font-weight: ${({ header }) => (header ? '600' : '400')};
  font-size: 16px;
  line-height: 19.5px;
  color: ${({ theme }) => theme.colors.black};
`;

const SmallInfoText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19.5px;
  color: ${({ theme }) => theme.colors.black};
`;

const TotalNumberText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 52.61px;
  color: ${({ theme }) => theme.colors.black};
`;

const TotalInfoText = styled.p`
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  font-size: 18px;
  line-height: 29.59px;
`;

export {
  HeaderText,
  InfoText,
  InfoNumber,
  SmallInfoText,
  TotalNumberText,
  TotalInfoText,
};
