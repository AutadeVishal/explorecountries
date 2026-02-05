import { addFavorite, removeFavorite } from "@/utils/favCountriesSlice";
import { RootState } from "@/utils/store";
import { Country } from "@/utils/types";
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
      <View className="border border-black-500 m-4 p-2 rounded-3xl ">
        <Image
          className="w-full h-40   rounded-3xl"
          source={{
            uri: item.flags.png,
          }}
        />
        <TouchableOpacity
          onPress={() => handleFavorite({ item })}
          className={` p-2 justify-center rounded-full absolute ${favoritesFromStore.some((elem) => elem.name.official === item.name.official) ? "bg-red-500 " : "bg-slate-300"}`}
        >
          {favoritesFromStore.some(
            (elem) => elem.name.official == item.name.official,
          ) ? (
            <Image
              className="w-10 h-10 rounded-full"
              source={require("../assets/icons/filledHeart.png")}
            />
          ) : (
            <Image
              className="w-10 h-10 rounded-full"
              source={require("../assets/icons/emptyHeart.png")}
            />
          )}
        </TouchableOpacity>
        <View className="m-auto  my-3">
          <Text className=" font-extrabold ">{item.name.official}</Text>
        </View>

        <Text className="  p-2 justify-center w-40  rounded-3xl bg-slate-400 m-auto ">
          {item.region}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryCard;
