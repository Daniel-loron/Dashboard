// Life Dashboard App v1 - React (Dark Theme)

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard dark-theme">
      {/* TO-DO SECTION */}
      <div className="panel todo">
        <h2>To-Do</h2>
        <ul>
          <li>Check bike battery</li>
          <li>Clean room</li>
          <li>Update budget sheet</li>
        </ul>
      </div>

      {/* TIME / DATE / IMPORTANT SECTION */}
      <div className="panel center">
        <div className="time-date">
          <h2>Time & Date</h2>
          <p>{time.toLocaleTimeString()}</p>
          <p>{time.toLocaleDateString()}</p>
        </div>
        <div className="important">
          <h2>Important</h2>
          <ul>
            <li>Wake up by 6:30 AM</li>
            <li>Deep work block: 7:00–9:00</li>
            <li>Gym: Push Day</li>
          </ul>
        </div>
      </div>

      {/* HEALTH SECTION */}
      <div className="panel health">
        <h2>Health</h2>
        <ul>
          <li>Weight: 211 lbs</li>
          <li>Sleep: 6.5 hrs</li>
          <li>Hydration: 3L</li>
        </ul>
      </div>

      {/* HOME AUTOMATION PLACEHOLDER */}
      <div className="panel automation">
        <h2>Home Automation</h2>
        <p>Coming Soon...</p>
      </div>
    </div>
  );
}

export default App;
