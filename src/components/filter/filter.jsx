import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = (e) => {
    e.stopPropagation();
    this.props.changeFilter(e.target.value);
  };

  render() {
    const { text, className } = this.props;
    return (
      <li key={text}>
        <button className={className} onClick={this.handleClick} value={text}>
          {text}
        </button>
      </li>
    );
  }
}
