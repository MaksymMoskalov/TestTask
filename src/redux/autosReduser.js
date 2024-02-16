import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { allCarsThunk } from './autosOperations';

const INITIAL_STATE = {
  cars: null,
  page: 1,
  total: 25,
  isLoading: false,
  error: null,
};

const autoSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(allCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.error = null;
      })
      //   .addCase(monthWaterThunk.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.monthWaterConsumption = action.payload;
      //     state.error = null;
      //   })
      //   .addCase(addWaterThunk.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     if (state.todayWaterConsumption.length) {
      //       state.todayWaterConsumption = [
      //         ...state.todayWaterConsumption,
      //         action.payload,
      //       ];
      //     } else {
      //       state.todayWaterConsumption.push(action.payload);
      //     }
      //     state.error = null;
      //   })
      //   .addCase(deleteWaterThunk.fulfilled, (state, action) => {
      //     state.isLoading = false;

      //     state.todayWaterConsumption = state.todayWaterConsumption.filter(
      //       portion => portion._id !== action.payload._id
      //     );
      //     state.error = null;
      //   })
      //   .addCase(updateWaterThunk.fulfilled, (state, action) => {
      //     state.isLoading = false;

      //     const indexToUpdate = state.todayWaterConsumption.findIndex(
      //       portion => portion._id === action.payload._id
      //     );
      //     if (indexToUpdate !== -1) {
      //       state.todayWaterConsumption[indexToUpdate] = action.payload;
      //     }
      //     state.error = null;
      //   })

      .addMatcher(isAnyOf(allCarsThunk.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(allCarsThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const autoReducer = autoSlice.reducer;
