import request from '../../utils/request';

const baseUrl = 'https://cnodejs.org/api/v1';

export default {
  getTopicById(topicId) {
    return request(`${baseUrl}/topic/${topicId}?mdrender=false`);
  },
};
