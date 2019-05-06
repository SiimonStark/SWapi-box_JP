import React from 'react';
import Loading from '../Loading/Loading';
import Crawl from '../Crawl/Crawl';
import Card from '../Card/Card';
import PropTypes from 'prop-types';



let DisplayField = ({isLoading, isTab, currentFilm, person}) => {
  let determineTab = () => {
    switch (isTab) {
      case 'Crawl': return (<Crawl film={currentFilm} />);
      case 'People': return (<Card person={'personName'} />)
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
      {display}
    </section>
  )
}

DisplayField.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isTab: PropTypes.string.isRequired,
  currentFilm: PropTypes.object.isRequired,
  person: PropTypes.array
}

export default DisplayField;