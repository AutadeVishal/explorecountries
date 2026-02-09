import i18n from "@/src/i18n";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import LanguageButton from "./LanguageButton";
const Language = () => {
  return (
    <View className=" border-2 border-white p-5 bg-slate-800 rounded-lg mt-20 w-2/3">
      <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
        <LanguageButton language="English" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("fr")}>
        <LanguageButton language="French" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("hi")}>
        <LanguageButton language="Hindi" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("mr")}>
        <LanguageButton language="Marathi" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage("sp")}>
        <LanguageButton language="Spanish" />
      </TouchableOpacity>
    </View>
  );
};
export default Language;
