import React from 'react';
import { uniqBy } from 'lodash';

export default function ({ handleSaveChosenUid, messages, user }) {
  const uniqueUsers = uniqBy(messages, (u) => { return u.user.uid; });
  return (
    <aside className='user-list'>
      <h2 className='title-users'>Users</h2>
      <ul className='list-users'>
        {uniqueUsers.map((m) => {
          const toBeDotted = m.user.uid;
          if (toBeDotted === user.uid) {
            return (
              <li
                key={m.key}
                onClick={() => handleSaveChosenUid(m.user.uid) }
              >
                { m.user.displayName } ({ m.user.email })
                <div className='current-active-user'></div>
              </li>
            );
          }
          return (
            <li
              key={m.key}
              onClick={() => handleSaveChosenUid(m.user.uid) }
            >
              { m.user.displayName } ({ m.user.email })
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
