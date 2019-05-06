import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <section className="Card" >
      <div className="fade"></div>
      <article className="card__content">
        <h4>props.person</h4>
        <p>content</p>
      </article>
    </section>
  )
}

Card.propTypes ={
  person: PropTypes.string.isRequired
}

export default Card;