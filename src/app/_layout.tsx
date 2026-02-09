import appStore from "@/src/utils/store";
import { Stack } from "expo-router";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import "../../global.css";
import "../i18n";
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
