import React from "react";
import { Text, View } from "react-native";
type propsType = { name: string; isSelected: boolean };

const RegionsButtons = ({ name, isSelected }: propsType) => {
  return (
    <View
      className={`rounded-3xl m-3 p-3 ${isSelected ? "bg-slate-400" : "bg-slate-200"}`}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default RegionsButtons;
