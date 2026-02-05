import React, { useEffect, useState } from "react";
import { FlatList, Pressable, TextInput, View } from "react-native";
import RegionsButtons from "./RegionsButtons";

type SearchComponentProps = {
  search: string;
  handleSearch: (searchText: string, listOfRegionsToSearchBy: string[]) => void;
};

const SearchComponent = ({ search, handleSearch }: SearchComponentProps) => {
  const regions = [
    "Asia",
    "Europe",
    "Africa",
    "America",
    "Americas",
    "Oceania",
  ];
  const [filteredRegions, setFilteredRegions] = useState<string[]>(regions);

  useEffect(() => {
    handleSearch(search, filteredRegions);
  }, [filteredRegions]);

  return (
    <View>
      <TextInput
        value={search}
        className="border border-black-5  p-5 rounded-3xl"
        onChange={(e) => handleSearch(e.nativeEvent.text, filteredRegions)}
        placeholder="Search"
      ></TextInput>
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
                  <RegionsButtons name={item} isSelected={true} />
                ) : (
                  <RegionsButtons name={item} isSelected={false} />
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
