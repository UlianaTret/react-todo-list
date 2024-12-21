import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Label extends React.Component {
  state = {
    time: 0,
  };

  updateTime() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  startTimer = () => {
    this.pauseTimer();
    this.timerID = setInterval(() => this.updateTime(), 1000);
  };

  pauseTimer = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { task, date } = this.props;
    return (
      <label>
        <span className="title">{task}</span>
        <span className="description">
          <button className="icon icon-play" onClick={this.startTimer}></button>
          <button className="icon icon-pause" onClick={this.pauseTimer}></button>
          {` ${Math.floor(this.state.time / 60)}:${this.state.time % 60} `}
        </span>
        <span className="description">{`created ${formatDistanceToNow(date, Date.now())} ago`}</span>
      </label>
    );
  }
}
