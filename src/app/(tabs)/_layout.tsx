import { RootState } from "@/src/utils/store";
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
        tabBarStyle: { backgroundColor: "#1e293b", borderTopColor: "#334155" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${focused ? "w-[45px] h-[45px] p-2 rounded-xl bg-cyan-600" : "w-[30px] h-[30px]"}`}
              source={require("../../assets/icons/home.png")}
              style={{ tintColor: focused ? "black" : "white" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              className={`${focused ? "w-[40px] h-[40px] p-2 rounded-xl bg-cyan-600" : "w-[20px] h-[20px]"}`}
              source={require("../../assets/icons/favorites.png")}
              style={{ tintColor: focused ? "black" : "white" }}
            />
          ),
          tabBarBadge: favoritesFromStore.length,
          tabBarBadgeStyle: { backgroundColor: "#06b6d4" },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
