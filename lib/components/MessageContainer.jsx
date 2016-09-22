import React from 'react';
import firebase from '../firebase';
import Message from './Message';
import { map } from 'lodash';

export default function ({ messages, filtered, chosen, currentUser }) {
  const reference = firebase.database().ref('messages');
  if (filtered.length > 0) {
    return (
      <main>
        {filtered.map(message => <Message {...message}
                                          reference={reference.child(message.key)}
                                          CurrenttUser={currentUser}
                                  />
        )}
      </main>
    );
  }
  if (chosen.length > 0) {
    return (
      <main>
        {chosen.map(message => <Message {...message}
                                        reference={reference.child(message.key)}
                                        currentUser={currentUser}
                                        />
        )}
      </main>
    );
  }
  return (
    <main>
      {messages.map(message => <Message {...message}
                                        reference={reference.child(message.key)}
                                        currentUser={currentUser}
                                        />
      )}
    </main>
  );
}
