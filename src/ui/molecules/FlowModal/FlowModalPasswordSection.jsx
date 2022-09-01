import React, { useEffect, useState } from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
import { validatePassword } from '../../../utils/validation';

const FlowModalPasswordSection = () => {
  const dispatch = useDispatch();

  const [passwords, setPasswords] = useState(['', '']);

  useEffect(() => {
    if (validatePassword(passwords)) {
      dispatch(
        setParams({
          validate: 'passwordValid',
          params: { password: passwords[1] },
        }),
      );
    }
  }, [passwords]);
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Password</MainText>
      <MultiInputsContainer>
        {passwords.map((password, i) => (
          <TextInput
            onChange={(e) => {
              setPasswords((prev) => {
                const newArr = [...prev];
                newArr[i] = e.target.value;
                return newArr;
              });
            }}
            error={
              i
                ? password.length && !validatePassword(passwords)
                : password.length &&
                  (password.length < 8 || /\s/.test(password))
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
