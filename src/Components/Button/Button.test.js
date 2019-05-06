import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

let updateTabMock = jest.fn();

describe('Button', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(
      <Button name={'People'} updateTab={updateTabMock}/>
    );
  });

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick should call updateTab', ()=>{
    let button = wrapper.find('button');
    button.simulate('click');
    expect(updateTabMock).toHaveBeenCalled();
  });
});