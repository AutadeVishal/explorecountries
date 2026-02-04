import appStore from "@/utils/store";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Image } from "react-native";
import { Provider } from "react-redux";
const Rootlayout = () => {
  const [countries, setCountries] = useState([]);
  return (
    <Provider store={appStore}>
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
                source={require("../assets/icons/emptyHeart.png")}
              />
            ),
            tabBarBadge: countries.length,
          }}
        />
      </Tabs>
    </Provider>
  );
};

export default Rootlayout;
