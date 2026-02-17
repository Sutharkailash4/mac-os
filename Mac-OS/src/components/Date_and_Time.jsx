import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time_box">
      <p className="time">{time.toDateString()}</p>
      <p className="time">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
