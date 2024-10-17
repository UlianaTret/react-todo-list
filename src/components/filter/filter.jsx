import React from 'react';

const Filter = ({ text, className, changeFilter }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    changeFilter(text);
  };

  return (
    <li key={text}>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </li>
  );
};

export default Filter;
