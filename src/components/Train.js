import React from 'react';
import { List, Button, Checkbox, Calendar, NavBar, Icon } from 'antd-mobile';
import styles from './Train.css';
import date from '../utils/date';

const { Item } = List;
const { CheckboxItem } = Checkbox;

class Train extends React.Component {
  constructor({ history }) {
    super();
    this.state = {
      now: new Date(),
      show: false,
      date: new Date(),
      config: {
        type: 'one',
      },
      origin: '',
      dest: '',
    };
    this.showCalender = this.showCalender.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.history = history;
  }
  onCancel() {
    this.setState({
      show: false,
    });
  }
  onConfirm(_date) {
    this.setState({
      show: false,
      date: _date,
    });
  }
  onClickBack() {
    this.history.goBack();
  }
  onSubmit() {
    this.history.push({
      pathname: `/trainlist/${this.state.origin}/${this.state.dest}/${date.getYearMonthDay2(this.state.date)}/${this.state.isHighway}`,
      search: `isHighway=${this.state.isHighway}`,
    });
  }
  // 处理表单输入
  onInputChnage(name) {
    return (e) => {
      // console.log(e.target.value);
      this.setState({
        [name]: e.target.value,
      });
    };
  }
  showCalender() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.onClickBack}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
      ]}
        >火车票
        </NavBar>
        <img className={styles['img-header']} src="https://images3.c-ctrip.com/train/h5/train-index-adv-default.png" alt="" />
        <List>
          <Item>
            <input type="text" value={this.state.origin} onChange={this.onInputChnage('origin')} />
            到
            <input type="text" value={this.state.dest} onChange={this.onInputChnage('dest')} />
          </Item>
          <Item>
            <Button onClick={this.showCalender} >{date.getYearMonthDay(this.state.date)}</Button>
          </Item>
          <Item>
            <CheckboxItem key="student">
              学生票
            </CheckboxItem>
            <CheckboxItem key="highway">
              高铁动车
            </CheckboxItem>
          </Item>
          <Item>
            <Button className={styles['btn-submit']} onClick={this.onSubmit}>查询</Button>
          </Item>
        </List>
        {/* 日期选择器 */}
        <Calendar
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          getDateExtra={this.getDateExtra}
          defaultDate={this.state.now}
          minDate={new Date(+this.state.now)}
          maxDate={new Date(+this.state.now + (60 * 24 * 3600 * 1000))}
        />
      </div>
    );
  }
}

Train.propTypes = {
};

export default Train;
