import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import SignIn from '../lib/components/SignIn';

describe('SignIn', () => {
  context('has user', () => {
    it('renders as a <footer>', () => {
      const wrapper = shallow(<SignIn />);
      assert.equal(wrapper.type(), 'footer');
    });

    it('render a section', () => {
      const wrapper = shallow(<SignIn user={ 'Name '}/>);
      expect(wrapper.find('.user-info')).to.have.length(1);
    });

    it('render an encapsolating article', () => {
      const wrapper = shallow(<SignIn user={ 'Name '}/>);
      expect(wrapper.find('.user-info-text-block')).to.have.length(1);
    });

    it('render a button', () => {
      const wrapper = shallow(<SignIn user={ 'Name' }/>);
      expect(wrapper.find('.signout-button')).to.have.length(1);
    });
  });

  context('does not have user', () => {
    it('should not render a section', () => {
      const wrapper = shallow(<SignIn />);
      expect(wrapper.find('.sign-in')).to.have.length(1);
    });

    it('should not render a section', () => {
      const wrapper = shallow(<SignIn />);
      expect(wrapper.find('.sign-in-button')).to.have.length(1);
    });

    it('should not render a section', () => {
      const wrapper = shallow(<SignIn />);
      expect(wrapper.find('.user-info')).to.have.length(0);
    });

    it('should not render an encapsolating article', () => {
      const wrapper = shallow(<SignIn />);
      expect(wrapper.find('.user-info-text-block')).to.have.length(0);
    });

    it('should not render a button', () => {
      const wrapper = shallow(<SignIn />);
      expect(wrapper.find('.signout-button')).to.have.length(0);
    });
  });
});
