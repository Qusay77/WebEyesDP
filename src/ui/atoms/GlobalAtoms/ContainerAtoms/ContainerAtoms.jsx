import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: ${({ start, center, end }) =>
    (start && 'flex-start') || (center && 'center') || (end && 'flex-end')};
`;

const MainCOntainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

const WrapContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 100%;
  position: relative;
  > div:not(:nth-child(1)) {
    margin-top: 24px;
  }
`;

export { HeaderContainer, WrapContainer, MainCOntainer };
