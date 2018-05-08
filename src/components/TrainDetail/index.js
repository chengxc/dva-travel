import React from 'react';
import { connect } from 'dva';
import { Flex, WhiteSpace, Modal, NavBar, Icon, List, InputItem, Button } from 'antd-mobile';
import classnames from 'classnames';
import ajax from '../../utils/ajax';
import styles from './TrainDetail.css';

class TrainDetail extends React.Component {
  constructor({ match, trains, history }) {
    super();
    const { params } = match;
    const {
      trainNumber, begin, end, date, origin, dest,
    } = params;

    const trainDetail = trains.find(v => v.TrainNumber === trainNumber);

    const seatList = trainDetail ? trainDetail.SeatList : [];
    console.log(trainNumber, begin, end, date, origin, dest); // esline-disable-line

    this.state = {
      stops: [],
      trainNumber,
      begin,
      end,
      date,
      origin,
      dest,
      trainDetail: trainDetail || {},
      seatList,
      leastSeat: seatList.sort((v1, v2) => (v1.SeatPrice - v2.SeatPrice)),
    };

    this.history = history;
    this.renderStations = this.renderStations.bind(this);
    this.renderStopModal = this.renderStopModal.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderSeats = this.renderSeats.bind(this);

    ajax.post('restapi/soa2/10103/json/GetTrainStopListV3?_fxpcqlniredt=09031120410292003758', {
      DepartureDate: date,
      TrainName: trainNumber,
      contentType: 'json',
    }).then((res) => {
      console.log('接收到数据：', res.TrainStopList); //eslint-disable-line
      this.setState({ stops: res.TrainStopList });
    });
  }

  /**
   * 经停列表
   */
  renderStations() {
    return (
      <div>
        <Flex>
          <Flex.Item>&nbsp;</Flex.Item>
          <Flex.Item className={styles['detail-title']}>车次详情表</Flex.Item>
          <Flex.Item>&nbsp;</Flex.Item>
        </Flex>
        <Flex className={`${styles['detail-header']} ${styles['detail-row']}`}>
          <Flex.Item>站次</Flex.Item>
          <Flex.Item>车站</Flex.Item>
          <Flex.Item>到达</Flex.Item>
          <Flex.Item>发车</Flex.Item>
          <Flex.Item>停留</Flex.Item>
        </Flex>
        <WhiteSpace size="md" />
        {this.state.stops.map((stop, index) => {
              return (
                <div key={stop.StationSequence}>
                  <Flex
                    className={
                      `${stop.StationName.indexOf(this.state.origin) >= 0 ? styles['vip-origin'] : ''}
                       ${stop.StationName.indexOf(this.state.dest) >= 0 ? styles['vip-dest'] : ''}
                       ${styles['detail-row']}
                       ${index === 0 ? styles['detail-first'] : ''}
                       ${index === this.state.stops.length - 1 ? styles['detail-end'] : ''}
                      `
                    }
                  >
                    <Flex.Item>{stop.StationSequence}</Flex.Item>
                    <Flex.Item>{stop.StationName}</Flex.Item>
                    <Flex.Item>{index === 0 ? '始发' : stop.ArrivalTime}</Flex.Item>
                    <Flex.Item>{index === this.state.stops.length - 1 ? '到达' : stop.DepartureTime}</Flex.Item>
                    <Flex.Item>{stop.StopTimes}</Flex.Item>
                  </Flex>
                  <WhiteSpace size="md" />
                </div>
              );
          })}
      </div>
    );
  }
  /**
   * 经停模态框
   */
  renderStopModal() {
    // 经停信息
    return (
      <Modal
        visible={this.state.showModal}
        transparent
        maskClosable
              // onClose={this.onClose('modal1')}
        // title="Title"
        footer={[]}
        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        className={classnames(styles['detail-modal'])}
      >
        <div
          className={styles['detail-modal-content']}
          onKeyDown={() => { console.log('1');/*eslint-disable-line*/ }}
          onClick={() => { this.setState({ showModal: false }); }}
        >
          {this.renderStations()}
        </div>
      </Modal>
    );
  }
  /**
   * 渲染头部
   */
  renderHeader() {
    return (
      <Flex className={styles['header-container']}>
        <Flex.Item className={styles['header-left']}>
          <div>{this.state.trainDetail.DepartStation}</div>
          <div className={styles['header-time']}>{this.state.begin}</div>
          <div>{this.state.date}</div>
        </Flex.Item>
        <Flex.Item className={styles['header-middle']}>
          <div className={styles['header-trainno']}>{this.state.trainNumber}</div>
          <div className={styles['header-stop-text']}>
            <span
              onKeyDown={() => true}
              onClick={() => { this.setState({ showModal: true }); }}
            >经停信息
            </span>
          </div>
        </Flex.Item>
        <Flex.Item className={styles['header-right']}>
          <div>{this.state.trainDetail.ArriveStation}</div>
          <div className={styles['header-time']}>{this.state.end}</div>
          <div>
            {this.state.leastSeat[0] && (`${this.state.leastSeat[0].SeatName} ${this.state.leastSeat[0].SeatPrice}`)}
          </div>
        </Flex.Item>
      </Flex>
    );
  }
  /**
   * 渲染座位区域
   */
  renderSeats() {
    return (
      <Flex className={styles['seat-container']}>
        {this.state.seatList.map((v, i) => {
        console.log(v);
        return (
          <Flex.Item key={Math.random()} className={`${styles['seat-item']} ${i === 0 ? styles.current : ''}`}>
            <div className={styles['seat-type']}>{v.SeatName}</div>
            <div className={styles['seat-price']}>{v.SeatPrice}</div>
            <div className={styles['seat-snapup']}>{v.SeatInventory || (<a href="/">抢票</a>)}</div>
          </Flex.Item>
        );
      })}
      </Flex>
    );
  }
  render() {
    return (
      <div className={styles['detail-container']}>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.history.go(-1)}
        >订单填写
        </NavBar>

        {/* 渲染头部 */}
        {this.renderHeader()}
        {/* 渲染座位区域 */}
        {this.renderSeats()}
        {/* 渲染表单区域 */}
        <List>
          <List.Item arrow="horizontal">备选车次</List.Item>
          <List.Item arrow="horizontal">备选坐席</List.Item>
          <List.Item arrow="horizontal">备选日期</List.Item>
          <List.Item> <i className={styles['icon-12306']} /> 登录12306出票成功率更高</List.Item>
          <List.Item>
            <InputItem
              type="phone"
              placeholder="接收出票状态和出票信息"
            >手机号码
            </InputItem>
          </List.Item>
        </List>
        <Button className={styles['btn-important']}>下一步</Button>
        {/* 渲染经停列表模态框 */}
        {this.renderStopModal()}
      </div>
    );
  }
}

TrainDetail.propTypes = {
};

export default connect((state) => { //eslint-disable-line
  return {
    trains: state.trainList.trains,
    isHighway: state.trainList.isHighway,
    arrive: state.trainList.arrive,
    depart: state.trainList.depart,
    date: state.trainList.date,
    loading: state.common.loading,
  };
})(TrainDetail);
