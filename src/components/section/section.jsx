import React from "react";

import TodoList from "../todo-list";
import Footer from "../footer";

const Section = (props) => {
    const {
        items,
        countTasks,
        onDeleteTask,
        onToggleDone,
        updateTask,
        activeFilter,
        changeFilter,
        clearCompleted
    } = props;
    const itemsLeft = items.filter(value => !value.status).length;
    return (
        <section className='main'>
            <TodoList items={items}
                      onDeleteTask={onDeleteTask}
                      onToggleDone={onToggleDone}
                      updateTask={updateTask}
            />
            <Footer itemsLeft={itemsLeft}
                    countTasks={countTasks}
                    activeFilter={activeFilter}
                    changeFilter={changeFilter}
                    clearCompleted={clearCompleted}
            />
        </section>
    )
}

export default Section;