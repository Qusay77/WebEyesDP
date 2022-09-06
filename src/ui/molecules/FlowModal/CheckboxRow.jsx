import React from 'react';
import {
  CheckBoxRowContainer,
  MobileCheckBoxTextContainer,
} from '../../atoms/DataProductizationAtoms/FlowModalAtoms/FlowPageContainers';
import { Checkbox } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/Inputs';
import { MainText } from '../../atoms/DataProductizationAtoms/FlowModalAtoms/ParagraphAtoms';
import { useSelector, useDispatch } from 'react-redux';
import { setParams } from '../../../redux/DPSlice';
import theme from '../../theme';
import MediaQuery from 'react-responsive';

const dynamicText = [
  { text: 'I want to get a' },
  { text: 'Monthly Report', bold: true },
  { text: 'based on real industry data' },
];
const dynamicTextMobile = [
  { text: 'I want to get a' },
  { text: 'Monthly Report', bold: true },
  { text: 'based', newLine: true },
  { text: 'on real industry data' },
];
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
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        {dynamicText.map(({ text, bold, newLine }, i) => (
          <MainText key={`text-${i}`} isBold={bold}>
            {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
          </MainText>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <MobileCheckBoxTextContainer>
          {dynamicTextMobile.map(({ text, bold, newLine }, i) => (
            <MainText key={`text-${i}`} isBold={bold}>
              {bold ? ` ${text} ` : text} {newLine ? <br /> : ''}
            </MainText>
          ))}
        </MobileCheckBoxTextContainer>
      </MediaQuery>
    </CheckBoxRowContainer>
  );
};

export default CheckboxRow;
