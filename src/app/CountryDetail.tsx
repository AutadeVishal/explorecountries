import { RootState } from "@/src/utils/store";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
export default function CountryDetail() {
  const { countryName } = useLocalSearchParams<{ countryName: string }>();
  const totalCountries = useSelector((store: RootState) => store.country);

  const country = totalCountries.find(
    (item) => item.name.official === countryName,
  );
  return (
    <SafeAreaView className="flex-1 justify-center items-center px-4 bg-slate-900">
      <View className="bg-slate-900  w-full border border-white rounded-lg">
        <Image
          source={{ uri: country?.flags.png }}
          className="w-full h-44 rounded-lg"
          resizeMode="cover"
        />
        <View className="p-4 space-y-2 m-auto">
          <Text className="text-2xl font-extrabold text-white">
            {country?.name.official}
          </Text>

          <Text className="text-slate-600">
            <Text className="font-semibold text-white">Capital: </Text>
            {country?.capital}
          </Text>

          <Text className="text-slate-600">
            <Text className="font-semibold text-white">Population: </Text>
            {country?.population}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
