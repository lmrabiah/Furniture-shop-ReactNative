import React from "react";
import { StoreItemStyled } from "../styles";
import { ListItem } from "native-base";
import { Image } from "react-native";

const OneProduct = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.img }}
      />
      <StoreItemStyled>{product.name}</StoreItemStyled>
    </ListItem>
  );
};

export default OneProduct;
