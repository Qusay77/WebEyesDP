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

const DropDownMenu = () => {
  return (
    <DropDownMenusContainer>
      <DropDownBlock
        labelWidth={'258px'}
        menuWidth={'254px'}
        persist
        labelBottomMargin={'8px'}
        values={{
          options: IndustryOptions,
          label: 'My Industry',
          key: 'industryId',
        }}
      />
      <MediaQuery minWidth={theme.breakpoints.magicMachine}>
        <DropDownBlock
          labelWidth={'258px'}
          menuWidth={'254px'}
          labelBottomMargin={'8px'}
          values={{
            options: AverageOrderValueOptions,
            label: 'Average Order Value',
            key: 'aov',
          }}
        />
        <DropDownBlock
          labelWidth={'258px'}
          menuWidth={'254px'}
          labelBottomMargin={'8px'}
          values={{
            options: MonthlyVisitsOptions,
            label: 'Monthly Visits',
            key: 'numberOfVisits',
          }}
        />
      </MediaQuery>
      <MediaQuery maxWidth={theme.breakpoints.magicMachine}>
        <DropDownBlock
          labelWidth={'258px'}
          menuWidth={'254px'}
          labelBottomMargin={'8px'}
          values={{
            options: AverageOrderValueOptions,
            label: 'Average Order Value',
            key: 'aov',
          }}
        />
        <DropDownBlock
          labelWidth={'258px'}
          menuWidth={'254px'}
          labelBottomMargin={'8px'}
          values={{
            options: MonthlyVisitsOptions,
            label: 'Monthly Visits',
            key: 'numberOfVisits',
          }}
        />
      </MediaQuery>
    </DropDownMenusContainer>
  );
};

export default DropDownMenu;
