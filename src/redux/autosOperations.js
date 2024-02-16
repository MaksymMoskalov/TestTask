import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestAllCars } from 'service/moviesAPI';

export const allCarsThunk = createAsyncThunk(
  'cars/all',
  async (_, thunkAPI) => {
    try {
      const data = await requestAllCars(1);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
