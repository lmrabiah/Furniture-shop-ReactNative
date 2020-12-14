import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
import { StoreItemStyled } from "../styles";
import { Image } from "react-native";
function OneStore({ store }) {
  return (
    <ListItem>
      <Image style={{ width: 100, height: 100 }} source={{ uri: store.img }} />
      <StoreItemStyled>{store.name}</StoreItemStyled>
    </ListItem>
  );
}

export default OneStore;
