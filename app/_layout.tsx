import appStore, { RootState } from "@/utils/store";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { Provider, useSelector } from "react-redux";
import "../global.css";

const TabsLayout = () => {
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#888888" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="App"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${focused ? "w-[45px] h-[45px] tint-blue-600 " : "w-[20px] h-[20px]  tint-gray-400"} `}
              source={require("../assets/icons/home.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${
                focused
                  ? "w-[45px] h-[45px] tint-blue-600"
                  : "w-[20px] h-[20px] tint-gray-400"
              } `}
              source={require("../assets/icons/favorites.png")}
            />
          ),
          tabBarBadge: favoritesFromStore.length,
        }}
      />
    </Tabs>
  );
};

const Rootlayout = () => {
  return (
    <Provider store={appStore}>
      <TabsLayout />
    </Provider>
  );
};

export default Rootlayout;
