import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: ${({ start, center, end }) =>
    (start && 'flex-start') || (center && 'center') || (end && 'flex-end')};
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const WrapContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 100%;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  position: relative;
  > div:not(:nth-child(1)) {
    margin-top: 24px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    max-width: ${({ theme }) => theme.breakpoints.mobileM};
    padding: 0 8px;
    > div:not(:nth-child(1)) {
      margin-top: 48px;
    }
  }
`;

export { HeaderContainer, WrapContainer, MainContainer };
