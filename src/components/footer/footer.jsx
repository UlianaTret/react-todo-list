import React from 'react';

import ListFilter from '../list-filter';

const Footer = ({ countTasks, activeFilter, changeFilter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`${countTasks} items left`}</span>
      <ListFilter activeFilter={activeFilter} changeFilter={changeFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
