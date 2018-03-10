export default{
  getDateTimeStr(d) {
    let date;
    if (typeof d === 'string') {
      date = new Date(d);
    } else if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('请提供字符串或者日期类型的日期格式');
    }

    // 获取当前时间的毫秒数
    const now = Date.now();
    const dateToNum = +date;
    // 获取时间差
    const difference = now - dateToNum;

    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    if (difference / oneYear >= 1) {
      return `${Math.floor(difference / oneYear)}年前`;
    }
    if (difference / oneMonth >= 1) {
      return `${Math.floor(difference / oneMonth)}月前`;
    }
    if (difference / oneWeek >= 1) {
      return `${Math.floor(difference / oneWeek)}周前`;
    }
    if (difference / oneDay >= 1) {
      return `${Math.floor(difference / oneDay)}天前`;
    }
    if (difference / oneHour >= 1) {
      return `${Math.floor(difference / oneHour)}小时前`;
    }
    if (difference / oneMinute >= 1) {
      return `${Math.floor(difference / oneMinute)}分钟前`;
    }
    return '刚刚';
  },
};

