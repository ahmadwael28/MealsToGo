import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactItem = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const isAndroid = Platform.OS === "android";
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <CompactItem>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </CompactItem>
  );
};
