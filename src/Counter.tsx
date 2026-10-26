import { useState } from 'react';

export const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: 'red' }}>Subscribe to Simplilearn</h3>
      <p>Count: {counter}</p>
      <button onClick={() => setCount(counter + 1)}>Increment</button>
    </div>
  );
};