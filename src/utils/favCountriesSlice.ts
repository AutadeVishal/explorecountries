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
      return state.filter(
        (item) => item.name.official != action.payload.name.official,
      );
    },
  },
});
export const { addFavorite, removeFavorite } = favCountriesSlice.actions;
export default favCountriesSlice.reducer;
