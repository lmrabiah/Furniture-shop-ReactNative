import React from "react";
import { Image } from "react-native";
import { ListItem } from "native-base";

//Styles
import { StoreItemStyled } from "../styles";

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
