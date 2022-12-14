/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import {
  AverageOrderValueOptions,
  IndustryOptions,
  MonthlyVisitsOptions,
} from '../utils/DPDropDownOptions';
import { copyToClipboard } from '../utils/tools';
import { validateEmail, validatePassword } from '../utils/validation';

const initialState = {
  shareCopied: false,
  industryId: IndustryOptions[0],
  aov: AverageOrderValueOptions.find((e) => e.default),
  numberOfVisits: MonthlyVisitsOptions.find((e) => e.default),
  platform: null,
  stickyFooter: false,
  isIntersecting: false,
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
const setShareCopiedFun = (state, { payload }) => {
  const { value } = payload;
  if (value) {
    copyToClipboard(location.href);
  }
  state.shareCopied = value;
};
const setStickyFooterFun = (state, { payload }) => {
  const { value } = payload;
  state.stickyFooter = value;
};
const setIsIntersectingFun = (state, { payload }) => {
  const { value } = payload;
  state.isIntersecting = value;
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
  const {
    shareCopied,
    stickyFooter,
    industryId,
    aov,
    numberOfVisits,
    lostRevenueData,
    ...rest
  } = initialState;
  const resetState = { ...state, ...rest };
  return resetState;
};
const setIsModalOpenFun = (state, { payload }) => {
  const { open } = payload;
  if (!open) {
    const {
      shareCopied,
      stickyFooter,
      industryId,
      aov,
      numberOfVisits,
      lostRevenueData,
      ...rest
    } = initialState;
    const resetState = { ...state, ...rest };
    return resetState;
  }
  state.isModalOpen = open;
};

const setFlowOrStepFun = (state, { payload }) => {
  const { flow, step } = payload;
  if (flow) {
    state.flow = flow === 'reset' ? null : flow;
  }
  if (step) {
    state.step = state.step + step;
  }
};

const setChoiceFun = (state, { payload }) => {
  const { option, key, multiple } = payload;
  if (multiple) {
    multiple.forEach(([k, v]) => {
      state[k] = v;
    });
  } else {
    state[key] = option;
  }
};

const DPSlice = createSlice({
  name: 'dataProductization',
  initialState,
  reducers: {
    setShareCopied: setShareCopiedFun,
    setIsIntersecting: setIsIntersectingFun,
    setStickyFooter: setStickyFooterFun,
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
  setStickyFooter,
  setIsIntersecting,
  setShareCopied,
} = DPSlice.actions;
export { initialState };
export default DPSlice.reducer;
