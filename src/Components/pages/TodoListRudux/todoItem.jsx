import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false

        };

        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);

    }

    render() {
        const { todo, idx, deleteTask, completeTask } = this.props;
        const taskStyle = {
            color: todo.isCompleted ? '#888' : '#000',
            textDecoration: todo.isCompleted ? 'line-through' : '',
            cursor: "pointer"
        };
        
        if (this.state.isEditing) {
            return (
                <tr>
                    <td><input type="text" data-idx={idx} defaultValue={todo.task} ref="editInput" /></td>
                    <td>
                        <button onClick={this.onSaveClick}>Save</button>
                        <button onClick={this.onCancelClick}>Cancel</button>
                    </td>
                </tr>

            )

        }
        return (
            <tr>
                <td>
                    <span style={taskStyle} onClick={() => completeTask(idx)}>
                        {todo.task}
                    </span>
                </td>
                <td>
                    <button onClick={this.onEditClick}>Edit</button>
                    <button onClick={() => deleteTask(idx)}>Delete</button> 
                </td>
            </tr>
        ); // 
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }
    onSaveClick() {
        const input = this.refs.editInput;
        this.props.saveTask(input.getAttribute('data-idx'), input.value);
        this.setState({ isEditing: false });
    }
}

export default TodoItem;