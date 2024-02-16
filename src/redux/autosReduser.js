import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { allCarsThunk, loadMoreCarsThunk } from './autosOperations';

const INITIAL_STATE = {
  cars: null,
  page: 1,
  fact: 12,
  total: 25,
  isLoading: false,
  error: null,
};

const autoSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    handlPages(state, _) {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(allCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.page = state.page + 1;
        state.error = null;
      })
      .addCase(loadMoreCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...action.payload];
        state.fact = state.fact + 12;
        state.page = state.page + 1;
        state.error = null;
      })

      .addMatcher(
        isAnyOf(allCarsThunk.pending, loadMoreCarsThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(allCarsThunk.rejected, loadMoreCarsThunk.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { handlPages } = autoSlice.actions;
export const autoReducer = autoSlice.reducer;
