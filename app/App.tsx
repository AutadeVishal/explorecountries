import CountryCard from "@/components/CountryCard";
import { api } from "@/utils/apis";
import { addCountries } from "@/utils/countriesSlice";
import { RootState } from "@/utils/store";
import { Country } from "@/utils/types";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import "../global.css";

export default function App() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((store: RootState) => store.country);
  const [isLoading, setIsLoading] = useState(true);
  const [countriesVisible, setCountriesVisible] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>("");
  const handleSearch = (searchText: string) => {
    setSearch(searchText);
    setCountriesVisible(
      totalCountries.filter((country: Country) =>
        country.name.official.includes(searchText),
      ),
    );
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addCountries(data));
        setCountriesVisible(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);
  if (isLoading === true) {
    return (
      <SafeAreaView className="flex-1 items-center ">
        <Text>Loading</Text>
        <ActivityIndicator
          className="flex-1  justify-center "
          size="large"
          color="#007AFF"
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1 items-center mx-5">
      <Text className="text-3xl font-bold m-5">Find Your Country</Text>
      <TextInput
        value={search}
        className="w-full border border-black-5  p-5 rounded-3xl"
        onChange={(e) => handleSearch(e.nativeEvent.text)}
        placeholder="Search"
      ></TextInput>
      <FlatList
        data={countriesVisible}
        keyExtractor={(item) => item.name.official}
        renderItem={({ item }) => <CountryCard item={item} />}
      />
    </SafeAreaView>
  );
}
