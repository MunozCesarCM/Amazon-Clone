import axios from 'axios';

let productsCache = null;

export async function fetchProducts() {
  if (productsCache !== null) return productsCache;

  productsCache = await axios.get(
    'https://fakestoreapi.com/products'
  );
  return productsCache;
}
