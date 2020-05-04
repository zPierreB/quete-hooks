import React, {useState} from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>Le compteur est à : </p>
      <input type="text" value={count} />
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
