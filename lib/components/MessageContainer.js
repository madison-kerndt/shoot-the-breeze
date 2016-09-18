import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import Message from './Message';
import { pick, map, extend } from 'lodash';

export default class MessageContainer extends Component {
  constructor(){
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
  }

  render(){
    return(
      <main>
        { this.state.messages.map((message) => <Message {...message}/>)}
      < /main>
    )
  }
}
