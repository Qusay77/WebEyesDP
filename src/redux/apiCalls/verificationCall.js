import { createAsyncThunk } from '@reduxjs/toolkit';
import { eventTracker, userTacker } from '../../../ProductAnalytics';
import { baseURL, instance } from '../../api';
import store from '../configureStore';

export const verificationCall = createAsyncThunk(
  'postVerificationCall',
  async (id) => {
    try {
      const { platform, params } = store.getState('DPState')?.DPState || {};
      const res = await instance.post(
        `${baseURL}/signup/sendVerificationEmail`,
        {
          ...params,
          platformName: platform?.value,
        },
      );
      if (res.status !== 200)
        throw new Error('Error: Server error while Verifying Account');
      if (id) {
        const { email, fullName } = params;
        eventTracker('DP - Successful Registration');
        userTacker(email, fullName);
      }
      return res;
    } catch (e) {
      console.log(e, 'error');
    }
  },
);
