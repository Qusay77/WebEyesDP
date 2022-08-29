import React from 'react';
import { CheckBoxRowContainer } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { Checkbox } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';

const CheckboxRow = ({ marginTop }) => {
  const { subscribeToMonthlyReport } = useSelector(
    ({ DPState }) => DPState.params,
  );
  const dispatch = useDispatch();
  return (
    <CheckBoxRowContainer marginTop={marginTop}>
      <Checkbox
        onChange={(e) => {
          dispatch(
            setParams({
              params: { subscribeToMonthlyReport: e.target.checked },
            }),
          );
        }}
        checked={subscribeToMonthlyReport}
        type="checkbox"
      />
      <MainText>I want to get a</MainText>
      <MainText isBold> Monthly Report </MainText>
      <MainText>based on real industry data</MainText>
    </CheckBoxRowContainer>
  );
};

export default CheckboxRow;
