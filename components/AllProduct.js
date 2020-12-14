import React from "react";
import OneProduct from "./OneProduct";
import { Content, List } from "native-base";

function AllProduct({ products }) {
  const TotalProduct = products.map((product) => (
    <OneProduct product={product} key={product.id} />
  ));
  return (
    <Content>
      <List>{TotalProduct}</List>
    </Content>
  );
}

export default AllProduct;
