import React, { Component } from 'react';

export default function ({ sort, reverseOrder }){
  return (
    <header>
      <h1 className='header-main-title'>Shoot the Breeze</h1>
      <input className='header-nav-input' placeholder='Filter' type='text'></input>
      <article className='header-actions'>
        <button
          disabled={!sort}
          className='header-main-sort-button-down'
          onClick={ reverseOrder }>
            Sort
          </button>
        <button
          disabled={sort}
          className='header-main-sort-button-up'
          onClick={ reverseOrder }>
            Sort
          </button>
      </article>
    </header>
  )
}
