import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";
import { theme } from "../../../../src/infrastructure/theme/";
import {MapCallout} from "../components/map-callout.component";
const Map = styled(MapView)`
  height: 100%;
`;
export const MapScreen = ({navigation}) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [letDelta, setLetDelta] = useState(0);
  const { viewport, lat, lng } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const letDelta = northeastLat - southwestLat;
    setLetDelta(letDelta);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: letDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout onPress={()=>navigation.navigate("RestaurantDetail",{restaurant})} >
                <MapCallout restaurant={restaurant}/>
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
