import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        iconColor={isFavoritesToggled ? "red" : "grey"}
        onIconPress={onFavoritesToggle}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
