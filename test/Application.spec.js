import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import SortButton from '../lib/components/SortButton';
import UserList from '../lib/components/UserList';

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
  context('Constructor', () => {
    it('renders as a <section>', () => {
      const wrapper = shallow(<Application />);
      assert.equal(wrapper.type(), 'section');
    });

    it('should allow us to set a messages array as state', () => {
      const wrapper = mount(<Application />);
      wrapper.state().messages = ['Name'];
      expect(wrapper.state().messages.length).to.equal(1);
    });

    it('should allow us to set a user state ', () => {
      const wrapper = mount(<Application />);
      expect(wrapper.state.user).to.equal(undefined);
      wrapper.state().user = 'Name';
      expect(wrapper.state().user).to.equal('Name');
    });

    it('should allow us to set a the sort state', () => {
      const wrapper = mount(<Application />);
      wrapper.state().sort = false;
      expect(wrapper.state().sort).to.equal(false);
    });

    it('should allow us to set a filtered array as state', () => {
      const wrapper = mount(<Application />);
      wrapper.state().filtered = ['Name'];
      expect(wrapper.state().filtered.length).to.equal(1);
    });

    it('should allow us to set a chosenUser', () => {
      const wrapper = mount(<Application />);
      wrapper.state().chosenUser = 'Name';
      expect(wrapper.state().chosenUser).to.equal('Name');
    });

    it('should allow us to add an object to the chosen array', () => {
      const wrapper = mount(<Application />);
      wrapper.state().chosen = ['Name'];
      expect(wrapper.state().chosen.length).to.equal(1);
    });
  });

  context('Sort', () => {
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
      expect(wrapper.find('.sort')).to.have.length(2);
    });

    it('should change state of sort on click of down sort button', () => {
      const wrapper = mount(<Application />);
      let button = wrapper.find('.header-main-sort-button-down').simulate('click')
      expect(wrapper.state().sort).to.equal(false);
    });

    it('should change state of sort on click of up sort button', () => {
      const wrapper = mount(<Application />);
      let button = wrapper.find('.header-main-sort-button-up').simulate('click')
      expect(wrapper.state().sort).to.equal(true);
    });

    it('should change the order in which the messages are rendered within the messages array', () => {
      const wrapper = mount(<Application />);
      wrapper.state().messages = [message, message2]
      wrapper.state().user = message.user.displayName

      let button = wrapper.find('.header-main-sort-button-down').simulate('click')
      expect(wrapper.state().messages).to.deep.equal([message2, message]);
    });

    it('should change the order in which the messages are rendered within the messages array', () => {
      const wrapper = mount(<Application />);
      wrapper.state().messages = [message, message2]
      wrapper.state().user = message.user.displayName

      let button = wrapper.find('.header-main-sort-button-up').simulate('click')
      expect(wrapper.state().messages).to.deep.equal([message, message2]);
    });

    it('should change the order in which the messages are rendered within the chosen array on sort down', () => {
      const wrapper = mount(<Application />);
      wrapper.state().chosen = [message, message2]
      wrapper.state().user = message.user.displayName

      let button = wrapper.find('.header-main-sort-button-down').simulate('click')
      expect(wrapper.state().chosen).to.deep.equal([message2, message]);
    });

    it('should change the order in which the messages are rendered within the chosen array on sort up', () => {
      const wrapper = mount(<Application />);
      wrapper.state().chosen = [message, message2]
      wrapper.state().user = message.user.displayName

      let button = wrapper.find('.header-main-sort-button-up').simulate('click')
      expect(wrapper.state().chosen).to.deep.equal([message, message2]);
    });

    it('should change the order in which the messages are rendered within the filtered array on sort down', () => {
      const wrapper = mount(<Application />);
      wrapper.state().filtered = [message, message2]
      wrapper.state().user = message.user.displayName

      let button = wrapper.find('.header-main-sort-button-down').simulate('click')
      expect(wrapper.state().filtered).to.deep.equal([message2, message]);
    });

    it('should change the order in which the messages are rendered within the filtered array on sort up', () => {
      const wrapper = mount(<Application />);
      wrapper.state().filtered = [message, message2]
      wrapper.state().user = message.user.displayName;

      let button = wrapper.find('.header-main-sort-button-up').simulate('click')
      expect(wrapper.state().filtered).to.deep.equal([message, message2]);
    });
  });

  context('Save chosen uid',() => {
    it('should render the correct amount of users on the page based on the number of contributing users', () => {
      const wrapper = mount(<Application />);
      assert.lengthOf(wrapper.find('.user-list'), 1);
    });

    it('should return an array with one item', () => {
      const wrapper = mount(<Application />);
      wrapper.state().chosen = [message];
      expect(wrapper.state().chosen.length).to.equal(1);
    });

    it.skip('should return an instance of one when a name is clicked', () => {
    });

    it.skip('should set the state of chosen user to an empty string', () => {

    });

    it.skip('should return the state of chosen array to empty', () => {

    });

    it.skip('should return the state of chosen array to only messages with the matching uid', () => {

    });
  });
});
