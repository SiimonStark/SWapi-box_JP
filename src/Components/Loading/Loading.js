import React from 'react';
import loaderGif from '../../images/Ripple-Loader.gif';

const Loading = () => {
  return (
    <div className="Loading">
      <div className="fade"></div>
      <article className="loader">
        <h3>Patience You Must</h3>
        <img src={loaderGif} alt="loader" />
      </article>
    </div>
  );
}

export default Loading;