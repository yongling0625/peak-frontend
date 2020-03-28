import { fetchDownloadFile } from './service';

export default {
  namespace: 'download',
  state: {
    download: [],
  },
  effects: {

    * fetchDownloadFile({}, { call, put }) {
      const response = yield call(fetchDownloadFile);
      yield put({
        type: 'saveDownload',
        payload: response.data,
      });
    },
  },
  reducers: {
    saveDownload(state, action) {
      return { ...state, download: action.payload };
    },
  },
};
