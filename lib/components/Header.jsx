import React from 'react';
import SortButton from './SortButton';

export default ({ sort, handleFilter, handleReverseOrder }) => {
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
          handleClass='header-main-sort-button-down sort'
          handleClick={ handleReverseOrder }
          text='Sort ⬇︎'/>
        <SortButton
          handleDisabled={ sort }
          handleClass='header-main-sort-button-up sort'
          handleClick={ handleReverseOrder }
          text='Sort ⬆︎'
         />
      </article>
    </header>
  );
}
