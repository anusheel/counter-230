import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
    });
    const data = await response.json();
    setCount(data.count);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={increaseCount}
      >
        Increase
      </button>
      <span className="text-xl">{count}</span>
    </div>
  );
};

export default Counter;