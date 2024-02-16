import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestAllCars } from 'service/moviesAPI';

export const allCarsThunk = createAsyncThunk(
  'cars/all',
  async (page, thunkAPI) => {
    try {
      const data = await requestAllCars(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCarsThunk = createAsyncThunk(
  'cars/loadMore',
  async (page, thunkAPI) => {
    try {
      const data = await requestAllCars(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
