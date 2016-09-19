import React, { Component } from 'react';
import firebase, { signIn } from '../firebase';
import MessageInput from './MessageInput';


export default function ({ user }) {
  if (user) {
    return(
      <footer>
        <section className='user-info'>
          <article className='user-info-text-block'>
            <p>Logged in as {user.displayName} ({user.email}).</p>
          </article>
        </section>
        <MessageInput user={ user}/>
      </footer>
    )
  }
  return(
    <section className='sign-in'>
      <button className='sign-in-button' onClick={() => signIn()}>Log in</button>
    </section>
  );
}