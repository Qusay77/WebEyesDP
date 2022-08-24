import styled from 'styled-components';

const ColoredLittleCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export default ColoredLittleCircle;
