import React from 'react';

export default({ handleDisabled, handleClass, handleClick, text }) => {
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
