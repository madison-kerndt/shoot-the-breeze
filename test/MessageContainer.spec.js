import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import MessageContainer from '../lib/components/MessageContainer';

describe('Message Container', () => {
  it('renders as a <main>', () => {
    const wrapper = shallow(<MessageContainer filtered={ ['sample item'] }/>);
    assert.equal(wrapper.type(), 'main');
  });

  it('renders as a <main>', () => {
    const wrapper = shallow(<MessageContainer filtered={ [] } chosen={ [0] }/>);
    assert.equal(wrapper.type(), 'main');
  });

  it('renders as a <main>', () => {
    const wrapper = shallow(<MessageContainer filtered={ [] } chosen={ [] } messages={ ['sample item'] }/>);
    assert.equal(wrapper.type(), 'main');
  });
});
