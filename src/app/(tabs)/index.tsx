import CountryCard from "@/src/components/CountryCard";
import SearchComponent from "@/src/components/SearchComponent";
import { api } from "@/src/utils/apis";
import { addCountries } from "@/src/utils/countriesSlice";
import { RootState } from "@/src/utils/store";
import { Country } from "@/src/utils/types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const totalCountries = useSelector((store: RootState) => store.country);
  const [isLoading, setIsLoading] = useState(true);
  const [countriesVisible, setCountriesVisible] = useState<Country[]>([]);
  const { t } = useTranslation();

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
    return (
      <SafeAreaView className="flex-1 items-center bg-slate-900">
        <Image
          className="flex-1 h-full w-full"
          source={require("../../assets/images/imageToBackground.jpg")}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView className="flex-1 items-center p-2 bg-slate-900">
      <Text className="text-4xl font-bold m-5 text-white p-4">
        {t("Title")}
      </Text>
      <SearchComponent search={search} handleSearch={handleSearch} />
      <FlatList
        data={countriesVisible}
        keyExtractor={(item) => item.name.official}
        renderItem={({ item }) => <CountryCard item={item} />}
      />
    </SafeAreaView>
  );
}
