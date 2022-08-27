import styled from 'styled-components';

const ButtonAtom = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.ButtonGreen};
  border-radius: 70px;
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ButtonTextAtom = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19.5px;
  color: #fff;
`;
export { ButtonAtom, ButtonTextAtom };
