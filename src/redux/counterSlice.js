import { createSlice } from '@reduxjs/toolkit';
const setGetCallFun = (state, { payload }) => {
  const { value } = payload;
  state.getCall = value;
};
const setPDFFun = (state, { payload }) => {
  const { value } = payload;
  state.isPDF = value;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, getCall: false, isPDF: 0 },
  reducers: {
    setPDF: setPDFFun,
    setGetCall: setGetCallFun,
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, setGetCall, setPDF } =
  counterSlice.actions;
export default counterSlice.reducer;
