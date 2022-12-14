import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
import theme from '../../theme';
import { useMediaQuery } from 'react-responsive';

const TextInputBlock = ({ disabled }) => {
  const { email } = useSelector(({ DPState }) => DPState.params);
  const { emailValid } = useSelector(({ DPState }) => DPState.validations);
  const isMobile = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.magicMachine})`,
  });
  const dispatch = useDispatch();
  return (
    <TextInputBlockContainer>
      <MainText isLabel>Email Address</MainText>
      <TextInput
        disabled={disabled}
        fullWidth={isMobile}
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
        placeholder={'Email Address'}
      />
    </TextInputBlockContainer>
  );
};

export default TextInputBlock;
