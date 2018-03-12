import React from 'react';
import { TabBar } from 'antd-mobile';

import Suggest from './Suggest';
import Travel from './Travel';
import Customer from './Customer';
import My from './My';

/**
 * 根据类型获取组件
 * @param {*} type
 */
const getComponentByType = (type) => {
  const obj = {
    suggest: (<Suggest />),
    travel: (<Travel />),
    customer: (<Customer />),
    my: (<My />),
  };
  return obj[type];
};

class MyTarbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
      isFullScreen: true,
      items: [{
        title: '推荐',
        key: 'suggest',
      }, {
        title: '旅游',
        key: 'travel',
      }, {
        title: '客服',
        key: 'customer',
      }, {
        title: '我的',
        key: 'my',
      }],
    };
    this.state.selectedTab = this.state.items[0].key;
    this.selectTab = this.selectTab.bind(this);
  }
  componentWillMount() {

  }
  selectTab(type) {
    const that = this;
    return () => {
      that.setState({
        selectedTab: type,
      });
    };
  }
  renderItem(title, type) {
    return (
      <TabBar.Item
        title={title}
        key={type}
        selected={this.state.selectedTab === type}
        onPress={this.selectTab(type)}
        icon={<div />}
        selectedIcon={<div />}
      >
        {getComponentByType(type)}
      </TabBar.Item>);
  }

  render() {
    return (
      <div style={this.state.isFullScreen ? {
 position: 'fixed', height: '100%', width: '100%', top: 0,
} : { height: 400 }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {this.state.items.map(v => this.renderItem(v.title, v.key))}
        </TabBar>

      </div>
    );
  }
}

MyTarbar.propTypes = {
};

export default MyTarbar;
