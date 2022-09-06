import React from 'react';
import { InfoHeaderAtom } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/InfoHeaderAtom';
import { HeaderText } from '../../../atoms/DataProductizationAtoms/ProblemsInfoAtoms/ParagraphAtoms';
import DropDownArrow from '../DropDownMenu/DropDownArrow';
import MediaQuery from 'react-responsive';
import theme from '../../../theme';

const InfoHeader = ({ text, action, isOpen }) => {
  return (
    <InfoHeaderAtom>
      <HeaderText>{text} Issues</HeaderText>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <DropDownArrow isOpen={isOpen} onClick={action} />
      </MediaQuery>
    </InfoHeaderAtom>
  );
};

export default InfoHeader;
