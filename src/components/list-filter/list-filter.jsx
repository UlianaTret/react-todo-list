import React from 'react';

import Filter from '../filter';

export default class ListFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeFilter, changeFilter } = this.props;
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
  }
}
