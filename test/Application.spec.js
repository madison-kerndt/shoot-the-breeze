import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';

describe('Application states', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'section');
  });

  it('should allow us to set a messages array as state', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().messages = ['Name'];
    expect(wrapper.state().messages.length).to.equal(1);
  });

  it('should allow us to set a user state ', ()=>{
    const wrapper = mount(<Application />);
    expect(wrapper.state.user).to.equal(undefined);
    wrapper.state().user = 'Name';
    expect(wrapper.state().user).to.equal('Name');
  });

  it('should allow us to set a the sort state', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().sort = false;
    expect(wrapper.state().sort).to.equal(false);
  });

  it('should allow us to set a filtered array as state', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().filtered = ['Name'];
    expect(wrapper.state().filtered.length).to.equal(1);
  });

  it('should allow us to set a chosenUser', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().chosenUser = 'Name';
    expect(wrapper.state().chosenUser).to.equal('Name');
  });

  it('should allow us to set a filtered array as state', ()=>{
    const wrapper = mount(<Application />);
    wrapper.state().chosen = ['Name'];
    expect(wrapper.state().chosen.length).to.equal(1);
  });
});
