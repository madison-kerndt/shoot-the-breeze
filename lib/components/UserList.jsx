import React from 'react';
import { uniqBy } from 'lodash';

export default function ({ handleSaveChosenUid, messages, user }) {
  const uniqueUsers = uniqBy(messages, u => u.user.uid);
  const userListNames = uniqueUsers.sort((a, b) => (a.user.displayName > b.user.displayName) ? 1 : ((b.user.displayName > a.user.displayName) ? -1 : 0));
  return (
    <aside className='user-list'>
      <h2 className='title-users'>Users</h2>
      <ul className='list-users'>
        {userListNames.map((m) => {
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
