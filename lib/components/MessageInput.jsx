import React, { Component } from 'react';
import { pick } from 'lodash';
import { reference } from '../firebase';
import characterCountDown from '../functions/charactercount';


export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  createMessage(e) {
    e.preventDefault();
    const user = this.props.user;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: this.state.message,
      createdAt: Date.now(),
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <form className="footer" onSubmit={e => this.createMessage(e)}>
        <article className='footer-input-section'>
          <input
            className='footer-message-input'
            type='text'
            maxLength='140'
            placeholder='Message'
            value={ this.state.message }
            onChange={e => this.setState({ message: e.target.value })}
          />
          <p className='character-count'>{ characterCountDown(this.state.message.length) }</p>
        </article>
        <article className='footer-actions'>
          <input
            disabled={ !this.state.message }
            type='button'
            value='Clear'
            className='footer-clear-button'
            onClick={() => this.setState({ message: '' })}
          />
          <input
            disabled={ !this.state.message }
            type='submit'
            value='Submit'
            className='footer-submit-button'
          />
        </article>
      </form>
    );
  }
}
