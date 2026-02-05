import { RootState } from "@/utils/store";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { useSelector } from "react-redux";

const TabsLayout = () => {
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#E2E8F0" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="App"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${focused ? "w-[45px] h-[45px] p-2 rounded-xl bg-slate-400" : "w-[30px] h-[30px]"}`}
              source={require("../../assets/icons/home.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${focused ? "w-[40px] h-[40px] p-2 rounded-xl bg-slate-400" : "w-[20px] h-[20px]"}`}
              source={require("../../assets/icons/favorites.png")}
            />
          ),
          tabBarBadge: favoritesFromStore.length,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
