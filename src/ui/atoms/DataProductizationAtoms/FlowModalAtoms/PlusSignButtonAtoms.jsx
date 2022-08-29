import styled from 'styled-components';

const PlusSignButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  height: 22px;
  margin-top: 16px;
  user-select: none;
  width: fit-content;
`;
const PlusSignSymbol = styled.p`
  font-size: 28px;
`;

export { PlusSignSymbol, PlusSignButton };
