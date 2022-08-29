import { createSlice } from '@reduxjs/toolkit';
import {
  AverageOrderValueOptions,
  IndustryOptions,
  MonthlyVisitsOptions,
} from '../utils/DPDropDownOptions';

const initialState = {
  industryId: IndustryOptions[0],
  aov: AverageOrderValueOptions[3],
  numberOfVisits: MonthlyVisitsOptions[6],
  platform: null,
  lostRevenueData: null,
  params: {
    email: null,
    password: null,
    fullName: null,
    companyName: null,
    subscribeToMonthlyReport: false,
    subscribed_emails: null,
  },
};

const setParamsFun = (state, { payload }) => {
  const { params } = payload;
  Object.entries(params).map(([k, v]) => {
    state.params[k] = v;
  });
};

const setChoiceFun = (state, { payload }) => {
  const { option, key } = payload;
  state[key] = option;
};

const resetParamsFun = (state) => {
  // eslint-disable-next-line no-unused-vars
  const { industryId, aov, numberOfVisits, lostRevenueData, ...rest } =
    initialState;
  const resetState = { ...state, ...rest };
  return resetState;
};

const DPSlice = createSlice({
  name: 'dataProductization',
  initialState,
  reducers: {
    resetParams: resetParamsFun,
    setParams: setParamsFun,
    setChoice: setChoiceFun,
    setLostRevenueData: (state, { payload }) => {
      state.lostRevenueData = payload.data;
    },
  },
});

export const { setChoice, setLostRevenueData, setParams, resetParams } =
  DPSlice.actions;
export { initialState };
export default DPSlice.reducer;
