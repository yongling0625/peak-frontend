import { submitContact } from './service';

export default {
  namespace: 'contact',
  state: {},
  effects: {

    * submitContact({ payload }, { call }) {
      const response = yield call(submitContact, payload);
    },
  },
};
