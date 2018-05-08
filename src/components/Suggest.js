import React from 'react';
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import MainMenu from './MainMenu';
import Banner from './Banner/index';

const Suggest = ({ dispatch }) => {
  dispatch({
    type: 'common/getTicket',
  });
  return (
    <div>
      <Banner />
      <WhiteSpace size="xs" />
      <MainMenu />
    </div>
  );
};

Suggest.propTypes = {
};

export default connect()(Suggest);
