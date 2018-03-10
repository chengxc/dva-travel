import React from 'react';
import { connect } from 'dva';
import { ActivityIndicator } from 'antd-mobile';
import styles from './Topic.css';
import Header from '../Header/Header';
import dateConvert from '../../utils/dateConvert';
import Reply from './Reply';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    // 打印文章id

    // 根据文章id渲染
    props.dispatch({
      type: 'topic/getTopicById',
      topicId: props.match.params.id,
    });
  }
  render() {
    return (
      <div className={styles['topic-container']}>
        {this.props.title && (
        <div>
          <Header />
          <div className={styles['topic-header']}>
            <h2 className={styles['topic-title']}>{this.props.title}</h2>
            <div className={styles['topic-desc']} >
              <span>·</span>
              <span>发布于</span>
              <span>{dateConvert.getDateTimeStr(this.props.create_at)}</span>
              <span>·</span>
              <span>作者</span>
              <span>{this.props.author.loginname}</span>
            </div>
          </div>
          <div className={styles['topic-content']} >
            <div>{this.props.content}</div>
          </div>
          <div className={styles['topic-reply']} >
            <div className={styles['topic-reply-title']} >
              <span>{this.props.reply_count}</span>
              <span>条回复</span>
            </div>
            {this.props.replies.map(item => (
              <Reply item={item} />
            ))}
          </div>
        </div>
      )}
        <ActivityIndicator
          size="large"
          toast
          text="Loading..."
          animating={this.props.loading}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // 主题内容
    ...state.topic.data,
    loading: state.common.loading,
  };
}
export default connect(mapStateToProps)(Topic);
