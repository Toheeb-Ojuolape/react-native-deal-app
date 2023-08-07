import React from "react";
import { TextInput, StyleSheet } from "react-native";
import debounce from "lodash.debounce";

function SearchBar({ searchDeals }) {
  const debouncedSearch = debounce(searchDeals, 300);
  const searchTerm = (e) => {
    debouncedSearch(e);
  };
  return (
    <TextInput
      style={styles.textinput}
      placeholder={"Search All Deals"}
      onChangeText={(text) => searchTerm(text)}
    />
  );
}

const styles = StyleSheet.create({
  textinput: {
    height: 60,
    marginHorizontal: 12,
    fontSize: 20,
  },
});
export default SearchBar;
