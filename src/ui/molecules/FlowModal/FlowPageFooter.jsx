import React from 'react';
import { FlowFooterContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import FlowModalFooterButton from './FlowModalFooterButton';
import { useSelector, useDispatch } from 'react-redux';
import { setValidations } from '../../../redux/DPSlice';
const FlowPageFooter = ({
  footerText,
  action,
  tools,
  hasReportButton,
  disabled,
  passwordCheck,
}) => {
  const { flow, moveAction } = tools;
  const { emailValid } = useSelector(({ DPState }) => DPState.validations);
  const dispatch = useDispatch();
  const validateFirstStep = (free) => {
    dispatch(setValidations({ types: ['emailValid'] }));
    if (emailValid.value) {
      free ? action('freeTrail') : action('monthlyReport');
    }
  };
  return (
    <FlowFooterContainer>
      <FlowModalFooterButton
        disabled={disabled || !(emailValid.value ?? true) || passwordCheck}
        action={() => (flow ? moveAction() : validateFirstStep('free'))}
        text={footerText}
      />
      {!flow || hasReportButton ? (
        <MainText
          disabled={disabled || !(emailValid.value ?? true)}
          onClick={() => validateFirstStep()}
          clickable
        >
          I only want to get a monthly report
        </MainText>
      ) : (
        ''
      )}
    </FlowFooterContainer>
  );
};
export default FlowPageFooter;
