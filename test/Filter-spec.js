import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import locus from 'locus';

describe('Filter', () => {
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




  it('should', () => {

  });

  it('should set the filtered array equal to the messages that match our filter criteria', () => {
    const wrapper = mount(<Application />);
    wrapper.state().messages = [message, message2];
    wrapper.state().user = message.user.displayName;

    const input = wrapper.find('.header-nav-input');
    input.simulate('keyUp', { target: { value: 'hello' } });
    expect(wrapper.state().filtered).deep.equal([message2]);
  });
});
