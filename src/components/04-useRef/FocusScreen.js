import React, { useRef } from 'react';
import '../01-useState/counter.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        className="form-control"
        placeholder="Su nombre"
      />

      <button 
        className="btn btn-success mt-3"
        onClick={ handleClick }
      > 
        Focus 
      </button>  
    </div>
  )
}
