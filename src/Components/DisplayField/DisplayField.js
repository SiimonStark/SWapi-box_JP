import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import Crawl from '../Crawl/Crawl';
import Card from '../Card/Card';



let DisplayField = ({isLoading, isTab, currentFilm}) => {
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
    <section>
      {loading}
      {display}
    </section>
  )
}

export default DisplayField;