import { fetchProducts ,fetchProduct} from './service';

export default {
  namespace: 'products',
  state: {
    products: [],
    product: {},
  },
  effects: {

    * fetchProducts({ payload }, { call, put }) {
      const response = yield call(fetchProducts, payload);
      yield put({
        type: 'saveProducts',
        payload: response.data,
      });
    },
    * fetchProduct({ payload }, { call, put }) {
      const response = yield call(fetchProduct, payload);
      yield put({
        type: 'saveProduct',
        payload: response.data,
      });
    },
  },
  reducers: {
    saveProducts(state, action) {
      return { ...state, products: action.payload };
    },
    saveProduct(state, action) {
      return { ...state, product: action.payload };
    },
  },
};
