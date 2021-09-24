import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../01-useState/counter.css';

export const CallbackHooks = () => {

  const [counter, setCounter] = useState(1);

  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback( (num) => {
      setCounter(c => c + num);
  },[setCounter])

  useEffect( () => {
    // ???
  }, [increment])

  return (
    <div>
      <h1>useCallback Hook:   { counter } </h1>
      <hr />

      <ShowIncrement increment={ increment }/>
    </div>
  )
}
