import styled from 'styled-components';

const ActionHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  gap: 32px;
  width: 100%;
  height: 125px;
  background: rgba(198, 226, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
`;

export default ActionHeaderContainer;
