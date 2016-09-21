import React from 'react';
import moment from 'moment';
import firebase, { getAuth } from 'firebase';

export default function ({ currentUser, createdAt, user, content }) {
  // console.log(user.id);
  // console.log(firebase.getAuth());
  // if(user.uid === user)
  return (
    <section className='message'>
      <article className='message-time time'>
        {moment(createdAt).format('MMMM Do, h:mm a')}
      </article>
      <article className='message-author'>{ user.displayName }</article>
      <p className='message-content'>{ content }</p>
    </section>
  );
}
