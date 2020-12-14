import { makeObservable, observable, action } from "mobx";

import instance from "./instance";

class StoreStore {
  stores = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      stores: observable,
      loading: observable,
      //   creatStore: action,
      fetchStores: action,
    });
  }

  fetchStores = async () => {
    try {
      const response = await instance.get("/stores");
      this.stores = response.data;
      this.loading = false;
    } catch (error) {
      console.error("StoreStore -> fetchStores -> error", error);
    }
  };

  //   creatStore = async (newStore) => {
  //     try {
  //       const formData = new FormData();

  //       for (const key in newStore) formData.append(key, newStore[key]);
  //       const response = await instance.post("/stores", formData);
  //       this.stores.push(response.data);
  //     } catch (error) {
  //       console.error(console.error);
  //     }
  //   };
}
const storeStore = new StoreStore();
storeStore.fetchStores();
export default storeStore;
