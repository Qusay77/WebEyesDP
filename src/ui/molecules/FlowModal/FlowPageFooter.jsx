import React from 'react';
import { FlowFooterContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import FlowModalFooterButton from './FlowModalFooterButton';

const FlowPageFooter = ({ footerText, action, tools, hasReportButton }) => {
  const { flow, moveAction } = tools;
  return (
    <FlowFooterContainer>
      <FlowModalFooterButton
        action={() => (flow ? moveAction() : action('freeTrail'))}
        text={footerText}
      />
      {!flow || hasReportButton ? (
        <MainText onClick={() => action('monthlyReport')} clickable>
          I only want to get a monthly report
        </MainText>
      ) : (
        ''
      )}
    </FlowFooterContainer>
  );
};
export default FlowPageFooter;
