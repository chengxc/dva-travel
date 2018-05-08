// 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

import dva from 'dva';
import BannerModel from './components/BannerModel';
import TrainListModel from './components/TrainList/TrainListModel';
import CommonModel from './models/common';
import router from './router';

import './assets/common.css';
// import './assets/fontawesome/css/fontawesome-all.css';

// 1. 初始化
const app = dva();

// 2. 注入插件
// app.use({});

// 3. 注入Model
app.model(CommonModel);
app.model(BannerModel);
app.model(TrainListModel);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
