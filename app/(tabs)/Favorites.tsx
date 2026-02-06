import CountryCard from "@/components/CountryCard";
import NoFavorites from "@/components/NoFavorites";
import { RootState } from "@/utils/store";
import { FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoritesFromStore = useSelector(
    (store: RootState) => store.favCountry,
  );
  return (
    <SafeAreaView className="w-full h-full bg-slate-900 justify-center items-center">
      <ImageBackground
        source={{ uri: "https://wallpapercave.com/wp/wp5136232.jpg" }}
        className="flex-1"
        imageStyle={{ opacity: 0.3 }}
      >
        {favoritesFromStore.length == 0 ? (
          <NoFavorites />
        ) : (
          <FlatList
            data={favoritesFromStore}
            keyExtractor={(item) => item.name.official}
            renderItem={({ item }) => <CountryCard item={item} />}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Favorites;
