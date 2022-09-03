import React from 'react';
import FirstStepModalPage from './FirstStepModalPage';
import FlowPageFooter from '../../../molecules/FlowModal/FlowPageFooter';
import FlowModalHeader from '../../../molecules/FlowModal/FlowModalHeader';
import { FlowPageContainer } from '../../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import FlowOneSecondStepModalPage from './FlowOneSteps/FlowOneSecondStepModalPage';
import FlowTwoSecondStepModalPage from './FlowTwoSteps/FlowTwoSecondStepModalPage';
import MainFlowSecondStepModalPage from './MainFlowSteps/MainFlowSecondStepModalPage';
import MainFlowThirdStepModalPage from './MainFlowSteps/MainFlowThirdStepModalPage';
import MainFlowFourthStepModalPage from './MainFlowSteps/MainFlowFourthStepModalPage';
import { useSelector, useDispatch } from 'react-redux';
import { verificationCall } from '../../../../redux/apiCalls/verificationCall';
import { updateCall } from '../../../../redux/apiCalls/UpdateCall';
import { setFlowOrStep, setParams } from '../../../../redux/DPSlice';

const FlowPageController = ({ setIsOpen }) => {
  const { platform, params, flow, step } = useSelector(
    ({ DPState }) => DPState,
  );
  const dispatch = useDispatch();

  const homePageAction = () => {
    window.location.href = '/';
  };
  const registrationFlowAction = () => {
    dispatch(verificationCall()).then(() =>
      dispatch(setFlowOrStep({ step: +1 })),
    );
  };
  const otherPlatformAction = (flow) => {
    if (flow === 'monthlyReport') {
      dispatch(setParams({ params: { subscribeToMonthlyReport: true } }));
    }
    dispatch(updateCall()).then(() => dispatch(setFlowOrStep({ flow })));
  };
  const flowController = (flow) => {
    if (platform?.value !== 'Other' && flow !== 'monthlyReport') {
      dispatch(setFlowOrStep({ flow: 'registration' }));
    } else {
      otherPlatformAction(flow);
    }
  };

  const monthlyReportAction = () => {
    dispatch(updateCall()).then(() => homePageAction());
  };
  const flows = {
    freeTrail: {
      0: {
        component: <FlowOneSecondStepModalPage />,
        headerText: 'Take Control Over Your Lost Revenue!',
        buttonText: 'Take me to the Main Page',
        headerSpacing: '315px',
        hasCheck: true,
        finalAction: homePageAction,
      },
    },
    monthlyReport: {
      0: {
        component: <FlowTwoSecondStepModalPage />,
        headerText: 'Thank You For Your Subscription!',
        buttonText: 'Take me to the Main Page',
        headerSpacing: '315px',
        hasCheck: true,
        finalAction: monthlyReportAction,
      },
    },
    registration: {
      0: {
        component: <MainFlowSecondStepModalPage />,
        headerText: 'Let Webeyez Analyze Your Real Data',
        buttonText: 'Create an Account',
        hasReportButton: true,
      },
      1: {
        component: <MainFlowThirdStepModalPage />,
        headerText: 'Just One More Step!',
        buttonText: 'Sign Up',
        flowAction: registrationFlowAction,
      },
      2: {
        component: <MainFlowFourthStepModalPage />,
        headerText: 'Thank You For Your Registration!',
        headerSpacing: '315px',
        buttonText: 'Take me to the Main Page',
        hasCheck: true,
        finalAction: homePageAction,
      },
    },
  };

  const moveAction = () => {
    if (flows[flow]?.[step].flowAction) {
      flows[flow]?.[step].flowAction();
    } else if (flows[flow]?.[step].finalAction) {
      flows[flow]?.[step].finalAction();
    } else {
      dispatch(setFlowOrStep({ step: +1 }));
    }
  };
  const { passwordValid } = useSelector(({ DPState }) => DPState.validations);
  return (
    <FlowPageContainer
      hasCheck={flows[flow]?.[step]?.hasCheck}
      fullBottom={flow}
    >
      <FlowModalHeader
        headerSpacing={flows[flow]?.[step]?.headerSpacing}
        text={
          flow
            ? flows[flow]?.[step]?.headerText
            : 'Let Webeyez Analyze Your Real Data'
        }
        action={() => setIsOpen(false)}
      />
      {!flow ? <FirstStepModalPage /> : ''}
      {flows[flow]?.[step]?.component ?? ''}
      <FlowPageFooter
        passwordCheck={flow === 'registration' && !passwordValid.value}
        tools={{ flow, moveAction }}
        action={(flow) => flowController(flow)}
        disabled={!params.email || !platform}
        hasReportButton={flows[flow]?.[step]?.hasReportButton}
        footerText={
          flow ? flows[flow]?.[step]?.buttonText : 'I want a Free Trial'
        }
      />
    </FlowPageContainer>
  );
};
export default FlowPageController;
