import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import SignIn from '../lib/components/SignIn';

describe('SignIn', () => {
  it('renders as a <footer>', () => {
    const wrapper = shallow(<SignIn />);
    assert.equal(wrapper.type(), 'footer');
  });
});
