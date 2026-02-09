import Language from "@/src/components/Language";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Settings = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView className="bg-slate-900 h-full items-center ">
      <Text className="text-white text-4xl font-bold m-6 p-5">
        {t("settings")}
      </Text>
      <Language />
    </SafeAreaView>
  );
};

export default Settings;
