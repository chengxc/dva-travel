import React from 'react';
// import { WhiteSpace } from 'antd-mobile';
// import { Link } from 'dva/router';
import styles from './Reply.css';

import dateConvert from '../../utils/dateConvert';

const Reply = ({ item }) => {
  return (
    <div className={styles['reply-container']} >
      <div className={styles['reply-header']}>
        <div className={styles.avatar}>
          <img src={item.author.avatar_url} alt="" />
        </div>
        &nbsp;&nbsp;
        <div className={styles['author-name']}>{item.author.loginname}</div>
        &nbsp;&nbsp;
        <div className={styles['create-time']}>
          {dateConvert.getDateTimeStr(item.create_at)}
        </div>
        <div className={styles['star-count']}>
          <i className="fa fa-thumbs-o-up" />
        点赞数：{item.ups.length}
        </div>
      </div>
      <div className={styles['reply-content']}>{item.content}</div>
    </div>
  );
};

export default Reply;
