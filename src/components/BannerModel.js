
import BannerService from './BannerService';

export default {

  namespace: 'banner',

  state: {
    banners: [],
  },

  subscriptions: {
    setup({ dispatch , history }) { // eslint-disable-line
    },
  },
  // 异步调用
  effects: {
    * fetch({ payload }, { call , put }) { // eslint-disable-line
      yield put({
        type: 'save',
      });
    },
    * getBanner({payload,}, {put,}) { // eslint-disable-line
      const response = yield BannerService.getBanners();
      const banners = response.data.Ads[0].ADContentList;
      yield put({
        type: 'save',
        banners,
      });
    },
  },
  // 同步调用
  reducers: {
    save(state, action) {
      return {
        ...state,
        banners: action.banners,
      };
    },
  },

};
