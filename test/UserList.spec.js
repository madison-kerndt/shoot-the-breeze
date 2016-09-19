import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import UserList from '../lib/components/UserList';

describe('UserList', () => {
  it('renders as a <aside>', () => {
    const wrapper = shallow(<UserList />);
    assert.equal(wrapper.type(), 'aside');
  });
});
