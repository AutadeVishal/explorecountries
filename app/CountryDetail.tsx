import { RootState } from "@/utils/store";
import { Text } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
export default function CountryDetail() {
  const { countryName } = useLocalSearchParams<{ countryName: string }>();
  const totalCountries = useSelector((store: RootState) => store.country);

  const country = totalCountries.find(
    (item) => item.name.official === countryName,
  );

  if (!country) {
    return (
      <SafeAreaView className="bg-slate-200 justify-center h-full w-full">
        <Text className="text-xl">Country not found</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-200 justify-center items-center px-4">
      <View className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm">
        <Image
          source={{ uri: country.flags.png }}
          className="w-full h-44"
          resizeMode="cover"
        />
        <View className="p-4 space-y-2">
          <Text className="text-xl font-bold text-slate-800">
            {country.name.official}
          </Text>

          <Text className="text-slate-600">
            <Text className="font-semibold">Capital:</Text>{" "}
            {country.capital?.[0] ?? "N/A"}
          </Text>

          <Text className="text-slate-600">
            <Text className="font-semibold">Population:</Text>{" "}
            {country.population.toLocaleString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
