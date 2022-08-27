import styled from 'styled-components';
import topSVG from '../../../assets/Background Illustration - Circle.svg';
import BottomSVG from '../../../assets/Background Illustration.svg';

const FlowPageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-image: url(${topSVG}), url(${BottomSVG});
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
  padding: 56px 56px 32px 56px;
  width: 944px;
`;
const FlowHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FlowFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export { FlowPageContainer, FlowHeaderContainer, FlowFooterContainer };
