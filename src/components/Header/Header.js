import React from 'react';
import { SearchBar, Flex } from 'antd-mobile';
import { Link } from 'dva/router';
import styles from './Header.css';


class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     // eslint-disable-next-line
//     // console.log(props);
//   }
  render() {
    return (
      <Flex className={styles['header-container']}>
        <Flex.Item>
          <Link to="/">
            <img
              className={styles.logo}
              src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
              alt=""
            />
          </Link>
        </Flex.Item>
        <Flex.Item>
          <div className={styles['search-area']}>
            <SearchBar
              placeholder=""
              onSubmit={value => console.log(value, 'onSubmit')}
              showCancelButton={false}
            />
          </div>
        </Flex.Item>
      </Flex>
    );
  }
}
export default Header;
