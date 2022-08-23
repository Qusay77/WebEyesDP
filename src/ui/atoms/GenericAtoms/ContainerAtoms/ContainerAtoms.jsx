import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: ${({ start, center, end }) =>
    (start && 'flex-start') || (center && 'center') || (end && 'flex-end')};
`;

const WrapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  > div:not(:nth-child(1)) {
    margin-top: 24px;
  }
`;

export { HeaderContainer, WrapContainer };
