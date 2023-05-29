import { useState, useEffect } from 'react';
import './index.css';
import Button from '../button';
import { NUMBERS } from '../../utils/consts';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  // starts/stops the counter based on the running status
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        // increments counter by increment value
        setCounter(prevCounter => prevCounter + increment);
      }, 1000);
    }

    // clear the interval when the component is unmounted or running status or increment changes
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, increment]);

  return (
    <div className="container">
      <h1>Counter: {counter}</h1>

      <div className="grid">
        {NUMBERS.map((value) => (
          <Button
            key={value}
            className="button"
            onClick={() => setIncrement(value)}
            title={value}
          />
        ))}
      </div>

      <div className="action-buttons">
        <Button title="Start" className='button start' onClick={() => setIsRunning(true)} />
        <Button title="Stop" className='button stop' onClick={() => setIsRunning(false)} />
        <Button title="Reset" className='button reset' onClick={() => setCounter(0)} />
      </div>
    </div>
  );
};

export default Counter;
