import styled from 'styled-components';
import { Arrow } from '../DropDownMenuAtoms/MenuAtoms';

const ScrollerContainer = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 63px;
  background: ${({ theme }) => theme.colors.sliderBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${Arrow} {
    border: solid white;
    border-width: 0 3px 3px 0;
    padding: 5px;
    position: relative;
    top: 2px;
  }
`;

const ScrollerWrap = styled.div`
  width: 40px;
  height: 8px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ isIntersecting }) => (isIntersecting ? 'fixed' : 'sticky')};
  ${({ isIntersecting }) => (isIntersecting ? 'right: 50%' : '')};
  bottom: ${({ isSticky }) => (isSticky ? '125px' : '50px')};
  float: right;
  z-index: 999;
`;

export { ScrollerContainer, ScrollerWrap };
