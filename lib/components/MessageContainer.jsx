import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import Message from './Message';
import { pick, map, extend } from 'lodash';

export default function({ messages, filtered }) {
  if (filtered.length > 0) {
    return (
      <main>
        { filtered.map((message) => <Message {...message}/>)}
      </main>
    )
  }
  return(
    <main>
      { messages.map((message) => <Message {...message}/>)}
    </main>
  )
}
