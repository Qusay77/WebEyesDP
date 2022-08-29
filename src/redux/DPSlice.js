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
  lostRevenueData: null,
};

const setChoiceFun = (state, { payload }) => {
  const { option, key } = payload;
  state[key] = option;
};

const DPSlice = createSlice({
  name: 'dataProductization',
  initialState,
  reducers: {
    setChoice: setChoiceFun,
    setLostRevenueData: (state, { payload }) => {
      state.lostRevenueData = payload.data;
    },
  },
});

export const { setChoice, setLostRevenueData } = DPSlice.actions;
export { initialState };
export default DPSlice.reducer;
