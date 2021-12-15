import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import Search from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";

const Map = styled(MapView)`
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurant = [] } = useContext(RestaurantsContext);
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
        {restaurant.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
