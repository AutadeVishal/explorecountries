import CountryCard from "@/components/CountryCard";
import SearchComponent from "@/components/SearchComponent";
import { api } from "@/utils/apis";
import { addCountries } from "@/utils/countriesSlice";
import { RootState } from "@/utils/store";
import { Country } from "@/utils/types";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((store: RootState) => store.country);
  const [isLoading, setIsLoading] = useState(true);
  const [countriesVisible, setCountriesVisible] = useState<Country[]>([]);

  const [search, setSearch] = useState<string>("");
  const handleSearch = (
    searchText: string,
    listOfRegionsToSearchBy: string[],
  ) => {
    setSearch(searchText);
    setCountriesVisible(
      totalCountries.filter(
        (country: Country) =>
          country.name.official.includes(searchText) &&
          listOfRegionsToSearchBy.includes(country.region),
      ),
    );
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetch(api);
        const json = await data.json();
        dispatch(addCountries(json));
        setCountriesVisible(json);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);
  if (isLoading === true) {
    for (let i = 0; i < 9999999; i++);
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
    <SafeAreaView className="flex-1 items-center  bg-slate-200">
      <Text className="text-3xl font-bold m-5">Find Your Country</Text>
      <SearchComponent search={search} handleSearch={handleSearch} />
      <FlatList
        data={countriesVisible}
        keyExtractor={(item) => item.name.official}
        renderItem={({ item }) => <CountryCard item={item} />}
      />
    </SafeAreaView>
  );
}
