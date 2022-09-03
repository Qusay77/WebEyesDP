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
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    > div:last-child {
      margin-top: unset;
    }
    > div:nth-child(1) {
      margin-top: unset;
    }
    > div:nth-child(2) {
      margin-top: 48px;
    }
    padding: 0 8px;
  }
`;

export { HeaderContainer, WrapContainer, MainContainer };
