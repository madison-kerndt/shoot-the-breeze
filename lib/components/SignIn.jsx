import React from 'react';
import firebase, { signIn, signOut } from '../firebase';
import MessageInput from './MessageInput';

export default ({ user, handleSignOut }) => {
  if (user) {
    return (
      <footer>
        <section className='user-info'>
          <article className='user-info-text-block'>
            <p>
              Logged in as {user.displayName} ({user.email}).
            </p>
            <button
              onClick={ handleSignOut }
              className='signout-button'
            >
              Logout
            </button>
          </article>
        </section>
        <MessageInput className='message-input' user={ user }/>
      </footer>
    );
  }
  return (
    <footer
      className='sign-in'
    >
      <button
        className='sign-in-button'
        onClick={() => signIn()}>
        Log in
      </button>
    </footer>
  );
}
