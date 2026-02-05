import CountryCard from "@/components/CountryCard";
import NoFavorites from "@/components/NoFavorites";
import { RootState } from "@/utils/store";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );
  return (
    <SafeAreaView className="w-full h-full bg-slate-200">
      {favoritesFromStore.length == 0 ? (
        <NoFavorites />
      ) : (
        <FlatList
          data={favoritesFromStore}
          keyExtractor={(item) => item.name.official}
          renderItem={({ item }) => <CountryCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Favorites;
