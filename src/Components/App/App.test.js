import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
// import Header from '../Header/Header';
// import DisplayField from '../DisplayField/DisplayField';

describe('App', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App/>)
  });

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('has default state', ()=>{
    const expectedState = {
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
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update isTab when button updateTab is called', ()=>{
    let mockEvent = {target: {id: 'People'}}

    wrapper.instance().updateTab(mockEvent);

    expect(wrapper.state('isTab')).toEqual('People');
  })
});
