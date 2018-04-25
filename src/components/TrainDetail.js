import React from 'react';
import { connect } from 'dva';
import { Flex, WhiteSpace, Modal } from 'antd-mobile';
import classnames from 'classnames';
import ajax from '../utils/ajax';
import styles from './TrainDetail.css';


class TrainDetail extends React.Component {
  constructor({ match }) {
    super();
    const { params } = match;
    const {
      trainNumber, begin, end, date,
    } = params;

    console.log(trainNumber, begin, end, date); // esline-disable-line

    this.state = {
      stops: [],
      trainNumber,
      begin,
      end,
      date,
    };

    this.renderStations = this.renderStations.bind(this);
    this.renderStopModal = this.renderStopModal.bind(this);

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
        <Flex >
          <Flex.Item>站次</Flex.Item>
          <Flex.Item>车站</Flex.Item>
          <Flex.Item>到达</Flex.Item>
          <Flex.Item>发车</Flex.Item>
          <Flex.Item>停留</Flex.Item>
        </Flex>
        <WhiteSpace size="md" />
        {this.state.stops.map((stop) => {
              return (
                <div key={stop.StationSequence}>
                  <Flex >
                    <Flex.Item>{stop.StationSequence}</Flex.Item>
                    <Flex.Item>{stop.StationName}</Flex.Item>
                    <Flex.Item>{stop.ArrivalTime}</Flex.Item>
                    <Flex.Item>{stop.DepartureTime}</Flex.Item>
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
  render() {
    return (
      <div >
        <div>
          <p>{this.state.trainNumber}</p>
          <p>{this.state.begin}</p>
          <p>{this.state.end}</p>
          <p>{this.state.date}</p>
          <button onClick={() => { this.setState({ showModal: true }); }}>经停信息</button>
        </div>
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
