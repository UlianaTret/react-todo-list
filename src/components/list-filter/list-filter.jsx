import React from 'react';

import Filter from '../filter';

const ListFilter = ({ activeFilter, changeFilter }) => {
  const filters = [
    { id: 'All', text: 'All' },
    { id: 'Active', text: 'Active' },
    { id: 'Completed', text: 'Completed' },
  ];

  return (
    <ul className="filters">
      {filters.map((value) => (
        <Filter
          key={value.id}
          className={value.id === activeFilter ? 'selected' : ''}
          text={value.text}
          changeFilter={changeFilter}
        />
      ))}
    </ul>
  );
};

export default ListFilter;
