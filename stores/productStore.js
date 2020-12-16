import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      products: observable,
      loading: observable,
      fetchProducts: action,
    });
  }

  getProductId = (productId) =>
    this.products.find((product) => product.id === productId);

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };
}
const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
