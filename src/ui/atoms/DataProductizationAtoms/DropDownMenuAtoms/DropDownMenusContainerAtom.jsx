import styled from 'styled-components';

const DropDownMenusContainer = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    height: fit-content;
    flex-direction: column;
    gap: 28px;
    > div:nth-child(2) {
      margin-top: 52px;
    }
  }
`;

const TextChip = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  height: 33px;
  background: ${({ theme }) => theme.colors.chipBlue};
  border-radius: 48px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.sliderBlue};
  margin-bottom: 8px;
`;

export { DropDownMenusContainer, TextChip };
