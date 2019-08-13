import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return (
    <div className="PageError">
        <span>❌{props.error.message}😱</span>
    </div>
  );
}

export default PageError;
