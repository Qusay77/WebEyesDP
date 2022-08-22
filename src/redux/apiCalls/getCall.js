import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api';

export const getCall = createAsyncThunk('', async () => {
  try {
    const res = await instance.get('');
    if (res.status !== 200)
      throw new Error('Error: Server error while getting data');
    return res;
  } catch (e) {
    console.log(e, 'error');
  }
});
