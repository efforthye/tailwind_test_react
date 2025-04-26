import { useState } from 'react';
import './App.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Vite + React + TS + Tailwind</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg mb-4">Count: {count}</p>
        <div className="flex gap-4">
          <Button text="Increment" onClick={() => setCount(count + 1)} />
          <Button text="Decrement" onClick={() => setCount(count - 1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
