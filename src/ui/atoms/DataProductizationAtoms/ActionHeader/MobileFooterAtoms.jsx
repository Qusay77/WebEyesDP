import styled from 'styled-components';
import { ButtonAtom } from '../../GlobalAtoms/Buttons/GreenButtonAtoms';

const MobileFooterContent = styled.div`
  width: ${({ theme }) => theme.breakpoints.mobileM};
  padding: 24px;
  ${ButtonAtom} {
    margin-top: 16px;
    width: 342px;
  }
`;

const MobileFooterContainer = styled.div`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'relative')};
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 175px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderBlue};
  margin-top: 16px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

export { MobileFooterContent, MobileFooterContainer };
