import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Header from '../lib/components/Header';

describe('Header', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.type(), 'header');
  });

  it('should render a header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header-main-title')).to.have.length(1);
  });

  it('should render an input field', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header-nav-input')).to.have.length(1);
  });

  it('should render an action section article', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header-actions')).to.have.length(1);
  });

  it('should render two sort buttons', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('.sort')).to.have.length(2);
  });
});
