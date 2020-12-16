import React from "react";
import productStore from "../stores/productStore";
import { Spinner, List } from "native-base";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";

function CartList() {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductId(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return <List>{cartList}</List>;
}

export default CartList;
