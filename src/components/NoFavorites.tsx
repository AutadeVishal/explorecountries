import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
const NoFavorites = () => {
  const { t } = useTranslation();
  return (
    <View className="m-auto text-white">
      <Text className="font-extrabold text-4xl p-5 text-white">
        {t("NoFavorites")}
      </Text>
    </View>
  );
};

export default NoFavorites;
