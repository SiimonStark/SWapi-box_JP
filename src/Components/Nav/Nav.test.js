import React from 'react';
import {mount} from 'enzyme';
import Nav from './Nav';

let updateTabMock = jest.fn();

describe('Nav', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<Nav updateTab={updateTabMock}/>);
  });

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should have children buttons', ()=>{
    expect(wrapper.find('nav').children().length).toEqual(4);
  })
});