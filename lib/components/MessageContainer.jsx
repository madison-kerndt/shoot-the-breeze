import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import Message from './Message';
import { map } from 'lodash';

export default function ({ messages, filtered, chosen }) {
  if (filtered.length > 0) {
    return (
      <main>
        { filtered.map(message => <Message {...message}/>)}
      </main>
    );
  }
  if (chosen.length > 0) {
    return (
      <main>
        { chosen.map(message => <Message {...message}/>)}
      </main>
    );
  }
  return (
    <main>
      { messages.map(message => <Message {...message}/>)}
    </main>
  );
}
