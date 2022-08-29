import React, { useEffect, useState } from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';

const FlowModalPasswordSection = () => {
  const dispatch = useDispatch();

  const [passwords, setPasswords] = useState(['', '']);

  useEffect(() => {
    if (passwords[1].length && passwords[0] === passwords[1]) {
      dispatch(setParams({ params: { password: passwords[1] } }));
    }
  }, [passwords]);
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Password</MainText>
      <MultiInputsContainer>
        {passwords.map((password, i) => (
          <TextInput
            onChange={(e) =>
              setPasswords((prev) => {
                const newArr = [...prev];
                newArr[i] = e.target.value;
                return newArr;
              })
            }
            value={password}
            type="password"
            key={`password-${i}`}
          />
        ))}
      </MultiInputsContainer>
    </TextInputBlockContainer>
  );
};

export default FlowModalPasswordSection;
