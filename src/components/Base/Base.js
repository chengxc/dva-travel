import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { connect } from 'dva';

class Base extends React.Component {
  render() {
    return (
      <ActivityIndicator
        size="large"
        toast
        text="Loading..."
        animating={this.props.loading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.common.loading,
  };
}

export default connect(mapStateToProps)(Base);
