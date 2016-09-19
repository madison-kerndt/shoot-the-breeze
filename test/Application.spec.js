import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';


import Application from '../lib/components/Application';

describe('Application', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'section');
  });
});
