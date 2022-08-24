import styled from 'styled-components';

const InfoTextRowContainer = styled.div`
  width: 400px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const SubInfoRow = styled.div`
  width: 285px;
  height: 19px;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ header }) => (header ? '0' : '16px;')};
`;

const CircledText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export { InfoTextRowContainer, CircledText, SubInfoRow };
