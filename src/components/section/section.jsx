import React from 'react';

import TodoList from '../todo-list';
import Footer from '../footer';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, countTasks, onDeleteTask, onToggleDone, updateTask, activeFilter, changeFilter, clearCompleted } =
      this.props;
    const itemsLeft = items.filter((value) => !value.status).length;
    return (
      <section className="main">
        <TodoList items={items} onDeleteTask={onDeleteTask} onToggleDone={onToggleDone} updateTask={updateTask} />
        <Footer
          itemsLeft={itemsLeft}
          countTasks={countTasks}
          activeFilter={activeFilter}
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
        />
      </section>
    );
  }
}
