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
  position: sticky;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 175px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderBlue};
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export { MobileFooterContent, MobileFooterContainer };
