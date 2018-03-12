import React from 'react';
import { connect } from 'dva';
import styles from './ToTop.css';
// import { WhiteSpace } from 'antd-mobile';

/* eslint-disable */
const toTop = () => {
  let y = window.scrollY;
  var timer = setInterval(() => {
    if (y >= 0) {
      y -= 100;
      window.scrollTo(0, y);
    } else {
      clearInterval(timer);
    }
  }, 10);
};
/* eslint-disable */

class ToTop extends React.Component {
  constructor(props) {
    console.log('执行了ToTop');
    super(props);
    this.scroll = this.scroll.bind(this);
    this.state = {
      isShow: this.props.isShow,
    };
  }
  /* eslint-disable */
  scroll() {
    // console.log(this.state.isShow);
    this.setState({
      isShow:window.pageYOffset >= 50
    })
  }
  /* eslint-disable */
  componentDidMount(){
    window.addEventListener("scroll",()=>{
      // alert("滚动了");
      this.scroll();
    })
    
  }
  render() {
    return (
      <div>
        {this.state.isShow && (
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
export default connect(mapStateToProps)(ToTop);
