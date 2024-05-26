import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div id="count-display">{count}</div>
      <div>
        <button onClick={() => setCount((pre) => pre + 1)}>
          {'INCREMENT'}
        </button>
        <button
          onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
        >
          {'DECREMENT'}
        </button>
      </div>
    </div>
  );
};

export default Counter;
