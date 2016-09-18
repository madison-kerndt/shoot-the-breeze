import React, { Component } from 'react';
import SignIn from './SignIn';
import MessageContainer from './MessageContainer';
import UserList from './UserList';
import firebase, { reference } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return(
      <section>
        <MessageContainer messages={this.state.messages} />
        <UserList messages={this.state.messages} user={this.state.user}/>
        <SignIn user={this.state.user}/>
      </section>
    )
  }
}



//   render() {
//     const { user, messages, draftMessage } = this.state;
//
//     return (
//       <div className="Application">
//         {user ? <p>Hello {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
//         <ul>
//           { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
//         </ul>
//         <div className="MessageInput">
//           <input
//             placeholder="Message…"
//             value={this.state.draftMessage}
//             onChange={(e) => this.setState({ draftMessage: e.target.value })}
//           />
//           <button onClick={() => this.addNewMessage()}>Add New Message</button>
//         </div>
//       </div>
//     )
//   }
// }
