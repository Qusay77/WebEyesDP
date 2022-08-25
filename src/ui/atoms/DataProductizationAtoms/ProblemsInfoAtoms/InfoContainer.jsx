import styled from 'styled-components';

const InfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;
  height: 376px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
`;

export default InfoContainer;
