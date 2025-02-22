import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task, date } = this.props;
    return (
      <label>
        <span className="description">{task}</span>
        <span className="created">{`created ${formatDistanceToNow(date, Date.now())} ago`}</span>
      </label>
    );
  }
}
