import React from 'react';
import moment from 'moment';
import firebase from '../firebase';
import SortButton from './SortButton';

export default ({ createdAt, user, content, reference, currentUser }) => {
  if (!currentUser) {
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
  if (currentUser.uid === user.uid) {
    return (
      <section className='message'>
        <article className='message-time time'>
          {moment(createdAt).format('MMMM Do, h:mm a')}
        </article>
        <article className='message-author'>{ user.displayName }</article>
        <SortButton
          handleClass='remove-message-button'
          text='Remove'
          handleClick={() => reference.remove()}
        />
        <p className='message-content'>{ content }</p>
      </section>
    );
  }
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
