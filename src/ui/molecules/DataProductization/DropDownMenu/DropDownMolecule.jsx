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
          <DropDownLabelContainer>
            <DropDownMenuLabelOrOptionAtom>
              {placeholder && !choice ? placeholder : choice.label}
            </DropDownMenuLabelOrOptionAtom>
            <DropDownArrow
              onClick={() => !disabled && setIsOpen((prev) => !prev)}
            />
          </DropDownLabelContainer>
          <DropDownOptionsContainer>
            {isOpen &&
              options.map((option) => (
                <TextWrap key={option.value}>
                  <DropDownMenuLabelOrOptionAtom
                    onClick={() => dispatch(setChoice({ option, key }))}
                    isBold={choice?.value === option.value}
                    clickable
                  >
                    {option.label}
                  </DropDownMenuLabelOrOptionAtom>
                </TextWrap>
              ))}
          </DropDownOptionsContainer>
        </DropDownMenuContainer>
      </DropMenuWrapper>
    </OutsideClickHandler>
  );
};

export default DropDownMolecule;
