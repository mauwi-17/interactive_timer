import { useState, useEffect } from "react";

function App() {
  // useState: elapsed time (in seconds) and whether the timer is running
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect: start an interval only while isRunning is true
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: clear the interval when paused, reset, or unmounted
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Button handlers
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <main className="page">
      <h1 className="title">React Timer</h1>
      <p className="subtitle">CSE316 – Web Application Development</p>

      <div className="timer">
        <span className="time">{seconds}</span>
        <span className="unit">seconds</span>
      </div>
      <p className="status">{isRunning ? "Running" : "Paused / Stopped"}</p>

      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
}

export default App;
