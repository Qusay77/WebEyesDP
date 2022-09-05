import React, { useEffect, useState } from 'react';
import {
  MultiInputsContainer,
  TextInputBlockContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { TextInput } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import OptionalLabel from './OptionalLabel';
import { useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
import theme from '../../theme';
import MediaQuery from 'react-responsive';

const Fillers = ['First Name', 'Last Name'];
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
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
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
              placeholder={Fillers[i]}
              value={name}
              key={`name-${i}`}
            />
          ))}
        </MultiInputsContainer>
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <OptionalLabel text={'First Name'} />
        <TextInput
          onChange={(e) =>
            setNames((prev) => {
              const newArr = [...prev];
              newArr[0] = e.target.value;
              return newArr;
            })
          }
          placeholder={Fillers[0]}
          value={names[0]}
          key={`name-${0}`}
        />
        <OptionalLabel marginTop={'16px'} text={'Last Name'} />
        <TextInput
          onChange={(e) =>
            setNames((prev) => {
              const newArr = [...prev];
              newArr[1] = e.target.value;
              return newArr;
            })
          }
          placeholder={Fillers[1]}
          value={names[1]}
          key={`name-${1}`}
        />
      </MediaQuery>
    </TextInputBlockContainer>
  );
};

export default FlowModalFullNameSection;
