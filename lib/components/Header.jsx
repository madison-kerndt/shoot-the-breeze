import React from 'react';

export default function ({ sort, handleFilter, handleReverseOrder }) {
  return (
    <header>
      <h1 className='header-main-title'>Shoot the Breeze</h1>
      <input
        className='header-nav-input'
        placeholder='Filter'
        type='text'
        onKeyUp={ handleFilter }>
        </input>
      <article className='header-actions'>
        <button
          disabled={!sort}
          className='header-main-sort-button-down'
          onClick={ handleReverseOrder }>
            Sort
          </button>
        <button
          disabled={sort}
          className='header-main-sort-button-up'
          onClick={ handleReverseOrder }>
            Sort
          </button>
      </article>
    </header>
  );
}
