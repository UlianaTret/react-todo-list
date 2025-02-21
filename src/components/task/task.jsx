import React, { useState } from 'react';

import Label from '../label';

const Task = (props) => {
  const { id, div, date, status } = props.item;
  const { onDeleteTask, onToggleDone } = props;

  const [task, setTask] = useState(props.item.task);
  const [edit, setEdit] = useState(false);
  const updateTask = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      setEdit(!edit);
      props.updateTask(props.item);
    }
  };

  return (
    <li className={status ? 'completed' : edit ? 'editing' : null}>
      {edit ? (
        <input
          type="text"
          className="edit"
          placeholder="Editing task"
          autoFocus
          onChange={(event) => setTask(event.target.value)}
          onKeyUp={updateTask}
          value={task}
        />
      ) : (
        <div className={div}>
          <input className="toggle" type="checkbox" checked={status} onChange={() => onToggleDone(id)} />
          <Label task={task} date={date}></Label>
          <button className="icon icon-edit" onClick={() => setEdit(!edit)}></button>
          <button className="icon icon-destroy" onClick={() => onDeleteTask(id)}></button>
        </div>
      )}
    </li>
  );
};

export default Task;
