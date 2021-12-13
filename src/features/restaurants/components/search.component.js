import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const { keyword,search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword)
  }, [])

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        icon="heart-outline"
        value={searchKeyword}
        onSubmitEditing={()=>{
            search(searchKeyword)
        }}
        onChangeText={(text)=>{
            setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  );
};

export default Search;
