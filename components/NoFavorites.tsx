import { Text } from "@react-navigation/elements";
import React from "react";
import { View } from "react-native";
const NoFavorites = () => {
  return (
    <View className="flex-1 justify-center w-full h-full">
      <View>
        <Text className="font-extrabold size-6">No Favorites yet</Text>
      </View>
    </View>
  );
};

export default NoFavorites;
