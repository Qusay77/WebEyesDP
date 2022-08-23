import styled from 'styled-components';

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

const InfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  margin-inline-start: 8px;
  color: ${({ theme }) => theme.colors.black};
`;

const InfoNumber = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  color: ${({ theme }) => theme.colors.black};
`;

export { HeaderText, InfoText, InfoNumber };
