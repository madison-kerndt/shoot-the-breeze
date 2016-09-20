import React from 'react';
import SortButton from './SortButton';

export default function ({ sort, handleFilter, handleReverseOrder }) {
  return (
    <header className='header'>
      <h1 className='header-main-title'>Shoot the Breeze</h1>
      <input
        className='header-nav-input'
        placeholder='Filter'
        type='text'
        onKeyUp={ handleFilter }>
        </input>
      <article className='header-actions'>
        <SortButton
          handleDisabled={ !sort }
          handleClass='header-main-sort-button-down'
          handleClick={ handleReverseOrder }
          text='Sort ⬇︎'/>
        <SortButton
          handleDisabled={ sort }
          handleClass='header-main-sort-button-up'
          handleClick={ handleReverseOrder }
          text='Sort ⬆︎'
         />
      </article>
    </header>
  );
}
