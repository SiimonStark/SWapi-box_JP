import React from 'react';
import Loading from '../Loading/Loading';
import Crawl from '../Crawl/Crawl';
import Card from '../Card/Card';
import PropTypes from 'prop-types';



let DisplayField = ({isLoading, isTab, currentFilm, people}) => {
  let determineTab = () => {
    switch (isTab) {
      case 'Crawl': return (<Crawl film={currentFilm} />);
      case 'People': 
      return (
        <section className="cardContainer">
          {people.map(personInfo => {
            return <Card person={personInfo} key={personInfo.id} />;
          })}
        </section>
      );
      
      default: console.log('nothing');
    }
  }
  let loading;
  let display;

  if (isLoading) {
    loading = <Loading />;
    display = null;
  } else {
    loading = null;
    display = determineTab();
  }

  return (
    <section className="DisplayField">
      {loading}
      <div className="fade" />
      {display}
    </section>
  );
}

DisplayField.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isTab: PropTypes.string.isRequired,
  currentFilm: PropTypes.object.isRequired,
  people: PropTypes.array
}

export default DisplayField;