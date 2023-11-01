import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <span className="text-xl">{count}</span>
    </div>
  );
};

export default Counter;