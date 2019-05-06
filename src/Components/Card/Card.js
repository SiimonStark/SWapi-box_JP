import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <section className="card" >
      <div className="fade"></div>
      <h4>props.person</h4>
      <p>content</p>
    </section>
  )
}

Card.propTypes ={
  person: PropTypes.string.isRequired
}

export default Card;