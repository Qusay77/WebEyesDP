import styled from 'styled-components';

const ParagraphHeaderAtom = styled.p`
  font-weight: 800;
  font-size: 48px;
  line-height: 58.51px;
  color: ${({ theme }) => theme.colors.lightBlack};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    font-size: 36px;
    line-height: 43.88px;
    height: fit-content;
  }
`;

export { ParagraphHeaderAtom };
