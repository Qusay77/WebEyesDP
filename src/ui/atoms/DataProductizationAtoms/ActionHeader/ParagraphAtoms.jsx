import styled from 'styled-components';

const TextAtom = styled.p`
  font-weight: ${({ isBold }) => (isBold ? '700' : '400')};
  font-size: 16px;
  line-height: 24px;
  display: inline;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const TotalTextAtom = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 48.76px;
  color: ${({ theme }) => theme.colors.black};
`;

const ButtonTextAtom = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.5px;
  color: #fff;
`;

export { TextAtom, TotalTextAtom, ButtonTextAtom };
