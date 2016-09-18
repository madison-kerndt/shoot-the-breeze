import React, { Component } from 'react';
import { pick } from 'lodash';
import { reference } from '../firebase';

export default function ({ }) {
  return(
    <aside class="user-list">
      <h2 class="title-users">Users</h2>
        <ul class="list-users">
          <li>
            <p>Madison Kerndt</p>
            <p>(madison.kerndt@gmail.com)
            <div class="current-active-user"></div>
            </p>
          </li>
      </ul>
    </aside>
  )
}
