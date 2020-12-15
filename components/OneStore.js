import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
import { StoreItemStyled } from "../styles";
import { Image } from "react-native";
function OneStore({ store, navigation }) {
  return (
    <ListItem
      onPress={() => navigation.navigate("StoreDetail", { store: store })}
    >
      <Image
        style={{ width: 200, height: 200, marginLeft: 100 }}
        source={{ uri: store.img }}
      />
      {/* <StoreItemStyled>{store.name}</StoreItemStyled> */}
    </ListItem>
  );
}

export default OneStore;
