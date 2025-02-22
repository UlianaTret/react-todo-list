import React from 'react';

import Task from '../task';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, onDeleteTask, onToggleDone, updateTask } = this.props;
    return (
      <ul className="todo-list">
        {items.map((value) => (
          <Task
            key={value.id}
            item={value}
            onDeleteTask={(id) => onDeleteTask(id)}
            onToggleDone={(id) => onToggleDone(id)}
            updateTask={updateTask}
          />
        ))}
      </ul>
    );
  }
}
