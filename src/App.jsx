import './App.css';
import AnimatedCounter from './components/ticker';
import { useState } from 'react';

function App() {
  // Integer state
  const [counterValue, setCounterValue] = useState(500);
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 100);

  // Handle random increment/decrement
  const handleCounterUpdate = (increment) => {
    const delta = (Math.floor(Math.random() * 100) + 1) * 0.99;
    setCounterValue(increment ? counterValue + delta : counterValue - delta);
  };

  return (
    <div>
      <div className="flex justify-center items-center font-mono text-9xl">
      <AnimatedCounter value={time.getHours()} className="font-mono inline" decimalPrecision={0} padNumber={2} showColorsWhenValueChanges={false} />:
      <AnimatedCounter value={time.getMinutes()} className="font-mono inline" decimalPrecision={0} padNumber={2} showColorsWhenValueChanges={false} />:
      <AnimatedCounter value={time.getSeconds()} className="font-mono inline" decimalPrecision={0 } padNumber={2} showColorsWhenValueChanges={false} />.
      <AnimatedCounter value={time.getMilliseconds()} className="font-mono inline" decimalPrecision={0} padNumber={3} showColorsWhenValueChanges={false} />
        </div>
      <AnimatedCounter value={counterValue} className="text-white text-9xl font-mono" />
      <div>{counterValue}</div>
      <div>
        <button onClick={() => handleCounterUpdate(false)}>Decrement</button>
        <button onClick={() => handleCounterUpdate(true)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
