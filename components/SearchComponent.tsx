import React, { useState } from "react";
import { TextInput, View } from "react-native";

type SearchComponentProps = {
  search: string;
  handleSearch: (searchText: string) => void;
};

const SearchComponent = ({ search, handleSearch }: SearchComponentProps) => {
    const [regions,setRegions]=useState([]);
  return (
    <View>
      <TextInput
        value={search}
        className="w-full border border-black-5  p-5 rounded-3xl"
        onChange={(e) => handleSearch(e.nativeEvent.text)}
        placeholder="Search"
      ></TextInput>
      <
    </View>
  );
};

export default SearchComponent;
