import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount((pre) => pre + 1)}>
          {'INCREMENT'}
        </button>
        <button onClick={() => setCount((pre) => pre - 1)}>
          {'DECREMENT'}
        </button>
      </div>
    </div>
  );
};

export default Counter;
