import React from 'react';
import {shallow} from 'enzyme';
import Loading from './Loading';

describe('Loading', ()=>{
  let wrapper;
  
  it('should match snapshot', ()=>{
    wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  })
})