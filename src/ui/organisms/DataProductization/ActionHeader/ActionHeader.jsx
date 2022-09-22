import React from 'react';
import { ActionHeaderContainer } from '../../../atoms/DataProductizationAtoms/ActionHeader/ActionHeaderContainer';
import ActionHeaderShareBlock from '../../../molecules/DataProductization/ActionHeader/ActionHeaderShareBlock';
import theme from '../../../theme';
import ActionHeaderTextSection from './ActionHeaderTextSection';
import MediaQuery from 'react-responsive';

const ActionHeader = () => {
  return (
    <ActionHeaderContainer>
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <ActionHeaderShareBlock />
      </MediaQuery>
      <ActionHeaderTextSection />
    </ActionHeaderContainer>
  );
};

export default ActionHeader;
