import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';

const TextInputBlock = ({ disabled }) => {
  const { email } = useSelector(({ DPState }) => DPState.params);
  const { emailValid } = useSelector(({ DPState }) => DPState.validations);
  const dispatch = useDispatch();
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Email Address</MainText>
      <TextInput
        disabled={disabled}
        error={emailValid.value === false}
        onChange={(e) => {
          dispatch(
            setParams({
              params: { email: e.target.value },
              validate: 'emailValid',
            }),
          );
        }}
        value={email ?? ''}
        placeholder={'ceo@mydomain.com'}
      />
    </TextInputBlockContainer>
  );
};

export default TextInputBlock;
