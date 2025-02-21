import React, { useState } from 'react';

const InputTask = ({ addTask }) => {
  //InputTask
  const [newTask, setNewTask] = useState('');
  const sendTask = () => {
    if (newTask) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendTask(event);
      }}
    >
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        name="newTask"
        onChange={(event) => setNewTask(event.target.value)}
        value={newTask}
      />
    </form>
  );
};

export default InputTask;
