import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import { reference } from '../firebase';

export default function ({ messages }) {
  let uniqueUsers = uniqBy(messages, (u) => { return u.user.uid; });
  console.log(uniqueUsers);
  return(
    <aside className='user-list'>
      <h2 className='title-users'>Users</h2>
      <ul className='list-users'>
        {uniqueUsers.map((m) => <li key={m.key}>{ m.user.displayName } ({ m.user.email })</li>)}
      </ul>
    </aside>
  )
}
