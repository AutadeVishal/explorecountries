import { addFavorite, removeFavorite } from "@/utils/favCountriesSlice";
import { RootState } from "@/utils/store";
import { Country } from "@/utils/types";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
const CountryCard = ({ item }: { item: Country }) => {
  const Dispatch = useDispatch();
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
  return (
    <View className="border border-black-500 m-1 p-2 rounded-3xl ">
      <Image
        className="w-full h-40   rounded-3xl"
        source={{
          uri: item.flags.png,
        }}
      />
      <View className="m-auto  my-3">
        <Text className=" font-extrabold ">{item.name.official}</Text>
      </View>

      <Text className="mx-5 ">{item.region}</Text>
      <TouchableOpacity
        onPress={() => handleFavorite({ item })}
        className={` p-2 justify-center w-40 m-auto rounded-3xl ${favoritesFromStore.some((elem) => elem.name.official === item.name.official) ? "bg-red-300 " : "bg-slate-300"}`}
      >
        <Text className="m-auto">
          {favoritesFromStore.some(
            (elem) => elem.name.official == item.name.official,
          )
            ? `Favorite`
            : `Favorite It`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryCard;
