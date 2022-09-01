import React, { useEffect, useState } from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import PlusSignButton from './PlusSignButton';
import { useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
import { validateEmail } from '../../../utils/validation';

const MultiTextInput = () => {
  const [inputs, setInputs] = useState(['']);
  const setValues = (i, v) => {
    setInputs((prev) => {
      const newArr = [...prev];
      newArr[i] = v;
      return newArr;
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (inputs[0].length) {
      dispatch(
        setParams({
          params: {
            subscribed_emails: inputs.filter((e) => validateEmail(e)).join(','),
          },
        }),
      );
    }
  }, [inputs]);
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Email Addresses</MainText>
      <MultiInputsContainer>
        {inputs.map((input, i) => (
          <TextInput
            value={input}
            error={input.length && !validateEmail(input)}
            onChange={(e) => setValues(i, e.target.value)}
            placeholder={'ceo@mydomain.com'}
            key={`input-${i}`}
          />
        ))}
      </MultiInputsContainer>
      {inputs.length < 6 && (
        <PlusSignButton onClick={() => setInputs((prev) => [...prev, ''])} />
      )}
    </TextInputBlockContainer>
  );
};

export default MultiTextInput;
