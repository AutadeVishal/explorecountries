import appStore from "@/src/utils/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../../global.css";
import "../lib/i18.ts";
export default function RootLayout() {
  return (
    <Provider store={appStore}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="CountryDetail" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
