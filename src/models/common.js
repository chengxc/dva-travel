
export default {

  namespace: 'common',

  state: {
    loading: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 异步调用
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  // 同步调用
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    // 加载中
    loading(state) {
      return { ...state, loading: true };
    },
    // 加载结束
    loaded(state) {
      return { ...state, loading: false };
    },
  },

};
