import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyprocess'
import '../01-useState/counter.css';

export const MemoHook = () => {

  const {counter, increment} = useCounter( 1000 );
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{counter}</small></h3>
      <hr />

      <p>{ memoHeavyProcess }</p>

      <button
        className="btn btn-primary mt-3"
        onClick={ increment }
      >
        + 1
      </button>

      <button
        className="btn btn-info mt-3"
        onClick={ () =>{
          setShow( !show );
        }}
      >
        Show/Hide { JSON.stringify( show )}
      </button>
    </div>
  )
}
