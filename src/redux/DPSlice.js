import { createSlice } from '@reduxjs/toolkit';
import {
  AverageOrderValueOptions,
  IndustryOptions,
  MonthlyVisitsOptions,
} from '../utils/DPDropDownOptions';
import { validateEmail, validatePassword } from '../utils/validation';

const initialState = {
  industryId: IndustryOptions[0],
  aov: AverageOrderValueOptions[3],
  numberOfVisits: MonthlyVisitsOptions[6],
  platform: null,
  lostRevenueData: null,
  isModalOpen: false,
  flow: null,
  step: 0,
  params: {
    email: null,
    password: null,
    fullName: null,
    companyName: null,
    subscribeToMonthlyReport: false,
    subscribed_emails: null,
  },
  validations: {
    emailValid: { value: null, func: validateEmail, key: 'email' },
    passwordValid: { value: null, func: validatePassword, key: 'password' },
  },
};

const setValidationsFun = (state, { payload }) => {
  const { types } = payload;
  types.map((k) => {
    const { func, key } = state.validations[k];
    state.validations[k].value = func(state.params[key]);
  });
};

const setParamsFun = (state, { payload }) => {
  const { params, validate } = payload;
  Object.entries(params).map(([k, v]) => {
    const { func } = state.validations[validate] || {};
    if (validate && state.validations[validate].value === null) {
      if (func(v)) {
        state.validations[validate].value = func(v);
      }
    }
    if (validate && state.validations[validate].value !== null) {
      const { func } = state.validations[validate];
      state.validations[validate].value = func(v);
    }
    state.params[k] = v;
  });
};
const resetParamsFun = (state) => {
  // eslint-disable-next-line no-unused-vars
  const { industryId, aov, numberOfVisits, lostRevenueData, ...rest } =
    initialState;
  const resetState = { ...state, ...rest };
  return resetState;
};
const setIsModalOpenFun = (state, { payload }) => {
  const { open } = payload;
  if (!open) {
    // eslint-disable-next-line no-unused-vars
    const { industryId, aov, numberOfVisits, lostRevenueData, ...rest } =
      initialState;
    const resetState = { ...state, ...rest };
    return resetState;
  }
  state.isModalOpen = open;
};

const setFlowOrStepFun = (state, { payload }) => {
  const { flow, step } = payload;
  if (flow) {
    state.flow = flow;
  }
  if (step) {
    state.step = state.step + step;
  }
};

const setChoiceFun = (state, { payload }) => {
  const { option, key } = payload;
  state[key] = option;
};

const DPSlice = createSlice({
  name: 'dataProductization',
  initialState,
  reducers: {
    setFlowOrStep: setFlowOrStepFun,
    setIsModalOpen: setIsModalOpenFun,
    setValidations: setValidationsFun,
    resetParams: resetParamsFun,
    setParams: setParamsFun,
    setChoice: setChoiceFun,
    setLostRevenueData: (state, { payload }) => {
      state.lostRevenueData = payload.data;
    },
  },
});

export const {
  setFlowOrStep,
  setIsModalOpen,
  setChoice,
  setLostRevenueData,
  setParams,
  resetParams,
  setValidations,
} = DPSlice.actions;
export { initialState };
export default DPSlice.reducer;
