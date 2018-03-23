import axios from 'axios';

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
    *getTicket({ payload }, { put }) {    // eslint-disable-line
      const domain = 'https://m.ctrip.com';
      axios.post(`${domain}/restapi/soa2/10103/json/GetGrabTicketSucRateInfo?_fxpcqlniredt=09031120410292003758`, {
        ArriveStation: '北京',
        DepartureDate: '20180323',
        DepartureStation: '上海',
        contentType: 'json',
        head: {
          auth: null,
          cid: '09031120410292003758',
          ctok: '',
          cver: '1.0',
          extension: [{ name: 'protocal', value: 'https' }],
          lang: '01',
          sid: '1623',
          syscode: '09',
        },
      })
        .then((response) => {
          console.log(response.data);//eslint-disable-line
        })
        .catch((error) => {
          console.log(error);//eslint-disable-line
        });
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
