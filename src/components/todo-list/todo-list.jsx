import React from 'react';

import Task from "../task";

const TodoList = ({items, onDeleteTask, onToggleDone, updateTask}) => {
    return (
        <ul className='todo-list'>
            {items.map(value => <Task key={value.id}
                                      item={value}
                                      onDeleteTask={id => onDeleteTask(id)}
                                      onToggleDone={id => onToggleDone(id)}
                                      updateTask={updateTask}
                                />
            )}
        </ul>
    );
}

export default TodoList;