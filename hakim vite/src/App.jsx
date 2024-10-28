import React, { useState } from 'react';
import Portfolio from './components/portfolio';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const increment = () => {
    setAnimationClass('increment');
    setCount(count + 1);
    setTimeout(() => setAnimationClass(''), 300); 
  };

  const decrement = () => {
    setAnimationClass('decrement');
    setCount(count - 1);
    setTimeout(() => setAnimationClass(''), 300); 
  };

  return (
    <>
      <h1 className={`counter ${animationClass}`}>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
      <Portfolio />
    </>
  );
}

export default App;
