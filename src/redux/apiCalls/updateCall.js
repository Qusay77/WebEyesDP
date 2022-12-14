import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, instance } from '../../api';
import store from '../configureStore';

export const updateCall = createAsyncThunk('postUpdateCall', async () => {
  try {
    const { aov, industryId, numberOfVisits, platform, params } =
      store.getState('DPState')?.DPState || {};
    const res = await instance.post(`${baseURL}/signup/updateAccountInfo`, {
      ...params,
      aov: aov?.value,
      industryId: industryId?.value,
      monthlyVisitors: numberOfVisits?.value,
      platformName: platform?.value,
    });
    if (res.status !== 200)
      throw new Error('Error: Server error while Updating Account');
    return res;
  } catch (e) {
    console.log(e, 'error');
  }
});
