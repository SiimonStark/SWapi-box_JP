import React from 'react';

const Crawl = ({film}) => {
  return (
    <div>
      <p>{film.opener}</p>
      <h3>{film.title} ({film.circa})</h3>
    </div>
  )
}

export default Crawl;