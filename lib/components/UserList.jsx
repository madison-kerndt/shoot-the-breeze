import React, { Component } from 'react';
import { uniqBy } from 'lodash';
import { reference } from '../firebase';

export default function ({ messages, user}) {
  let uniqueUsers = uniqBy(messages, (u) => { return u.user.uid; });
  return(
    <aside className='user-list'>
      <h2 className='title-users'>Users</h2>
      <ul className='list-users'>
        {uniqueUsers.map((m) => {
          let toBeDotted = m.user.uid;
          if (toBeDotted === user.uid) {
            return(
              <li key={m.key}>
                { m.user.displayName } ({ m.user.email })
                <div className='current-active-user'></div>
              </li>
            )
          }
          return(
            <li key={m.key}>
              { m.user.displayName } ({ m.user.email })
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
