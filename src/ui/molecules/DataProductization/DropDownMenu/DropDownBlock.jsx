import React from 'react';
import { DropDownBlockContainer } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownBlockAtoms';
import { TextWrap } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import DropDownMolecule from './DropDownMolecule';
import RangeSlider from './RangeSlider';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';
import { TextChip } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownMenusContainerAtom';
import { useSelector } from 'react-redux';

const DropDownBlock = ({
  values,
  labelWidth,
  menuWidth,
  labelBottomMargin,
  placeholder,
  disabled,
  persist,
}) => {
  const { options, label, key } = values;
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  const DPState = useSelector(({ DPState }) => DPState);
  const val = DPState[key]?.label;

  return (
    <DropDownBlockContainer>
      <TextWrap width={isMobile ? '100%' : labelWidth}>
        <DropDownMenuLabelOrOptionAtom
          labelBottomMargin={labelBottomMargin}
          isLabel
        >
          {label}
        </DropDownMenuLabelOrOptionAtom>
        {persist ? (
          ''
        ) : (
          <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
            <TextChip>{val}</TextChip>
          </MediaQuery>
        )}
      </TextWrap>

      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <DropDownMolecule
          placeholder={placeholder}
          menuWidth={menuWidth}
          disabled={disabled}
          values={{ options, key }}
        />
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        {persist ? (
          <DropDownMolecule
            placeholder={placeholder}
            menuWidth={menuWidth}
            disabled={disabled}
            values={{ options, key }}
          />
        ) : (
          <RangeSlider values={{ options, key }} />
        )}
      </MediaQuery>
    </DropDownBlockContainer>
  );
};

export default DropDownBlock;
