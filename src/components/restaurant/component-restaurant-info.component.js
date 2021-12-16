import React from "react";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const BorderRadiusView = styled.View`
  overflow: hidden;
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <BorderRadiusView>
        <Image source={{ uri: restaurant.photos[0] }} />
      </BorderRadiusView>
      <Text center varient="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
