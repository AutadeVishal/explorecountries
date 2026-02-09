import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable, TextInput, View } from "react-native";
import { regions } from "../utils/regions";
import RegionsButtons from "./RegionsButtons";
type SearchComponentProps = {
  search: string;
  handleSearch: (searchText: string, listOfRegionsToSearchBy: string[]) => void;
};

const SearchComponent = ({ search, handleSearch }: SearchComponentProps) => {
  const { t } = useTranslation();
  const [filteredRegions, setFilteredRegions] = useState<string[]>(regions);

  useEffect(() => {
    handleSearch(search, filteredRegions);
  }, [search, filteredRegions, handleSearch]);

  return (
    <View>
      <TextInput
        value={search}
        className="border border-white p-5 rounded-3xl bg-slate-800 text-white"
        onChange={(e) => handleSearch(e.nativeEvent.text, filteredRegions)}
        placeholder={t("Search")}
        placeholderTextColor="#94a3b8"
      />
      <View className="flex-row">
        <FlatList
          horizontal
          data={regions}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  if (filteredRegions.includes(item)) {
                    setFilteredRegions((prev) =>
                      prev.filter((reg) => reg !== item),
                    );
                  } else {
                    setFilteredRegions((prev) => [...prev, item]);
                  }
                }}
              >
                {filteredRegions.includes(item) ? (
                  <RegionsButtons
                    name={t(`Regions.${item}`)}
                    isSelected={true}
                  />
                ) : (
                  <RegionsButtons
                    name={t(`Regions.${item}`)}
                    isSelected={false}
                  />
                )}
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchComponent;
