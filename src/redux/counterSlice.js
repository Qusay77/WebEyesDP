import { createSlice } from '@reduxjs/toolkit';
const setGetCallFun = (state, { payload }) => {
  const { value } = payload;
  state.getCall = value;
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, getCall: false },
  reducers: {
    setGetCall: setGetCallFun,
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, setGetCall } = counterSlice.actions;
export default counterSlice.reducer;
