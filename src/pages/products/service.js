import request from '@/utils/request';

export async function fetchProducts(payload) {
  return request('/products', {
    params: {
      category: payload.category
    },
  });
}

export async function fetchProduct(payload) {
  return request(`/products/${payload.productId}`);
}
