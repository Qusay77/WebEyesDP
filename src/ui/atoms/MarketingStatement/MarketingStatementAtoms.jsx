import styled from 'styled-components';

const MarketingStatementContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
`;

export { MarketingStatementContainer };
