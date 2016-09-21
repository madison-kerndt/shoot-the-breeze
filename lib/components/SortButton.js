import React from 'react';

export default function ({ handleDisabled, handleClass, handleClick, text }) {
  return (
   <button
     disabled={ handleDisabled }
     className={ handleClass }
     onClick={ handleClick }
   >
     { text }
   </button>
  );
}
