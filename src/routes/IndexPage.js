import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MyTarBar from '../components/MyTabBar';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <MyTarBar />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
