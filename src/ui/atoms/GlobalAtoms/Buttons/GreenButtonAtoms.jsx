import styled from 'styled-components';

const ButtonAtom = styled.div`
  width: 100%;
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.ButtonGreen};
  border-radius: 70px;
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
  opacity: 0.5;
  pointer-events:none;
  `}
`;
const ButtonTextAtom = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.5px;
  color: #fff;
`;

const Anchor = styled.a`
  outline: none;
  text-decoration: none !important;
`;
export { ButtonAtom, ButtonTextAtom, Anchor };
