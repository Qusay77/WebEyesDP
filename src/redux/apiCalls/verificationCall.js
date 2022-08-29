import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, instance } from '../../api';
import store from '../configureStore';

export const verificationCall = createAsyncThunk(
  'postVerificationCall',
  async () => {
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
      return res;
    } catch (e) {
      console.log(e, 'error');
    }
  },
);
