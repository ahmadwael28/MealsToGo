import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfo } from "../components/resturantInfo.card";
import styled from "styled-components";
import { SafeArea } from "../../../components/utilities/safeArea.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
          { name: 16 },
          { name: 17 },
          { name: 18 },
          { name: 19 },
          { name: 122 },
          { name: 133 },
          { name: 144 },
          { name: 155 },
          { name: 166 },
          { name: 277 },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
