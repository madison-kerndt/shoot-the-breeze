import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import Message from './Message';
import { pick, map, extend } from 'lodash';

export default function({ messages }) {
  return (
    <main>
      { messages.map((message) => <Message {...message}/>)}
    </main>
  )
}
