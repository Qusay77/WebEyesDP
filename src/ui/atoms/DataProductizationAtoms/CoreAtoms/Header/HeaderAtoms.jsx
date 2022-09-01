import styled from 'styled-components';

const ParagraphHeaderAtom = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    font-size: 36px;
    line-height: 43.88px;
    height: fit-content;
  }
`;

const MobileInfoHeaderAtom = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 80px;
`;

export { ParagraphHeaderAtom, MobileInfoHeaderAtom };
