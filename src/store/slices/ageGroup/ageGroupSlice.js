import {createSlice} from '@reduxjs/toolkit';

export const ageGroupSlice = createSlice({
  name: 'ageGroup',
  initialState: {
    ageGroup: null,
  },
  reducers: {
    setAgeGroup: (state, action) => {
      state.ageGroup = action.payload;
    },
  },
});

export const {setAgeGroup} = ageGroupSlice.actions;

export default ageGroupSlice.reducer;
