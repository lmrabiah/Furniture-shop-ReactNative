import React from "react";
import { observer } from "mobx-react";
import {
  StoreDetailWrapper,
  StoreDetailImage,
  StoreDetailTitle,
} from "../styles";
import { Spinner } from "native-base";
import storeStore from "../stores/storeStore";
import productStore from "../stores/productStore";
import AllProduct from "./AllProduct";

function StoreDetail() {
  const store = storeStore.stores[2];
  if (storeStore.loading) return <Spinner />;
  const productsFromProductStore = store.products.map((product) =>
    productStore.getProductId(product.id)
  );
  return (
    <>
      <StoreDetailWrapper>
        <StoreDetailImage source={{ uri: store.img }} />
        <StoreDetailTitle>{store.name}</StoreDetailTitle>
      </StoreDetailWrapper>
      <AllProduct products={productsFromProductStore} />
    </>
  );
}

export default observer(StoreDetail);
