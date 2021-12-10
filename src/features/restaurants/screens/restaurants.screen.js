import React, { useContext } from "react";
import { View,Text, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import ResrtaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Container = styled(View)`
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const restaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <Container>
      <SearchContainer>
        <Searchbar placeholder="Search" icon="heart-outline" />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => {
          return (
            <Spacer position="bottom" size="large">
              <ResrtaurantInfoCard />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item}
      />
    </Container>
  );
};

export default restaurantsScreen;
