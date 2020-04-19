import { submitSelection } from './service';

export default {
  namespace: 'selection',
  state: {},
  effects: {

    * submitSelection({ payload }, { call }) {
      const response = yield call(submitSelection, payload);
    },
  },
};
