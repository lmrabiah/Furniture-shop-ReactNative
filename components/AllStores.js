import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//stores
import storeStore from "../stores/storeStore";
import OneStore from "./OneStore";

function AllStores({ navigation }) {
  if (storeStore.loading) return <Spinner />;
  const stores = storeStore.stores.map((store) => (
    <OneStore navigation={navigation} store={store} key={store.id} />
  ));

  return (
    <Content>
      <List>{stores}</List>
    </Content>
  );
}
export default observer(AllStores);
