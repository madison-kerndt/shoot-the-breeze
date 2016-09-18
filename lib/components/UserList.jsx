import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import { reference } from '../firebase';

export default function ({ messages }) {
  const UniqueUsers = uniqBy(messages, (u) => {u.user});
  console.log(UniqueUsers);
  return(
    <aside className='user-list'>
      <h2 className='title-users'>Users</h2>
      <ul className='list-users'>
        {UniqueUsers.map((m) => <li key={m.user.uid}>{ m.user.displayName } ({ m.user.email })</li>)}
      </ul>
    </aside>
  )
}
