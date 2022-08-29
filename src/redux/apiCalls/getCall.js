import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, instance } from '../../api';
import store from '../configureStore';
import { initialState, setLostRevenueData } from '../DPSlice';

export const getCall = createAsyncThunk('getLostRevenue', async () => {
  try {
    const { DPState } = store.getState('DPState');
    const InputData = DPState.aov ? DPState : initialState;
    const { aov, industryId, numberOfVisits } = InputData;
    const res = await instance.get(
      `${baseURL}/simulator/lostrevenue?aov=${aov.value}&industryId=${industryId.value}&numberOfVisits=${numberOfVisits.value}`,
    );
    if (res.status !== 200)
      throw new Error('Error: Server error while getting data');
    store.dispatch(setLostRevenueData({ data: res.data?.result }));
  } catch (e) {
    console.log(e, 'error');
  }
});
