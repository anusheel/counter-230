import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const response = await fetch('/api/counter');
      const data = await response.json();
      setCount(data.count);
    };
    getCount();
  }, []);

  const increaseCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
      body: JSON.stringify({ action: 'increase' }),
    });
    const data = await response.json();
    setCount(data.count);
  };

  const decreaseCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
      body: JSON.stringify({ action: 'decrease' }),
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
      <button
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        onClick={decreaseCount}
      >
        Decrease
      </button>
      <span className="text-xl">{count}</span>
    </div>
  );
};

export default Counter;