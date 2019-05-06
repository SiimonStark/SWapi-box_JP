import React from 'react';
import {shallow} from 'enzyme';
import Crawl from './Crawl';
import { mockCrawl } from "../MockTestData";

describe('Crawl', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Crawl film={mockCrawl} />);
  });

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
})