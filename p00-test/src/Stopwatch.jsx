import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  //we need to have a state to represent its running status
  const [isRunning, setIsRunning] = useState(false);

  // we also need the time he lapse
  const [elapsedTime, setElapseTime] = useState(0);

  //intervl reference
  const intervalRef = useRef(null);

  // we calc rel time , so we need exact time as starting point
  const startTimeref = useRef(0);

  useEffect(() => {
    // here lies our timer code
    // starts when ever is running is changed / true
      if (isRunning) {
          // set interval returns an id
          intervalRef.current=  setInterval(() => { 
              setElapseTime(Date.now() - startTimeref.current);
          },10)
      }
      
      return () => { 
            clearInterval(intervalRef.current);  
      }
  }, [isRunning]);

  //start function
  function start() {
    if (!isRunning) {
      setIsRunning(true);
      startTimeref.current = Date.now() - elapsedTime;
    }
  }
  //stop function
  function stop() {
    if (isRunning) {
      setIsRunning(false);
    }
  }
  // reset function
  function reset() {
    setElapseTime(0);
    setIsRunning(false);
  }
  // for formatting time 01 02
    function formattime() {
      
        let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
        let min = Math.floor( elapsedTime / (1000  * 60) % 60 );
        let sec = Math.floor(elapsedTime / (1000) % 60);
        let ms = Math.floor((elapsedTime % 1000) / 10);
        return `${hrs}:${min}:${sec}:${ms}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formattime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>
          start
        </button>
        <button className="reset-button" onClick={reset}>
          reset
        </button>
        <button className="stop-button" onClick={stop}>
          stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
