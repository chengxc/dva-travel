import DataListService from './DataListService';

export default {

  namespace: 'dataList',

  state: {
    error: false,
    topics: [],
    page: 1,
    topicIndex: 0,
    topicTypes: [
      { name: '', text: '全部' },
      { name: 'good', text: '精华' },
      { name: 'share', text: '分享' },
      { name: 'ask', text: '问答' },
      { name: 'job', text: '招聘' }],
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
    *getTopicsByType({ topicType = '' }, { put }) {
      yield put({ type: 'common/loading' });
      const articles = yield DataListService.getTopics(topicType);

      yield put({ type: 'getTopics', topics: articles.data.data, topicType });
      yield put({ type: 'common/loaded' });
    },
  },
  // 同步调用
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    getTopics(state, action) {
      return {
        ...state,
        topics: [...action.topics],
        topicIndex: state.topicTypes.findIndex(v => v.name === action.topicType),
      };
    },
    error(state) {
      return { ...state };
    },
  },

};
