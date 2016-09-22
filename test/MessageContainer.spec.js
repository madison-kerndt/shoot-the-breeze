import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import MessageContainer from '../lib/components/MessageContainer';

describe('Message Container', () => {
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
  context('filtered is greater than zero', () => {
    it('renders as a <main>', () => {
      const wrapper = shallow(<MessageContainer filtered={ [message, message2] }/>);
      assert.equal(wrapper.type(), 'main');
    });
  });

  context('chosen is greater than zero', () => {
    it('renders as a <main>', () => {
      const wrapper = shallow(<MessageContainer chosen={ [message, message2] } filtered={ [] }/>);
      assert.equal(wrapper.type(), 'main');
    });
  });

  context('messages is greater than zero', () => {
    it('renders as a <main>', () => {
      const wrapper = shallow(<MessageContainer chosen={ [] } filtered={ [] } messages={ [message, message2] }/>);
      assert.equal(wrapper.type(), 'main');
    });
  });
});
