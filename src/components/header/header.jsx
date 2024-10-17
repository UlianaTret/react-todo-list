import React from 'react';

import InputTask from '../new-task-form';

const Header = ({ lastId, addTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <InputTask lastId={lastId} addTask={addTask} />
    </header>
  );
};

export default Header;
