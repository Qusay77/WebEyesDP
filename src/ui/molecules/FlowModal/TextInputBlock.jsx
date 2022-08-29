import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';

const TextInputBlock = () => {
  const { email } = useSelector(({ DPState }) => DPState.params);
  const dispatch = useDispatch();
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Email Address</MainText>
      <TextInput
        onChange={(e) =>
          dispatch(setParams({ params: { email: e.target.value } }))
        }
        value={email ?? ''}
        placeholder={'ceo@mydomain.com'}
      />
    </TextInputBlockContainer>
  );
};

export default TextInputBlock;
