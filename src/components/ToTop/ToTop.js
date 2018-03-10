import React from 'react';
import { connect } from 'dva';
import styles from './ToTop.css';
// import { WhiteSpace } from 'antd-mobile';

/* eslint-disable */
const toTop = () => {
  window.scrollTo(0, 0);
};
/* eslint-disable */

class Topic extends React.Component {
  constructor(props) {
    console.log("执行了");
    super(props);
    this.scroll = this.scroll.bind(this);
    window.addEventListener("scroll",()=>{
      alert("滚动了");
      this.scroll();
    })
  }
  /* eslint-disable */
  scroll() {
    console.log(this.props.isShow);
    this.props.isShow = window.pageYOffset >= 50;
  }
  /* eslint-disable */
  render() {
    return (
      <div>
        {this.props.isShow && (
          <div onClick={toTop} className={styles['scroll-container']}>回到顶部</div>
        )}
      </div>
    );
  }
}
function mapStateToProps() {
  return {
    isShow: false,
  };
}
export default connect(mapStateToProps)(Topic);
