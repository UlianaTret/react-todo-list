import React from 'react';

export default class InputTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        }
    }

    onLabelChange = (e) => {
        this.setState({
            newTask: e.target.value
        });
    }

    sendTask = (e) => {
        e.preventDefault();
        const {lastId, addTask} = this.props;
        const task = {
            id: lastId + 1,
            task: this.state.newTask,
            div: 'view',
            date: Date.now(),
            status: false
        };
        addTask(task);
        this.setState({
            newTask: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.sendTask}>
                <input className='new-todo'
                       type='text'
                       placeholder='What needs to be done?'
                       autoFocus
                       onChange={this.onLabelChange}
                       value={this.state.newTask}
                />
            </form>
        )
    }
}