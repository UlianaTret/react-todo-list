import React, { useState } from 'react';

import Header from '../header';
import Section from '../section';

const App = () => {
  const [items, setItem] = useState([]);
  const [filter, setFilter] = useState('All');

  const showTasks = (items, filter) => {
    if (filter === 'All') return items;
    if (filter === 'Active') return items.filter((item) => !item.status);
    if (filter === 'Completed') return items.filter((item) => item.status);
  };

  const addTask = (value) => {
    const newTask = {
      id: items.length ? items[0].id + 1 : 1,
      task: value,
      div: 'view',
      date: Date.now(),
      status: false,
    };
    setItem([newTask, ...items]);
  };

  const deleteTask = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItem(newList);
  };

  const onToggleDone = (id) => {
    const newState = items.map((value) => {
      if (value.id === id) value.status = !value.status;
      return value;
    });
    setItem(newState);
  };

  const updateTask = (task) => {
    const newTodolist = items.filter((value) => (value.id === task.id ? task : value));
    setItem(newTodolist);
  };

  const clearCompleted = () => {
    const newState = items.filter((value) => !value.status);
    setItem(newState);
  };

  return (
    <section className="todoapp">
      <Header addTask={addTask} />

      <Section
        items={items ? showTasks(items, filter) : null}
        onDeleteTask={deleteTask}
        onToggleDone={onToggleDone}
        updateTask={updateTask}
        clearCompleted={clearCompleted}
        changeFilter={(newFilter) => setFilter(newFilter)}
        activeFilter={filter}
      />
    </section>
  );
};

export default App;
