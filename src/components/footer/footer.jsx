import React from 'react';

import ListFilter from '../list-filter';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { countTasks, activeFilter, changeFilter, clearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{`${countTasks} items left`}</span>
        <ListFilter activeFilter={activeFilter} changeFilter={changeFilter} />
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
