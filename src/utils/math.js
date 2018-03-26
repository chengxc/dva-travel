export default{
  /**
   * 获取随机数
   * @param {*} num num=10表示0-9  num=100表示0-99 num=1000表示0-999
   */
  getRandom(num) {
    return Math.floor(Math.random() * num);
  },
};

