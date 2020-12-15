import React from "react";
import { StoreItemStyled, StorePriceItemStyled } from "../styles";
import { ListItem } from "native-base";
import { Image, View } from "react-native";

const OneProduct = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.img }}
      />
      <StoreItemStyled>{product.name}</StoreItemStyled>
      <View>
        <StorePriceItemStyled>{product.price}</StorePriceItemStyled>
      </View>
    </ListItem>
  );
};

export default OneProduct;
