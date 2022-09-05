import styled from 'styled-components';
import topSVG from '../../../assets/Background Illustration - Circle.svg';
import BottomSVG from '../../../assets/Background Illustration.svg';
import CheckBG from '../../../assets/Check Illustration.svg';
import { ButtonAtom } from '../../GlobalAtoms/Buttons/GreenButtonAtoms';
import { MainText } from './ParagraphAtoms';

const FlowPageContainer = styled.div`
  width: ${({ theme }) => theme.breakpoints.mobileM};
  padding: 16px;
  height: fit-content;
  max-height: 100vh;
  overflow-y: auto;
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    background-image: url(${topSVG}),
      url(${BottomSVG})
        ${({ hasCheck }) => (hasCheck ? `,url(${CheckBG})` : '')};
    background-position: left top, right bottom, 95% 125px;
    background-repeat: no-repeat, no-repeat, no-repeat;
    padding: 56px 56px ${({ fullBottom }) => (fullBottom ? '56px' : '32px')}
      56px;
    width: 944px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
  }

  ${({ soloCheck, isCustomPositioned }) =>
    soloCheck &&
    `
  background-image: url(${CheckBG});
    background-position: ${isCustomPositioned ? 'center 64px' : 'center 100px'};
    background-repeat: no-repeat;
  `}
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
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    ${ButtonAtom} {
      width: 342px;
      height: 52px;
    }
    ${MainText} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const FlowTextContainer = styled.div`
  padding-inline-end: 53px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    padding-inline-end: unset;
    ${MainText} {
      font-size: 16px;
      line-height: 24px;
    }
  }
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

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    flex-direction: column;
  }
`;

const TextInputBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    margin-top: ${({ extraMargin }) => extraMargin ?? '60px'};
    ${MainText} {
      font-size: 16px;
    }
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    width: ${({ width }) => width ?? 'unset'};
  }
`;

const CheckBoxRowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-top: ${({ marginTop }) => marginTop ?? '16px'};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    margin-top: 130px;
    ${MainText} {
      font-size: 16px;
    }
  }
`;

const MobileCheckBoxTextContainer = styled.div`
  display: inline;
`;

const InputsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;
const FlowOneSecondStepModalPageContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 137px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    padding-top: 32px;
    padding-bottom: 80px;
  }
`;
const FlowTwoSecondStepModalPageContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 60px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    padding-top: 32px;
    padding-bottom: 80px;
  }
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
  ${({ isMobile }) =>
    isMobile
      ? `
    ${TextInputBlockContainer}{
      margin-top:unset;
    }
    ${CheckBoxRowContainer}{
      margin-top:24px;
    }
  `
      : ''}
`;

const MainFlowSecondStepModalPageContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 60px;
`;

const MainFlowThanksPageContainer = styled.div`
  padding-top: 66px;
  padding-bottom: 122px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.magicMachine}) {
    padding-top: 32px;
    padding-bottom: 80px;
  }
`;

export {
  FlowOneSecondStepModalPageContainer,
  MobileCheckBoxTextContainer,
  FlowPageContainer,
  FlowHeaderContainer,
  FlowFooterContainer,
  FlowTextContainer,
  FirstStepModalPageContainer,
  FlowModalOptionsContainer,
  TextInputBlockContainer,
  CheckBoxRowContainer,
  InputsContainers,
  FlowTwoSecondStepModalPageContainer,
  MultiInputsContainer,
  InfoOptionsContainer,
  MainFlowSecondStepModalPageContainer,
  MainFlowThanksPageContainer,
};
