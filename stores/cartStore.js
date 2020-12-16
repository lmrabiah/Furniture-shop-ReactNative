import { makeAutoObservable } from "mobx";
class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItemToCart = (newItem) => {
    const foundItem = this.items.find(
      (item) => item.productId === newItem.productId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
  };
}
const cartStore = new CartStore();
export default cartStore;
