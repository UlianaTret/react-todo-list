import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const Label = ({ task, date }) => {
  const [time, updateTime] = useState(0);
  const [timerId, setTimerId] = useState();

  function startTimer() {
    pauseTimer();
    const newTimerId = setInterval(() => updateTime((time) => time + 1), 1000);
    setTimerId(newTimerId);
  }

  function pauseTimer() {
    setTimerId(clearInterval(timerId));
  }

  function formatTimer(time) {
    return ` ${Math.floor(time / 60)}:${time % 60 < 10 ? '0' + (time % 60) : time % 60} `;
  }

  return (
    <label>
      <span className="title">{task}</span>
      <span className="description">
        <button className="icon icon-play" onClick={startTimer}></button>
        <button className="icon icon-pause" onClick={pauseTimer}></button>
        {formatTimer(time)}
      </span>
      <span className="description">{`created ${formatDistanceToNow(date, Date.now())} ago`}</span>
    </label>
  );
};

export default Label;
