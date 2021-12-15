import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Pressable,
  TouchableOpacity
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import ResrtaurantInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Search from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Container = styled(View)`
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  // console.log(error);
  return (
    <Container>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail",{
                restaurant:item
              })}
            >
              <Spacer position="bottom" size="large">
                <ResrtaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
};

export default RestaurantsScreen;
