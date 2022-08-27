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
`;

const BlockContainer = styled.div`
  width: 285px;
`;

export { InfoContainerLayout, BlockContainer };