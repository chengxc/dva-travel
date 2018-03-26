import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, List, Flex } from 'antd-mobile';
import { Link } from 'dva/router';
import styles from './TrainList.less';
import date from '../utils/date';

const { Item } = List;

class TrainList extends React.Component {
  constructor({
    history, dispatch, match,
  }) {
    super();

    const { params } = match;
    this.onClickBack = this.onClickBack.bind(this);

    this.history = history;
    this.state = {
      showSeat: true, // 显示座位数，不显示价格
    };

    dispatch({
      type: 'trainList/getTrains',
      origin: params.origin,
      dest: params.dest,
      date: params.date,
      isHighway: params.isHighway,
    });
    this.dispatch = dispatch;
    this.search = this.search.bind(this);
  }
  onClickBack() {
    this.history.goBack();
  }
  search(e) {
    this.a = 5;
    const { key } = e.target.dataset;
    // 暂时不提供搜索功能
    if (key === 'search') return;

    this.dispatch({
      type: 'trainList/sort',
      key,
    });
  }
  render() {
    // console.log(this.props.isHighway);
    return (
      <div>
        <NavBar
          className={styles['top-bar']}
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.onClickBack}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >{this.props.depart} ⇀ {this.props.arrive}
        </NavBar>
        <Flex
          className={styles['date-bar']}
        >
          <Flex.Item>前一天</Flex.Item>
          <Flex.Item >{this.props.date}</Flex.Item>
          <Flex.Item>后一天</Flex.Item>
        </Flex>
        <List className={styles.trainlist}>
          {this.props.trains.map((train) => {
            // console.log(!!this.props.isHighway);
              // if (!!this.props.isHighway && (!train.IsFastPass)) {
              //   return console.log('不走');
              // }
                return (
                  <Item key={train.TrainNo}>
                    <Link to="/" >
                      <Flex>
                        <Flex.Item>
                          <div className={styles.begintime}>{train.DepartTime}</div>
                          <div className={styles['font-place']}>{train.DepartStation}</div>
                        </Flex.Item>
                        <Flex.Item className={styles['tip-line']}>
                          <div>{date.minuteToHourMinute(train.RunTime)}</div>
                          <div>{train.TrainNumber}</div>
                        </Flex.Item>
                        <Flex.Item>
                          <div>{train.ArriveTime}</div>
                          <div className={styles['font-place']}>{train.ArriveStation}</div>
                        </Flex.Item>
                        <Flex.Item className={styles['price-item']}>
                          <span className={`${styles['font-tip']} ${styles['font-tip-red']}`}>¥</span>
                          <span className={`${styles['font-important']} ${styles['font-buy']}`}>
                            {train.SeatList[0].SeatPrice}
                          </span>
                          <span className={styles['font-tip']}>起</span>
                        </Flex.Item>
                      </Flex>
                      {/* <div> {train.IsFastPass ? '高铁' : '普铁'} 出发时间： 到达时间： </div> */}
                      {/* 座位 价格 */}
                      {(this.state.showSeat) ? (
                        <Flex className={styles['seat-row']}>{train.SeatList.map((seat) => {
                          return (
                            <Flex.Item key={Math.random()}>
                              {seat.SeatName}:{seat.SeatInventory}张 {seat.SeatInventory <= 0 && (
                                <span className={styles['font-important']}>(抢)</span>
                              )}
                            </Flex.Item>
                          );
                        })}
                          <Flex.Item />
                        </Flex>
                      ) : (
                        <Flex className={styles['price-row']}>{train.SeatList.map((seat) => {
                          return (
                            <Flex.Item key={Math.random()}>
                              {seat.SeatName}:{seat.SeatPrice}
                            </Flex.Item>
                          );
                        })}
                        </Flex>
                      )}

                    </Link>
                  </Item>

                );
            })}
        </List>
        <div className={styles['bottom-bar']}>
          <Flex className={styles['bottom-bar-flex']} onClick={this.search}>
            <Flex.Item data-key="search">筛选</Flex.Item>
            <Flex.Item data-key="origin">出发</Flex.Item>
            <Flex.Item data-key="time">耗时</Flex.Item>
            <Flex.Item data-key="price">价格</Flex.Item>
          </Flex>
        </div>

      </div>
    );
  }
}

TrainList.propTypes = {
};

export default connect((state) => { //eslint-disable-line
  return {
    trains: state.trainList.trains,
    isHighway: state.trainList.isHighway,
    arrive: state.trainList.arrive,
    depart: state.trainList.depart,
    date: state.trainList.date,
  };
})(TrainList);
