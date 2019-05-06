import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

let mockPerson = 'chewwy'

describe('Card', ()=>{
  let wrapper;

  it('should match snapshot', ()=>{
    wrapper = shallow(<Card person={mockPerson}/>);
    expect(wrapper).toMatchSnapshot();
  });
});