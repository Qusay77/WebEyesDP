import styled from 'styled-components';

const FullFlexColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding ?? 0};
`;

export { FullFlexColumn };