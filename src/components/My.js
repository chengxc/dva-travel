import React from 'react';

const Example = (props) => {
  return (
    <div>
      <div>我的</div>
      <div>{`${props}`}</div>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
