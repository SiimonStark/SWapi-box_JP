import { promised } from "q";

// import React from 'react';

export const findRandomFilm = (urlCurrentFilm) => {
  let film = fetch(urlCurrentFilm)
    .then(response => response.json())
    .then(results => grabCurrFilm(results));

  return film;
};

const grabCurrFilm = (results) => {
  let randomIndex = Math.floor(Math.random() * (7 - 0) + 0)
  let film = results.results[randomIndex];
  return {
    title: film.title,
    circa: film.release_date,
    opener: film.opening_crawl
  }
}

export const findPeople = (url, state) => {


  let peoples = 
    fetch(`${url}people`)
      .then(response => response.json())
      .then(results => grabPeople(results))
      // .then(peopleArr => setPeople(peopleArr, state))
      // .then(peopleArr => console.log('last then',peopleArr));

  console.log('this console',peoples)
  return Promise.all([peoples]);
}

const grabPeople = (results) => {
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
  console.log('People: ', peopleArr);
  return peopleArr;
}

const setPeople = (peopleArr, state) => {
  let tempState = state;
  tempState.allCards.people.push(peopleArr);
  return tempState;
}