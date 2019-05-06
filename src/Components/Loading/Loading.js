import React from 'react';
import loaderGif from '../../images/Ripple-Loader.gif';

const Loading = () => {
  return (
    <div className="Loading">
      <h3>Patience You Must</h3>
      <img src={loaderGif} alt="loader" />
    </div>
  )
}

export default Loading;