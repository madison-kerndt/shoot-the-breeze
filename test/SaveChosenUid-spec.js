import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';

describe('Application states', () => {
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
  };

  it('should return an array with one item', () => {
    const wrapper = mount(<Application />);
    wrapper.state().chosen = [message];
    expect(wrapper.state().chosen.length).to.equal(1);
  });

  // it('should return a chosen user', () => {
  //   const wrapper = mount(<Application />);
  //   wrapper.find('.user-name-current').simulate('click');
  //   expect(wrapper.state().chosenUser).to.equal(eDnoVr1f5OZlySEszpbYSI2IcxG2);
  // });
//   it('should add messages into the chosen array', () => {
//     const wrapper = mount(<Application />);
//     wrapper.state().chosen = [message, message2]
//     wrapper.state().user = message.user.displayName
//
//     let button = wrapper.find('.user').simulate('click')
//     expect(wrapper.state().chosen).to.deep.equal([message, message2]);
//   });
});

// user-name-all'
// need to test if the chosen id changes on click
