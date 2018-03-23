export default {
  /**
   * 获取月日
   * @param {*} date
   */
  getYearMonthDay(date) {
    const year = date.getFullYear();
    return `${year}年${this.getMonthDay(date)}`;
  },
  getMonthDay(date) {
    const $month = date.getMonth() + 1;
    const month = $month >= 10 ? $month : `0${$month}`;
    const $day = date.getDate();
    const day = $day >= 10 ? $day : `0${$day}`;
    return `${month}月${day}日`;
  },
};

