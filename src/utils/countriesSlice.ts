import { createSlice } from "@reduxjs/toolkit";
import { Country } from "./types";
const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState: [] as Country[],
  reducers: {
    addCountries: (state, action) => {
      return action.payload;
    },
  },
});
export const { addCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
