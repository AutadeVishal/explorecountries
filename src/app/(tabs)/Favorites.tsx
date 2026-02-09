import CountryCard from "@/src/components/CountryCard";
import NoFavorites from "@/src/components/NoFavorites";
import { RootState } from "@/src/utils/store";
import { useTranslation } from "react-i18next";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
const Favorites = () => {
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );
  const { t } = useTranslation();
  return (
    <SafeAreaView className="w-full h-full bg-slate-900 justify-center items-center">
      {favoritesFromStore.length == 0 ? (
        <NoFavorites />
      ) : (
        <View>
          <Text className="text-white m-auto text-4xl font-bold p-4 mt-7">
            {t("Favorites")}
          </Text>
          <FlatList
            data={favoritesFromStore}
            keyExtractor={(item) => item.name.official}
            renderItem={({ item }) => <CountryCard item={item} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;
