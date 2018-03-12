// 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

import dva from 'dva';
import DataListModel from './components/DataList/DataListModel';
import CommonModel from './models/common';
import TopicModel from './components/Topic/TopicModel';
import router from './router';

import './assets/common.css';
// import './assets/fontawesome/css/fontawesome-all.css';

// 1. 初始化
const app = dva();

// 2. 注入插件
// app.use({});

// 3. Model
app.model(DataListModel);
app.model(CommonModel);
app.model(TopicModel);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
