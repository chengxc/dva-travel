import React from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd-mobile';

class Banner extends React.Component {
  constructor({ dispatch }) {
    super();
    this.state = {
      imgHeight: 176,
    };
    dispatch({
      type: 'banner/getBanner',
    });
  }
  render() {
    return (
      <Carousel
        autoplay
        infinite
        autoplayInterval={1500}
      >
        {this.props.banners.map(val => (
          <a
            key={val.ADID}
            href={val.LinkUrl}
            style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight,
            }}
          >
            <img
              src={val.SrcUrl}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                  this.setState({ imgHeight: 'auto' });
                }}
            />
          </a>
          ))}
      </Carousel>
    );
  }
}

Banner.propTypes = {
};

export default connect((state) => { //eslint-disable-line
  return {
    banners: state.banner.banners,
  };
})(Banner);
