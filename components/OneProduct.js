import React from "react";
import { useState } from "react";
import { StoreItemStyled, StorePriceItemStyled } from "../styles";
import { ListItem, Right, Left, Button } from "native-base";
import { Image, Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const OneProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: product.img }}
        />
        <StoreItemStyled>
          {product.name} {"\n"}
          <Text note style={{ fontSize: 14, color: "grey" }}>
            {product.price} KD
          </Text>
        </StoreItemStyled>
      </Left>

      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default OneProduct;
