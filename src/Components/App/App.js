import React, { Component } from 'react';
import { findRandomFilm, searchCharacter } from '../../helper_Fetch';
import Header from '../Header/Header';
import DisplayField from '../DisplayField/DisplayField';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isTab: 'Crawl',
      currentFilm: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/';

    findRandomFilm(`${url}films`)
      .then(singleFilm =>
        this.setState({ currentFilm: singleFilm, isLoading: false })
      )
      .catch(error => console.log(error));
    
    searchCharacter(url)
      .then(people => this.setState({ people }))
      .catch(error => console.log(error));
  }

  updateTab = (e) => {
    let tabName = e.target.id;
    this.setState({isTab: tabName})
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <div className="backgroundImg">
          <main>
            <Header updateTab={this.updateTab} />
            <DisplayField
              isLoading={this.state.isLoading}
              isTab={this.state.isTab}
              currentFilm={this.state.currentFilm}
              people= {this.state.people} />
          </main>
        </div>
      </div>
    );
  }
  
}

export default App;
