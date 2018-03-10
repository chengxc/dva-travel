import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router';
import styles from './DataList.css';


import dateConvert from '../../utils/dateConvert';
// 单个数据组件
const DataListItem = ({ item }) => {
  return (
    <div>
      <WhiteSpace size="xs" />
      <div className={styles['item-container']}>
        <div
          className={styles['item-avatar']}
          style={{ backgroundImage: `url(${item.author.avatar_url})` }}
        />
        <div className={styles['item-article']} >
          <WhiteSpace size="sm" />
          <div className={styles['item-article-title']}>
            <Link to={`/topic/${item.id}`}>{item.title}</Link>
          </div>
          <div className={styles['item-article-count']}>
            <span className={styles['item-article-reply-count']}>{item.reply_count}</span>
            /
            <span className={styles['item-article-visit-count']}>{item.visit_count}</span>
          </div>
        </div>
        <div className={styles['item-date']} >
          <WhiteSpace size="sm" />
          {(dateConvert.getDateTimeStr(item.last_reply_at))}
        </div>
      </div>

    </div>
  );
};
export default DataListItem;
