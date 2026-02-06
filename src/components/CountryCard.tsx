import { addFavorite, removeFavorite } from "@/src/utils/favCountriesSlice";
import { RootState } from "@/src/utils/store";
import { Country } from "@/src/utils/types";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
const CountryCard = ({ item }: { item: Country }) => {
  const Dispatch = useDispatch();
  const router = useRouter();
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );
  const handleFavorite = ({ item }: { item: Country }) => {
    if (
      favoritesFromStore.some(
        (elem) => elem.name.official == item.name.official,
      )
    ) {
      Dispatch(removeFavorite(item));
    } else {
      Dispatch(addFavorite(item));
    }
  };
  const handleCountryClick = () => {
    router.push(`/CountryDetail?countryName=${item.name.official}`);
  };
  return (
    <TouchableOpacity onPress={() => handleCountryClick()}>
      <View className="border border-white m-5 p-3 rounded-3xl bg-slate-800  w-80">
        <Image
          className="w-50 h-40 rounded-2xl"
          source={{
            uri: item.flags.png,
          }}
        />
        <TouchableOpacity
          onPress={() => handleFavorite({ item })}
          className={`p-2 justify-center rounded-full absolute top-1 left-1 border-2 border-white ${favoritesFromStore.some((elem) => elem.name.official === item.name.official) ? "bg-red-500" : "bg-slate-700"}`}
        >
          {favoritesFromStore.some(
            (elem) => elem.name.official == item.name.official,
          ) ? (
            <Image
              className="w-10 h-10 rounded-full "
              source={require("../assets/icons/filledHeart.png")}
            />
          ) : (
            <Image
              className="w-10 h-10 rounded-full "
              source={require("../assets/icons/emptyHeart.png")}
            />
          )}
        </TouchableOpacity>
        <View className="m-auto my-3">
          <Text className="font-extrabold text-white text-center">
            {item.name.official}
          </Text>
        </View>

        <Text className="text-center p-2 w-40 rounded-3xl bg-cyan-600 m-auto text-white font-semibold">
          {item.region}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;
