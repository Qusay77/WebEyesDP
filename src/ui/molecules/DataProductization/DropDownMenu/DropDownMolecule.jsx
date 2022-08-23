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

const DropDownMolecule = ({ values }) => {
  const { options } = values;
  const prefix = null;
  const [choice, setChoice] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <DropMenuWrapper>
        <DropDownMenuContainer isOpen={isOpen}>
          <DropDownLabelContainer>
            <DropDownMenuLabelOrOptionAtom>
              {prefix} {choice}
            </DropDownMenuLabelOrOptionAtom>
            <DropDownArrow onClick={() => setIsOpen((prev) => !prev)} />
          </DropDownLabelContainer>
          <DropDownOptionsContainer>
            {isOpen &&
              options.map(({ label, value }) => (
                <TextWrap key={value}>
                  <DropDownMenuLabelOrOptionAtom
                    onClick={() => setChoice(value)}
                    isBold={choice === value}
                    clickable
                  >
                    {prefix} {label}
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
