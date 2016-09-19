import React, { Component } from 'react';
import { pick } from 'lodash';
import { reference } from '../firebase';


export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      maxCharacter: 140,
      characterCount: 140,
    };
  }

  characterCountDown() {
    const characterRemaining = this.state.maxCharacter - this.state.message.length;
    return this.setState({ characterCount: characterRemaining });
  }

  createMessage(e) {
    e.preventDefault();

    const { message } = this.state;
    const user = this.props.user;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: message,
      createdAt: Date.now(),
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <form className="footer" onSubmit={e => this.createMessage(e)}>
        <input
          className='footer-message-input'
          type='text'
          maxLength={ this.state.maxCharacter }
          placeholder='Message'
          value={ this.state.message }
          onChange={e => this.setState({ message: e.target.value })}
          onKeyUp={() => this.characterCountDown()}
        />
        <p className='character-count'>{ this.state.characterCount }</p>
        <input
          disabled={ !this.state.message }
          type='button'
          value='Clear'
          className='footer-clear-button'
          onClick={() => this.setState({ message: '', characterCount: this.state.maxCharacter })}
        />
        <input
          disabled={ !this.state.message }
          type='submit'
          value='Submit'
          className='footer-submit-button'
          onClick={() => this.setState({ characterCount: this.state.maxCharacter })}
        />
      </form>
    );
  }
}
