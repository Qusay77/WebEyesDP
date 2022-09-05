import React from 'react';
import { TextInputBlockContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import OptionalLabel from './OptionalLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';

const FlowModalCompanyInfoSection = () => {
  const dispatch = useDispatch();
  const { companyName } = useSelector(({ DPState }) => DPState.params);
  return (
    <TextInputBlockContainer width={'712px'}>
      <OptionalLabel text={'Company Name'} />
      <TextInput
        onChange={(e) =>
          dispatch(setParams({ params: { companyName: e.target.value } }))
        }
        value={companyName ?? ''}
        optional={!companyName?.length}
        fullWidth
        placeholder={'Company Name'}
      />
    </TextInputBlockContainer>
  );
};

export default FlowModalCompanyInfoSection;
