import { makeAutoObservable } from "mobx";
//To  keep our items from being deleted
import AsyncStorage from "@react-native-community/async-storage";

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
  checkout = () => {
    this.items = [];
    alert("you have Checkout");
  };
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
