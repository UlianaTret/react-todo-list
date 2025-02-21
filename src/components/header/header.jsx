import React from 'react';

import InputTask from '../input-task';

const Header = ({ addTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <InputTask addTask={addTask} />
    </header>
  );
};

export default Header;
