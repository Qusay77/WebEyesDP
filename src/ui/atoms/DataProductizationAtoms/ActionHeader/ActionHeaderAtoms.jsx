import styled from 'styled-components';

const BlockAtom = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  justify-content: ${({ center, between }) =>
    (between && 'space-between') || (center && 'center')};
  align-items: ${({ center, end, start }) =>
    (end && 'flex-end') || (center && 'center') || (start && 'flex-start')};
`;

const TextAtomsContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: start;
`;

export { BlockAtom, TextAtomsContainer };
