import React from 'react';

const My = (props) => {
  return (
    <div>
      <div>我的</div>
      <div>{`${props}`}</div>
    </div>
  );
};

My.propTypes = {
};

export default My;
