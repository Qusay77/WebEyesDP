import React from 'react';
import { FlowFooterContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import FlowModalFooterButton from './FlowModalFooterButton';

const FlowPageFooter = ({
  footerText,
  action,
  tools,
  hasReportButton,
  disabled,
}) => {
  const { flow, moveAction } = tools;
  return (
    <FlowFooterContainer>
      <FlowModalFooterButton
        disabled={disabled}
        action={() => (flow ? moveAction() : action('freeTrail'))}
        text={footerText}
      />
      {!flow || hasReportButton ? (
        <MainText
          disabled={disabled}
          onClick={() => action('monthlyReport')}
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
