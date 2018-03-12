import React from 'react';
import { connect } from 'dva';
import DataList from '../components/DataList/DataList';
import Header from './Header/Header';

const items = [
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: 'how are you ? fine , thank you , and you ?',
    date: '1个月前',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '1分钟前',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '1小时前',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  }, {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '你好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '我好',
    content: '',
    date: '',
  },
  {
    avatar: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '大家好',
    content: '',
    date: '',
  },
];

const Suggest = () => {
  return (
    <div>
      <Header />
      <DataList items={items} />
    </div>
  );
};

Suggest.propTypes = {
};

export default connect()(Suggest);
