import styled from 'styled-components';

const FullFlexColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding ?? 0};
`;

const VariableFlexLayout = styled.div`
  width: fit-content;
  height: ${({ height }) => height ?? 'fit-content'};
  display: flex;
  flex-direction: ${({ dir }) => dir};
  flex-wrap: ${({ wrap }) => wrap ?? 'unset'};
  padding: ${({ padding }) => padding ?? 0};
`;

export { FullFlexColumn, VariableFlexLayout };
