import styled from 'styled-components';

const ActionHeaderTextContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  gap: 32px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    height: unset;
  }
`;

const ActionHeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  width: 100%;
  height: 203px;
  background: rgba(198, 226, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borderBlue};
  border-radius: 5px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    border: none;
    background: #fff;
    border-radius: unset;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderBlue};
    height: unset;
    padding: 0;
    padding-bottom: 16px;
  }
`;

export { ActionHeaderTextContainer, ActionHeaderContainer };
