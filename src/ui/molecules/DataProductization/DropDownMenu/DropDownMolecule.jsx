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

const DropDownMolecule = ({ values, menuWidth, placeholder }) => {
  const { options } = values;
  const [choice, setChoice] = useState(placeholder ? null : options[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <DropMenuWrapper>
        <DropDownMenuContainer menuWidth={menuWidth} isOpen={isOpen}>
          <DropDownLabelContainer>
            <DropDownMenuLabelOrOptionAtom>
              {placeholder && !choice ? placeholder : choice.label}
            </DropDownMenuLabelOrOptionAtom>
            <DropDownArrow onClick={() => setIsOpen((prev) => !prev)} />
          </DropDownLabelContainer>
          <DropDownOptionsContainer>
            {isOpen &&
              options.map((option) => (
                <TextWrap key={option.value}>
                  <DropDownMenuLabelOrOptionAtom
                    onClick={() => setChoice(option)}
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
