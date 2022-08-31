import styled from 'styled-components';

const InfoContainerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  > div:nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.borderBlue};
  }
  width: 100%;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    flex-direction: column;
    > div:nth-child(1) {
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-right: unset;
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderBlue};
        height: 0px;
        width: calc(100% + 48px);
        position: relative;
        left: -24px;
        top: 24px;
      }
    }
  }
`;

const BlockContainer = styled.div`
  width: 285px;
`;

export { InfoContainerLayout, BlockContainer };
