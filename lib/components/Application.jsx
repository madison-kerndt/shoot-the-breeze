import React from 'react';
import { map, extend, reverse } from 'lodash';
import firebase, { reference } from '../firebase';
import Header from './Header';
import MessageContainer from './MessageContainer';
import UserList from './UserList';
import SignIn from './SignIn';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      sort: true,
      filtered: [],
      chosenUser: '',
      chosen: []
    };
  }

  componentDidMount() {
    reference.limitToLast(+this.state.num).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key })),
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    console.log(reference);
  }

  handleReverseOrder() {
    const { messages, sort, chosen, filtered } = this.state;
    return this.setState({ sort: !(sort),
                           messages: reverse(messages),
                           chosen: reverse(chosen),
                           filtered: reverse(filtered),
    });
  }

  handleFilter(e) {
    if (e.target.value === '') {
      return this.setState({ filtered: [] });
    }
    return (this.setState({
      filtered: (this.state.messages.filter(m => m.content.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)),
    }));
  }

  handleSaveChosenUid(id) {
    if (this.state.chosenUser === id) {
      return this.setState({ chosenUser: '', chosen: [] });
    }
    return (
      this.setState({
        chosenUser: id, chosen: (this.state.messages.filter(a => a.user.uid === id)),
      })
    );
  }

  // handleDisplayNumber(){
  //   // e.preventDefault();
  //   if (!this.state.num) { return 100; }
  //   { return parseInt(this.state.num); }
  // }

  render() {
    return (
      <section>
        <Header
          handleFilter={e => this.handleFilter(e)}
          sort={ this.state.sort }
          handleReverseOrder={() => this.handleReverseOrder()}
        />
        <input type='number' onChange={(e) => this.setState({ num: e.target.value }) }/>
        <button onClick={ this.handleDisplayNumber }>Submit</button>
        <MessageContainer
          filtered={this.state.filtered}
          messages={this.state.messages}
          chosen={this.state.chosen}
        />
        <UserList
          handleSaveChosenUid={e => this.handleSaveChosenUid(e)}
          messages={this.state.messages}
          user={this.state.user}
        />
        <SignIn user={this.state.user}/>
      </section>
    );
  }
}
