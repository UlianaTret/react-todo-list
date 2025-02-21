import React from 'react';

import TodoList from '../todo-list';
import Footer from '../footer';

const Section = (props) => {
  const { items, onDeleteTask, onToggleDone, updateTask, activeFilter, changeFilter, clearCompleted } = props;

  return (
    <section className="main">
      <TodoList items={items} onDeleteTask={onDeleteTask} onToggleDone={onToggleDone} updateTask={updateTask} />
      <Footer
        countTasks={items ? items.filter((value) => !value.status).length : 0}
        activeFilter={activeFilter}
        changeFilter={changeFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default Section;
