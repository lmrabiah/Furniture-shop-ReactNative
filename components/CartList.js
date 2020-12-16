import React from "react";
import productStore from "../stores/productStore";
import { Spinner, List } from "native-base";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import cartStore from "../stores/cartStore";
import { CheckoutButton, CheckoutButtonText } from "../styles";

function CartList() {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductId(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return (
    <>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>

      <List>{cartList}</List>
    </>
  );
}

export default observer(CartList);
