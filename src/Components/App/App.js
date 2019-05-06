import React, { Component } from 'react';
import { findRandomFilm, findPeople } from '../../helper_Fetch';
import Header from '../Header/Header';
import DisplayField from '../DisplayField/DisplayField';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isTab: 'Crawl',
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
    let currState = this.state;

    findRandomFilm(`${url}films`)
      .then(singleFilm => this.setState({ currentFilm: singleFilm, isLoading: false }));
    
    let result;
    // findPeople(url, currState);
      let func = ()=>{
        result = findPeople(url, currState)
          .then(result => this.setState({result}))
        console.log('result', result)
      }

      func()
    
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
              person= {this.state.allCards.people} />
          </main>
        </div>
      </div>
    );
  }
  
}

export default App;
