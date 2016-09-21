import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import SortButton from '../lib/components/SortButton';
// import messages from './helpers/messages'

describe('Sort Buttons', () => {

  var message =   {
    key: '-KSAMLo5iSmClrZSPFXv',
    content:  '1',
    createdAt:  1474438196301,
    user: {
        displayName: 'Madison Kerndt' ,
        email: 'madison.kerndt@gmail.com',
        uid: 'eDnoVr1f5OZlySEszpbYSI2IcxG2'
    }
  };

  var message2 =   {
    key: '-KS9Mid4HGVWZxqxn4OQ',
    content:  'hello',
    createdAt:  1474421516861,
    user: {
        displayName: 'Madison Kerndt' ,
        email: 'madison.kerndt@gmail.com',
        uid: 'eDnoVr1f5OZlySEszpbYSI2IcxG2'
    }
  }

  it('should renders as a button', () => {
    const wrapper = shallow(<SortButton /> );
    assert.equal(wrapper.type(), 'button');
  });

  it('should render text inside of the button', () => {
    const wrapper = shallow(<SortButton text='Sort'/> );
    expect(wrapper.contains(
     'Sort' )).to.equal(true);
  });

  it('should have 2 action button props', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.find('.sort' )).to.have.length(2);
  });

  it('should allow me to click on the down sort button', () => {
    const wrapper = mount(<Application />);
    let button = wrapper.find('.header-main-sort-button-down').simulate('click')
    expect(wrapper.state().sort).to.equal(false);
  });

  it('should allow me to click on the up sort button', () => {
    const wrapper = mount(<Application />);
    let button = wrapper.find('.header-main-sort-button-up').simulate('click')
    expect(wrapper.state().sort).to.equal(true);
  });

  it('should change the order in which the messages are rendered', () => {
    const wrapper = mount(<Application />);

    wrapper.state().messages = [message, message2]
    wrapper.state().user = message.user.displayName

    let button = wrapper.find('.header-main-sort-button-down').simulate('click')
    expect(wrapper.state().messages).to.deep.equal([message2, message]);
  });
});

// wrapper.debug()
// eval(locus) need to require with string
