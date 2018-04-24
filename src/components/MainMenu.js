import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Flex, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './MainMenu.css';


class MainMenu extends React.Component {
  constructor() {
    super();
    console.log('主菜单');//eslint-disable-line
  }
  render() {
    return (
      <div className={styles['menu-container']} >
        <Flex className={classnames(styles['menu-row'], styles.hotel)}>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">酒店</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">海外酒店</a>
            <a href="/">特价酒店</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">团购</a>
            <a href="/">民俗·客栈</a>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="sm" />
        <Flex className={classnames(styles['menu-row'], styles.ticket)}>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">机票</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <Link to="/train">火车票·抢票</Link>
            <a href="/">特价机票</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">汽车票·船票</a>
            <a href="/">专车·租车</a>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="sm" />
        <Flex className={classnames(styles['menu-row'], styles.travel)}>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">旅游</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">目的地攻略</a>
            <a href="/">周边游</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">邮轮旅行</a>
            <a href="/">定制旅行</a>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="sm" />
        <Flex className={classnames(styles['menu-row'], styles.other)}>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">景点·玩乐</a>
            <a href="/">礼品卡</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">美食林</a>
            <a href="/">WIFI·电话卡</a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">购物·信用卡</a>
            <a href="/">保险·签证</a>
          </Flex.Item>
        </Flex>
        <WhiteSpace size="sm" />
        <Flex className={classnames(styles['menu-row'], styles.small)}>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>自由行</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-hotel'], styles.icon)} />
              <em>酒店+景点</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-airpark'], styles.icon)} />
              <em>机场停车</em>
            </a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">
              <i className={classnames(styles['icon-groupleader'], styles.icon)} />
              <em>微领队</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>境外玩乐</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>行李寄送</em>
            </a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>一日游</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-foreign-currency'], styles.icon)} />
              <em>外币兑换</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>行李寄送</em>
            </a>
          </Flex.Item>
          <Flex.Item className={styles['menu-cell']}>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>高端游</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-join'], styles.icon)} />
              <em>加盟合作</em>
            </a>
            <a href="/">
              <i className={classnames(styles['icon-freestyle'], styles.icon)} />
              <em>行李寄送</em>
            </a>
          </Flex.Item>
        </Flex>

      </div>
    );
  }
}
MainMenu.propTypes = {
};

export default connect()(MainMenu);
