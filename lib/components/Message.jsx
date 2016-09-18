import React, { Component } from 'react';
import moment from 'moment';
import firebase, { signIn } from '../firebase';

export default function ({ createdAt, user, content }) {
  return(
    <section className='message'>
      <article className='message-time time'>
        {moment(createdAt).format('MMMM Do, h:mm a')}
      </article>
      <article className='message-author'>{ user.displayName }</article>
      <p className='message-content'>{ content }</p>
    </section>
  );
}
