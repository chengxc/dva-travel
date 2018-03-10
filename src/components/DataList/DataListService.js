import request from '../../utils/request';

export default {
  getTopics(topicType = '', page = 1) {
    return request(`https://cnodejs.org/api/v1/topics?tab=${topicType}&page=${page}`);
  },
};

