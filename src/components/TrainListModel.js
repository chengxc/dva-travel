
import TrainListService from './TrainListService';

export default {

  namespace: 'trainList',

  state: {
    isHighway: false,
    trains: [],
    arrive: '',
    depart: '',
    originAsc: false,
    timeAsc: false,
    date: '',
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
    * getTrains({origin,dest,isHighway,date}, {put}) { // eslint-disable-line
      yield put({
        type: 'common/loading',
      });
      const response = yield TrainListService.getTrains({
        dest,
        origin,
        date,
      });
      console.log(response);
      yield put({
        type: 'save',
        trains: response.TrainInfoList,
        isHighway,
        arrive: response.ChineseArriveStation,
        depart: response.ChineseDepartStation,
        date,
      });
      yield put({
        type: 'common/loaded',
      });
    },
  },
  // 同步调用
  reducers: {
    save(state, action) {
      return {
        ...state,
        trains: action.trains,
        isHighway: action.isHighway,
        arrive: action.arrive,
        depart: action.depart,
        departDesc: false,
        date: action.date,
      };
    },
    sort(state, action) {
      const sortFn = (key) => {
        let keyName;
        let changeFn;
        switch (key) {
          case 'origin':
            keyName = 'DepartTime';
            changeFn = (time) => { return Number(time.replace(':', '')); };
            break;
          case 'time':
            keyName = 'RunTime';
            changeFn = time => time;
            break;
          default:
            keyName = '';
        }
        const trains = state.trains.sort((x, y) => {
          const departX = changeFn(x[keyName]);
          const departY = changeFn(y[keyName]);

          return state[`${key}asc`] ? (departY - departX) : (departX - departY);
        });
        return {
          ...state,
          trains: [...trains],
          [`${key}asc`]: !state[`${key}asc`],
        };
      };

      return sortFn(action.key);
    },
  },

};
