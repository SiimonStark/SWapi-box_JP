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

export const searchCharacter=(url)=>{
  let people =
    fetch(`${url}people`)
      .then(response=> response.json())
      .then(characters=> mapPeople(characters, url))
      // .then(promise=> console.log("ppl", promise));
  return people;
}

let mapPeople =(characters)=>{
  let unresolvedPeoples = characters.results.map(char=>{
    return Promise.all([findHomeWorld(char), findSpecies(char)])
      .then(results=> ({
        name: char.name,
        species: results[1],
        homeworld: results[0].name,
        population: results[0].popu,
        favorite: false,
        id: Date.now()
      }))
  });
  return Promise.all(unresolvedPeoples)
}

const findHomeWorld =(char)=>{
  return fetch(char.homeworld)
    .then(response=> response.json())
    .then(homeworld=> 
      char.homeworld = {name: homeworld.name, popu: homeworld.population})
}

const findSpecies =(char)=>{
  return fetch(char.species)
    .then(response=> response.json())
    .then(species=> species.name)
}