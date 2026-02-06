import React from "react";
import { Text, View } from "react-native";
type propsType = { name: string; isSelected: boolean };

const RegionsButtons = ({ name, isSelected }: propsType) => {
  return (
    <View
      className={`rounded-3xl m-3 p-3 ${isSelected ? "bg-cyan-600" : "bg-slate-700"}`}
    >
      <Text className="text-white font-medium">{name}</Text>
    </View>
  );
};

export default RegionsButtons;
