import axios from 'axios';
import Const from '../../utils/const';

export default {
  getTrains({
    dest, origin, date,
  }) {
    return new Promise((resolve, reject) => {
      axios.post(`${Const.DOMAIN}/restapi/soa2/10103/json/GetBookingByStationV3?_fxpcqlniredt=09031120410292003758`, {
        ChannelName: 'ctrip.h5',
        ArriveStation: dest,
        DepartDate: date,
        DepartStation: origin,
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
      }).then((response) => {
        resolve(response.data.ResponseBody);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

