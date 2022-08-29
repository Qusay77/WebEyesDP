import styled from 'styled-components';
import topSVG from '../../../assets/Background Illustration - Circle.svg';
import BottomSVG from '../../../assets/Background Illustration.svg';
import CheckBG from '../../../assets/Check Illustration.svg';

const FlowPageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-image: url(${topSVG}), url(${BottomSVG}),
    ${({ hasCheck }) => (hasCheck ? `url(${CheckBG})` : '')};
  background-position: left top, right bottom, 95% 125px;
  background-repeat: no-repeat, no-repeat, no-repeat;
  padding: 56px 56px ${({ fullBottom }) => (fullBottom ? '56px' : '32px')} 56px;
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

const FlowTextContainer = styled.div`
  padding-inline-end: 53px;
`;

const FirstStepModalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 112px;
  margin-top: 24px;
`;

const FlowModalOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  height: 94px;
  margin-top: 40px;
`;

const TextInputBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const CheckBoxRowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: ${({ marginTop }) => marginTop ?? '16px'};
`;

const InputsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const SecondStepModalPageContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 60px;
`;

const MultiInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const InfoOptionsContainer = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-top: ${({ marginTop }) => marginTop ?? 'unset'};
`;

const MainFlowSecondStepModalPageContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 60px;
`;

const MainFlowThanksPageContainer = styled.div`
  padding-top: 66px;
  padding-bottom: 122px;
`;

export {
  FlowPageContainer,
  FlowHeaderContainer,
  FlowFooterContainer,
  FlowTextContainer,
  FirstStepModalPageContainer,
  FlowModalOptionsContainer,
  TextInputBlockContainer,
  CheckBoxRowContainer,
  InputsContainers,
  SecondStepModalPageContainer,
  MultiInputsContainer,
  InfoOptionsContainer,
  MainFlowSecondStepModalPageContainer,
  MainFlowThanksPageContainer,
};
