import React, {useState} from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState("");
  return (
    <div className="App">
      <p>Le compteur est à : {count}</p>
      <input type="text" value="" onChange={(e) => setCount(+ e.target.value)}/>
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
