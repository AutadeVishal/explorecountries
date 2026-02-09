import React from "react";
import { Text, View } from "react-native";

const LanguageButton = ({ language }: { language: string }) => {
  return (
    <View className="m-4 p-4 rounded-lg border-white border-2 bg-cyan-600 items-center">
      <Text className="text-white font-bold">{language}</Text>
    </View>
  );
};

export default LanguageButton;
