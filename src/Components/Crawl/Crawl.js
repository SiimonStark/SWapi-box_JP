import React from 'react';
import PropTypes from 'prop-types';

const Crawl = ({film}) => {
  return (
    <div className="Crawl">
      <div className="fade" />
      <section className="Crawl--container">
        <article className="Crawl--content">
          <p>{film.opener}</p>
          <h4>({film.circa})</h4>
          <h3>{film.title}</h3>
        </article>
      </section>
    </div>
  );
}

Crawl.propTypes = {
  film: PropTypes.object.isRequired
}

export default Crawl;