import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { BottomNavigation } from "react-native-paper";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/component-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer varient="left.large">
        <Text varient="caption">Favorites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
