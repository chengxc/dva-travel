import axios from 'axios';

const domain = 'https://m.ctrip.com';

export default {
  getBanners() {
    return new Promise((resolve, reject) => {
      axios.post(`${domain}/restapi/soa2/10245/json/GetGlobalADListV4`, {
        AdLocation: {
          CityID: 1,
        },
        ChannelID: '1623',
        DeviceInfo: {
          ScreenWidth: 1242,
          ScreenHeight: 2208,
        },
        ScreenHeight: 2208,
        ScreenWidth: 1242,
        Extensions: [{
          Name: 'AllianceID',
          Value: '',
        },
        {
          Name: 'SID',
          Value: '',
        },
        {
          Name: 'OUID',
          Value: '',
        },
        ],
        GlobalBusinessInfoList: [{
          BizType: 0,
          PageCode: 1,
        }],
        SiteID: '',
        SiteType: '',
        SystemCode: 9,
        head: {
          auth: null,
          cid: '09031120410292003758',
          ctok: '',
          cver: '1.0',
          lang: '01',
          sid: '1623',
          syscode: '09',
        },
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

