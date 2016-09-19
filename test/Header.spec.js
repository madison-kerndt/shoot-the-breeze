import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Header from '../lib/components/Header';

describe('Header', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.type(), 'header');
  });
});
