import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </SearchContainer>
  );
};
