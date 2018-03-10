import TopicService from './TopicService';

export default {

  namespace: 'topic',

  state: {
    data: null,
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
    *getTopicById({ topicId }, { put }) {
      yield put({ type: 'common/loading' });

      const res = yield TopicService.getTopicById(topicId);
      const resData = res.data;
      if (resData.success) {
        yield put({ type: 'getTopic', data: resData.data });
      }


      yield put({ type: 'common/loaded' });
    },
  },
  // 同步调用
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    getTopic(state, action) {
      return { ...state, data: action.data };
    },
  },

};
