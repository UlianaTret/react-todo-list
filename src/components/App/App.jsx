import React from 'react';

import Header from '../header';
import Section from '../section';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: 'All',
    };
  }

  updateStateTask = (newState) => {
    this.setState(() => {
      return {
        items: newState,
      };
    });
  };

  deleteTask = (id) => {
    const { items } = this.state;
    const newList = items.filter((item) => item.id !== id);
    this.updateStateTask(newList);
  };

  onToggleDone = (id) => {
    const newState = this.state.items.map((value) => {
      if (value.id === id) value.status = !value.status;
      return value;
    });
    this.updateStateTask(newState);
  };

  addTask = (newTask) => {
    const newTodolist = this.state.items.filter((value) => value);
    newTodolist.push(newTask);
    this.updateStateTask(newTodolist);
  };

  updateTask = (task) => {
    const newTodolist = this.state.items.filter((value) => (value.id === task.id ? task : value));
    this.updateStateTask(newTodolist);
  };

  clearCompleted = () => {
    const newState = this.state.items.filter((value) => !value.status);
    this.updateStateTask(newState);
  };

  showTasks = (items, filter) => {
    if (filter === 'All') return items;
    if (filter === 'Active') return items.filter((item) => !item.status);
    if (filter === 'Completed') return items.filter((item) => item.status);

    // switch (filter) {
    //   case 'All':
    //     return items;
    //   case 'Active':
    //     return items.filter((item) => !item.status);
    //   case 'Completed':
    //     return items.filter((item) => item.status);
    //   default:
    //     return items;
    // }
  };

  changeFilter = (filter) => {
    this.setState(() => {
      return {
        filter: filter,
      };
    });
  };

  render() {
    const len = this.state.items.length;
    const lastId = len === 0 ? 1 : this.state.items[len - 1].id;

    const tasks = this.showTasks(this.state.items, this.state.filter);
    const countTasks = this.state.items.filter((item) => !item.status).length;

    return (
      <section className="todoapp">
        <Header lastId={lastId} addTask={this.addTask} />

        <Section
          items={tasks}
          countTasks={countTasks}
          onDeleteTask={this.deleteTask}
          onToggleDone={this.onToggleDone}
          updateTask={this.updateTask}
          clearCompleted={this.clearCompleted}
          changeFilter={this.changeFilter}
          activeFilter={this.state.filter}
        />
      </section>
    );
  }
}
