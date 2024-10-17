import React from 'react';

import Label from '../label';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: this.props.item.task,
    };
  }

  clickEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  updateTask = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      this.props.item.task = this.state.task;
      this.clickEdit();
      this.props.updateTask(this.props.item);
    }
  };

  onLabelChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    const { id, div, task, date, status } = this.props.item;
    const { onDeleteTask, onToggleDone } = this.props;
    const edit = this.state.edit;
    let classNameLi = status ? 'completed' : edit ? 'editing' : null;

    return (
      <li className={classNameLi}>
        {edit ? (
          <input
            type="text"
            className="edit"
            placeholder="Editing task"
            autoFocus
            onChange={this.onLabelChange}
            onKeyUp={this.updateTask}
            value={this.state.task}
          />
        ) : (
          <div className={div}>
            <input className="toggle" type="checkbox" checked={status} onChange={() => onToggleDone(id)} />
            <Label task={task} date={date}></Label>
            <button className="icon icon-edit" onClick={() => this.clickEdit()}></button>
            <button className="icon icon-destroy" onClick={() => onDeleteTask(id)}></button>
          </div>
        )}
      </li>
    );
  }
}
