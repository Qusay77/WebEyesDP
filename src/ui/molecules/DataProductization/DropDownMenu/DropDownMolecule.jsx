import React, { useState } from 'react';
import {
  DropDownLabelContainer,
  DropDownMenuContainer,
  DropDownOptionsContainer,
  DropMenuWrapper,
  TextWrap,
} from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/MenuAtoms';
import { DropDownMenuLabelOrOptionAtom } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/ParagraphAtoms';
import DropDownArrow from './DropDownArrow';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setChoice } from '../../../../redux/DPSlice';
import { ToolTipText } from '../../../atoms/GlobalAtoms/Tooltip/TooltipAtoms';
const DropDownMolecule = ({ values, menuWidth, placeholder, disabled }) => {
  const { options, key } = values;
  const choice = useSelector(({ DPState }) => DPState[key]);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <DropMenuWrapper>
        <DropDownMenuContainer
          disabled={disabled}
          menuWidth={menuWidth}
          isOpen={isOpen}
        >
          <DropDownLabelContainer
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
          >
            <DropDownMenuLabelOrOptionAtom
              placeholderColor={placeholder && !choice}
            >
              {placeholder && !choice ? placeholder : choice.label}
            </DropDownMenuLabelOrOptionAtom>
            <DropDownArrow />
          </DropDownLabelContainer>
          <DropDownOptionsContainer>
            {isOpen &&
              options.map((option) => (
                <TextWrap
                  onClick={() => {
                    dispatch(setChoice({ option, key }));
                    setIsOpen(false);
                  }}
                  clickable
                  key={option.value}
                >
                  <DropDownMenuLabelOrOptionAtom
                    isBold={choice?.value === option.value}
                    clickable
                  >
                    {option.label}
                  </DropDownMenuLabelOrOptionAtom>
                  {/* <ToolTipText>{option.label}</ToolTipText> */}
                </TextWrap>
              ))}
          </DropDownOptionsContainer>
        </DropDownMenuContainer>
      </DropMenuWrapper>
    </OutsideClickHandler>
  );
};

export default DropDownMolecule;
