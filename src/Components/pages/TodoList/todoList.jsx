import React, { Component } from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
}

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        );
    }

    renderItem() {
        
        const { todos, saveTask, deleteTask, completeTask } = this.props;
        return todos.map(function (listInfo, index) {
            return (
                <TodoItem key={index} todo={listInfo} idx={index} saveTask={saveTask} deleteTask={deleteTask} completeTask={completeTask} />
                
            )
            console.log(todos)
        });

    }

}

export default TodoList;