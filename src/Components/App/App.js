import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentFilm: {},
      allCards: {
        people: [],
        planets: [],
        vehicles: [],
        favorites: []
      }
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/';
    let urlCurrentFilm = `${url}films`;
    let urlPeople = `${url}people`;
    let urlPlanets = '';
    let urlVehicles = '';

    let findCurrentFilm = (urlCurrentFilm) => {
      fetch(urlCurrentFilm)
      .then(response => response.json())
      .then(results => this.grabCurrFilm(results))
      .then(singleFilm => this.setState({currentFilm: singleFilm}))

    };

    let findPeople = (urlPeople) => {
      // let key ='allCards.people' 
      fetch(urlPeople)
        .then(response => response.json())
        .then(results => this.grabPeople(results))
        .then(setOfPeople => console.log('setOfPpl', setOfPeople))
    }
    
    window.setTimeout(findCurrentFilm(urlCurrentFilm), 1);
    window.setTimeout(findPeople(urlPeople), 1);
  }

  grabCurrFilm = (results) => {
    let randomIndex = Math.floor(Math.random()*(7-0) + 0)
    let film =  results.results[randomIndex];
    return { 
      title: film.title, 
      circa: film.release_date, 
      opener: film.opening_crawl}
  }

  grabPeople = (results) => {
// ** console.log('grabPeople', results.results)
    // let people = [this.state.allCards.people];
    let peopleArr = results.results.map((people) => {
// ** console.log(people)
      return {
        name: people.name,
// Todo: homeworld: people.homeworld,
// Todo: species: people.species,
// Todo: population: people.Population,
        favorite: false
      }
    })
// ** console.log('People: ', peopleArr);
    return peopleArr;
  }


  render() {
    console.log(this.state)

    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  
}

export default App;
