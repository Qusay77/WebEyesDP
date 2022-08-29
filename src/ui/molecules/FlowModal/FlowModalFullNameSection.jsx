import React, { useEffect, useState } from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import OptionalLabel from './OptionalLabel';
import { useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
const FlowModalFullNameSection = () => {
  const dispatch = useDispatch();
  const [names, setNames] = useState(['', '']);

  useEffect(() => {
    if (names[0].length) {
      dispatch(setParams({ params: { fullName: `${names[0]} ${names[1]}` } }));
    }
  }, [names]);
  return (
    <TextInputBlockContainer>
      <OptionalLabel text={'Full Name'} />
      <MultiInputsContainer>
        {names.map((name, i) => (
          <TextInput
            onChange={(e) =>
              setNames((prev) => {
                const newArr = [...prev];
                newArr[i] = e.target.value;
                return newArr;
              })
            }
            value={name}
            key={`name-${i}`}
          />
        ))}
      </MultiInputsContainer>
    </TextInputBlockContainer>
  );
};

export default FlowModalFullNameSection;
