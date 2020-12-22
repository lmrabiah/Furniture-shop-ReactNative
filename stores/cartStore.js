import { makeAutoObservable } from "mobx";
//To  keep our items from being deleted
import AsyncStorage from "@react-native-community/async-storage";
import instance from "./instance";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    //  JSON.parse will destringify
    this.items = items ? JSON.parse(items) : [];
  };
  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.productId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  checkout = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      console.log("CartStore -> checkout -> res", res.data);
      this.items = [];
      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
      alert("You have successfully checked out.");
    } catch (error) {
      console.log("CartStore -> checkout -> error", error);
    }
  };
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
