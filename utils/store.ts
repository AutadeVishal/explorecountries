import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countriesSlice";
import FavCountries from "./favCountriesSlice";
const appStore = configureStore({
  reducer: {
    country: countryReducer,
    favCountry: FavCountries,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
