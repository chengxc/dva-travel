import React from 'react';
import { WhiteSpace, SegmentedControl, WingBlank, ActivityIndicator } from 'antd-mobile';
import { connect } from 'dva';
import styles from './DataList.css';

// 单个数组组件
import DataListItem from './DataListItem';

// 数据列表组件
class DataList extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    dispatch({
      type: 'dataList/getTopicsByType',
      topicType: '',
    });
    this.onSelectedTypeChange = this.onSelectedTypeChange.bind(this);
  }
  onSelectedTypeChange(v) {
    const index = v.nativeEvent.selectedSegmentIndex;
    const topicName = this.props.topicTypes[index].name;
    this.props.dispatch({
      type: 'dataList/getTopicsByType',
      topicType: topicName,
    });
  }

  render() {
    return (
      <div>
        <WhiteSpace size="sm" />
        {/* 类型开始 */}
        <div className={styles['topic-type-container']}>
          <WingBlank size="lg" className="sc-example">
            <SegmentedControl
              values={this.props.topicTypes.map(v => v.text)}
              selectedIndex={this.props.topicIndex}
              onChange={this.onSelectedTypeChange}
            />
          </WingBlank>
        </div>
        {/* 类型结束 */}
        <WhiteSpace size="sm" />
        {/* 内容开始 */}
        <div className={styles['list-container']}>
          { this.props.topics.map((item) => {
            // 渲染单个数据项
            return (<DataListItem item={item} key={item.id} />);
          })}
        </div>
        {/* 内容结束 */}
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
    topics: state.dataList.topics,
    topicIndex: state.dataList.topicIndex,
    topicTypes: state.dataList.topicTypes,
    loading: state.common.loading,
  };
}
/* eslint-disabled */
export default connect(mapStateToProps)(DataList);
/* eslint-disabled */

