import { Text } from "@react-navigation/elements";
import React from "react";
import { View } from "react-native";
const NoFavorites = () => {
  return (
    <View className="flex-1 justify-center w-full h-full ">
      <View className="m-auto">
        <Text className="font-extrabold text-4xl">No Favorites yet</Text>
      </View>
    </View>
  );
};

export default NoFavorites;
