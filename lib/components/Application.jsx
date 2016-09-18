import React, { Component } from 'react';
import { pick, map, extend, reverse } from 'lodash';
import firebase, { reference } from '../firebase';
import Header from './Header';
import MessageContainer from './MessageContainer';
import UserList from './UserList';
import SignIn from './SignIn';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      search: '',
      sort: true,
      chosen: ''
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

  reverseOrder() {
    return this.setState({sort: !(this.state.sort), messages: reverse(this.state.messages)});
  }

  render() {
    return(
      <section>
        <Header sort={ this.state.sort } reverseOrder={() => this.reverseOrder()} />
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
