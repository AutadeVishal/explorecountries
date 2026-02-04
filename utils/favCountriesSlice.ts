import { createSlice } from "@reduxjs/toolkit";
import { Country } from "./types";
const favCountriesSlice = createSlice({
  name: "favCountriesSlice",
  initialState: [] as Country[],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.filter((item) => item != action.payload);
    },
  },
});
export const { addFavorite, removeFavorite } = favCountriesSlice.actions;
export default favCountriesSlice.reducer;
