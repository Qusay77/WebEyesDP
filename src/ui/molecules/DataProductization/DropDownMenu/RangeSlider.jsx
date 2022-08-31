import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChoice } from '../../../../redux/DPSlice';
import {
  RangeInput,
  RangeInputContainer,
} from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/sliderAtoms';

const RangeSlider = ({ values }) => {
  const { options, key } = values;
  const DPState = useSelector(({ DPState }) => DPState);
  const [range, setRange] = useState(
    `${options.findIndex((op) => op.value === DPState[key]?.value)}`,
  );
  const val = DPState[key]?.value;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setChoice({ option: options[range], key }));
  }, [range, val]);
  return (
    <RangeInputContainer>
      <RangeInput
        value={range}
        gradientValue={(range * 100) / (options.length - 1)}
        onChange={(e) => setRange(e.target.value)}
        type="range"
        min="0"
        max={options.length - 1}
        step="1"
      />
    </RangeInputContainer>
  );
};

export default RangeSlider;
