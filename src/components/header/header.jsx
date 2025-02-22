import React from 'react';

import InputTask from '../new-task-form';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lastId, addTask } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <InputTask lastId={lastId} addTask={addTask} />
      </header>
    );
  }
}
