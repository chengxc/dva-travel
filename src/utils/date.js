export default {
  /**
   * 获取月日
   * @param {*} date
   */
  getYearMonthDay(date) {
    const year = date.getFullYear();
    return `${year}年${this.getMonthDay(date)}`;
  },
  getYearMonthDay2(date) {
    const year = date.getFullYear();
    const $month = date.getMonth() + 1;
    const month = $month >= 10 ? $month : `0${$month}`;
    const $day = date.getDate();
    const day = $day >= 10 ? $day : `0${$day}`;
    return `${year}-${month}-${day}`;
  },
  getMonthDay(date) {
    const $month = date.getMonth() + 1;
    const month = $month >= 10 ? $month : `0${$month}`;
    const $day = date.getDate();
    const day = $day >= 10 ? $day : `0${$day}`;
    return `${month}月${day}日`;
  },
  /**
   * 分钟-->时分
   */
  minuteToHourMinute(min) {
    const hour = Number.parseInt(min / 60);//eslint-disable-line
    return `${hour}时${(min % 60)}分`;
  },
};

