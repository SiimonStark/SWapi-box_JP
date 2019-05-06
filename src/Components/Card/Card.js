import React from 'react';
import PropTypes from 'prop-types';

const Card = ({person}) => {
  let {name, species, homeworld, population, favorite} = person;
  return (
    <section className="Card">
      <h4>{name}</h4>
      <p>Species: {species}</p>
      <p>Homeworld: {homeworld}</p>
      <p className="home-pop">Homeworld Population:</p>
      <p>{population}</p>
      <button className={`fave-${favorite}`}>
        <i class="fas fa-star" />
      </button>
    </section>
  );
}

Card.propTypes ={
  person: PropTypes.object.isRequired
}

export default Card;