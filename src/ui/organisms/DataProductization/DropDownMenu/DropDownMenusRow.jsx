import React from 'react';
import {
  AverageOrderValueOptions,
  IndustryOptions,
  MonthlyVisitsOptions,
} from '../../../../utils/DPDropDownOptions';
import { DropDownMenusContainer } from '../../../atoms/DataProductizationAtoms/DropDownMenuAtoms/DropDownMenusContainerAtom';
import DropDownBlock from '../../../molecules/DataProductization/DropDownMenu/DropDownBlock';
import MediaQuery from 'react-responsive';
import theme from '../../../theme';

const labelWidth = '334px';
const menuWidth = '330px';
const labelBottomMargin = '8px';

const DropDownMenu = () => {
  return (
    <DropDownMenusContainer>
      <DropDownBlock
        labelWidth={labelWidth}
        menuWidth={menuWidth}
        persist
        labelBottomMargin={labelBottomMargin}
        values={{
          options: IndustryOptions,
          label: 'My Industry',
          key: 'industryId',
        }}
      />
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <DropDownBlock
          labelWidth={labelWidth}
          menuWidth={menuWidth}
          labelBottomMargin={labelBottomMargin}
          values={{
            options: AverageOrderValueOptions,
            label: 'Average Order Value',
            key: 'aov',
          }}
        />
        <DropDownBlock
          labelWidth={labelWidth}
          menuWidth={menuWidth}
          labelBottomMargin={labelBottomMargin}
          values={{
            options: MonthlyVisitsOptions,
            label: 'Monthly Visitors',
            key: 'numberOfVisits',
          }}
        />
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <DropDownBlock
          labelWidth={labelWidth}
          menuWidth={menuWidth}
          labelBottomMargin={labelBottomMargin}
          values={{
            options: AverageOrderValueOptions,
            label: 'Average Order Value',
            key: 'aov',
          }}
        />
        <DropDownBlock
          labelWidth={labelWidth}
          menuWidth={menuWidth}
          labelBottomMargin={labelBottomMargin}
          values={{
            options: MonthlyVisitsOptions,
            label: 'Monthly Visitors',
            key: 'numberOfVisits',
          }}
        />
      </MediaQuery>
    </DropDownMenusContainer>
  );
};

export default DropDownMenu;
