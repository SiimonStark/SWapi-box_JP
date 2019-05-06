import React from 'react';
import {mount} from 'enzyme';
import DisplayField from './DisplayField';
import {mockCrawl} from '../MockTestData';

describe('DisplayField', ()=>{
  let wrapper;
  let mockIsLoading = true;
  let mockIsTab = 'Crawl';
  let mockCurrentFilm = {mockCrawl};
  let mockPerson = 'personName';

  beforeEach(()=>{
    wrapper = mount(
      <DisplayField isLoading={mockIsLoading}
        isTab={mockIsTab} currentFilm={mockCurrentFilm}
        person={mockPerson} />
    );
  });

  it('should match snapshot if Loading', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match snapshot if Not Loading', ()=>{
    wrapper = mount(
      <DisplayField isLoading={false} isTab={mockIsTab}
        currentFilm={mockCurrentFilm} person={mockPerson} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should change display based on isTab', ()=>{
    wrapper = mount (
      <DisplayField isLoading={false} isTab={'People'}
      currentFilm={mockCurrentFilm} person={mockPerson} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});