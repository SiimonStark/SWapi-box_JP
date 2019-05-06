import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

let updateTabMock = jest.fn();

describe('Header', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Header updateTab={updateTabMock}/>)
  });

  it('should match snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  });
})